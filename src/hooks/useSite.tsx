import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  KEYS,
  getStoredData,
  initializeStorage,
  makeId,
  setStoredData,
} from "@/lib/storage";
import { defaultSettings } from "@/lib/company";
import { portfolioSeed } from "@/data/portfolio";
import {
  bookingsSeed,
  callbacksSeed,
  enquiriesSeed,
  testimonialsSeed,
} from "@/data/seed";
import type {
  AdminSession,
  CallbackRequest,
  DemoBooking,
  PortfolioProject,
  Referral,
  ServiceEnquiry,
  Testimonial,
  WebsiteSettings,
} from "@/types";

export type ModalKind =
  | "demo"
  | "enquiry"
  | "callback"
  | "referral"
  | "feedback"
  | null;

interface SiteContextValue {
  ready: boolean;
  settings: WebsiteSettings;
  saveSettings: (patch: Partial<WebsiteSettings>) => void;
  enquiries: ServiceEnquiry[];
  addEnquiry: (e: Omit<ServiceEnquiry, "id" | "status" | "createdAt">) => string;
  updateEnquiry: (id: string, patch: Partial<ServiceEnquiry>) => void;
  callbacks: CallbackRequest[];
  addCallback: (name: string, phone: string) => string;
  updateCallback: (id: string, patch: Partial<CallbackRequest>) => void;
  bookings: DemoBooking[];
  addBooking: (b: Omit<DemoBooking, "id" | "status" | "createdAt">) => string;
  updateBooking: (id: string, patch: Partial<DemoBooking>) => void;
  portfolio: PortfolioProject[];
  addProject: (p: Omit<PortfolioProject, "id">) => void;
  updateProject: (id: string, patch: Partial<PortfolioProject>) => void;
  deleteProject: (id: string) => void;
  testimonials: Testimonial[];
  addTestimonial: (t: Omit<Testimonial, "id" | "approved" | "createdAt">) => void;
  updateTestimonial: (id: string, patch: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  referrals: Referral[];
  addReferral: (r: Omit<Referral, "id" | "code" | "createdAt">) => string;
  session: AdminSession | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  modal: ModalKind;
  modalService: string | null;
  openModal: (kind: Exclude<ModalKind, null>, service?: string) => void;
  closeModal: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

const DEMO_EMAIL = "admin@sosyncaitech.in";
const DEMO_PASSWORD = "admin123";

export function SiteProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState<WebsiteSettings>(defaultSettings);
  const [enquiries, setEnquiries] = useState<ServiceEnquiry[]>([]);
  const [callbacks, setCallbacks] = useState<CallbackRequest[]>([]);
  const [bookings, setBookings] = useState<DemoBooking[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioProject[]>(portfolioSeed);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [session, setSession] = useState<AdminSession | null>(null);
  const [modal, setModal] = useState<ModalKind>(null);
  const [modalService, setModalService] = useState<string | null>(null);

  useEffect(() => {
    setSettings({ ...defaultSettings, ...initializeStorage(KEYS.settings, defaultSettings) });
    setEnquiries(initializeStorage(KEYS.enquiries, enquiriesSeed));
    setCallbacks(initializeStorage(KEYS.callbacks, callbacksSeed));
    setBookings(initializeStorage(KEYS.bookings, bookingsSeed));
    setPortfolio(initializeStorage(KEYS.portfolio, portfolioSeed));
    setTestimonials(initializeStorage(KEYS.testimonials, testimonialsSeed));
    setReferrals(initializeStorage<Referral[]>(KEYS.referrals, []));
    setSession(getStoredData<AdminSession | null>(KEYS.session, null));
    setReady(true);
  }, []);

  const persist = useCallback(<T,>(key: string, value: T, setter: (v: T) => void) => {
    setter(value);
    setStoredData(key, value);
  }, []);

  const value = useMemo<SiteContextValue>(() => {
    const nowIso = () => new Date().toISOString();
    return {
      ready,
      settings,
      saveSettings: (patch) => {
        const next = { ...settings, ...patch };
        persist(KEYS.settings, next, setSettings);
      },
      enquiries,
      addEnquiry: (e) => {
        const id = makeId("ENQ");
        const item: ServiceEnquiry = { ...e, id, status: "Pending", createdAt: nowIso() };
        persist(KEYS.enquiries, [item, ...enquiries], setEnquiries);
        return id;
      },
      updateEnquiry: (id, patch) =>
        persist(
          KEYS.enquiries,
          enquiries.map((x) => (x.id === id ? { ...x, ...patch } : x)),
          setEnquiries,
        ),
      callbacks,
      addCallback: (name, phone) => {
        const id = makeId("CB");
        const item: CallbackRequest = { id, name, phone, status: "Pending", createdAt: nowIso() };
        persist(KEYS.callbacks, [item, ...callbacks], setCallbacks);
        return id;
      },
      updateCallback: (id, patch) =>
        persist(
          KEYS.callbacks,
          callbacks.map((x) => (x.id === id ? { ...x, ...patch } : x)),
          setCallbacks,
        ),
      bookings,
      addBooking: (b) => {
        const id = makeId("DEMO");
        const item: DemoBooking = { ...b, id, status: "Pending", createdAt: nowIso() };
        persist(KEYS.bookings, [item, ...bookings], setBookings);
        return id;
      },
      updateBooking: (id, patch) =>
        persist(
          KEYS.bookings,
          bookings.map((x) => (x.id === id ? { ...x, ...patch } : x)),
          setBookings,
        ),
      portfolio,
      addProject: (p) =>
        persist(KEYS.portfolio, [{ ...p, id: makeId("PRJ") }, ...portfolio], setPortfolio),
      updateProject: (id, patch) =>
        persist(
          KEYS.portfolio,
          portfolio.map((x) => (x.id === id ? { ...x, ...patch } : x)),
          setPortfolio,
        ),
      deleteProject: (id) =>
        persist(KEYS.portfolio, portfolio.filter((x) => x.id !== id), setPortfolio),
      testimonials,
      addTestimonial: (t) => {
        const item: Testimonial = {
          ...t,
          id: makeId("TST"),
          approved: false,
          createdAt: nowIso(),
        };
        persist(KEYS.testimonials, [item, ...testimonials], setTestimonials);
      },
      updateTestimonial: (id, patch) =>
        persist(
          KEYS.testimonials,
          testimonials.map((x) => (x.id === id ? { ...x, ...patch } : x)),
          setTestimonials,
        ),
      deleteTestimonial: (id) =>
        persist(KEYS.testimonials, testimonials.filter((x) => x.id !== id), setTestimonials),
      referrals,
      addReferral: (r) => {
        const code = `SOSYNC-${Math.random().toString(36).toUpperCase().slice(2, 8)}`;
        const item: Referral = { ...r, id: makeId("REF"), code, createdAt: nowIso() };
        persist(KEYS.referrals, [item, ...referrals], setReferrals);
        return code;
      },
      session,
      login: (email, password) => {
        if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
          return false;
        }
        const s: AdminSession = {
          email: DEMO_EMAIL,
          authenticated: true,
          loggedInAt: nowIso(),
        };
        persist(KEYS.session, s, setSession);
        return true;
      },
      logout: () => {
        setSession(null);
        setStoredData(KEYS.session, null);
      },
      modal,
      modalService,
      openModal: (kind, service) => {
        setModalService(service ?? null);
        setModal(kind);
      },
      closeModal: () => setModal(null),
    };
  }, [
    ready,
    settings,
    enquiries,
    callbacks,
    bookings,
    portfolio,
    testimonials,
    referrals,
    session,
    modal,
    modalService,
    persist,
  ]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}

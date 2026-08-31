export const KEYS = {
  portfolio: "sosync_portfolio",
  enquiries: "sosync_enquiries",
  callbacks: "sosync_callbacks",
  bookings: "sosync_demo_bookings",
  testimonials: "sosync_testimonials",
  referrals: "sosync_referrals",
  settings: "sosync_settings",
  session: "sosync_admin_session",
} as const;

const isBrowser = () => typeof window !== "undefined";

export function getStoredData<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as T;
    if (parsed === null || parsed === undefined) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function setStoredData<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota or private mode — ignore in demo */
  }
}

export function initializeStorage<T>(key: string, seed: T): T {
  if (!isBrowser()) return seed;
  const existing = window.localStorage.getItem(key);
  if (existing === null) {
    setStoredData(key, seed);
    return seed;
  }
  return getStoredData<T>(key, seed);
}

export function updateStoredItem<T extends { id: string }>(
  key: string,
  id: string,
  patch: Partial<T>,
): T[] {
  const list = getStoredData<T[]>(key, []);
  const next = list.map((item) => (item.id === id ? { ...item, ...patch } : item));
  setStoredData(key, next);
  return next;
}

export function deleteStoredItem<T extends { id: string }>(key: string, id: string): T[] {
  const list = getStoredData<T[]>(key, []);
  const next = list.filter((item) => item.id !== id);
  setStoredData(key, next);
  return next;
}

export function makeId(prefix: string): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 6);
  return `${prefix}-${stamp}${rand}`;
}

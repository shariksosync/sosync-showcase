import type {
  CallbackRequest,
  DemoBooking,
  ServiceEnquiry,
  Testimonial,
} from "@/types";

const daysAgo = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
};
const daysAhead = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  const iso = d.toISOString().split("T")[0];
  return iso ?? "";
};

export const enquiriesSeed: ServiceEnquiry[] = [
  {
    id: "ENQ-DEMO01",
    name: "Rohit Deshmukh",
    company: "Deshmukh Steelworks",
    phone: "+91 98220 11234",
    email: "rohit@deshmukhsteel.in",
    service: "Custom Software & ERP Solutions",
    description: "Manufacturing ERP with BOM tracking across two plants.",
    budget: "₹5L – ₹10L",
    preferredContact: "Phone",
    status: "In Progress",
    createdAt: daysAgo(3),
  },
  {
    id: "ENQ-DEMO02",
    name: "Priya Nair",
    company: "Nair Wellness Clinics",
    phone: "+91 99870 45521",
    email: "priya@nairwellness.in",
    service: "Website Development",
    description: "Multi-branch clinic website with appointment enquiry forms.",
    budget: "₹1L – ₹3L",
    preferredContact: "Email",
    status: "Contacted",
    createdAt: daysAgo(6),
  },
  {
    id: "ENQ-DEMO03",
    name: "Aditya Kulkarni",
    company: "Kulkarni Logistics",
    phone: "+91 90280 77190",
    email: "aditya@kulkarnilogistics.in",
    service: "AI Services & Intelligent Automation",
    description: "Route demand prediction and automated dispatch summaries.",
    budget: "₹10L+",
    preferredContact: "WhatsApp",
    status: "Pending",
    createdAt: daysAgo(1),
  },
  {
    id: "ENQ-DEMO04",
    name: "Meera Joshi",
    company: "Joshi Organics",
    phone: "+91 88881 20034",
    email: "meera@joshiorganics.in",
    service: "Growth & Digital Marketing",
    description: "Meta and Google campaigns for a D2C launch.",
    budget: "₹50K – ₹1L",
    preferredContact: "Phone",
    status: "Closed",
    createdAt: daysAgo(18),
  },
];

export const callbacksSeed: CallbackRequest[] = [
  { id: "CB-DEMO01", name: "Sagar Patil", phone: "+91 90495 33210", status: "Pending", createdAt: daysAgo(0) },
  { id: "CB-DEMO02", name: "Neha Bhosale", phone: "+91 97640 88123", status: "Called", createdAt: daysAgo(2) },
  { id: "CB-DEMO03", name: "Imran Shaikh", phone: "+91 93710 45566", status: "Pending", createdAt: daysAgo(4) },
];

export const bookingsSeed: DemoBooking[] = [
  {
    id: "DEMO-0001",
    name: "Kavita Rane",
    phone: "+91 98191 77450",
    email: "kavita@ranegroup.in",
    service: "Enterprise IT & Tech Services",
    preferredDate: daysAhead(2),
    preferredTime: "11:00",
    notes: "Cloud migration assessment for 3 offices.",
    status: "Confirmed",
    createdAt: daysAgo(2),
  },
  {
    id: "DEMO-0002",
    name: "Harshad Pawar",
    phone: "+91 70581 99012",
    email: "harshad@pawarretail.in",
    service: "Website Development",
    preferredDate: daysAhead(5),
    preferredTime: "16:30",
    notes: "Wants an e-commerce storefront walkthrough.",
    status: "Pending",
    createdAt: daysAgo(1),
  },
];

export const testimonialsSeed: Testimonial[] = [
  {
    id: "TST-DEMO01",
    clientName: "Demo Client — Rohit D.",
    company: "Deshmukh Steelworks (demo record)",
    rating: 5,
    review:
      "Sample demo feedback: the ERP rollout was mapped to our shop-floor process and delivered in clear weekly sprints.",
    approved: true,
    createdAt: daysAgo(20),
  },
  {
    id: "TST-DEMO02",
    clientName: "Demo Client — Priya N.",
    company: "Nair Wellness Clinics (demo record)",
    rating: 5,
    review:
      "Sample demo feedback: the website loads fast on mobile and enquiries now reach our front desk instantly.",
    approved: true,
    createdAt: daysAgo(12),
  },
  {
    id: "TST-DEMO03",
    clientName: "Demo Client — Aditya K.",
    company: "Kulkarni Logistics (demo record)",
    rating: 4,
    review:
      "Sample demo feedback: the automation pilot removed hours of manual dispatch reporting each week.",
    approved: true,
    createdAt: daysAgo(8),
  },
  {
    id: "TST-DEMO04",
    clientName: "Demo Client — Meera J.",
    company: "Joshi Organics (demo record)",
    rating: 5,
    review:
      "Sample demo feedback awaiting moderation in this demo environment.",
    approved: false,
    createdAt: daysAgo(2),
  },
];

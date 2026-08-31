export type EnquiryStatus = "Pending" | "Contacted" | "In Progress" | "Closed";
export type CallbackStatus = "Pending" | "Called";
export type BookingStatus = "Pending" | "Confirmed" | "Completed";

export interface ServiceEnquiry {
  id: string;
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
  description?: string;
  budget?: string;
  preferredContact?: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  status: CallbackStatus;
  createdAt: string;
}

export interface DemoBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime?: string;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  rating: number;
  review: string;
  approved: boolean;
  createdAt: string;
}

export interface Referral {
  id: string;
  name: string;
  email: string;
  phone: string;
  code: string;
  createdAt: string;
}

export interface WebsiteSettings {
  primaryPhone: string;
  secondaryPhone: string;
  supportEmail: string;
  secondaryEmail: string;
  address: string;
  hours: string;
  announcementText: string;
  announcementEnabled: boolean;
  maintenanceMode: boolean;
}

export interface AdminSession {
  email: string;
  authenticated: boolean;
  loggedInAt: string;
}

export const companyConfig = {
  companyName: "SOSync AI Tech IT Solutions",
  brandName: "SOSync AI Tech",
  tagline: "Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow",
  phones: ["+91 91724 03714", "+91 70043 30655"],
  emails: ["support@sosyncaitech.in", "hello@sosyncaitech.in"],
  address:
    "Unit No. 416A, 4th Floor, Rushub Biiz Bay, Sprint Workspace, Above Motherhood Hospital, Thite Nagar, Kharadi, Pune, Maharashtra – 411014",
  addressLines: [
    "Unit No. 416A, 4th Floor,",
    "Rushub Biiz Bay, Sprint Workspace,",
    "Above Motherhood Hospital,",
    "Thite Nagar, Kharadi,",
    "Pune, Maharashtra – 411014",
  ],
  hours: "Monday–Saturday | 9:30 AM – 7:00 PM IST",
  website: "https://www.sosyncaitech.in",
  coordinates: { lat: 18.5434746, lng: 73.9358988 },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/sosyncaitech/",
    x: "https://x.com/SOSyncAITech",
    instagram: "https://www.instagram.com/sosyncaitech/",
    youtube: "https://www.youtube.com/@SOSyncAITech",
    facebook: "https://www.facebook.com/SOSyncAITech",
  },
} as const;

export const defaultSettings = {
  primaryPhone: companyConfig.phones[0],
  secondaryPhone: companyConfig.phones[1],
  supportEmail: companyConfig.emails[0],
  secondaryEmail: companyConfig.emails[1],
  address: companyConfig.address,
  hours: companyConfig.hours,
  announcementText:
    "Get 6 Months FREE Technical Support with Every Project — Worth ₹25,000+",
  announcementEnabled: true,
  maintenanceMode: false,
};

import type { PortfolioProject } from "@/types";

export const portfolioSeed: PortfolioProject[] = [
  {
    id: "PRJ-MORPANKH",
    name: "Morpankh Saree",
    category: "E-Commerce",
    description:
      "Ethnic fashion marketplace with catalogue merchandising, cart and a demo checkout flow.",
    tech: ["React", "Next.js", "Node.js", "Razorpay"],
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "PRJ-SPARTHUBS",
    name: "SP Art Hubs",
    category: "ERP / Software",
    description:
      "ERP software for creative business operations and artist portfolio management.",
    tech: ["React", "Node.js", "TypeScript", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "PRJ-SURAJNATURO",
    name: "Suraj Naturo Dry Fruits",
    category: "E-Commerce",
    description:
      "High-speed e-commerce food storefront with live inventory synchronization.",
    tech: ["Next.js", "Node.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "PRJ-SONAISCHOOL",
    name: "Sonai Residential World School",
    category: "Institutional",
    description: "Comprehensive institutional portal and admissions website.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "PRJ-KARYON",
    name: "Karyon College",
    category: "Websites",
    description: "Modern organization showcase with dynamic listings.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "PRJ-SONAIGROUP",
    name: "Sona I Group of Institutes",
    category: "ERP / Software",
    description: "Billing and ERP software for automated fee collection and records.",
    tech: ["React", "Node.js", "Power BI"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
];

export const portfolioCategories = [
  "All",
  "E-Commerce",
  "ERP / Software",
  "Websites",
  "Institutional",
];

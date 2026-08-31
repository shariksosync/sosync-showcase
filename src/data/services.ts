import {
  Globe,
  Boxes,
  ServerCog,
  TrendingUp,
  Palette,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDivision {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  highlights: string[];
  capabilities: string[];
  benefits: string[];
  technologies: string[];
  useCases: string[];
  accent: "orange" | "cyan" | "blue";
  featured?: boolean;
}

export const services: ServiceDivision[] = [
  {
    id: "web-development",
    title: "Website Development",
    short: "High-performance business websites, storefronts and web applications.",
    description:
      "Conversion-focused websites and web applications engineered for speed, search visibility and measurable business outcomes — from static marketing sites to complex dynamic platforms.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Developer writing website code on a monitor",
    highlights: ["Fast", "Responsive", "SEO-ready", "Conversion-focused", "Scalable"],
    capabilities: [
      "Business Websites",
      "Portfolio Websites",
      "E-Commerce Stores",
      "Razorpay / checkout mock integration",
      "Corporate Websites",
      "School & Hospital Portals",
      "NGO Websites",
      "Static High-Speed Sites",
      "Dynamic Web Applications",
      "Web Hosting & SSL Management",
      "Website Maintenance",
      "24/7 Monitoring",
    ],
    benefits: [
      "Core Web Vitals tuned builds",
      "Search-ready semantic structure",
      "Full source code handover",
      "6 months free technical support",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Razorpay"],
    useCases: [
      "Brands launching a credible digital presence",
      "Retailers moving to online checkout",
      "Institutions needing information portals",
    ],
    accent: "orange",
  },
  {
    id: "software-erp",
    title: "Custom Software & ERP Solutions",
    short: "CRM, ERP and operations platforms tailored to how your business actually runs.",
    description:
      "Enterprise-grade internal systems built around your workflows — replacing spreadsheets and disconnected tools with one accountable source of truth.",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business operations dashboard with charts on a laptop",
    highlights: ["Workflow-mapped", "Role-based", "Auditable", "Integrable"],
    capabilities: [
      "Custom CRM Systems",
      "Enterprise ERP Systems",
      "HRMS & Payroll Automation",
      "Warehouse & Inventory Management",
      "Multi-Tier Billing & Invoicing",
      "Hospital Management Systems / EHR",
      "School Management ERP",
      "POS Systems",
      "Manufacturing ERP",
      "BOM & Supply Chain",
    ],
    benefits: [
      "Process automation across departments",
      "Real-time operational visibility",
      "Reduced manual reconciliation",
      "Complete database ownership",
    ],
    technologies: ["React", "Node.js", "TypeScript", "REST APIs", "Microservices", "Power BI"],
    useCases: [
      "Manufacturers tracking BOM and inventory",
      "Multi-branch billing and fee collection",
      "HR and payroll consolidation",
    ],
    accent: "blue",
  },
  {
    id: "enterprise-it",
    title: "Enterprise IT & Tech Services",
    short: "Infrastructure, cloud, security and managed engineering support.",
    description:
      "The engineering backbone behind resilient operations — cloud architecture, DevOps pipelines, security posture and dependable SLA-backed support.",
    icon: ServerCog,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cybersecurity and network infrastructure visualisation",
    highlights: ["Cloud-native", "Secure", "Observable", "SLA-backed"],
    capabilities: [
      "Infrastructure & Networking",
      "Managed IT Outsourcing",
      "Cybersecurity Audits",
      "ISO 27001 / SOC 2 readiness",
      "Cloud & DevOps",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Custom API Development",
      "Microservices",
      "IT Consulting",
      "Technology Roadmaps",
      "Business Intelligence",
      "PowerBI Dashboards",
      "IT Helpdesk",
      "SLA Support",
    ],
    benefits: [
      "Lower infrastructure spend",
      "Faster, safer releases",
      "Documented security posture",
      "Predictable support response",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Microservices", "Power BI"],
    useCases: [
      "Teams migrating legacy systems to cloud",
      "Organisations preparing for security audits",
      "Companies outsourcing IT operations",
    ],
    accent: "cyan",
  },
  {
    id: "growth-marketing",
    title: "Growth & Digital Marketing",
    short: "Performance funnels, paid media and omnichannel lead engines.",
    description:
      "Demand generation engineered like a product: structured funnels, disciplined creative testing and channel attribution that ties spend to pipeline.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Marketing team reviewing campaign performance together",
    highlights: ["Funnel-first", "Data-led", "Omnichannel", "ROI-tracked"],
    capabilities: [
      "Social Media Marketing",
      "Instagram",
      "Facebook",
      "LinkedIn",
      "Lead Generation Funnels",
      "Meta Ads",
      "Advantage+ campaigns",
      "Google Ads",
      "PPC",
      "WhatsApp Business Cloud API",
      "Official broadcast workflows",
      "Drip Email Marketing",
      "SMS Marketing",
      "Omnichannel Retargeting",
    ],
    benefits: [
      "Qualified lead flow, not vanity reach",
      "Lower cost per acquisition over time",
      "Transparent campaign reporting",
      "Creative and media under one roof",
    ],
    technologies: ["Meta Ads", "Google Ads", "WhatsApp Cloud API", "Power BI"],
    useCases: [
      "B2C brands scaling paid acquisition",
      "B2B teams building outbound pipelines",
      "Retailers activating WhatsApp broadcasts",
    ],
    accent: "orange",
  },
  {
    id: "creative-branding",
    title: "Graphic Design & Creative Branding",
    short: "Identity systems, campaign creative and product UI craft.",
    description:
      "Brand and interface design that makes serious companies look serious — consistent identity systems, sharp collateral and interface work grounded in usability.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Designer working on brand identity artwork",
    highlights: ["Distinctive", "Systemised", "Print + digital", "Motion-ready"],
    capabilities: [
      "Brand Identity",
      "Logo Design",
      "Color Palettes",
      "Brand Guidelines",
      "Marketing Collateral",
      "Advertising Creative",
      "Social Media Content Kits",
      "UI/UX Wireframing",
      "App Mockups",
      "Corporate Signage",
      "Exhibition Swag",
      "2D Motion Graphics",
      "Explainer Videos",
      "Print Layouts",
      "Publishing Layouts",
    ],
    benefits: [
      "Consistent brand expression",
      "Faster campaign production",
      "Design systems your team can reuse",
      "Editable source files handed over",
    ],
    technologies: ["Figma", "Illustrator", "After Effects", "Tailwind CSS"],
    useCases: [
      "Rebranding an established business",
      "Launching a new product identity",
      "Scaling always-on social creative",
    ],
    accent: "orange",
  },
  {
    id: "ai-automation",
    title: "AI Services & Intelligent Automation",
    short: "Applied machine learning, RAG assistants and autonomous workflows.",
    description:
      "Practical AI delivered as production systems — retrieval assistants grounded in your data, predictive models tied to business metrics and automation that removes repetitive work.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract artificial intelligence neural network visual",
    highlights: ["Grounded", "Measurable", "Domain-tuned", "Human-in-the-loop"],
    capabilities: [
      "Machine Learning",
      "Predictive Models",
      "NLP",
      "RAG Assistants",
      "Computer Vision",
      "Visual Telemetry",
      "Generative AI Pipelines",
      "Multi-Agent Autonomous Workflows",
      "AI Telemetry Analytics",
      "AI-Driven Threat Detection",
      "Industry-Specific AI",
      "Healthcare AI",
      "FinTech AI",
      "E-Commerce AI",
    ],
    benefits: [
      "Hours of manual work removed weekly",
      "Decision support from your own data",
      "Evaluation and guardrails built in",
      "Clear cost and latency budgets",
    ],
    technologies: ["AI / ML", "NLP", "RAG", "Computer Vision", "Generative AI", "Python"],
    useCases: [
      "Support assistants over internal knowledge",
      "Demand and churn prediction",
      "Vision-based quality inspection",
    ],
    accent: "cyan",
    featured: true,
  },
];

export const serviceNames = services.map((s) => s.title);

# SOSync Showcase

# MASTER PROMPT — SOSync AI Tech IT Solutions

## Production-Ready Dynamic Company Website + Admin Dashboard

You are an **Elite Product Designer, Principal Frontend Architect, Senior React Engineer, UX Conversion Specialist, and Creative Director**.

Your task is to design and build a **production-quality, highly polished, dynamic presentation/demo website plus a complete mock-data-driven Admin Dashboard** for:

> **SOSync AI Tech IT Solutions**
> Short Brand Name: **SOSync AI Tech**

The result must feel like a premium, modern **AI + IT services company**, not a generic agency template.

---

# 1. PRIMARY OBJECTIVE

Build a complete responsive web application that serves two purposes:

1. **Public-facing B2B/B2C IT + AI services website**
2. **Protected demo Admin Portal at `/admin`**

The public website must be optimized for:

* Lead generation
* Service enquiries
* Demo bookings
* Callback requests
* Portfolio discovery
* Trust building
* Client feedback
* Conversion to phone/email/WhatsApp-style contact actions

The Admin Portal must demonstrate how company staff could manage the website's operational data.

## CRITICAL ARCHITECTURE RULE

This is a **frontend-only demonstration application**.

Use:

* React
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React

Use **React State + localStorage only** for persistence.

### DO NOT USE

* Supabase
* Firebase
* PostgreSQL
* MongoDB
* MySQL
* Any external database
* Any backend API
* Authentication SaaS
* CMS
* Server-side persistence

All data must be initialized from structured mock data and persisted through `localStorage`.

---

# 2. ABSOLUTE CONTENT EXCLUSION RULES

These rules are NON-NEGOTIABLE.

## COMPLETELY REMOVE

* E-learning
* LMS
* Online courses
* Training programs
* Bootcamps
* Student batches
* Internships
* Course enrollment
* Training enrollment
* Student testimonials
* Learning portals
* Course catalogs

Do not mention these concepts anywhere in:

* Navigation
* Hero
* Services
* Portfolio
* Testimonials
* Footer
* Admin
* Modals
* Chatbot
* Mock data
* SEO copy
* UI labels

The company positioning must be **100% focused on client services**, specifically:

* B2B technology services
* B2C digital solutions
* Custom software
* Web development
* Enterprise IT
* AI automation
* Digital marketing
* Creative branding
* Business transformation

---

# 3. BRAND IDENTITY

## Company

**SOSync AI Tech IT Solutions**

## Brand

**SOSync AI Tech**

## Tagline

**"Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow"**

## Headquarters

Unit No. 416A, 4th Floor, Rushub Biiz Bay, Sprint Workspace, Above Motherhood Hospital, Thite Nagar, Kharadi, Pune, Maharashtra – 411014

## Phone

Primary: `+91 91724 03714`

Secondary: `+91 70043 30655`

## Email

`support@sosyncaitech.in`

## Website

`https://www.sosyncaitech.in`

## Operating Hours

**Monday to Saturday | 9:30 AM – 7:00 PM IST**

## Location

Kharadi, Pune, Maharashtra

Coordinates:

```text
18.5434746, 73.9358988
```

---

# 4. SOCIAL CHANNELS

Use these exact official channels:

```text
LinkedIn:
https://www.linkedin.com/company/sosyncaitech/

Twitter / X:
https://x.com/SOSyncAITech

Instagram:
https://www.instagram.com/sosyncaitech/

YouTube:
https://www.youtube.com/@SOSyncAITech

Facebook:
https://www.facebook.com/SOSyncAITech
```

Use Lucide icons where appropriate.

---

# 5. DESIGN DIRECTION

Create a sophisticated **AI SaaS / Enterprise Technology aesthetic**.

The site should feel comparable in quality to a modern funded technology startup.

Avoid:

* Generic agency templates
* Excessive gradients
* Cheap-looking neon effects
* Excessive rounded cards
* Clutter
* Stock-photo-heavy layouts
* Overly animated interfaces
* Template-like section repetition

Favor:

* Strong visual hierarchy
* Editorial typography
* Premium spacing
* Dark/light contrast
* Subtle glassmorphism
* Ambient AI glow
* Clean grids
* High-quality imagery
* Smooth micro-interactions
* Excellent responsive behavior

---

# 6. DESIGN TOKENS

## Primary Orange

```text
#F97316
```

Use for:

* Primary CTAs
* Important badges
* Active states
* Accent elements
* CTA highlights
* Conversion-focused elements

## Dark Orange

```text
#EA580C
```

Use for:

* Hover states
* Active buttons
* Strong accent states

## Enterprise Dark

```text
#0B0F19
```

## Deep Slate

```text
#111827
```

## Cyan

```text
#06B6D4
```

## Electric Blue

```text
#3B82F6
```

## Light

```text
#FFFFFF
```

## Light Surface

```text
#F8FAFC
```

Use subtle:

```text
border-slate-200/80
```

and:

```text
backdrop-blur-md
```

where appropriate.

Use rounded-3xl geometry selectively rather than on every element.

---

# 7. TYPOGRAPHY

Use a premium modern sans-serif typography system.

Recommended:

* Inter
* Plus Jakarta Sans
* Geist-style typography

Prioritize:

* Strong oversized hero typography
* Tight heading tracking
* Comfortable body line height
* Clear hierarchy
* Excellent mobile readability

Hero headlines should be visually dominant.

---

# 8. IMAGE REQUIREMENTS

Use **unique, high-resolution Unsplash images**.

## ABSOLUTE RULE

**Never reuse the same image URL anywhere on the site.**

Every:

* Hero slide
* Service visual
* Portfolio card
* Team member
* Creative section
* CTA visual

must have a unique image.

Use stable Unsplash source URLs where possible, preferably explicit image URLs rather than random image endpoints.

Images should be relevant to:

* AI
* software development
* cloud infrastructure
* enterprise technology
* business teams
* cybersecurity
* digital marketing
* creative design
* automation

Do not use obviously irrelevant generic stock photography.

Use:

```text
object-cover
```

with sensible responsive image sizing.

Add descriptive `alt` text.

---

# 9. GLOBAL NAVIGATION

Create a sticky responsive navbar.

## Desktop Navigation

```text
Logo
Services
Solutions
Portfolio
Process
About
Contact
```

Primary CTA:

```text
Book ₹1 Demo
```

Include a mobile hamburger menu.

Navbar behavior:

* Transparent/overlay over hero initially
* Transitions into a solid/glass background while scrolling
* Smooth navigation
* Active section indication where practical

---

# 10. HOMEPAGE STRUCTURE

Build the homepage in this approximate order:

```text
Announcement Banner
↓
Sticky Navbar
↓
Hero Slider
↓
Trust / Statistics
↓
Service Divisions
↓
Why SOSync AI Tech
↓
Technology / Capability Section
↓
Portfolio
↓
9-Step Delivery Workflow
↓
Leadership / Senior Squad
↓
Testimonials
↓
Refer & Earn CTA
↓
Final Conversion CTA
↓
Footer
```

---

# 11. ANNOUNCEMENT BANNER

Create a dismissible announcement banner.

Example default copy:

> "Get 6 Months FREE Technical Support with Every Project — Worth ₹25,000+"

Requirements:

* Dismiss button
* Controlled through React state
* Admin can toggle it
* Admin can edit announcement text
* Persist setting in localStorage

---

# 12. HERO SECTION

Create a premium full-width hero with a **3-slide rotating visual slider**.

Each slide needs:

* Unique Unsplash background/image
* Eyebrow
* Large headline
* Supporting copy
* Primary CTA
* Secondary CTA
* Small trust indicator
* Subtle animated visual elements

## Slide 1

Theme:

**AI-Powered Business Transformation**

Headline concept:

> "Build Smarter. Automate Faster. Scale Further."

CTA:

```text
Book a ₹1 Demo
```

Secondary:

```text
Explore Services
```

---

## Slide 2

Theme:

**Custom Software & Enterprise Solutions**

Headline concept:

> "Technology Built Around Your Business."

CTA:

```text
Explore Solutions
```

Secondary:

```text
View Portfolio
```

---

## Slide 3

Theme:

**Digital Growth + AI Automation**

Headline concept:

> "Turn Technology Into Your Competitive Advantage."

CTA:

```text
Start Your Project
```

Secondary:

```text
Talk to an Expert
```

Slider requirements:

* Autoplay
* Pause on hover
* Previous/next controls
* Pagination indicators
* Smooth Framer Motion transitions
* Mobile-friendly
* Accessible buttons
* Reduced-motion support

---

# 13. TRUST STATISTICS

Create an impressive statistics section:

```text
50+ Projects Delivered
50+ Happy Clients
8+ Senior Engineers
12+ Countries Served
```

Animate numbers subtly when they enter the viewport.

Do not fabricate additional company statistics.

---

# 14. CORE SERVICES

Create six major service divisions.

Each service must have:

* Unique visual
* Icon
* Title
* Short description
* Sub-service count
* Feature highlights
* Hover interaction
* "Enquire Now" CTA
* Detailed enquiry modal

---

## SERVICE 1 — WEBSITE DEVELOPMENT

Include:

* Business Websites
* Portfolio Websites
* E-Commerce Stores
* Razorpay / checkout mock integration
* Corporate Websites
* School & Hospital Portals
* NGO Websites
* Static High-Speed Sites
* Dynamic Web Applications
* Web Hosting & SSL Management
* Website Maintenance
* 24/7 Monitoring

Highlight:

```text
Fast
Responsive
SEO-ready
Conversion-focused
Scalable
```

---

## SERVICE 2 — CUSTOM SOFTWARE & ERP SOLUTIONS

Include:

* Custom CRM Systems
* Enterprise ERP Systems
* HRMS & Payroll Automation
* Warehouse & Inventory Management
* Multi-Tier Billing & Invoicing
* Hospital Management Systems / EHR
* School Management ERP
* POS Systems
* Manufacturing ERP
* BOM & Supply Chain

---

## SERVICE 3 — ENTERPRISE IT & TECH SERVICES

Include:

* Infrastructure & Networking
* Managed IT Outsourcing
* Cybersecurity Audits
* ISO 27001 / SOC 2 readiness
* Cloud & DevOps
* AWS
* Azure
* Docker
* Kubernetes
* Custom API Development
* Microservices
* IT Consulting
* Technology Roadmaps
* Business Intelligence
* PowerBI Dashboards
* IT Helpdesk
* SLA Support

---

## SERVICE 4 — GROWTH & DIGITAL MARKETING

Include:

* Social Media Marketing
* Instagram
* Facebook
* LinkedIn
* Lead Generation Funnels
* Meta Ads
* Advantage+ campaigns
* Google Ads
* PPC
* WhatsApp Business Cloud API
* Official broadcast workflows
* Drip Email Marketing
* SMS Marketing
* Omnichannel Retargeting

---

## SERVICE 5 — GRAPHIC DESIGN & CREATIVE BRANDING

Include:

* Brand Identity
* Logo Design
* Color Palettes
* Brand Guidelines
* Marketing Collateral
* Advertising Creative
* Social Media Content Kits
* UI/UX Wireframing
* App Mockups
* Corporate Signage
* Exhibition Swag
* 2D Motion Graphics
* Explainer Videos
* Print Layouts
* Publishing Layouts

---

## SERVICE 6 — AI SERVICES & INTELLIGENT AUTOMATION

Make this division visually prominent.

Include:

* Machine Learning
* Predictive Models
* NLP
* RAG Assistants
* Computer Vision
* Visual Telemetry
* Generative AI Pipelines
* Multi-Agent Autonomous Workflows
* AI Telemetry Analytics
* AI-Driven Threat Detection
* Industry-Specific AI
* Healthcare AI
* FinTech AI
* E-Commerce AI

Use subtle cyan/blue ambient effects in this section.

---

# 15. SERVICE DETAIL INTERACTION

Clicking any service should open a polished modal or drawer.

Modal should contain:

```text
Service title
Description
Capabilities
Benefits
Relevant technologies
Ideal use cases
CTA
```

CTA:

```text
Request Service Enquiry
```

Clicking CTA opens the enquiry form.

---

# 16. SERVICE ENQUIRY FORM

Fields:

```text
Full Name
Company Name
Phone
Email
Selected Service
Project Description
Budget Range
Preferred Contact Method
```

Selected service must automatically populate from the clicked service.

Submit behavior:

1. Validate fields
2. Show loading state
3. Save enquiry into localStorage
4. Generate unique enquiry ID
5. Display success state
6. Reset appropriately

Suggested status:

```text
Pending
```

---

# 17. VALUE PROPOSITION SECTION

Create a high-conversion section explaining why clients choose SOSync AI Tech.

Use the following verified propositions:

## 6 Months FREE Technical Support

Worth:

```text
₹25,000+
```

Includes:

* Bug fixes
* Server maintenance
* Uptime monitoring
* Business-hours support

---

## 100% Full IP & Source Code Ownership

Clients receive complete:

* Repository
* Source code
* Database ownership upon handover

---

## Rapid 1–3 Weeks Delivery

Explain:

* Agile sprint-driven execution
* Weekly live demos
* Transparent progress

Do not promise that every possible project will always finish within 1–3 weeks; frame this as the company's rapid delivery proposition for suitable projects.

---

# 18. DELIVERY PROCESS

Create a visually impressive **9-step process timeline**.

Exactly use:

### 01

Requirement Analysis & Scope Definition

### 02

Project Roadmap & Tech Architecture

### 03

Modern UI/UX Wireframing & Interactive Prototype

### 04

Development Phase with Clean Code Standards

### 05

QA, Security & Performance Testing

### 06

Client Demonstration & Revision Sprints

### 07

Production Deployment & Cloud Setup

### 08

Admin Training & Credential Handover

### 09

6 Months Free Support Warranty

Important:

"Admin Training" here means training the client's administrators to use the delivered software. It must **not** become a public training/course offering.

---

# 19. TECHNOLOGY CAPABILITIES

Create a premium technology stack/capability section.

Show technologies such as:

```text
React
Next.js
Node.js
TypeScript
Tailwind CSS
AWS
Azure
Docker
Kubernetes
REST APIs
Microservices
Razorpay
Power BI
AI / ML
NLP
RAG
Computer Vision
Generative AI
```

Use iconography carefully.

Do not claim certifications or partnerships that were not provided.

---

# 20. PORTFOLIO

Create a dynamic portfolio grid.

Include exactly these projects:

### Morpankh Saree

Category:

```text
E-Commerce
```

Technology:

```text
React
Next.js
Node.js
Razorpay
```

Description:

Ethnic fashion marketplace.

---

### SP Art Hubs

Category:

```text
ERP / Business Software
```

Description:

ERP software for creative business operations and artist portfolio management.

---

### Suraj Naturo Dry Fruits

Category:

```text
E-Commerce
```

Description:

High-speed e-commerce food storefront with live inventory synchronization.

---

### Sonai Residential World School

Category:

```text
Institutional Portal
```

Description:

Comprehensive institutional portal and admissions website.

---

### Karyon College

Category:

```text
Academic Organization
```

Description:

Modern organization showcase with dynamic listings.

---

### Sona I Group of Institutes

Category:

```text
ERP / Billing
```

Description:

Billing and ERP software for automated fee collection and records.

---

# 21. PORTFOLIO FILTERING

Create functional filters:

```text
All
E-Commerce
ERP / Software
Websites
Institutional
```

Cards must support:

* Category
* Description
* Technology tags
* Image
* Featured badge
* View Details
* Live Project button

Use placeholder/mock live URLs only if an actual URL has been provided.

**Do not invent real client URLs.**

If no URL exists, use:

```text
View Case Study
```

and display an appropriate mock detail experience rather than pretending an external live link exists.

---

# 22. LEADERSHIP

Create a premium leadership/team section.

## Leadership

### Shashant Shekhar

Founder & Project Manager

### Omkar Bachanatti

Founder & Operations Head

### Sanika Chougule

Founder & HR Head

### Vivek Dhumal

Digital Marketing Expert

### Aslam Pathan

Meta & Paid Ads Specialist

---

## Full Stack Senior Squad

### Tridev Sharma

Senior Full Stack Engineer

### Sharik Ahmed

Senior Full Stack Engineer

### Vicky Kumar

Senior Full Stack Engineer

### Ashish Ranjan

Senior Full Stack Engineer

### Anurag Kumar

Senior Full Stack Engineer

Use unique images for every person.

Do not repeat team photos.

---

# 23. TESTIMONIALS

Create a dynamic testimonials section.

Testimonials must be stored in localStorage.

Initial testimonials should be clearly represented as **mock/demo client feedback** unless verified real testimonial text is supplied.

Each testimonial should contain:

```text
id
clientName
company
rating
review
approved
createdAt
```

Only approved testimonials appear publicly.

Do not create fake quotes presented as verified statements.

---

# 24. BOOK ₹1 DEMO CONSULTATION

Create a premium modal accessible throughout the website.

CTA label:

```text
Book ₹1 Demo
```

Fields:

```text
Full Name *
Phone *
Email *
Service *
Preferred Date *
Preferred Time
Notes
```

Display clearly:

> ₹1 Demo Consultation

On submission:

1. Validate
2. Save to localStorage
3. Generate booking ID
4. Set status to pending
5. Show confirmation
6. Do not process real payment

This is a **mock/demo booking workflow**.

Do not integrate a real payment gateway.

---

# 25. FLOATING INSTANT CALLBACK

Create a floating bottom-right callback widget.

Copy:

```text
Need help?
Get a callback
```

Promise:

```text
20-second callback request
```

Form:

```text
Name
Phone
```

Save to localStorage.

Status:

```text
Pending
```

Admin can change it to:

```text
Called
```

Include a close/minimize interaction.

Ensure the widget does not cover important mobile CTAs.

---

# 26. REFER & EARN

Create a Refer & Earn modal.

Explain:

```text
Refer a client and earn 10% commission.
```

Allow user to enter:

```text
Name
Email
Phone
```

Generate a referral code such as:

```text
SOSYNC-XXXXXX
```

Use a deterministic/random frontend-generated code.

Save referral record to localStorage.

Clearly label this as a demo workflow if no real commission infrastructure exists.

Do not claim actual payout processing.

---

# 27. CLIENT FEEDBACK MODAL

Add a feedback option in the footer.

Fields:

```text
Name
Company
Star Rating
Review
```

Rating:

```text
1–5 stars
```

Save feedback to localStorage.

Default status:

```text
Pending Approval
```

Admin can approve/hide it.

Only approved feedback appears publicly.

---

# 28. MOCK AI CHATBOT

Create a floating AI assistant.

Position:

Bottom-right, but intelligently stack with the callback widget.

Chatbot name:

```text
SOSync AI Assistant
```

The chatbot is **frontend mock intelligence**, not a real AI API.

Implement a deterministic FAQ/intent response engine.

It should answer questions about:

* Company
* Services
* Website development
* ERP
* Enterprise IT
* AI automation
* Digital marketing
* Portfolio
* Support
* ₹1 demo
* Contact
* Working hours
* Location
* IP ownership
* Delivery process

Example:

User:

> "What services do you offer?"

Assistant:

> "SOSync AI Tech provides Website Development, Custom Software & ERP, Enterprise IT, Growth Marketing, Creative Branding, and AI & Intelligent Automation."

Add quick actions:

```text
View Services
Book ₹1 Demo
Request Callback
Contact Team
```

Do not imply that this chatbot is connected to a real AI model.

---

# 29. FOOTER

Create a comprehensive premium footer.

Columns:

## Company

* About
* Services
* Portfolio
* Process
* Contact

## Services

* Website Development
* ERP & Software
* Enterprise IT
* Digital Marketing
* Creative Branding
* AI Automation

## Contact

```text
+91 91724 03714
+91 70043 30655

support@sosyncaitech.in
```

Address:

```text
Unit No. 416A, 4th Floor,
Rushub Biiz Bay, Sprint Workspace,
Above Motherhood Hospital,
Thite Nagar, Kharadi,
Pune, Maharashtra – 411014
```

Hours:

```text
Monday–Saturday
9:30 AM – 7:00 PM IST
```

Social icons:

LinkedIn
X
Instagram
YouTube
Facebook

Add a discreet:

```text
Shield icon + Admin Portal
```

link to:

```text
/admin/login
```

---

# 30. ADMIN AUTHENTICATION

Build:

```text
/admin/login
```

Demo credentials:

```text
Email:
admin@sosyncaitech.in

Password:
admin123
```

This is only demo authentication.

Implement it entirely on the frontend.

Store authentication state in localStorage.

Example:

```text
adminAuthenticated = true
```

Protect:

```text
/admin/dashboard
```

Unauthenticated users should be redirected to:

```text
/admin/login
```

Add:

```text
Logout
```

which clears the session.

Do not present this as production-grade server authentication.

---

# 31. ADMIN DASHBOARD

Create a completely separate premium dashboard layout.

Use:

* Sidebar
* Topbar
* Responsive mobile sidebar
* Breadcrumbs
* Search
* Notification-style indicators
* Profile/admin area
* Logout

Sidebar modules:

```text
Dashboard
Service Enquiries
Callback Requests
Demo Bookings
Portfolio
Testimonials
Website Settings
```

---

# 32. ADMIN DASHBOARD METRICS

Create metric cards for:

```text
Total Inquiries
Active Projects
Pending Callbacks
Demo Bookings
Average Rating
```

Metrics should derive dynamically from localStorage data.

Do not hard-code displayed values after initialization.

Include subtle trend indicators only if they can be logically calculated from available mock data.

---

# 33. ADMIN MODULE 1 — SERVICE ENQUIRIES

Build a complete CRUD-style manager.

Display:

```text
ID
Name
Company
Service
Phone
Email
Status
Created
Actions
```

Filters:

```text
All
Pending
Contacted
In Progress
Closed
```

Search:

* Name
* Email
* Company
* Service

Status options:

```text
Pending
Contacted
In Progress
Closed
```

Allow status updates.

Persist immediately to localStorage.

---

# 34. ADMIN MODULE 2 — CALLBACK REQUESTS

Display:

```text
Request ID
Name
Phone
Requested At
Status
Action
```

Status:

```text
Pending
Called
```

Provide one-click status update.

Persist to localStorage.

---

# 35. ADMIN MODULE 3 — DEMO BOOKINGS

Display:

```text
Booking ID
Name
Phone
Email
Service
Preferred Date
Preferred Time
Notes
Status
```

Include sensible filters and search.

Do not process actual ₹1 payments.

Treat all bookings as mock/demo consultation records.

---

# 36. ADMIN MODULE 4 — PORTFOLIO MANAGER

Provide:

### Add Project

Fields:

```text
Project Name
Category
Description
Technology Tags
Image URL
Live URL
Featured
```

### Edit Project

Allow every field to be changed.

### Delete Project

Require confirmation.

### Featured Toggle

Toggle featured state.

All changes persist in localStorage.

Validate URLs.

If an image URL is entered, preview it.

---

# 37. ADMIN MODULE 5 — TESTIMONIALS & FEEDBACK

Display:

```text
Client
Company
Rating
Review
Status
Created
Actions
```

Actions:

```text
Approve
Hide
Delete
```

Only approved reviews appear publicly.

Persist changes.

---

# 38. ADMIN MODULE 6 — WEBSITE SETTINGS

Create a settings interface allowing the admin to edit:

```text
Primary Phone
Secondary Phone
Support Email
Secondary Support Email
Office Address
Operating Hours
Announcement Banner Text
Announcement Banner Enabled
Maintenance Mode
```

Persist all settings in localStorage.

---

# 39. MAINTENANCE MODE

Implement a frontend maintenance mode.

If enabled:

* Public site displays a polished maintenance screen
* Admin routes remain accessible
* Admin can disable maintenance mode

Maintenance screen should include:

```text
SOSync AI Tech
We're upgrading the experience.
Please check back shortly.
```

Do not block the admin dashboard.

---

# 40. LOCAL STORAGE DATA ARCHITECTURE

Create a centralized storage utility.

Recommended structure:

```text
src/
  data/
    services.ts
    portfolio.ts
    team.ts
    testimonials.ts
    mockEnquiries.ts
    mockCallbacks.ts
    mockBookings.ts

  lib/
    storage.ts
    validators.ts
    utils.ts
```

Use namespaced localStorage keys.

For example:

```text
sosync_services
sosync_portfolio
sosync_enquiries
sosync_callbacks
sosync_demo_bookings
sosync_testimonials
sosync_referrals
sosync_settings
sosync_admin_session
```

Create reusable helpers:

```text
getStoredData()
setStoredData()
updateStoredItem()
deleteStoredItem()
initializeStorage()
```

Initialize defaults only when a key does not already exist.

Never overwrite user/admin modifications on every page load.

---

# 41. TYPESCRIPT DATA MODELS

Use strong types/interfaces.

Example:

```ts
type EnquiryStatus =
  | "Pending"
  | "Contacted"
  | "In Progress"
  | "Closed";

interface ServiceEnquiry {
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
```

Create equivalent interfaces for:

* CallbackRequest
* DemoBooking
* PortfolioProject
* Testimonial
* Referral
* WebsiteSettings
* AdminSession

---

# 42. COMPONENT ARCHITECTURE

Build reusable components.

Suggested structure:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── AnnouncementBar.tsx
│   │
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ValueProps.tsx
│   │   ├── TechStack.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── TeamSection.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── modals/
│   │   ├── DemoBookingModal.tsx
│   │   ├── ServiceEnquiryModal.tsx
│   │   ├── CallbackModal.tsx
│   │   ├── ReferralModal.tsx
│   │   └── FeedbackModal.tsx
│   │
│   ├── chatbot/
│   │   └── AIChatbot.tsx
│   │
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   ├── AdminTopbar.tsx
│   │   ├── MetricCard.tsx
│   │   ├── DataTable.tsx
│   │   ├── StatusBadge.tsx
│   │   └── EmptyState.tsx
│   │
│   └── ui/
│
├── pages/
│   ├── Home.tsx
│   ├── AdminLogin.tsx
│   └── AdminDashboard.tsx
│
├── data/
├── hooks/
├── lib/
├── types/
└── App.tsx
```

Refactor where necessary, but maintain clear separation between public site and admin application logic.

---

# 43. ROUTING

Use React Router.

Required routes:

```text
/
 /services
 /portfolio
 /contact

/admin/login
/admin/dashboard
```

Additional nested admin routes may be used if architecturally beneficial:

```text
/admin/dashboard/enquiries
/admin/dashboard/callbacks
/admin/dashboard/bookings
/admin/dashboard/portfolio
/admin/dashboard/testimonials
/admin/dashboard/settings
```

But the entire dashboard can also be implemented as a single shell with tabbed modules.

Choose whichever architecture produces the cleanest UX.

---

# 44. RESPONSIVE DESIGN

The application must be excellent at:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px+
```

Mobile requirements:

* No horizontal overflow
* Large tap targets
* Collapsible navigation
* Bottom-right widgets must not overlap
* Tables become cards or horizontally scrollable containers
* Modals fit within viewport
* Hero typography scales appropriately
* Images crop intelligently
* Dashboard sidebar becomes drawer

---

# 45. ACCESSIBILITY

Implement:

* Semantic HTML
* Proper heading hierarchy
* ARIA labels where needed
* Keyboard navigation
* Visible focus states
* Modal focus handling
* Escape-to-close
* Accessible form labels
* Sufficient contrast
* Reduced motion support
* Alt text for images

Do not rely on color alone to convey status.

---

# 46. ANIMATION SYSTEM

Use Framer Motion.

Animations should feel premium and restrained.

Use:

* Fade-up section entrances
* Staggered card reveals
* Hover transforms
* Modal transitions
* Slider transitions
* Number animations
* Button micro-interactions
* Subtle dashboard transitions

Avoid:

* Constant floating animations
* Excessive bouncing
* Long animations
* Distracting parallax
* Animation on every single element

Respect:

```text
prefers-reduced-motion
```

---

# 47. FORM UX

All forms must have:

* Proper labels
* Required indicators
* Validation
* Inline errors
* Loading state
* Success state
* Error state
* Disabled submit during submission
* LocalStorage persistence

Use sensible validation for:

* Email
* Phone
* Required names
* Dates
* URLs

Do not require unnecessary information.

---

# 48. TOAST NOTIFICATIONS

Create reusable toast notifications.

Examples:

```text
Enquiry submitted successfully.
Callback request received.
Demo booking created.
Project updated.
Project deleted.
Testimonial approved.
Settings saved.
```

Use consistent placement and accessible semantics.

---

# 49. EMPTY STATES

Every admin table/list needs a polished empty state.

Examples:

```text
No enquiries found.
Try changing your filters.
```

Do not leave blank white spaces.

---

# 50. ERROR HANDLING

Gracefully handle:

* Invalid localStorage data
* Missing images
* Broken URLs
* Invalid forms
* Unknown routes
* Unauthorized admin access

Provide useful fallback UI.

---

# 51. SEO

Add appropriate:

```text
<title>
<meta name="description">
<meta name="keywords">
Open Graph metadata
```

Suggested title:

> SOSync AI Tech — AI, IT, Software & Digital Solutions

Suggested description:

> SOSync AI Tech delivers custom software, web development, enterprise IT, AI automation, digital marketing and intelligent technology solutions for modern businesses.

Use meaningful semantic page content.

---

# 52. PERFORMANCE

Optimize for:

* Fast initial render
* Lazy-loaded images
* Proper image dimensions
* Minimal unnecessary dependencies
* Component reuse
* Avoid unnecessary re-renders
* Efficient localStorage operations

Do not load huge libraries unnecessarily.

---

# 53. SECURITY DEMO CONSIDERATIONS

Because this is a frontend-only demonstration:

* Do not claim the demo authentication is production-secure.
* Do not expose fake API secrets.
* Do not store real credentials.
* Do not request payment-card information.
* Do not claim real payment processing.
* Do not claim the chatbot uses a real AI backend.
* Do not claim localStorage provides enterprise-grade security.

The admin login credentials are intentionally demo credentials.

---

# 54. ADMIN DEMO DATA

Seed realistic but clearly mock records for:

* Enquiries
* Callback requests
* Demo bookings
* Testimonials
* Portfolio

Use realistic Indian names, companies, dates and service names.

Avoid presenting invented testimonials as verified customer statements.

Label the admin experience as:

```text
Demo Environment
```

where appropriate.

---

# 55. UX MICROCOPY

Use conversion-focused language.

Prefer:

```text
Start Your Project
Book a ₹1 Demo
Talk to an Expert
Explore Services
View Portfolio
Request a Callback
Get a Free Consultation
```

Avoid generic:

```text
Submit
Click Here
Learn More
```

where a more descriptive CTA is possible.

---

# 56. CONTACT CTA

Create repeated but non-annoying conversion opportunities.

Examples:

```text
Have a project in mind?
Let's build it.

Need an ERP?
Let's map your workflow.

Want to automate your business?
Talk to our AI team.

Ready to scale digitally?
Book a ₹1 Demo.
```

Do not overuse popups.

---

# 57. VISUAL DETAILS

Add tasteful details such as:

* Orange glowing CTA edges
* Cyan AI ambient glow
* Grid backgrounds
* Soft radial gradients
* Fine border lines
* Glass panels
* Small status pills
* Technology chips
* Cursor/hover feedback
* Section eyebrow labels
* Decorative but subtle data visualization motifs

The design should remain professional enough for enterprise decision-makers.

---

# 58. DARK / LIGHT DESIGN

The public website can use a primarily light presentation with strategically dark sections.

Recommended rhythm:

```text
Light Hero or Dark Hero
↓
Light Stats
↓
Dark AI / Services Section
↓
Light Portfolio
↓
Dark Process
↓
Light Team
↓
Light Testimonials
↓
Dark Final CTA
↓
Dark Footer
```

Admin dashboard should primarily use a clean light enterprise UI with dark sidebar/topbar accents.

---

# 59. ICONOGRAPHY

Use:

```text
lucide-react
```

Do not use random emoji as the primary icon system.

Icons should communicate:

* AI
* Cloud
* Code
* Security
* Marketing
* Design
* ERP
* Analytics
* Support
* Phone
* Calendar
* Shield
* Settings

---

# 60. MOCK RAZORPAY

For e-commerce portfolio/demo references, you may visually demonstrate:

```text
Razorpay
Checkout
Payment flow
```

but **do not connect to a real payment system**.

If implementing a mock checkout UI, clearly mark it:

```text
Demo Checkout
```

No real payment should occur.

---

# 61. DATA FLOW

Public forms:

```text
User
 ↓
Form validation
 ↓
React state
 ↓
localStorage
 ↓
Admin Dashboard
```

Admin changes:

```text
Admin
 ↓
React state
 ↓
localStorage
 ↓
Public website
```

Examples:

* Approving a testimonial updates the public testimonials.
* Editing portfolio updates the public portfolio.
* Changing announcement text updates the banner.
* Enabling maintenance mode changes the public experience.
* Updating contact settings changes footer/contact information.

---

# 62. STATE MANAGEMENT

Do not introduce Redux unless genuinely necessary.

Prefer:

* React Context where shared state is useful
* Custom hooks
* Local component state
* localStorage utility abstraction

Suggested hooks:

```text
useLocalStorage()
useModal()
useAdminAuth()
usePortfolio()
useEnquiries()
useTestimonials()
useWebsiteSettings()
```

---

# 63. COMPONENT QUALITY

Every component must be:

* Reusable
* Typed
* Readable
* Small enough to maintain
* Properly named
* Free from unnecessary duplication

Avoid giant monolithic components.

---

# 64. FINAL QA CHECKLIST

Before considering the application complete, verify:

### Public Website

* [ ] Navbar works
* [ ] Mobile menu works
* [ ] Hero slider works
* [ ] Every hero slide has unique imagery
* [ ] All six services exist
* [ ] Service enquiry modal works
* [ ] Demo booking modal works
* [ ] Callback widget works
* [ ] Referral modal works
* [ ] Feedback modal works
* [ ] Chatbot works
* [ ] Portfolio filters work
* [ ] Portfolio cards work
* [ ] Team section works
* [ ] Testimonials render correctly
* [ ] Footer works
* [ ] Admin Portal link works

### Admin

* [ ] `/admin/login` works
* [ ] Demo credentials work
* [ ] Unauthorized dashboard access redirects
* [ ] Logout works
* [ ] Metrics are dynamic
* [ ] Enquiries can be filtered
* [ ] Enquiries can be searched
* [ ] Enquiry status can be changed
* [ ] Callback status can be changed
* [ ] Demo bookings display correctly
* [ ] Portfolio CRUD works
* [ ] Featured toggle works
* [ ] Testimonials can be approved/hidden
* [ ] Settings can be edited
* [ ] Announcement toggle works
* [ ] Maintenance mode works
* [ ] All changes persist after refresh

### Technical

* [ ] No external database
* [ ] No backend
* [ ] No Supabase
* [ ] No Firebase
* [ ] React + Vite
* [ ] Tailwind CSS
* [ ] Framer Motion
* [ ] Lucide React
* [ ] No TypeScript errors
* [ ] No console errors
* [ ] Responsive on mobile
* [ ] Accessible keyboard interactions
* [ ] Images have alt text
* [ ] No duplicate Unsplash image URLs
* [ ] No e-learning content
* [ ] No training/bootcamp/internship content
* [ ] No fake payment processing
* [ ] No fabricated real client URLs
* [ ] No fabricated verified testimonials

---

# 65. IMPORTANT IMPLEMENTATION RULE

Do not merely create a visually attractive landing page.

Build an **interactive product demo**.

Every major CTA should perform a meaningful action.

Examples:

```text
Book Demo
→ Opens modal
→ Saves booking
→ Admin sees booking

Request Callback
→ Opens callback widget
→ Saves request
→ Admin sees request

Service Enquiry
→ Preselects service
→ Saves enquiry
→ Admin can update status

Feedback
→ Saves review
→ Admin approves/hides it

Portfolio
→ Admin adds project
→ Public portfolio updates

Website Settings
→ Admin changes banner/contact info
→ Public website reflects changes
```

---

# 66. SOURCE-OF-TRUTH RULE

Do not duplicate company information across dozens of components.

Create centralized configuration:

```ts
companyConfig
```

containing:

```text
companyName
brandName
tagline
phones
emails
address
hours
coordinates
socialLinks
```

Public UI should consume this configuration.

Admin settings should override editable values through localStorage.

---

# 67. DESIGN QUALITY BAR

The final result must look like a **real technology company website prepared for a client presentation**.

Think:

```text
Premium AI SaaS
+
Enterprise IT Consultancy
+
Modern Digital Agency
+
Conversion-focused Product Website
```

Not:

```text
Generic freelancer portfolio
```

The first viewport must immediately communicate:

> **SOSync AI Tech helps businesses build, automate, modernize and grow with software, IT, AI and digital solutions.**

---

# 68. BUILD ORDER

Implement in this order:

## Phase 1

Set up React/Vite/Tailwind/Framer Motion/Lucide.

## Phase 2

Create data models and centralized localStorage infrastructure.

## Phase 3

Create company configuration and mock datasets.

## Phase 4

Build public layout and navigation.

## Phase 5

Build hero, stats and services.

## Phase 6

Build service enquiry and demo booking flows.

## Phase 7

Build portfolio and team sections.

## Phase 8

Build testimonials, referral system, feedback and chatbot.

## Phase 9

Build footer and maintenance mode.

## Phase 10

Build admin authentication.

## Phase 11

Build admin dashboard and all six modules.

## Phase 12

Connect admin data to public UI.

## Phase 13

Implement responsive behavior and accessibility.

## Phase 14

Add animations and micro-interactions.

## Phase 15

Run complete QA and fix all errors.

---

# 69. FINAL NON-NEGOTIABLES

Before finishing, re-check these requirements:

```text
1. React + Vite
2. Tailwind CSS
3. Framer Motion
4. Lucide React
5. React State + localStorage only
6. NO external database
7. NO backend
8. NO Supabase
9. NO Firebase
10. NO LMS
11. NO courses
12. NO training programs
13. NO bootcamps
14. NO internships
15. NO student batches
16. NO course enrollment
17. B2B/B2C client services only
18. Six required service divisions
19. Six required portfolio projects
20. Required leadership/team members
21. Three-slide hero
22. ₹1 demo modal
23. Callback widget
24. Service enquiry modal
25. Refer & Earn modal
26. Feedback modal
27. Mock AI chatbot
28. Complete /admin/login
29. Complete /admin/dashboard
30. Six admin modules
31. Dynamic localStorage persistence
32. Maintenance mode
33. Editable website settings
34. Unique Unsplash imagery
35. ZERO repeated image URLs
36. Responsive design
37. Accessibility
38. Production-quality UI
39. No fabricated real-world claims
40. No fake payment processing
```

---

# 70. FINAL INSTRUCTION TO LOVABLE

**Build the entire application now.**

Do not stop after creating the homepage.

Do not leave major functionality as static placeholders.

Do not replace functional interactions with non-working buttons.

Where a real backend would normally be required, implement the complete **frontend simulation using typed mock data + React state + localStorage**.

Prioritize:

1. Conversion
2. Visual polish
3. Functional interactions
4. Responsive UX
5. Maintainable architecture
6. Accessibility
7. Data persistence
8. Admin/public synchronization

The finished application should be immediately usable as a **high-end interactive presentation/demo for SOSync AI Tech IT Solutions**.

**No e-learning. No courses. No training programs. No internships. No LMS. No student enrollment. No external database. No backend.**

Build a polished, credible, modern **AI + IT technology company experience** centered entirely around **client services, custom software, enterprise IT, web development, intelligent automation, creative branding and digital growth.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/724aef88-e4c2-41e4-b856-adce4c2ba377).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

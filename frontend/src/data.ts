import { HeroSlide, BenefitItem, ServiceDetail, TeamMember, StatItem, PartnerItem } from "./types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Fullstack Engineering",
    title: "Innovative Software Engineering Solutions",
    subtitle: "We craft robust web applications and integrated solutions tailored to streamline operations, engage customers, and scale with your enterprise needs.",
    actionText: "Discover Services",
    secondaryActionText: "Schedule Consultation"
  },
  {
    id: 2,
    badge: "Institutional Scalability",
    title: "Reliable ERP and Enterprise Systems",
    subtitle: "Enhance institutional efficiency with integrated financial, supply chain, HR, and reporting capabilities deployed on secure infrastructure.",
    actionText: "View ERP Systems",
    secondaryActionText: "Talk to Systems Engineer"
  },
  {
    id: 3,
    badge: "Digital Artistry & Brand",
    title: "Expert Web and Digital Brand Creation",
    subtitle: "Establish a stunning online presence with custom layouts, responsive UI frameworks, and polished digital graphic collateral.",
    actionText: "Explore Web Development",
    secondaryActionText: "Request Design Brief"
  },
  {
    id: 4,
    badge: "Strategic Advisory",
    title: "Strategic Technology Consulting",
    subtitle: "Align your operational goals with advanced digital strategies led by experienced technocrats and solution architects.",
    actionText: "Talk to our Experts",
    secondaryActionText: "Read Office Manifestos"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: "Cutting-Edge Innovation",
    description: "We employ the latest modern engineering libraries, framework environments, and cybernetic architectures to keep you ahead.",
    iconName: "Lightbulb"
  },
  {
    id: 2,
    title: "Secured Integrity",
    description: "Deep enterprise security modeling with robust validation gates, encrypted data tunnels, and hardened API microservices.",
    iconName: "Globe"
  },
  {
    id: 3,
    title: "Scalable Performance",
    description: "Performance-tuned reactive codebases built for sub-second responses under thousands of simultaneous live user transactions.",
    iconName: "Cpu"
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  // web-dev category
  {
    id: "custom-web-apps",
    title: "Custom Web Application Development",
    shortDesc: "Bespoke full-stack web products built with React, Node, and advanced responsive structures.",
    description: "We architect, build, and deploy premium, high-load web applications from scratch. Leveraging React 19, TypeScript, and robust server frameworks, we ensure your product runs perfectly across every browser, device, and network speed.",
    category: "web-dev",
    features: ["Robust state management and real-time updates", "Comprehensive API integrations & secure databases", "SEO optimization and performance audit scoring", "Clean code modularity and full documentation"],
    priceEst: "$2,500 - $8,000"
  },
  {
    id: "api-cloud-integrations",
    title: "API Design & Cloud Integrations",
    shortDesc: "Scalable backend routing, serverless deployments, and secure data orchestration pipelines.",
    description: "Integrate legacy components with modern cloud environments. We write fast, documented RESTful and GraphQL APIs and deploy them to secure Dockerized or serverless hosting providers with complete logging capabilities.",
    category: "web-dev",
    features: ["Secure token-based auth mechanisms", "Scalable third-party API proxy gateways", "Durable PostgreSQL / Firestore persistence layers", "Containerized pipelines for immediate deployment"],
    priceEst: "$1,800 - $5,000"
  },
  // website-dev category
  {
    id: "corp-website-design",
    title: "Corporate Website Design & Dev",
    shortDesc: "Beautiful, pixel-perfect, and modern interactive brand websites to capture your corporate identity.",
    description: "Your digital storefront deserves premium craftsmanship. We design custom high-contrast layouts featuring delightful scrolling effects, elegant typographic pairing, and strong user-experience models to boost conversions.",
    category: "website-dev",
    features: ["Fluid and responsive desktop-first grids", "Custom interactive visual elements and smooth transitions", "Integrated contact systems and newsletter collection", "CMS integration options for client-side updates"],
    priceEst: "$1,500 - $4,500"
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    shortDesc: "Slick, minimal, and conversion-focused single-view pages for products or campaigns.",
    description: "Convert traffic into loyal customers with highly targeted promotional grids. We craft responsive landing pages focusing on content hierarchy, clear call-to-actions, and ultra-fast page load metrics.",
    category: "website-dev",
    features: ["Dynamic pricing tables and service sliders", "Integrated social proof cards and partner grids", "Lead generation and direct newsletter subscription forms", "Responsive mobile touch-optimized controls"],
    priceEst: "$800 - $2,000"
  },
  // graphics category
  {
    id: "logo-design",
    title: "Professional Brand Identity",
    shortDesc: "Unique vector logos and graphic guidelines to establish standard brand recognition.",
    description: "Stand out with a modern, hand-crafted vector logo. We design distinct identity marks representing your company values, paired with color books and digital styling sheets.",
    category: "graphics",
    subCategory: "Logo Design",
    features: ["Hand-crafted vector formats (SVG, PDF, EPS)", "Light and dark theme optimized variants", "Responsive visual mark scale variations", "Complete typography brand pairing guide"],
    priceEst: "$350 - $1,200"
  },
  {
    id: "youtube-graphics",
    title: "YouTube Thumbnail & Banner Art",
    shortDesc: "High-contrast, engaging banners and thumbnails designed for viral organic CTR.",
    description: "Captivate viewers instantly on social media feeds. We produce premium, crisp graphic layouts optimized for readability across both mobile devices and wide television screens.",
    category: "graphics",
    subCategory: "Youtube Thumbnail",
    features: ["Crisp high-resolution visual exporting (PNG/JPEG)", "Optimized color contrast and text scaling for mobile", "Click-through rate (CTR) driven design layouts", "Cohesive brand visual consistency"],
    priceEst: "$150 - $450"
  },
  {
    id: "social-banners",
    title: "Social Media Campaign Banners",
    shortDesc: "Custom advertising and marketing layouts for Facebook, LinkedIn, and Telegram.",
    description: "Launch products confidently with professional marketing creatives. We design responsive banners capturing promotion objectives clearly with elegant spacing and visual structure.",
    category: "graphics",
    subCategory: "Banner",
    features: ["Exact dimensional sizing for multiple platforms", "Cohesive visual rhythm matching brand identity", "Optimized file sizing for lightning-fast loads", "Editable source file package options"],
    priceEst: "$200 - $600"
  },
  // erp-system category
  {
    id: "erp-financial-module",
    title: "Integrated ERP Financial Division",
    shortDesc: "Comprehensive financial accounting, payroll orchestration, and dynamic auditing.",
    description: "Track revenues, orchestrate payroll divisions, and manage taxes instantly. Our custom ERP system centralizes bookkeeping, automates invoicing, and builds interactive financial sheets.",
    category: "erp-system",
    features: ["Double-entry ledger ledger safety", "Automated payroll and tax division calculations", "Dynamic interactive balance sheets and reports", "Granular user permission authorization levels"],
    priceEst: "$5,000 - $15,000"
  },
  {
    id: "erp-supply-inventory",
    title: "Supply Chain & Stock Control",
    shortDesc: "Real-time stock level monitoring, supplier logs, and automatic purchasing workflows.",
    description: "Never lose track of assets. Our real-time inventory management features barcoding triggers, dynamic low-stock notifications, and automatic draft purchasing orders for suppliers.",
    category: "erp-system",
    features: ["Real-time asset movement tracking", "Low-stock automated trigger events", "Comprehensive supplier directory and pricing sheets", "Dynamic barcoding and serial number trackers"],
    priceEst: "$4,000 - $12,000"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Sosina G. Egziabher",
    role: "Business Analyst & Opeation Manager",
    bio: "Sosina has over 8 years of operational excellence in managing technology-driven services. She coordinates our delivery and support teams with stellar efficiency."
  },
  {
    id: 2,
    name: "Abel T. Kassa",
    role: "Senior Fullstack Engineer ",
    bio: "Abel designs the core infrastructure, cloud servers, and data integration pathways for our largest ERP and custom enterprise deployments."
  },
  {
    id: 3,
    name: "Meseret L. Tesfaye",
    role: "Technical Lead",
    bio: "Meseret leads our digital branding and graphic design wing, bringing modern aesthetic principles and cohesive identity systems to all corporate partners."
  },
  {
    id: 4,
    name: "Seifu M. Alemu",
    role: "Project Mnager",
    bio: "Seifu is our reactive programming mastermind. He ensures the front-end code is modular, hyper-performant, and runs beautifully on all platforms."
  }
];

export const STATS: StatItem[] = [
  {
    id: "customers",
    label: "Clients",
    value: 84,
    suffix: "+",
    iconName: "Users"
  },
  {
    id: "subscribers",
    label: "Digital Subscribers",
    value: 432,
    suffix: "+",
    iconName: "MailOpen"
  },
  {
    id: "employees",
    label: "Active Employees",
    value: 12,
    suffix: "+",
    iconName: "Briefcase"
  },
  {
    id: "branches",
    label: "Successfully Dilivered Projects",
    value: 3,
    suffix: "",
    iconName: "Building"
  }
];

export const PARTNERS: PartnerItem[] = [
  { name: "Microsoft Partner", slug: "microsoft" },
  { name: "Dell Solutions", slug: "dell" },
  { name: "Cisco Alliance", slug: "cisco" },
  { name: "Motorola Systems", slug: "motorola" },
  { name: "Huawei Enterprise", slug: "huawei" },
  { name: "Check Point Secure", slug: "checkpoint" },
  { name: "Odoo Enterprise", slug: "odoo" }
];

export const DETAILED_SERVICES_MAP: Record<string, {
  title: string;
  bannerImage: string;
  introText: string;
  approachTitle: string;
  approachSteps: Array<{ title: string; desc: string }>;
  actionTitle: string;
  actionBlocks: Array<{
    image: string;
    captionTitle: string;
    captionDesc: string;
    title: string;
    desc: string;
  }>;
  deliveredProjects?: Array<{
    id: string;
    companyName: string;
    projectName: string;
    label: string;
    imageUrl: string;
    link?: string;
  }>;
}> = {
  "web-dev": {
    title: "Web Application Development",
    bannerImage: `${import.meta.env.BASE_URL}assets/image/web_banner.jpg`,
    introText: "At En-Tech S.C., we engineer elite full-stack web products built with React, Node, and advanced responsive architectures. We focus on security, speed, and clean code principles to solve high-load enterprise challenges.",
    approachTitle: "Our Strategic Engineering Approach",
    approachSteps: [
      { title: "Architecture Design", desc: "Crafting durable blueprints that align database scalability with performant modular routing." },
      { title: "Clean-Code Implementation", desc: "Developing in TypeScript to ensure type safety, robust test coverage, and clear component isolation." },
      { title: "Security Protocols", desc: "Integrating hardened authentication gates and TLS encrypted transit pipelines for maximum data protection." }
    ],
    actionTitle: "Advanced Solutions in Action",
    actionBlocks: [
      {
        image: `${import.meta.env.BASE_URL}assets/image/web_action1.jpg`,
        captionTitle: "Full-Stack Portal",
        captionDesc: "Real-time state synchronization",
        title: "Durable Web Applications",
        desc: "We deploy modular front-end architectures that talk securely to RESTful or GraphQL backends, handling high simultaneous transactions smoothly."
      },
      {
        image: `${import.meta.env.BASE_URL}assets/image/web_action2.jpg`,
        captionTitle: "Cloud Integration",
        captionDesc: "Hardened secure database tunnels",
        title: "API & Infrastructure Pipelines",
        desc: "Integrating legacy services into high-performance cloud environments with isolated environments, containerized deployments, and active server logs."
      }
    ],
    deliveredProjects: [
      {
        id: "web-proj-1",
        companyName: "Commercial Bank of Ethiopia",
        projectName: "Financial Analytics Hub",
        label: "Designed and deployed a highly secure, real-time banking intelligence portal monitoring transactional health.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/web_project1.jpg`
      },
      {
        id: "web-proj-2",
        companyName: "Logistics SC",
        projectName: "Global Supply Orchestration",
        label: "Created a comprehensive freight-tracking web interface featuring geocoding mapping and automated low-stock warnings.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/web_project2.jpg`
      }
    ]
  },
  "website-dev": {
    title: "Brand & Corporate Websites",
    bannerImage: `${import.meta.env.BASE_URL}assets/image/website_banner.jpg`,
    introText: "Establish a magnificent digital storefront. We design custom responsive layouts featuring beautiful micro-interactions, cohesive typography, and high-conversion marketing funnels built for mobile and desktop screens alike.",
    approachTitle: "How We Design Brand Experiences",
    approachSteps: [
      { title: "Persona Alignment", desc: "Translating your company's core values into a bespoke visual theme with consistent branding guidelines." },
      { title: "Fluid Responsive Grids", desc: "Optimizing typography and graphic ratios to ensure stunning visual rendering across all screens." },
      { title: "Conversion Engineering", desc: "Implementing lead generation forms, location finders, and structured call-to-actions to turn visitors into buyers." }
    ],
    actionTitle: "Stunning Portals in Action",
    actionBlocks: [
      {
        image: `${import.meta.env.BASE_URL}assets/image/website_action1.jpg`,
        captionTitle: "Corporate Web Portal",
        captionDesc: "Clean responsive grid layout",
        title: "Custom Brand Portals",
        desc: "We engineer pixel-perfect, lightning-fast marketing hubs loaded with interactive sliders, custom illustrations, and smooth scroll animations."
      },
      {
        image: `${import.meta.env.BASE_URL}assets/image/website_action2.jpg`,
        captionTitle: "Lead Generation",
        captionDesc: "Capture funnels optimized for conversion",
        title: "High-Converting Landing Pages",
        desc: "Launch targeted marketing initiatives confidently using structured templates with quick interactive components and strong calls to action."
      }
    ],
    deliveredProjects: [
      {
        id: "site-proj-1",
        companyName: "Awash Coffee",
        projectName: "Brand Story & Direct Order",
        label: "Designed an elegant, award-winning media portal presenting agricultural origin stories alongside interactive product catalogs.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/website_project1.jpg`
      },
      {
        id: "site-proj-2",
        companyName: "Abyssinia Travels",
        projectName: "Booking & Geolocation Suite",
        label: "An immersive, high-conversion tour reservation system integrated with real-time currency conversions and interactive maps.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/website_project2.jpg`
      }
    ]
  },
  "graphics": {
    title: "Digital Graphic Art",
    bannerImage: `${import.meta.env.BASE_URL}assets/image/graphics_banner.jpg`,
    introText: "Led by Director of Digital Art Meseret Tesfaye, our graphics division delivers premium visual assets. We create hand-crafted vector logotypes, engaging marketing banners, and click-optimized YouTube graphics designed to drive high organic traffic.",
    approachTitle: "Our Creative Design Process",
    approachSteps: [
      { title: "Conceptual Sketching", desc: "Exploring multiple distinct visual variations based on your brand identity parameters." },
      { title: "Vector Engineering", desc: "Constructing scalable SVG layouts that maintain pristine visual clarity at any size." },
      { title: "High Contrast Optimization", desc: "Fine-tuning colors and typographic weights to secure maximum click-through rates and eye-catching presentation." }
    ],
    actionTitle: "Creative Assets in Action",
    actionBlocks: [
      {
        image: `${import.meta.env.BASE_URL}assets/image/graphics_action1.jpg`,
        captionTitle: "Logo Guideline",
        captionDesc: "Precision vector identity system",
        title: "Bespoke Brand Identity",
        desc: "We design highly memorable logotypes, defining brand palettes and full visual style guides to establish strong recognition."
      },
      {
        image: `${import.meta.env.BASE_URL}assets/image/graphics_action2.jpg`,
        captionTitle: "Social Creatives",
        captionDesc: "Click-optimized CTR graphics",
        title: "High-Performance Promotional Assets",
        desc: "Maximize social media presence with sharp digital flyers, YouTube banners, and custom graphics tailored for Telegram and LinkedIn."
      }
    ],
    deliveredProjects: [
      {
        id: "gfx-proj-1",
        companyName: "Tech-SC",
        projectName: "Complete Rebrand Ecosystem",
        label: "Developed custom vector identity assets, color book guidelines, and marketing templates across all corporate touchpoints.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/graphics_project1.jpg`
      }
    ]
  },
  "erp-system": {
    title: "Enterprise ERP & Operations",
    bannerImage: `${import.meta.env.BASE_URL}assets/image/erp_banner.jpg`,
    introText: "Take full control of your institution. We design and configure integrated multi-ledger ERP modules, tracking finance operations, automating supplier purchasing triggers, managing employee payroll, and streamlining stock control.",
    approachTitle: "Our ERP Implementation Framework",
    approachSteps: [
      { title: "Operational Audit", desc: "Analyzing your corporate workflow to isolate bottlenecks in logistics, bookkeeping, or payroll." },
      { title: "Database Migration", desc: "Migrating legacy data securely to scalable, unified relational storage with complete transactional integrity." },
      { title: "Staff Training & Support", desc: "Empowering your managers with easy dashboard documentation and responsive administrative portals." }
    ],
    actionTitle: "Enterprise Systems in Action",
    actionBlocks: [
      {
        image: `${import.meta.env.BASE_URL}assets/image/erp_action1.jpg`,
        captionTitle: "Financial Suite",
        captionDesc: "Double-entry bookkeeping and accounting",
        title: "Integrated Financial Ledger",
        desc: "Consolidate invoicing, payroll tax divisions, and real-time revenue balance sheets under a highly secure, authorized permission module."
      },
      {
        image: `${import.meta.env.BASE_URL}assets/image/erp_action2.jpg`,
        captionTitle: "Stock Automation",
        captionDesc: "Real-time serial number barcodes",
        title: "Supply Chain & Stock Intelligence",
        desc: "Monitor raw materials and inventory live. Trigger automatic digital purchasing requests the instant stock falls below minimum values."
      }
    ],
    deliveredProjects: [
      {
        id: "erp-proj-1",
        companyName: "Sheger Manufacturing S.C.",
        projectName: "Operations & HR suite",
        label: "Unified inventory levels, automated purchase orders for 14 overseas suppliers, and automated monthly payroll for 450+ employees.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/erp_project1.jpg`
      },
      {
        id: "erp-proj-2",
        companyName: "Yeka Trading Plc",
        projectName: "Multi-Ledger Accounting",
        label: "Consolidated five disparate bookkeeping channels into a single secure Odoo database with real-time localized audit compliance reporting.",
        imageUrl: `${import.meta.env.BASE_URL}assets/image/erp_project2.jpg`
      }
    ]
  }
};

export interface ProjectStory {
  problem: string;
  approach: string;
  challenge: string;
  learning: string;
}

export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: "frontend" | "fullstack" | "uiux";
  categoryLabel: string;
  tagline: string;
  description: string;
  status: string;
  image: string;
  role: string;
  technologies: string[];
  keyFeatures: string[];
  whatILearned: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  layoutType: "showcase" | "split-left" | "split-right";
  buildNotes: ProjectStory;
}

export interface CurrentlyBuildingDomain {
  number: string;
  name: string;
  status: "LEARNING" | "EXPLORING" | "BUILDING" | "IN PROGRESS";
  focus: string;
  details: string;
}

export interface JourneyStage {
  step: string;
  title: string;
  status: "Completed" | "Strong Foundation" | "Shipped Projects" | "Current Focus" | "Next Milestone";
  summary: string;
  details: string[];
}

export const PERSONAL_INFO = {
  name: "Kelvin Atsu Djayouri",
  brand: "KAD.DEV",
  role: "Frontend Developer",
  positioning: "Frontend Developer → Backend Developer → Full-Stack Developer",
  subtitle: "Frontend Developer building toward Full-Stack.",
  headline: "I build things for the web.",
  supportingText:
    "A developer who started with frontend development and is now going deeper into backend engineering. I build practical web products and learn by shipping.",
  email: "deve.kad.tech@gmail.com",
  location: "Accra, Ghana (GMT+0)",
  github: "https://github.com/devkad09",
  linkedin: "https://linkedin.com/in/kaddev",
  currently: [
    "Frontend Development",
    "Backend Engineering",
    "JavaScript & TypeScript",
    "Python",
    "APIs & Databases",
  ],
  terminalWhoami: [
    { label: "user", value: "kelvin@kad.dev" },
    { label: "role", value: "frontend developer" },
    { label: "focus", value: "backend learner" },
    { label: "mindset", value: "builder" },
    { label: "mode", value: "problem solver" },
  ],
  aboutHeadline: "A LITTLE ABOUT ME",
  aboutCopy: [
    "I’m Kelvin — a developer who started with frontend development and is now going deeper into backend engineering.",
    "I like building things from scratch, figuring out why they work, and fixing them when they don't.",
    "These days, I'm spending more time with APIs, databases, Python and backend architecture while continuing to sharpen my frontend skills.",
    "Most of what I learn ends up becoming a project.",
  ],
};

export const PERSONALITY_DETAILS = {
  currentlyLearning: [
    { name: "Python", context: "Backend scripting & automation" },
    { name: "Backend APIs", context: "REST conventions, error handling & JSON contracts" },
    { name: "Databases", context: "PostgreSQL schemas & SQL queries" },
    { name: "Authentication", context: "JWT tokens & protected route patterns" },
  ],
  currentlyBuilding: [
    "Refining Nordhem e-commerce storefront",
    "Building backend REST endpoint prototypes",
    "Designing full-stack database schemas",
  ],
  recentlyWorkedWith: [
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Zod Validation",
    "Supabase PostgreSQL",
    "Vite",
  ],
  nextUp: "Build and deploy a serious full-stack SaaS product.",
};

export const NEXT_BUILD = {
  badge: "NEXT BUILD",
  status: "In Active Planning",
  headline: "Currently working toward a larger full-stack product.",
  description:
    "Taking everything I've learned in React, TypeScript, and Supabase to architect a full-stack SaaS application with Node.js/Express API routing, PostgreSQL schemas, and user authentication.",
  focusAreas: [
    { name: "Backend API", desc: "RESTful endpoints with Node.js & Express" },
    { name: "Database Schema", desc: "Relational modeling and queries in PostgreSQL" },
    { name: "Authentication", desc: "Secure sessions and JWT protected routes" },
    { name: "Frontend State", desc: "Clean React + TypeScript client dashboard" },
  ],
  honestNote:
    "I am actively learning the backend stack to build this properly from scratch without pretending it exists before it's shipped.",
};

export const CURRENTLY_BUILDING_DOMAINS: CurrentlyBuildingDomain[] = [
  {
    number: "01",
    name: "JAVASCRIPT & TS",
    status: "BUILDING",
    focus: "Modern ES6+, Asynchronous I/O & DOM Engine",
    details:
      "Promise resolution, event loops, custom event delegation, strict type interfaces, and performance optimization.",
  },
  {
    number: "02",
    name: "PYTHON",
    status: "LEARNING",
    focus: "Backend Scripting, Automation & Server Logic",
    details:
      "Data structures, file handling, automation scripts, and server-side request logic with clean Python syntax.",
  },
  {
    number: "03",
    name: "BACKEND",
    status: "IN PROGRESS",
    focus: "Node.js & Express Architecture",
    details:
      "Modular REST routers, middleware pipelines, error handling, request validation, and server lifecycles.",
  },
  {
    number: "04",
    name: "APIs",
    status: "BUILDING",
    focus: "REST Endpoints, JSON Contracts & CORS",
    details:
      "Consistent CRUD patterns, standard HTTP status conventions, payload validation, and clean endpoint design.",
  },
  {
    number: "05",
    name: "DATABASES",
    status: "EXPLORING",
    focus: "PostgreSQL (Supabase) & MongoDB",
    details:
      "Relational schemas, foreign keys, row-level security in PostgreSQL alongside document collections in MongoDB.",
  },
  {
    number: "06",
    name: "FULL-STACK SAAS",
    status: "IN PROGRESS",
    focus: "End-to-End Application Architecture",
    details:
      "Connecting frontend interfaces with cloud database backends, session security, authentication flows, and CI/CD.",
  },
];

export const MY_JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "01",
    title: "IT Foundation",
    status: "Completed",
    summary:
      "Curiosity about computer systems, networking fundamentals, and operating systems that sparked my passion for software.",
    details: [
      "Understanding computer architecture and operating systems",
      "Network basics, HTTP/HTTPS protocols, and client-server models",
      "Setting up developer environments, shell tooling, and version control",
    ],
  },
  {
    step: "02",
    title: "Frontend Development",
    status: "Strong Foundation",
    summary:
      "Built a strong foundation in HTML, CSS, modern JavaScript, and component architecture with React and TypeScript.",
    details: [
      "Responsive web design from 320px mobile to desktop viewports",
      "React component architecture, custom hooks, and state management",
      "TypeScript type safety, strict interface contracts, and Tailwind CSS design systems",
    ],
  },
  {
    step: "03",
    title: "Real-World Projects",
    status: "Shipped Projects",
    summary:
      "Building and shipping tangible web products that solve practical problems for users and clients.",
    details: [
      "Shipped Nordhem Scandinavian fashion e-commerce storefront",
      "Engineered FormFlow multi-step validation and database intake",
      "Delivered Mcsteeze Lounge digital mobile menu and table reservation platform",
    ],
  },
  {
    step: "04",
    title: "Backend Development",
    status: "Current Focus",
    summary:
      "Pushing into backend engineering: Node.js, Express, Python, REST APIs, databases, and secure data handling.",
    details: [
      "Building RESTful APIs with Node.js and Express",
      "Working with PostgreSQL via Supabase and exploring MongoDB",
      "Practicing server validation, error handling, and authentication workflows",
    ],
  },
  {
    step: "05",
    title: "Full-Stack Engineering",
    status: "Next Milestone",
    summary:
      "Connecting robust frontend interfaces to backend APIs and cloud databases to ship complete end-to-end applications.",
    details: [
      "Connecting responsive frontend interfaces directly to scalable backend APIs",
      "Database schema design, queries, and persistent cloud storage",
      "Shipping dependable, accessible full-stack applications people rely on",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "nordhem",
    projectNumber: "01",
    title: "NORDHEM",
    category: "frontend",
    categoryLabel: "Frontend Showcase",
    tagline: "Minimalist Scandinavian E-Commerce Storefront",
    description:
      "An e-commerce storefront I built to practice responsive layouts, product interfaces, and frontend state management.",
    status: "Live Project",
    image: "/nordhem.png",
    role: "Frontend Development",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    keyFeatures: [
      "Faceted client-side filtering by category, size, and price without page reloads",
      "Interactive slide-out cart drawer with local storage persistence across sessions",
      "Sub-second transitions and zero cumulative layout shifts on mobile devices",
    ],
    whatILearned:
      "Managing multi-faceted client state while keeping code modular, reactive, and responsive across compact mobile viewports without heavy third-party dependencies.",
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
    featured: true,
    layoutType: "showcase",
    buildNotes: {
      problem:
        "Online fashion storefronts often feel cluttered, sluggish on mobile devices, and difficult to navigate when filtering through multiple categories and sizes.",
      approach:
        "I built a minimalist layout using clean typography and generous whitespace. On the technical side, I implemented client-side state handling to ensure filter updates and cart operations happen instantly without reloading the page.",
      challenge:
        "Managing multi-faceted filtering (combining size, category, and price range) while keeping code modular and transitions smooth on mobile viewports.",
      learning:
        "Gained practical experience managing complex reactive state in React, handling URL search parameters, and optimizing rendering performance without relying on heavy third-party libraries.",
    },
  },
  {
    id: "formflow",
    projectNumber: "02",
    title: "FORMFLOW",
    category: "fullstack",
    categoryLabel: "Full-Stack / Database Integration (Learning Project)",
    tagline: "Multi-Step Form & Database Engine",
    description:
      "A multi-step intake form engine built to practice step-by-step schema validation and direct database persistence with Supabase.",
    status: "Active Project",
    image: "/formflow.png",
    role: "Frontend + Backend Integration",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase", "Tailwind CSS"],
    keyFeatures: [
      "Step-by-step progress wizard with runtime schema validation gates",
      "Direct data persistence via Supabase PostgreSQL tables",
      "Async loading states, error boundaries, and form state recovery",
    ],
    whatILearned:
      "Hands-on experience connecting frontend interfaces to cloud databases, handling async loading and error states, and preventing invalid payload submissions.",
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
    featured: true,
    layoutType: "split-left",
    buildNotes: {
      problem:
        "Long, single-page forms often overwhelm users, leading to high abandonment rates and incomplete or unvalidated data arriving at the server.",
      approach:
        "I broke intake down into clear logical steps, used Zod for immediate runtime schema validation at each step, and connected submissions directly to a Supabase PostgreSQL database.",
      challenge:
        "Managing interdependent state across multiple steps, preventing invalid forward navigation, and cleanly handling Supabase network errors without losing user input.",
      learning:
        "Learned how frontend validation contracts bridge to backend database schemas, how to handle async network lifecycles reliably, and took my first major step connecting frontend UI to real database infrastructure.",
    },
  },
  {
    id: "mcsteeze",
    projectNumber: "03",
    title: "MCSTEEZE LOUNGE",
    category: "uiux",
    categoryLabel: "Frontend & UI/UX",
    tagline: "Digital Menu & Table Reservation Portal",
    description:
      "A mobile-first web application built for lounge guests to browse food and drink menus with quick filters and submit table reservation requests.",
    status: "Live Project",
    image: "/mcsteeze.png",
    role: "Frontend Development & UI/UX",
    technologies: ["React 18", "Tailwind CSS", "Vite", "Lucide Icons"],
    keyFeatures: [
      "Category-filtered digital menu with live search across food and drinks",
      "Streamlined table reservation booking flow with touch-friendly controls",
      "High-contrast visual hierarchy optimized for mobile devices and dimmer venue lighting",
    ],
    whatILearned:
      "Designing for real-world mobile ergonomics: thumb-friendly touch targets, rapid asset loading on cellular networks, and zero layout shift.",
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
    featured: true,
    layoutType: "split-right",
    buildNotes: {
      problem:
        "Patrons needed a quick, readable way to browse food and drink offerings on their mobile devices, plus an easy way to request table bookings without friction.",
      approach:
        "I focused on mobile ergonomics: thumb-friendly bottom navigation, quick-tap category pills, instant search filtering, and clear reservation request inputs.",
      challenge:
        "Ensuring images load swiftly on slower mobile networks without causing layout shifts, and designing an intuitive booking modal.",
      learning:
        "Reinforced mobile-first development principles, touch target sizing (minimum 44px), zero cumulative layout shifts, and designing practical web solutions for real hospitality use cases.",
    },
  },
];

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  url: string;
}

export const ARTICLES: Article[] = [
  {
    id: "headless-forms",
    title: "Building Headless Form Endpoints: Practical Lessons from Formgrid.dev",
    category: "API Architecture",
    date: "Aug 2026",
    readTime: "6 min read",
    description:
      "Designing headless form endpoints that handle CORS, validation, and JSON submissions cleanly.",
    url: "https://formgrid.dev",
  },
  {
    id: "core-web-vitals",
    title: "Practical Performance Optimization in Modern React SPAs",
    category: "Frontend Performance",
    date: "Aug 2026",
    readTime: "7 min read",
    description:
      "Techniques for code splitting and eliminating cumulative layout shifts in React SPAs.",
    url: "https://nordhem-blue.vercel.app",
  },
  {
    id: "accessibility-practical",
    title: "Beyond Basic HTML: Building Keyboard-Navigable Web Components",
    category: "Accessibility",
    date: "Jul 2026",
    readTime: "5 min read",
    description:
      "Guide to focus traps, ARIA attributes, and accessible modal keyboard navigation.",
    url: "https://github.com/devkad09",
  },
];

export interface CaseStudy {
  projectId: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  technologies: string[];
  challenges: string;
  solution: string;
  result: string;
  whatILearned: string;
  backendNote?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    projectId: "nordhem",
    title: "Nordhem E-Commerce Storefront",
    subtitle: "Architecting a responsive, minimal fashion storefront with sub-second page transitions.",
    problem:
      "Online fashion storefronts often feel cluttered, sluggish on mobile devices, and difficult to navigate when filtering through multiple categories and sizes.",
    approach:
      "I built a minimalist layout using clean typography and generous whitespace. On the technical side, I implemented client-side state handling to ensure filter updates and cart operations happen instantly without reloading the page.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    challenges:
      "Managing multi-faceted filtering while keeping code modular and transitions smooth on mobile.",
    solution:
      "Created a centralized filter state hook applying pure filter predicates against product records, paired with a lightweight slide-out drawer.",
    result:
      "Delivered a fast, responsive e-commerce experience with sub-second transitions and zero layout shifts.",
    whatILearned:
      "Deepened understanding of reactive state management and how clean visual hierarchy improves conversion.",
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "formgrid",
    role: "Technical Writer & Documentation Engineer",
    company: "Formgrid.dev",
    companyUrl: "https://formgrid.dev",
    location: "Remote",
    period: "2024 – Present",
    summary:
      "Writing developer documentation, REST API specifications, and component integration guides.",
    achievements: [
      "Authored REST API endpoint specifications and code examples in TypeScript and cURL",
      "Created interactive component integration recipes and developer guides",
    ],
    technologies: ["REST APIs", "TypeScript", "Documentation", "Markdown"],
  },
  {
    id: "freelance",
    role: "Frontend Developer",
    company: "Freelance & Projects",
    location: "Remote",
    period: "2023 – Present",
    summary:
      "Building clean, responsive frontend web applications with React, TypeScript, and Tailwind CSS.",
    achievements: [
      "Shipped responsive web applications with strong accessibility and performance",
      "Integrated frontends with third-party APIs and Supabase cloud databases",
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Supabase"],
  },
];

export interface SkillItem {
  name: string;
  focus: string;
  description: string;
}

export const FRONTEND_SKILLS: SkillItem[] = [
  { name: "React", focus: "Component Architecture", description: "Hooks, state management, and component composition." },
  { name: "TypeScript", focus: "Type Safety", description: "Interface contracts, generics, and compile-time safety." },
  { name: "JavaScript (ES6+)", focus: "Core Language", description: "Modern syntax, asynchronous promises, and DOM APIs." },
  { name: "Next.js", focus: "Framework & Tooling", description: "App router, SSR/SSG, and performance optimization." },
  { name: "Tailwind CSS", focus: "Styling Systems", description: "Utility-first layouts, responsive design, and tokens." },
  { name: "HTML5 & Semantics", focus: "Structure", description: "Accessible landmark markup and SEO structure." },
  { name: "CSS3 & Modern Layouts", focus: "Layout Precision", description: "Flexbox, CSS Grid, and fluid animations." },
  { name: "Responsive Design", focus: "Cross-Device UX", description: "Pixel-accurate rendering from mobile to desktop." },
];

export const BACKEND_LEARNING_SKILLS: SkillItem[] = [
  { name: "Node.js & Express", focus: "Currently Learning", description: "Server endpoints, routing, middleware, and request lifecycles." },
  { name: "REST APIs", focus: "Currently Learning", description: "Designing CRUD endpoints and HTTP status conventions." },
  { name: "Databases (Supabase / SQL)", focus: "Currently Learning", description: "Relational modeling, schemas, and basic queries." },
  { name: "MongoDB", focus: "Currently Learning", description: "Document collections, schemas, and basic queries." },
  { name: "Authentication", focus: "Currently Learning", description: "JWT tokens, protected routes, and auth flows." },
];

export const HOW_I_BUILD_STEPS = [
  { step: "01", title: "Discover", description: "Clarify user flows and core requirements." },
  { step: "02", title: "Design", description: "Structure reusable components and design tokens." },
  { step: "03", title: "Develop", description: "Write clean, type-safe React & Tailwind code." },
  { step: "04", title: "Test", description: "Audit accessibility, responsiveness & speed." },
  { step: "05", title: "Deploy", description: "Ship production bundles via Git & CI/CD." },
];

export const LEVELING_UP = {
  quote: "Strong frontend foundation — actively expanding into Node.js, Express, and Supabase for end-to-end delivery.",
  steps: [
    { title: "Frontend", status: "Strong Core", desc: "React, TypeScript, responsive UI" },
    { title: "APIs", status: "Practicing", desc: "REST conventions & JSON handling" },
    { title: "Backend", status: "In Progress", desc: "Node.js & Express routing" },
    { title: "Databases", status: "In Progress", desc: "Supabase & SQL schemas" },
    { title: "Authentication", status: "Next Milestone", desc: "Session & token security" },
    { title: "Deployment", status: "Production Ready", desc: "Vercel & CI/CD automation" },
  ],
};


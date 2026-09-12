export interface Project {
  id: string;
  title: string;
  category: "frontend" | "fullstack" | "uiux";
  categoryLabel: string;
  tagline: string;
  description: string;
  status: string;
  image: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

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

export interface SkillItem {
  name: string;
  focus: string;
  description: string;
}

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

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  url: string;
}

export interface CurrentlyBuildingItem {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: string;
  progressPercent: number;
  liveUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Kelvin Atsu Djayouri",
  role: "Frontend Developer",
  positioning: "Frontend Developer | Growing into Full-Stack Development",
  headline: "I build modern digital experiences that people enjoy using.",
  supportingText:
    "Frontend developer crafting fast, accessible web experiences with React & TypeScript, growing into full-stack development.",
  email: "deve.kad.tech@gmail.com",
  location: "Accra, Ghana (GMT+0)",
  availability: "Available for opportunities",
  github: "https://github.com/devkad09",
  linkedin: "https://linkedin.com/in/kaddev",
};

export const FRONTEND_SKILLS: SkillItem[] = [
  { name: "React", focus: "Component Architecture", description: "Hooks, state management, and component composition." },
  { name: "TypeScript", focus: "Type Safety", description: "Interface contracts, generics, and compile-time safety." },
  { name: "JavaScript (ES6+)", focus: "Core Language", description: "Modern syntax, asynchronous promises, and DOM APIs." },
  { name: "Next.js", focus: "Framework & Tooling", description: "App router, SSR/SSG, and performance optimization." },
  { name: "Tailwind CSS", focus: "Styling Systems", description: "Utility-first layouts, responsive design, and tokens." },
  { name: "HTML5 & Semantics", focus: "Structure", description: "Accessible landmark markup and SEO structure." },
  { name: "CSS3 & Modern Layouts", focus: "Layout Precision", description: "Flexbox, CSS Grid, and fluid animations." },
  { name: "Responsive Design", focus: "Cross-Device UX", description: "Pixel-accurate rendering from mobile to desktop." },
  { name: "UI/UX Implementation", focus: "Interface Polish", description: "Intuitive, clean, and accessible user flows." },
  { name: "API Integration", focus: "Data Layer", description: "Connecting frontends to REST APIs and JSON endpoints." },
];

export const BACKEND_LEARNING_SKILLS: SkillItem[] = [
  { name: "Node.js & Express", focus: "Currently Learning", description: "Server endpoints, routing, middleware, and request lifecycles." },
  { name: "REST APIs", focus: "Currently Learning", description: "Designing CRUD endpoints and HTTP status conventions." },
  { name: "Databases (Supabase / SQL)", focus: "Currently Learning", description: "Relational modeling, schemas, and basic queries." },
  { name: "MongoDB", focus: "Currently Learning", description: "Document collections, schemas, and basic queries." },
  { name: "Authentication", focus: "Currently Learning", description: "JWT tokens, protected routes, and auth flows." },
  { name: "Server-Side Logic", focus: "Currently Learning", description: "Form handlers, validation, and error handling." },
];

export const LEVELING_UP = {
  quote:
    "Strong frontend foundation — actively expanding into Node.js, Express, and Supabase for end-to-end delivery.",
  steps: [
    { title: "Frontend", status: "Strong Core", desc: "React, TypeScript, responsive UI" },
    { title: "APIs", status: "Practicing", desc: "REST conventions & JSON handling" },
    { title: "Backend", status: "In Progress", desc: "Node.js & Express routing" },
    { title: "Databases", status: "In Progress", desc: "Supabase & SQL schemas" },
    { title: "Authentication", status: "Next Milestone", desc: "Session & token security" },
    { title: "Deployment", status: "Production Ready", desc: "Vercel & CI/CD automation" },
  ],
};

export const HOW_I_BUILD_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Clarify user flows and core requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "Structure reusable components and design tokens.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Write clean, type-safe React & Tailwind code.",
  },
  {
    step: "04",
    title: "Test",
    description: "Audit accessibility, responsiveness & speed.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "Ship production bundles via Git & CI/CD.",
  },
];

export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    name: "Nordhem Storefront",
    tagline: "Performance & Filter Polish",
    description: "Adding instant facet filtering, quick-view modals, and cart persistence.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS"],
    status: "Active Sprint",
    progressPercent: 80,
    liveUrl: "https://nordhem-blue.vercel.app",
  },
  {
    name: "FormFlow Engine",
    tagline: "Supabase Database Pipeline",
    description: "Connecting multi-step Zod validated inputs to Supabase tables.",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase"],
    status: "Active Sprint",
    progressPercent: 75,
    liveUrl: "https://formflow-olive.vercel.app",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "nordhem",
    title: "Nordhem",
    category: "frontend",
    categoryLabel: "Frontend",
    tagline: "Minimalist Scandinavian E-Commerce",
    description:
      "A fast, responsive e-commerce storefront with client-side faceted filtering, product quick-views, and an interactive slide-out cart.",
    status: "Live Project",
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    keyFeatures: [
      "Faceted filtering by category, size & price",
      "Interactive cart drawer with local persistence",
    ],
    liveUrl: "https://nordhem-blue.vercel.app",
    githubUrl: "https://github.com/devkad09/nordhem",
    featured: true,
  },
  {
    id: "formflow",
    title: "FormFlow",
    category: "fullstack",
    categoryLabel: "Full Stack (Learning Project)",
    tagline: "Multi-Step Form & Database Engine",
    description:
      "A multi-step form engine with runtime Zod schema validation and direct data persistence into Supabase.",
    status: "Active Project",
    image: "/formflow.png",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase", "Tailwind CSS"],
    keyFeatures: [
      "Step-by-step progress with schema validation gates",
      "Direct cloud persistence via Supabase tables",
    ],
    liveUrl: "https://formflow-olive.vercel.app",
    githubUrl: "https://github.com/devkad09/formflow",
    featured: true,
  },
  {
    id: "mcsteeze",
    title: "Mcsteeze Lounge",
    category: "uiux",
    categoryLabel: "UI/UX & Web",
    tagline: "Digital Menu & Table Reservation Portal",
    description:
      "A mobile-first hospitality web app with quick-filter menu browsing and a streamlined table reservation flow.",
    status: "Live Project",
    image: "/mcsteeze.png",
    technologies: ["React 18", "Tailwind CSS", "Vite", "Lucide Icons"],
    keyFeatures: [
      "Category-filtered digital menu with live search",
      "Streamlined table reservation booking flow",
    ],
    liveUrl: "https://mcsteeze-lounge.vercel.app",
    githubUrl: "https://github.com/devkad09/mcsteeze-lounge",
    featured: true,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    projectId: "nordhem",
    title: "Nordhem E-Commerce Storefront",
    subtitle: "Architecting a responsive, minimal fashion storefront with sub-second page transitions.",
    problem:
      "Online fashion storefronts often feel cluttered, sluggish on mobile devices, and difficult to navigate when filtering through multiple categories and sizes.",
    approach:
      "I designed a minimalist layout using generous white space and clean typography. On the technical side, I implemented client-side state handling to ensure filter updates and cart operations happen instantly without reloading the page.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    challenges:
      "Managing multi-faceted filtering (combining size, category, and price range) while keeping code modular and transitions smooth on mobile.",
    solution:
      "Created a centralized filter state hook applying pure filter predicates against product records, paired with a lightweight slide-out drawer.",
    result:
      "Delivered a fast, responsive e-commerce experience with sub-second transitions and zero layout shifts.",
    whatILearned:
      "Deepened understanding of reactive state management and how clean visual hierarchy improves conversion.",
  },
  {
    projectId: "formflow",
    title: "FormFlow Multi-Step Engine",
    subtitle: "Connecting structured multi-step frontend forms to a cloud database pipeline.",
    problem:
      "Long, single-page forms often overwhelm users, leading to high drop-off rates and invalid submissions.",
    approach:
      "Broke down intake into clear logical steps with Zod runtime schema validation for instant feedback before submission.",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase", "Tailwind CSS"],
    challenges:
      "Handling field dependencies across multiple steps, preventing invalid navigation, and persisting data cleanly into Supabase.",
    solution:
      "Implemented a state machine with validation gates powered by Zod. On completion, the sanitized payload posts to Supabase.",
    result:
      "A reliable multi-step form application saving structured submissions to a cloud database with zero validation leakage.",
    whatILearned:
      "Hands-on experience connecting frontend interfaces to cloud databases, handling async loading and error states.",
    backendNote:
      "A key milestone in learning backend development, working with cloud databases, API requests, and data validation.",
  },
  {
    projectId: "mcsteeze",
    title: "Mcsteeze Lounge Web Portal",
    subtitle: "Developing a mobile-first digital menu and reservation flow for a hospitality venue.",
    problem:
      "Patrons needed a fast way to browse food and drink offerings on their phones, plus an easy method to reserve tables.",
    approach:
      "Focused on mobile ergonomics: thumb-friendly navigation, quick-tap category filters, and high-contrast typography.",
    technologies: ["React 18", "Tailwind CSS", "Vite", "Lucide Icons"],
    challenges:
      "Ensuring images load swiftly on slower mobile networks without causing layout shifts, and designing an intuitive booking modal.",
    solution:
      "Optimized assets, utilized responsive image sizing, and created a compact reservation form with clear input states.",
    result:
      "Shipped a live production web application that provides a modern digital touchpoint for lounge guests.",
    whatILearned:
      "Reinforced mobile-first development and verified how clean visual hierarchy enhances user convenience.",
  },
];

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

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Diploma in Information Technology",
    institution: "Accra Technical University",
    period: "2024 – 2026",
    status: "Current Program",
    description:
      "Computer science fundamentals: data structures, relational databases, and web engineering.",
    highlights: ["Data Structures", "Database Management", "Web Engineering"],
  },
  {
    degree: "BSc in Computer Science (Top-Up)",
    institution: "Ghana Communication Technology University (GCTU)",
    period: "Target: 2027",
    status: "Planned Advancement",
    description:
      "Planned advancement in distributed computing, algorithms, and software systems.",
    highlights: ["Distributed Systems", "Software Architecture", "Algorithms"],
  },
];

export const ARTICLES: Article[] = [
  {
    id: "headless-forms",
    title: "Building Headless Form Endpoints: Practical Lessons from Formgrid.dev",
    category: "API Architecture",
    date: "Aug 2026",
    readTime: "6 min read",
    description:
      "Designing headless form endpoints that handle CORS, validation, and JSON submissions.",
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

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
    "I’m a frontend developer focused on building responsive, accessible, and engaging web experiences while expanding my backend skills to build complete applications.",
  email: "deve.kad.tech@gmail.com",
  location: "Accra, Ghana (GMT+0)",
  availability: "Available for opportunities",
  github: "https://github.com/devkad09",
  linkedin: "https://linkedin.com/in/kaddev",
};

export const FRONTEND_SKILLS: SkillItem[] = [
  { name: "React", focus: "Component Architecture", description: "Hooks, custom state logic, component composition, and responsive state." },
  { name: "TypeScript", focus: "Type Safety", description: "Strong typing, interface contracts, generics, and compile-time error prevention." },
  { name: "JavaScript (ES6+)", focus: "Core Language", description: "Modern syntax, asynchronous promises, array methods, and DOM APIs." },
  { name: "Next.js", focus: "Framework & Tooling", description: "File-system routing, server/client component boundaries, and performance." },
  { name: "Tailwind CSS", focus: "Styling & Design Systems", description: "Utility-first design, custom configurations, tokens, and responsive layouts." },
  { name: "HTML5 & Semantic Web", focus: "Structural Foundation", description: "Accessible landmark structure, SEO metadata, and semantic markup." },
  { name: "CSS3 & Modern Layouts", focus: "Layout Precision", description: "Flexbox, CSS Grid, media queries, keyframe animations, and transitions." },
  { name: "Responsive Design", focus: "Cross-Device UX", description: "Pixel-accurate rendering from mobile viewports to desktop monitors." },
  { name: "UI/UX Implementation", focus: "Interactive Polish", description: "Translating mockups into intuitive, clean, and accessible user flows." },
  { name: "API Integration", focus: "Data Layer", description: "Connecting frontend components to RESTful APIs, JSON data, and webhooks." },
];

export const BACKEND_LEARNING_SKILLS: SkillItem[] = [
  { name: "Node.js & Express", focus: "Currently Learning", description: "Building server endpoints, handling routing, middleware, and request/response lifecycles." },
  { name: "REST APIs", focus: "Currently Learning", description: "Designing structured CRUD endpoints, query parameters, and status code conventions." },
  { name: "Databases (Supabase / SQL)", focus: "Currently Learning", description: "Relational data modeling, table schemas, foreign keys, and basic SQL queries." },
  { name: "MongoDB", focus: "Currently Learning", description: "Document-oriented databases, schemas, and basic collection operations." },
  { name: "Authentication", focus: "Currently Learning", description: "Understanding session tokens, JWTs, protected routes, and user access flows." },
  { name: "Server-Side Logic", focus: "Currently Learning", description: "Form submissions, webhook handlers, server-side data validation, and error recovery." },
];

export const LEVELING_UP = {
  quote:
    "I’m currently expanding beyond frontend development and building my backend skills. My goal is to understand the complete lifecycle of a web application — from designing the interface to building APIs, handling data and authentication, and deploying the application.",
  steps: [
    { title: "Frontend", status: "Strong Core", desc: "React, TypeScript, responsive UI & UX design" },
    { title: "APIs", status: "Actively Practicing", desc: "REST conventions, JSON payloads, and fetch handling" },
    { title: "Backend", status: "In Progress", desc: "Node.js, Express server logic, and request routing" },
    { title: "Databases", status: "In Progress", desc: "Supabase, PostgreSQL schemas, and basic queries" },
    { title: "Authentication", status: "Next Milestone", desc: "Sessions, token handling, and protected routes" },
    { title: "Deployment", status: "Production Ready", desc: "Vercel, Git workflows, and CI/CD automation" },
  ],
};

export const HOW_I_BUILD_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the problem, users, and core requirements before writing any code.",
  },
  {
    step: "02",
    title: "Design",
    description: "Plan the interface, user experience, typography, and reusable component structure.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Build clean, responsive, and maintainable frontend components with TypeScript.",
  },
  {
    step: "04",
    title: "Test",
    description: "Audit responsiveness across devices, accessibility standards, and runtime performance.",
  },
  {
    step: "05",
    title: "Deploy",
    description: "Deploy to production platforms, verify live functionality, and continuously iterate.",
  },
];

export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    name: "Nordhem Storefront",
    tagline: "Minimalist Scandinavian E-Commerce",
    description: "Building faceted product filters, reactive slide-out cart drawer, and client-side state persistence.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    status: "Active Development",
    progressPercent: 85,
    liveUrl: "https://nordhem-blue.vercel.app",
  },
  {
    name: "FormFlow Engine",
    tagline: "Multi-Step Form & Pipeline Router",
    description: "Developing runtime schema validation with Zod and connecting lead submissions to Supabase.",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase"],
    status: "Active Development",
    progressPercent: 70,
    liveUrl: "https://formflow-olive.vercel.app",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "nordhem",
    title: "Nordhem",
    category: "frontend",
    categoryLabel: "Frontend",
    tagline: "Scandinavian Minimalist Fashion Storefront",
    description:
      "A clean e-commerce interface built with React 18, TypeScript, and Tailwind CSS. Features dynamic multi-filter facet navigation, reactive product quick-views, and an intuitive slide-out cart drawer.",
    status: "Live & Active Dev",
    image: "/nordhem.png",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    keyFeatures: [
      "Client-side faceted filtering by category, size, and price",
      "Slide-out reactive cart drawer with persistent item counts",
      "Mobile-first responsive design tested on multiple device widths",
      "Keyboard-accessible interactive elements and focus states",
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
    tagline: "Multi-Step Form Engine & Database Pipeline",
    description:
      "A multi-step form application exploring frontend validation and backend database integration. Demonstrates dynamic field rendering, Zod schema validation, and data persistence via Supabase.",
    status: "Active Development",
    image: "/formflow.png",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase", "Tailwind CSS"],
    keyFeatures: [
      "Multi-step progress indicator with step-by-step validation",
      "Runtime form schema validation with clear field error messages",
      "Direct integration with Supabase database for record storage",
      "Accessible keyboard navigation across form inputs",
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
    tagline: "Digital Hospitality Menu & Table Reservation Platform",
    description:
      "A mobile-first hospitality web application designed for a contemporary lounge. Features an interactive menu browser, item search, and a streamlined reservation request flow.",
    status: "Production Live",
    image: "/mcsteeze.png",
    technologies: ["React 18", "Tailwind CSS", "Vite", "Lucide Icons"],
    keyFeatures: [
      "Interactive category filtering for food and beverage menus",
      "Mobile-optimized reservation modal with clear validation feedback",
      "High visual hierarchy with clean spacing and subtle typography",
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
      "Managing complex multi-faceted filtering (combining size, category, and price range) while keeping the code maintainable and ensuring smooth slide-out cart transitions on mobile viewports.",
    solution:
      "I structured a centralized filter state hook that applies pure filter predicates against the product catalog, and built a lightweight slide-out drawer with CSS transitions for a native app feel.",
    result:
      "Delivered a fast, responsive, and visually clean e-commerce experience that demonstrates strong frontend component design and smooth user interaction.",
    whatILearned:
      "Deepened my understanding of reactive state management, clean responsive layouts, and how careful layout choices significantly improve the user's shopping experience.",
  },
  {
    projectId: "formflow",
    title: "FormFlow Multi-Step Engine",
    subtitle: "Connecting structured multi-step frontend forms to a cloud database pipeline.",
    problem:
      "Long, single-page forms often overwhelm users, leading to high drop-off rates and invalid or incomplete submissions.",
    approach:
      "I broke down the intake process into clear, logical steps with progress tracking. I chose Zod for runtime schema validation to give users instant, helpful error feedback at each step before submitting.",
    technologies: ["React 18", "TypeScript", "Zod", "Supabase", "Tailwind CSS"],
    challenges:
      "Handling field dependencies across multiple steps, preventing navigation forward until the current step is valid, and persisting data cleanly into Supabase.",
    solution:
      "Implemented a step-by-step state machine with validation gates powered by Zod schemas. Once all steps passed validation, the clean payload is dispatched to a Supabase table.",
    result:
      "Built a functional multi-step form application that successfully saves submissions to a cloud database with zero validation leakage.",
    whatILearned:
      "Gained hands-on experience connecting frontend interfaces to a real backend database (Supabase), understanding schema design, and handling asynchronous submission states (loading, success, error).",
    backendNote:
      "This project represents one of my key milestones in learning backend development, specifically working with cloud databases, API requests, and data validation.",
  },
  {
    projectId: "mcsteeze",
    title: "Mcsteeze Lounge Web Portal",
    subtitle: "Developing a mobile-first digital menu and reservation flow for a hospitality venue.",
    problem:
      "Patrons needed a fast way to browse food and drink offerings on their phones while dining, as well as an easy method to request reservations in advance.",
    approach:
      "Focused heavily on mobile ergonomics, designing thumb-friendly navigation, quick-tap category filters, and clear typography suitable for reading in various lighting conditions.",
    technologies: ["React 18", "Tailwind CSS", "Vite", "Lucide Icons"],
    challenges:
      "Ensuring images load swiftly on slower mobile networks without causing layout shifts, and designing an intuitive table booking modal.",
    solution:
      "Optimized assets, utilized responsive image sizing, and created a compact reservation form with clear input states.",
    result:
      "Shipped a live, production web application that provides a modern digital touchpoint for lounge guests.",
    whatILearned:
      "Reinforced the importance of mobile-first development and verified how clean visual hierarchy directly enhances user convenience.",
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
      "Authoring developer-facing technical documentation, REST API endpoint guides, and component integration workflows.",
    achievements: [
      "Authored REST API endpoint specifications and code examples in TypeScript and cURL",
      "Created interactive component usage recipes and developer onboarding guides",
      "Collaborated with engineering to clarify API request and response data structures",
    ],
    technologies: ["REST APIs", "TypeScript", "Technical Documentation", "Markdown", "Component Guides"],
  },
  {
    id: "freelance",
    role: "Frontend Developer",
    company: "Freelance & Independent Projects",
    location: "Remote",
    period: "2023 – Present",
    summary:
      "Designing and building modern, responsive frontend web applications and interfaces for clients and personal initiatives.",
    achievements: [
      "Shipped multiple responsive web applications using React, TypeScript, and Tailwind CSS",
      "Implemented mobile-first interfaces with strong attention to accessibility and clean aesthetics",
      "Integrated frontends with third-party APIs and cloud database services like Supabase",
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "Git"],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Diploma in Information Technology",
    institution: "Accra Technical University",
    period: "2024 – 2026",
    status: "Current Program",
    description:
      "Foundational computer science and software coursework covering data structures, relational database systems, networking, and web technologies.",
    highlights: ["Data Structures & Algorithms", "Database Management", "Web Engineering Foundations"],
  },
  {
    degree: "BSc in Computer Science (Top-Up)",
    institution: "Ghana Communication Technology University (GCTU)",
    period: "Target Start: 2027",
    status: "Planned Academic Advancement",
    description:
      "Planned undergraduate advancement focusing on advanced software systems, distributed computing, algorithms, and systems architecture.",
    highlights: ["Distributed Systems", "Software Architecture", "Systems Programming"],
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
      "How to design headless form backend endpoints that handle CORS, validate inputs, and process JSON and HTML form posts with minimal client friction.",
    url: "https://formgrid.dev",
  },
  {
    id: "core-web-vitals",
    title: "Practical Performance Optimization in Modern React SPAs",
    category: "Frontend Performance",
    date: "Aug 2026",
    readTime: "7 min read",
    description:
      "Techniques for code splitting, asset optimization, and eliminating cumulative layout shifts in client-rendered React and TypeScript applications.",
    url: "https://nordhem-blue.vercel.app",
  },
  {
    id: "accessibility-practical",
    title: "Beyond Basic HTML: Building Keyboard-Navigable Web Components",
    category: "Accessibility",
    date: "Jul 2026",
    readTime: "5 min read",
    description:
      "A straightforward guide to focus traps, ARIA attributes, and accessible modal navigation in custom React components.",
    url: "https://github.com/devkad09",
  },
];

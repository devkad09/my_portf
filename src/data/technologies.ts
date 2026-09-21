export interface Technology {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  categoryLabel: string;
  shortDescription: string;
  badge: string;
  svgIcon: string;
  color?: string;
}

export const CONFIRMED_TECHNOLOGIES: Record<string, Technology> = {
  // FRONTEND
  react: {
    id: "react",
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDescription: "Component architecture, custom hooks & reactive client state",
    badge: "Core Stack",
    color: "#087ea4",
    svgIcon: `<svg viewBox="0 0 115.3 100" class="w-5 h-5 text-[#087ea4]" fill="currentColor"><path d="M57.65 65.57c-8.6 0-15.57-6.97-15.57-15.57s6.97-15.57 15.57-15.57 15.57 6.97 15.57 15.57-6.97 15.57-15.57 15.57zM113.8 38.65c-2.42-7.56-8.7-13.68-17.68-17.22C81.82 15.79 64.91 16.14 50 20.61c-8.91 2.68-17.18 6.77-24.39 12.07C16.89 39.06 9.77 47.78 6.36 57.8c-2.43 7.15-2.03 14.3.99 20.19 3.02 5.89 8.65 9.77 15.86 10.92 14.3 2.29 31.21-1.93 46.12-10.87 8.91-5.34 16.36-12.07 22.03-19.78 8.7-11.83 14.86-25.07 14.86-37.49.01-1.29-.78-1.74-2.42-2.12zm-33.6 30.56c-4.99 6.79-11.53 12.72-19.38 17.43-13.1 7.85-27.99 11.56-40.57 9.55-6.29-1.01-11.2-4.4-13.84-9.55-2.64-5.15-2.99-11.41-.88-17.62 3-8.8 9.24-16.44 17.93-21.73 6.33-4.64 13.58-8.23 21.39-10.58 13.09-3.92 27.91-4.22 41.01-.27 7.87 3.1 13.36 8.46 15.48 15.08.76 2.37.5 4.88-.73 7.42-2.93 6.07-7.9 12.82-13.59 19.46l-6.82-9.19zM76.99 21.05c-14.3-2.29-31.21 1.93-46.12 10.87-8.91 5.34-16.36 12.07-22.03 19.78-8.7 11.83-14.86 25.07-14.86 37.49 0 1.29.78 1.74 2.42 2.12 2.42 7.56 8.7 13.68 17.68 17.22 14.3 5.64 31.21 5.29 46.12.82 8.91-2.68 17.18-6.77 24.39-12.07 8.72-6.38 15.84-15.1 19.25-25.12 2.43-7.15 2.03-14.3-.99-20.19-3.02-5.89-8.65-9.77-15.86-10.92z"/></svg>`,
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDescription: "Type-safe interfaces, generics & strict compile-time contracts",
    badge: "Core Stack",
    color: "#3178c6",
    svgIcon: `<svg viewBox="0 0 128 128" class="w-5 h-5 text-[#3178c6]" fill="currentColor"><path d="M1.5 63.95C1.5 29.46 29.46 1.5 63.95 1.5S126.4 29.46 126.4 63.95 98.44 126.4 63.95 126.4 1.5 98.44 1.5 63.95zm65.94 13.65h13.23c1.07 0 2.06.3 2.96.88.9.59 1.62 1.41 2.14 2.47.53 1.05.79 2.29.79 3.7 0 1.51-.31 2.87-.93 4.09-.62 1.22-1.52 2.19-2.7 2.93-1.18.73-2.63 1.1-4.34 1.1-1.63 0-3.03-.31-4.22-.93s-2.18-1.52-2.97-2.7l-7.79 5.34c1.47 2.37 3.55 4.22 6.24 5.56 2.69 1.34 5.8 2.01 9.34 2.01 3.73 0 6.94-.74 9.62-2.23 2.68-1.49 4.74-3.6 6.18-6.33 1.44-2.73 2.16-5.86 2.16-9.39 0-3.37-.63-6.28-1.89-8.73-1.26-2.45-3.05-4.38-5.37-5.78-2.32-1.4-5.06-2.31-8.21-2.73l-4.42-.6c-2.4-.33-4.16-.92-5.28-1.78-1.12-.86-1.68-2.09-1.68-3.7 0-1.42.54-2.58 1.63-3.48 1.09-.9 2.56-1.35 4.42-1.35 1.59 0 2.93.38 4.02 1.14 1.09.76 1.95 1.84 2.58 3.24l7.63-4.75c-1.24-2.37-3.04-4.19-5.41-5.46-2.37-1.27-5.17-1.9-8.41-1.9-3.49 0-6.52.74-9.09 2.22-2.57 1.48-4.54 3.55-5.91 6.22-1.37 2.67-2.06 5.75-2.06 9.24 0 3.33.68 6.18 2.04 8.56 1.36 2.38 3.26 4.24 5.7 5.58 2.44 1.34 5.28 2.22 8.53 2.64l4.08.53c2.09.28 3.65.81 4.68 1.59 1.03.78 1.55 1.92 1.55 3.42zM28.43 51.52h37.49v8.42H48.49v38.99h-9.84V59.94H28.43v-8.42z"/></svg>`,
  },
  javascript: {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDescription: "Modern asynchronous syntax, event loops & DOM manipulation",
    badge: "Core Language",
    color: "#f7df1e",
    svgIcon: `<svg viewBox="0 0 128 128" class="w-5 h-5 text-[#ca8a04]" fill="currentColor"><path d="M1.5 63.95C1.5 29.46 29.46 1.5 63.95 1.5S126.4 29.46 126.4 63.95 98.44 126.4 63.95 126.4 1.5 98.44 1.5 63.95zm62.45 13.65h13.23c1.07 0 2.06.3 2.96.88.9.59 1.62 1.41 2.14 2.47.53 1.05.79 2.29.79 3.7 0 1.51-.31 2.87-.93 4.09-.62 1.22-1.52 2.19-2.7 2.93-1.18.73-2.63 1.1-4.34 1.1-1.63 0-3.03-.31-4.22-.93s-2.18-1.52-2.97-2.7l-7.79 5.34c1.47 2.37 3.55 4.22 6.24 5.56 2.69 1.34 5.8 2.01 9.34 2.01 3.73 0 6.94-.74 9.62-2.23 2.68-1.49 4.74-3.6 6.18-6.33 1.44-2.73 2.16-5.86 2.16-9.39 0-3.37-.63-6.28-1.89-8.73-1.26-2.45-3.05-4.38-5.37-5.78-2.32-1.4-5.06-2.31-8.21-2.73l-4.42-.6c-2.4-.33-4.16-.92-5.28-1.78-1.12-.86-1.68-2.09-1.68-3.7 0-1.42.54-2.58 1.63-3.48 1.09-.9 2.56-1.35 4.42-1.35 1.59 0 2.93.38 4.02 1.14 1.09.76 1.95 1.84 2.58 3.24l7.63-4.75c-1.24-2.37-3.04-4.19-5.41-5.46-2.37-1.27-5.17-1.9-8.41-1.9-3.49 0-6.52.74-9.09 2.22-2.57 1.48-4.54 3.55-5.91 6.22-1.37 2.67-2.06 5.75-2.06 9.24 0 3.33.68 6.18 2.04 8.56 1.36 2.38 3.26 4.24 5.7 5.58 2.44 1.34 5.28 2.22 8.53 2.64l4.08.53c2.09.28 3.65.81 4.68 1.59 1.03.78 1.55 1.92 1.55 3.42zM43.08 77.29c0 4.14-1.13 7.37-3.39 9.69-2.26 2.32-5.46 3.48-9.6 3.48-3.87 0-6.93-.93-9.18-2.79-2.25-1.86-3.63-4.51-4.14-7.95l8.76-2.34c.29 1.85.98 3.19 2.07 4.02 1.09.83 2.54 1.25 4.35 1.25 1.45 0 2.54-.42 3.27-1.26.73-.84 1.1-2.07 1.1-3.69V51.52h9.76v25.77z"/></svg>`,
  },
  tailwindcss: {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDescription: "Utility-first design tokens, responsive layouts & typography",
    badge: "Core Stack",
    color: "#38bdf8",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-[#0284c7]" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>`,
  },
  html5: {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDescription: "Semantic landmarks, accessible markup & SEO structure",
    badge: "Foundation",
    color: "#e34f26",
    svgIcon: `<svg viewBox="0 0 512 512" class="w-5 h-5 text-[#e34f26]" fill="currentColor"><path d="M108.4 0l23 416.7L256 455.5l124.6-38.8 23-416.7H108.4zm238 143.5H199l-5.3-59.5h164.6l5.3-59.5H146.4l15.9 178.5h184.1l-6.4 71.9-84 23.3-84-23.3-4.2-46.7H120l7.4 82.5 128.6 35.7 128.6-35.7 17.8-199.2z"/></svg>`,
  },
  css3: {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDescription: "Flexbox, CSS Grid layouts & fluid responsive typography",
    badge: "Foundation",
    color: "#1572b6",
    svgIcon: `<svg viewBox="0 0 512 512" class="w-5 h-5 text-[#1572b6]" fill="currentColor"><path d="M108.4 0l23 416.7L256 455.5l124.6-38.8 23-416.7H108.4zm238 143.5H199l-5.3-59.5h164.6l5.3-59.5H146.4l15.9 178.5h184.1l-6.4 71.9-84 23.3-84-23.3-4.2-46.7H120l7.4 82.5 128.6 35.7 128.6-35.7 17.8-199.2z"/></svg>`,
  },

  // BACKEND
  python: {
    id: "python",
    name: "Python",
    category: "backend",
    categoryLabel: "Backend",
    shortDescription: "Backend scripting, server data handling & automation",
    badge: "Currently learning",
    color: "#3776ab",
    svgIcon: `<svg viewBox="0 0 128 128" class="w-5 h-5 text-[#3776ab]" fill="currentColor"><path d="M63.2 0c-15.6 0-29.3 2.4-32.8 10.3-4.1 9.3-4.2 15.6-4.2 24.5h37.4v5.2H21.2C9.4 40 .1 48.7.1 63.8c0 14.2 8.7 23.4 20.5 23.9v-11.4c0-12.8 11.2-12.8 11.2-12.8h21.4c9.9 0 17.7-7.9 17.7-17.7V17.7C70.9 7.8 68.7 0 63.2 0zm-10.9 6.8a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zM64.8 128c15.6 0 29.3-2.4 32.8-10.3 4.1-9.3 4.2-15.6 4.2-24.5H64.4V88h42.4c11.8 0 21.1-8.7 21.1-23.8 0-14.2-8.7-23.4-20.5-23.9v11.4c0 12.8-11.2 12.8-11.2 12.8H74.8c-9.9 0-17.7 7.9-17.7 17.7v28.1c0 9.9 2.2 17.7 7.7 17.7zm10.9-6.8a4.7 4.7 0 1 1 0-9.4 4.7 4.7 0 0 1 0 9.4z"/></svg>`,
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    categoryLabel: "Backend",
    shortDescription: "Server-side JavaScript runtime & asynchronous I/O",
    badge: "Currently learning",
    color: "#339933",
    svgIcon: `<svg viewBox="0 0 32 32" class="w-5 h-5 text-[#339933]" fill="currentColor"><path d="M16 2.5L3.5 9.7v12.6L16 29.5l12.5-7.2V9.7L16 2.5zm0 3.3l9.5 5.5v9.4L16 26.2 6.5 20.7v-9.4L16 5.8z"/></svg>`,
  },
  express: {
    id: "express",
    name: "Express.js",
    category: "backend",
    categoryLabel: "Backend",
    shortDescription: "REST routing, middleware pipelines & request handling",
    badge: "Currently learning",
    color: "#000000",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-slate-800" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>`,
  },
  restapi: {
    id: "restapi",
    name: "REST APIs",
    category: "backend",
    categoryLabel: "Backend",
    shortDescription: "HTTP status conventions, JSON payloads & endpoint contracts",
    badge: "Currently learning",
    color: "#2563eb",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-blue-600" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>`,
  },

  // DATABASE
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL & Supabase",
    category: "database",
    categoryLabel: "Database",
    shortDescription: "Relational schemas, foreign keys & SQL table queries",
    badge: "In Use / Learning",
    color: "#336791",
    svgIcon: `<svg viewBox="0 0 109 113" class="w-5 h-5 text-[#336791]" fill="currentColor"><path d="M63.7 110.8c-2.4 2.8-7 1.5-7.5-2.2L48 57.5h52.8c4.2 0 6.5 4.8 3.8 8.1l-40.9 45.2zM45.3 2.2c2.4-2.8 7-1.5 7.5 2.2L61 55.5H8.2c-4.2 0-6.5-4.8-3.8-8.1l40.9-45.2z"/></svg>`,
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    categoryLabel: "Database",
    shortDescription: "NoSQL document collections & basic query structuring",
    badge: "Exploring",
    color: "#47a248",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-[#47a248]" fill="currentColor"><path d="M12 0C11.5 3.3 8.3 7 8 11.5c-.3 4.2 2 8.5 4 12.5 2-4 4.3-8.3 4-12.5C15.7 7 12.5 3.3 12 0zm0 18.5c-.4 0-.8-.1-1.1-.3-.6-.4-.9-1.1-.8-1.8.2-1.3 1.2-2.3 1.9-3.4.7 1.1 1.7 2.1 1.9 3.4.1.7-.2 1.4-.8 1.8-.3.2-.7.3-1.1.3z"/></svg>`,
  },

  // TOOLS
  git: {
    id: "git",
    name: "Git",
    category: "tools",
    categoryLabel: "Tools",
    shortDescription: "Branching workflows, commit hygiene & version control",
    badge: "Daily Tool",
    color: "#f05032",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-[#f05032]" fill="currentColor"><path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 0 0-3.4 0L7.3 4.8l3.7 3.7a2.8 2.8 0 0 1 3.5 3.6l3.6 3.6a2.8 2.8 0 0 1 3.5 3.5c1 .9.9 2.5 0 3.4a2.4 2.4 0 0 1-3.4 0 2.8 2.8 0 0 1-.5-3.1L14 15.8v4.9a2.8 2.8 0 1 1-2.4 0v-5.2a2.8 2.8 0 0 1-1.3-3.6L6.5 8.1 2.4 12.2a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l7.3-7.3a2.4 2.4 0 0 0 0-3.4z"/></svg>`,
  },
  github: {
    id: "github",
    name: "GitHub",
    category: "tools",
    categoryLabel: "Tools",
    shortDescription: "Pull requests, code reviews & repository management",
    badge: "Daily Tool",
    color: "#181717",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-slate-900" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
  },
  vscode: {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    categoryLabel: "Tools",
    shortDescription: "Daily engineering editor, workspace setup & extensions",
    badge: "Daily Tool",
    color: "#007acc",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-[#007acc]" fill="currentColor"><path d="M18.7 2.3a1.5 1.5 0 0 0-1.2.3l-10 7.8-4.4-3.4a1 1 0 0 0-1.4.3L.3 9.4a1 1 0 0 0 .3 1.4L4.8 14 .6 17.2a1 1 0 0 0-.3 1.4l1.4 2.1a1 1 0 0 0 1.4.3l4.4-3.4 10 7.8a1.5 1.5 0 0 0 1.8-.1l4-3a1.5 1.5 0 0 0 .7-1.2V3.6a1.5 1.5 0 0 0-.7-1.2l-4-3.1zM17 18.5L9.2 12.4 17 6.4v12.1z"/></svg>`,
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    categoryLabel: "Tools",
    shortDescription: "Automated Git deployment pipelines & edge previews",
    badge: "Daily Tool",
    color: "#000000",
    svgIcon: `<svg viewBox="0 0 24 24" class="w-5 h-5 text-slate-900" fill="currentColor"><path d="M12 1L24 22H0L12 1z"/></svg>`,
  },
};

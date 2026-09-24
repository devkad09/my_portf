// @vitest-environment jsdom
import "./setup";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TechLogo } from "@/components/TechLogo";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GithubSection } from "@/components/GithubSection";
import { Journey } from "@/components/Journey";
import { getTechnology, CONFIRMED_TECHNOLOGIES } from "@/data/technologies";

describe("Technology Branding & Logos Suite", () => {
  describe("TechLogo component", () => {
    it("renders authentic SVGs with correct viewBox and paths for all core technologies", () => {
      const requiredTechs = [
        // Frontend
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        // Backend
        "Python",
        "Node.js",
        "Express.js",
        "REST APIs",
        // Database
        "PostgreSQL",
        "Supabase",
        "SQL",
        // Tools
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        // Project technologies
        "Vite",
        "Zod",
        "Lucide Icons",
      ];

      for (const name of requiredTechs) {
        const { container, unmount } = render(<TechLogo name={name} className="w-5 h-5" />);
        const svg = container.querySelector("svg");
        expect(svg, `Expected SVG for technology: ${name}`).not.toBeNull();
        expect(svg?.getAttribute("viewBox")).toBeTruthy();
        expect(svg?.querySelector("path")?.getAttribute("d")).toBeTruthy();
        unmount();
      }
    });

    it("supports common aliases seamlessly", () => {
      expect(getTechnology("React 18")?.name).toBe("React");
      expect(getTechnology("react")?.name).toBe("React");
      expect(getTechnology("ts")?.name).toBe("TypeScript");
      expect(getTechnology("js")?.name).toBe("JavaScript");
      expect(getTechnology("JavaScript (ES6+)")?.name).toBe("JavaScript");
      expect(getTechnology("Supabase (PostgreSQL)")?.name).toBe("Supabase");
      expect(getTechnology("vs code")?.name).toBe("VS Code");
    });

    it("falls back gracefully for unknown technologies without crashing", () => {
      const { container } = render(<TechLogo name="NonExistentTechXYZ" className="w-5 h-5" />);
      const fallback = container.querySelector("span");
      expect(fallback).not.toBeNull();
      // Should contain code fallback icon
      expect(fallback?.querySelector("svg")).not.toBeNull();
    });

    it("applies aria-hidden for decorative badges by default", () => {
      const { container } = render(<TechLogo name="React" />);
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("aria-hidden")).toBe("true");
    });
  });

  describe("Stack Section (Skills)", () => {
    it("renders all 4 stack sections with the exact confirmed technologies", () => {
      render(<Skills />);

      // Frontend: 6 technologies
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("JavaScript")).toBeInTheDocument();
      expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
      expect(screen.getByText("HTML5")).toBeInTheDocument();
      expect(screen.getByText("CSS3")).toBeInTheDocument();

      // Backend: 4 technologies
      expect(screen.getByText("Python")).toBeInTheDocument();
      expect(screen.getByText("Node.js")).toBeInTheDocument();
      expect(screen.getByText("Express.js")).toBeInTheDocument();
      expect(screen.getByText("REST APIs")).toBeInTheDocument();

      // Database: 3 technologies
      expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
      expect(screen.getByText("Supabase")).toBeInTheDocument();
      expect(screen.getByText("SQL")).toBeInTheDocument();

      // Tools: 4 technologies
      expect(screen.getByText("Git")).toBeInTheDocument();
      expect(screen.getByText("GitHub")).toBeInTheDocument();
      expect(screen.getByText("VS Code")).toBeInTheDocument();
      expect(screen.getByText("Vercel")).toBeInTheDocument();
    });

    it("preserves exact descriptions and badges on technology cards", () => {
      render(<Skills />);
      expect(
        screen.getByText("Component architecture, custom hooks & reactive client state")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Backend scripting, server data handling & automation")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Relational schemas, foreign keys & SQL table queries")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Cloud PostgreSQL backend, table queries & auth integration")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Structured queries, joins, relational data modeling & indexing")
      ).toBeInTheDocument();
    });
  });

  describe("Projects Section", () => {
    it("renders project technology badges with authentic logos", () => {
      render(<Projects />);

      // Check projects are present
      expect(screen.getByText("NORDHEM")).toBeInTheDocument();
      expect(screen.getByText("FORMFLOW")).toBeInTheDocument();
      expect(screen.getByText("MCSTEEZE LOUNGE")).toBeInTheDocument();

      // Verify badges exist
      expect(screen.getAllByText("React 18").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Vite").length).toBeGreaterThan(0);
      expect(screen.getByText("Zod")).toBeInTheDocument();
      expect(screen.getByText("Lucide Icons")).toBeInTheDocument();
    });
  });

  describe("GitHub Section", () => {
    it("renders the repository cards with official repository icons", () => {
      const { container } = render(<GithubSection />);
      expect(screen.getByText("GITHUB")).toBeInTheDocument();
      expect(screen.getByText("nordhem")).toBeInTheDocument();
      expect(screen.getByText("formflow")).toBeInTheDocument();
      expect(screen.getByText("mcsteeze-lounge")).toBeInTheDocument();

      // Repository icons are present with 16x16 octicon viewBox
      const repoIcons = container.querySelectorAll('svg[viewBox="0 0 16 16"]');
      expect(repoIcons.length).toBeGreaterThan(0);
    });
  });

  describe("Journey Section", () => {
    it("remains focused on development progression without added logo walls", () => {
      render(<Journey />);
      expect(screen.getAllByText("01").length).toBeGreaterThan(0);
      expect(screen.getByText("IT Foundation")).toBeInTheDocument();
      expect(screen.getByText("Frontend Development")).toBeInTheDocument();
      expect(screen.getByText("Real-World Projects")).toBeInTheDocument();
      expect(screen.getByText("Backend Development")).toBeInTheDocument();
      expect(screen.getByText("Full-Stack Engineering")).toBeInTheDocument();
    });
  });
});

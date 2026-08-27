import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative bg-canvas pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-36 lg:pt-44"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-10 max-w-[90rem]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)] lg:gap-16 xl:gap-[4.5rem]">
          {/* Left Column: Headline, Narrative & Proof Points */}
          <div className="order-1 min-w-0 w-full">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-accent lg:mb-5 lg:text-[13px]">
              Frontend Developer · Technical Writer · Information Technology
            </p>

            <h1
              id="hero-heading"
              className="w-full text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold leading-[1.0] tracking-[-0.04em] text-ink"
            >
              I build fast interfaces and clear developer docs.
            </h1>

            <p className="mt-7 w-[95%] text-[18px] leading-[1.7] text-ink-muted lg:mt-8 lg:max-w-[580px] lg:w-full lg:text-xl">
              Frontend Developer and Technical Writer with 3+ years of experience developing responsive, high-performance web applications and creating clear technical documentation systems. Currently authoring API references and component libraries at{" "}
              <a
                href="https://formgrid.dev"
                target="_blank"
                rel="noreferrer"
                className="text-ink font-semibold underline underline-offset-4 decoration-accent hover:text-accent transition-colors"
              >
                Formgrid.dev
              </a>
              .
            </p>

            {/* CTA Button Group */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 lg:mt-10 lg:w-auto lg:flex-row lg:items-center lg:gap-4">
              <a
                href="#work"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                View My Work
              </a>
              <a
                href="#work-with-me"
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                Work with Me
              </a>
            </div>

            {/* Desktop Social Proof / Stats List */}
            <ul className="mt-12 hidden flex-col gap-3 border-t border-line pt-8 text-[15px] text-ink-muted sm:flex-row sm:flex-wrap sm:gap-x-8 lg:flex">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                20+ projects shipped (3 production SaaS)
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                Technical Writer @ Formgrid.dev
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                100% WCAG 2.1 AA accessible
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                3+ years React & TypeScript
              </li>
            </ul>
          </div>

          {/* Right Column: Framed Portrait Card */}
          <div className="relative order-2 mx-auto w-full max-w-[380px] lg:mx-0 lg:mt-6 lg:max-w-none lg:justify-self-stretch xl:mt-8">
            <div className="overflow-hidden rounded-[24px] border border-line bg-surface shadow-card lg:rounded-[28px]">
              <img
                src="/profile.jpg"
                alt="Kelvin Atsu Djayouri - Frontend Developer and Technical Writer"
                className="aspect-[4/5] h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Social Proof */}
          <ul className="order-3 flex flex-col gap-2.5 border-t border-line pt-6 text-[14px] text-ink-muted lg:hidden">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              20+ projects shipped (3 production SaaS)
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              Technical Writer @ Formgrid.dev
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              100% WCAG 2.1 AA accessible
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              3+ years React & TypeScript
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

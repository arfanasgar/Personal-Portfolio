
import { useEffect, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Github,
  Globe2,
  HardDrive,
  Layers3,
  Linkedin,
  Menu,
  Monitor,
  Moon,
  Network,
  Server,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arfan Asgar — Aspiring AI/ML Engineer" },
      {
        name: "description",
        content:
          "The portfolio of Arfan Asgar, an aspiring AI/ML engineer exploring computer vision, multimodal AI, and software engineering.",
      },
      {
        property: "og:title",
        content: "Arfan Asgar — Aspiring AI/ML Engineer",
      },
      {
        property: "og:description",
        content:
          "Exploring AI, computer vision, intelligent systems, and thoughtful software engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioHome,
});

type Theme = "light" | "dark";

const sections = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const skills: { name: string; Icon: LucideIcon }[] = [
  { name: "C", Icon: Code2 },
  { name: "C++", Icon: Code2 },
  { name: "Python", Icon: Terminal },
  { name: "React", Icon: Atom },
  { name: "Node.js", Icon: Server },
  { name: "MongoDB", Icon: Database },
  { name: "Express.js", Icon: Network },
  { name: "Git", Icon: GitBranch },
  { name: "GitHub", Icon: Github },
  { name: "Linux", Icon: Monitor },
  { name: "SQL", Icon: HardDrive },
  { name: "Supabase", Icon: Layers3 },
];

function PortfolioHome() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Every fresh page load starts in light mode.
  useEffect(() => {
    document.documentElement.dataset.theme = "light";
    setTheme("light");

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0,
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const changeTheme = () => {
    const nextTheme: Theme =
      theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  };

  return (
    <div className="site-scroll min-h-screen overflow-x-clip bg-background text-foreground">
      <progress
        className="scroll-progress"
        max={100}
        value={progress}
        aria-label="Page reading progress"
      />

      <header className="sticky top-0 z-50 border-b border-line-subtle bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex h-[68px] max-w-[1160px] items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            aria-label="Arfan Asgar, home"
            className="flex items-center gap-3"
          >
            <span className="grid size-9 place-items-center rounded-md bg-primary font-display text-xs font-bold tracking-[0.08em] text-primary-foreground">
              AA
            </span>
            <span className="font-display text-sm font-semibold">
              Arfan Asgar
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {sections.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                className="site-nav-link text-xs font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="default"
              onClick={changeTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="h-9 gap-2 rounded-full px-3 text-copy-muted hover:text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}

              <span className="text-[10px] font-medium uppercase tracking-[0.12em]">
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              className="size-9 rounded-full text-copy-muted md:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="grid gap-1 border-t border-line-subtle px-5 py-3 md:hidden"
          >
            {sections.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                onClick={() => setMobileOpen(false)}
                className="rounded-sm px-2 py-3 text-sm text-copy-muted transition-colors hover:bg-card-soft hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative mx-auto max-w-[1160px] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
        >
          <div className="grid items-center gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-4">
            <div className="relative z-10 max-w-[700px]">
              <p className="reveal-up mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-copy-muted">
                <span className="size-1.5 rounded-full bg-accent-green" />
                Aspiring AI/ML Engineer
              </p>

              <h1 className="hero-title reveal-up reveal-delay-1 font-display font-semibold tracking-[-0.035em]">
                Hello! I’m
                <br />
                <span className="text-accent-green">Arfan.</span>
              </h1>

              <p className="reveal-up reveal-delay-2 mt-6 max-w-[470px] text-base leading-7 text-copy-muted sm:text-[17px]">
                Exploring AI, computer vision, and intelligent systems —
                with a growing curiosity about the software that brings
                them to life.
              </p>

              <div className="reveal-up reveal-delay-2 mt-8 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-11 gap-2 rounded-md px-5 text-sm font-medium"
                >
                  <a href="#projects">
                    Explore projects <ArrowDownRight />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 gap-2 rounded-md border-line-subtle bg-transparent px-5 text-sm font-medium"
                >
                  <a href="#contact">
                    Contact me <ArrowUpRight />
                  </a>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line-subtle pt-5 text-xs text-copy-muted">
                <span className="flex items-center gap-2">
                  <BrainCircuit className="size-3.5 text-accent-green" />
                  Artificial intelligence
                </span>

                <span className="flex items-center gap-2">
                  <Globe2 className="size-3.5 text-accent-green" />
                  Computer vision
                </span>

                <span className="flex items-center gap-2">
                  <Code2 className="size-3.5 text-accent-green" />
                  Software engineering
                </span>
              </div>
            </div>

            <div className="relative hidden justify-self-center lg:grid">
              <div
                className="hero-art"
                aria-label="Abstract geometric orbit illustration"
                role="img"
              >
                <div className="hero-art__orbit" />

                <div className="hero-art__core">
                  <BrainCircuit
                    className="size-10"
                    strokeWidth={1.2}
                  />
                </div>

                <span className="hero-art__satellite hero-art__satellite--one">
                  <Atom className="size-5" strokeWidth={1.4} />
                </span>

                <span className="hero-art__satellite hero-art__satellite--two">
                  <Cpu className="size-4" strokeWidth={1.4} />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-y border-line-subtle bg-card-soft/50"
        >
          <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:py-28">
            <SectionLabel index="01" title="A little about me" />

            <div>
              <p className="font-display text-[26px] font-medium leading-[1.4] tracking-[-0.02em] sm:text-[34px]">
                A computer science student fascinated by intelligence,
                technology, and the possibilities they create.
              </p>

              <p className="mt-5 max-w-[650px] text-sm leading-7 text-copy-muted sm:text-[15px]">
                I'm pursuing Computer Science and Engineering with a
                specialisation in AI and Machine Learning at PES University,
                Bangalore. I'm particularly interested in computer vision,
                multimodal AI, and building software that solves meaningful
                problems. I enjoy exploring ideas, experimenting with
                technology, and turning curiosity into practical projects.
              </p>

              <div className="mt-10 border-t border-line-subtle pt-6">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-copy-muted">
                  Areas of interest
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Computer Vision",
                    "Vision-Language Models",
                    "Multimodal AI",
                    "Software Engineering",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="rounded-sm border border-line-subtle bg-background px-3 py-2 text-xs text-foreground"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools and technologies */}
        <section
          aria-labelledby="stack-heading"
          className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
        >
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionLabel index="02" title="Tools & technologies" />

            <p className="max-w-xs text-sm leading-6 text-copy-muted">
              My growing toolkit for building, experimenting, and creating.
            </p>
          </div>

          <h2 id="stack-heading" className="sr-only">
            Tools and technologies
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {skills.map(({ name, Icon }, index) => (
              <div
                key={name}
                className="skill-card group relative flex min-h-[108px] flex-col justify-between overflow-hidden rounded-lg border border-line-subtle bg-card-soft/40 p-4"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="size-[18px] text-accent-green transition-all duration-300 group-hover:scale-110 group-hover:text-foreground"
                    strokeWidth={1.5}
                  />

                  <span className="font-mono text-[9px] text-copy-muted/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="font-display text-[13px] font-medium tracking-wide text-foreground">
                  {name}
                </span>

                <div className="skill-card-glow pointer-events-none absolute inset-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-y border-line-subtle bg-card-soft/50"
        >
          <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <SectionLabel index="03" title="Selected projects" />

              <span className="text-xs text-copy-muted">
                {String(portfolioProjects.length).padStart(2, "0")} explorations
              </span>
            </div>

            <div className="divide-y divide-line-subtle border-y border-line-subtle">
              {portfolioProjects.map((project) => (
                <Link
                  key={project.slug}
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  aria-label={`View ${project.title} case study`}
                  className="project-row group grid gap-4 px-4 py-6 sm:grid-cols-[56px_1fr_200px_32px] sm:items-center sm:px-5 sm:py-7"
                >
                  <span className="font-mono text-[11px] text-copy-muted">
                    {project.number}
                  </span>

                  <span>
                    <span className="block font-display text-lg font-medium tracking-[-0.01em] sm:text-[20px]">
                      {project.title}
                    </span>

                    <span className="mt-1.5 block text-xs leading-5 text-copy-muted sm:hidden">
                      {project.description}
                    </span>
                  </span>

                  <span className="hidden text-xs text-copy-muted sm:block">
                    {project.category}
                  </span>

                  <ArrowUpRight className="project-row__arrow hidden size-[17px] text-copy-muted sm:block" />
                </Link>
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-copy-muted">
              Project descriptions and public links can be added as each
              project is ready to share.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto grid max-w-[1160px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:py-28"
        >
          <SectionLabel index="04" title="Experience & research" />

          <div className="border-t border-line-subtle pt-6">
            <span className="mb-5 grid size-9 place-items-center rounded-full border border-line-subtle text-accent-green">
              <GitBranch className="size-4" />
            </span>

            <p className="font-display text-lg font-medium">
              A chapter still taking shape.
            </p>

            <p className="mt-2 max-w-lg text-sm leading-6 text-copy-muted">
              Internship and research details will appear here once dates
              and details are confirmed.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-line-subtle bg-card-soft/50"
        >
          <div className="mx-auto grid max-w-[1160px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
            <div>
              <SectionLabel index="05" title="Let’s connect" />

              <h2 className="mt-9 max-w-lg font-display text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
                Have something interesting in mind?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-copy-muted">
                I’d love to hear from you. Reach out by email or find me
                online.
              </p>

              <a
                href="mailto:md17arfan@gmail.com"
                className="mt-7 inline-flex items-center gap-2 border-b border-accent-green pb-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-green"
              >
                md17arfan@gmail.com
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="grid content-end gap-3 sm:grid-cols-2">
              <SocialLink
                href="https://github.com/arfanasgar"
                label="GitHub"
                Icon={Github}
              />

              <SocialLink
                href="https://www.linkedin.com/in/arfan-asgar-a39577340/"
                label="LinkedIn"
                Icon={Linkedin}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line-subtle">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-5 py-6 text-xs text-copy-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="font-display font-medium text-foreground">
            Arfan Asgar
          </span>

          <span>Exploring what intelligence can do.</span>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/arfanasgar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-4 transition-colors hover:text-foreground" />
            </a>

            <a
              href="https://www.linkedin.com/in/arfan-asgar-a39577340/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4 transition-colors hover:text-foreground" />
            </a>

            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div>
      <span className="mb-3 block font-mono text-[10px] text-accent-green">
        {index} / 05
      </span>

      <h2 className="font-display text-xl font-semibold tracking-[-0.01em] sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function SocialLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between border border-line-subtle bg-background p-5 transition-colors hover:bg-card-soft"
    >
      <span className="flex items-center gap-4">
        <span className="grid size-10 place-items-center rounded-sm bg-card-soft text-accent-green">
          <Icon className="size-[18px]" />
        </span>

        <span className="font-display text-sm font-medium">
          {label}
        </span>
      </span>

      <ArrowUpRight className="size-4 text-copy-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
    </a>
  );
}

import Image from "next/image";
import portfolio from "@/data/portfolio.json";
import CountUp from "./CountUp";
import TechIcon from "./TechIcon";

export default function Hero() {
  const { personal, heroStats, skillGroups } = portfolio;
  const trustedStack = [
    ...skillGroups.find((g) => g.title === "Platforms")!.skills,
    "React.js",
    "Next.js",
  ];

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse closest-side, var(--accent-soft), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.14), transparent 70%)" }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 sm:pt-28 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <div className="hero-fade hero-fade-1 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm text-muted">{personal.availability}</span>
          </div>

          <p className="hero-fade hero-fade-2 mt-6 font-mono text-sm font-medium tracking-wide text-accent">
            {personal.tagline}
          </p>

          <h1 className="hero-fade hero-fade-2 mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="gradient-text">{personal.name}</span>
          </h1>

          <p className="hero-fade hero-fade-3 mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {personal.role}
          </p>

          <div className="hero-fade hero-fade-4 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              download="ravishankar_ecommerce_developer.pdf"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-fade hero-fade-4 mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
            <span className="uppercase tracking-wide">Core stack</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            {trustedStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-foreground/80">
                  <TechIcon name={tech} className="h-3.5 w-3.5" />
                  {tech}
                </span>
                {i < trustedStack.length - 1 ? (
                  <span className="h-1 w-1 rounded-full bg-border" />
                ) : null}
              </span>
            ))}
          </div>

          <dl className="hero-fade hero-fade-5 mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4 lg:grid-cols-2">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-3xl font-semibold text-foreground sm:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-fade hero-fade-3 relative mx-auto w-full max-w-[260px] sm:max-w-[300px]">
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] blur-2xl"
            style={{
              background: "linear-gradient(135deg, var(--accent-soft), rgba(129,140,248,0.16))",
            }}
          />
          <div
            className="rounded-[1.75rem] p-[1.5px]"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          >
            <div
              className="relative overflow-hidden rounded-[1.7rem] border border-border bg-surface"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/ravishankar.png"
                alt={personal.name}
                fill
                priority
                sizes="(min-width: 640px) 300px, 260px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

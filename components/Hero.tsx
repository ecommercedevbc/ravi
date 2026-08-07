import portfolio from "@/data/portfolio.json";

export default function Hero() {
  const { personal, heroStats } = portfolio;

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, var(--accent-soft), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
        <p className="font-mono text-sm font-medium tracking-wide text-accent">
          {personal.tagline}
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {personal.name}
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">{personal.role}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-3xl font-semibold text-foreground sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

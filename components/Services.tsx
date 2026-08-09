import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons: Record<string, React.ReactNode> = {
  "Shopify Plus Development": (
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4M3 6h18M9 10a3 3 0 0 0 6 0" />
  ),
  "BigCommerce Migration & Build": (
    <path d="M4 7h11l-3-3m3 3-3 3M20 17H9l3 3m-3-3 3-3" />
  ),
  "Zoho Commerce & Automation": <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" />,
  "Systems Integration": (
    <path d="M9 3v4M15 3v4M9 21v-4M15 21v-4M5 9h4M15 9h4M5 15h4M15 15h4M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7zM13 13h4v4h-4z" />
  ),
  "Performance & SEO": <path d="M12 20a8 8 0 1 1 8-8M12 20v-4M12 12l4-4M4 20h16" />,
};

export default function Services() {
  const { services, engagement } = portfolio;

  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What I can help you build"
            description="Freelance engagements across the eCommerce stack — from new storefront builds to platform migrations and post-launch support."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="card-hover relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6">
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                  }}
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-accent">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    {icons[service.title]}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-sm text-accent">{engagement.availability}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {engagement.modes.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {mode}
                  </span>
                ))}
              </div>
              <p className="mt-4 max-w-md text-sm text-muted">{engagement.note}</p>
            </div>

            <a
              href="#contact"
              className="inline-block shrink-0 rounded-full bg-accent px-6 py-3 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start a Project
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

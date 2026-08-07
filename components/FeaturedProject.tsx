import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";

export default function FeaturedProject() {
  const { featuredProject } = portfolio;

  return (
    <section id="project" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Featured Case Study" title="Platform migration, delivered fast" />

        <div className="overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-mono text-sm text-accent">{featuredProject.year}</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-1 text-muted">{featuredProject.subtitle}</p>

              <ul className="mt-8 space-y-4">
                {featuredProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 rounded-2xl border border-border bg-background p-8">
              {featuredProject.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-4xl font-semibold text-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

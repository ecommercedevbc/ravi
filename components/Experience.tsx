import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { experience } = portfolio;

  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Career Timeline"
          description="Four years of progressive ownership across eCommerce platforms, from feature delivery to leading full platform migrations."
        />

        <ol className="relative border-l border-border pl-8 sm:pl-10">
          {experience.map((role, index) => (
            <li key={role.title + role.duration} className="mb-14 last:mb-0">
              <span
                className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background"
                style={{ background: index === 0 ? "var(--accent)" : "var(--muted)" }}
              />

              <div className="grid gap-4 sm:grid-cols-[220px_1fr] sm:gap-10">
                <div>
                  <p className="font-mono text-sm text-accent">{role.duration}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{role.title}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {role.company} · {role.location}
                  </p>
                </div>

                <ul className="space-y-3">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

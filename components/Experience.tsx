import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type ExperienceEntry = {
  title: string;
  company?: string;
  location: string;
  duration: string;
  badge?: string;
  bullets: string[];
};

export default function Experience() {
  const experience = portfolio.experience as ExperienceEntry[];

  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Career Timeline"
            description="Four years of progressive ownership across eCommerce platforms, from feature delivery to leading full platform migrations."
          />
        </Reveal>

        <ol
          className="relative pl-8 sm:pl-10"
          style={{
            borderLeft: "1px solid var(--border)",
            backgroundImage:
              "linear-gradient(to bottom, var(--accent), transparent 18%)",
            backgroundSize: "1px 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {experience.map((role, index) => {
            const isOngoing = role.duration.includes("Present");
            const meta = [role.company, role.location].filter(Boolean).join(" · ");
            return (
              <li key={role.title + role.duration} className="mb-10 last:mb-0">
                <span
                  className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background"
                  style={{ background: isOngoing ? "var(--accent)" : "var(--muted)" }}
                />

                <Reveal delay={index * 70}>
                  <div className="card-hover rounded-2xl border border-border bg-surface p-6 sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-[220px_1fr] sm:gap-10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-mono text-sm text-accent">{role.duration}</p>
                          {role.badge ? (
                            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent">
                              {role.badge}
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold text-foreground">
                          {role.title}
                        </h3>
                        {meta ? <p className="mt-1 text-sm text-muted">{meta}</p> : null}
                      </div>

                      <ul className="space-y-3">
                        {role.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

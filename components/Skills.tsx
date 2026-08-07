import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const { skillGroups } = portfolio;

  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Full-stack & eCommerce toolkit"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-2/60"
            >
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-2">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

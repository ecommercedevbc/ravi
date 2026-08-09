import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";

export default function Skills() {
  const { skillGroups } = portfolio;
  const platforms = skillGroups.find((g) => g.title === "Platforms");
  const coreStack = [...(platforms?.skills ?? []), "React.js", "Next.js"];
  const otherGroups = skillGroups.filter((g) => g.title !== "Platforms");

  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading eyebrow="Technical Skills" title="Full-stack & eCommerce toolkit" />
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-10 flex flex-wrap gap-3">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-2 text-sm font-medium text-foreground"
              >
                <TechIcon name={tech} className="h-4 w-4 text-accent" />
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 50}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-accent-2">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                    >
                      <TechIcon name={skill} className="h-3.5 w-3.5 text-muted" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

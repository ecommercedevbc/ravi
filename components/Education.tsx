import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  const { education } = portfolio;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic Background" />
        </Reveal>

        <Reveal delay={80}>
          <div className="card-hover flex max-w-2xl items-start gap-4 rounded-2xl border border-border bg-surface p-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path
                  d="M12 3 2 8l10 5 10-5-10-5ZM6 10.5V16c0 1.1 2.7 3 6 3s6-1.9 6-3v-5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
              <p className="mt-2 text-muted">{education.institution}</p>
              <p className="text-sm text-muted">{education.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

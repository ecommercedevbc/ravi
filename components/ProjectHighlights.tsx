import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ProjectHighlights() {
  const { projectHighlights } = portfolio;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="More Project Highlights"
            title="Across the Shopify & BigCommerce ecosystem"
          />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((item, i) => (
            <Reveal key={item} delay={(i % 6) * 40}>
              <div className="card-hover flex h-full items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 shrink-0 text-accent"
                >
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm leading-relaxed text-muted">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

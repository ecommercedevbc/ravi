import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";

export default function ProjectHighlights() {
  const { projectHighlights } = portfolio;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="More Project Highlights"
          title="Across the Shopify & BigCommerce ecosystem"
        />

        <div className="flex flex-wrap gap-3">
          {projectHighlights.map((item) => (
            <span
              key={item}
              className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

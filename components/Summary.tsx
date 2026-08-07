import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";

export default function Summary() {
  return (
    <section id="summary" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Professional Summary" title="Enterprise eCommerce, end to end" />
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {portfolio.summary}
        </p>
      </div>
    </section>
  );
}

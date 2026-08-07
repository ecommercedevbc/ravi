import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { education } = portfolio;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <div className="max-w-2xl rounded-2xl border border-border bg-surface p-8">
          <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
          <p className="mt-2 text-muted">{education.institution}</p>
          <p className="text-sm text-muted">{education.location}</p>
        </div>
      </div>
    </section>
  );
}

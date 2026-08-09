import portfolio from "@/data/portfolio.json";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const highlights = [
  "B2B & B2C Commerce",
  "Platform Migrations",
  "ERP & Payment Integrations",
  "Performance & SEO",
];

export default function Summary() {
  return (
    <section id="summary" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Summary"
            title="Enterprise eCommerce, end to end"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={80}>
            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {portfolio.summary}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 text-accent"
                  >
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

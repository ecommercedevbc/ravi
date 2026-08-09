import portfolio from "@/data/portfolio.json";
import Reveal from "./Reveal";

export default function Contact() {
  const { personal, engagement } = portfolio;

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12">
            <div className="bg-grid pointer-events-none absolute inset-0" />
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(ellipse closest-side, var(--accent-soft), transparent 70%)",
              }}
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-sm text-muted">{engagement.availability}</span>
              </div>

              <h2 className="mx-auto mt-6 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s build something{" "}
                <span className="gradient-text">scalable</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Project-based, hourly consulting, or retainer support — reach out directly to
                discuss your requirements.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      d="M4 6h16v12H4zM4 7l8 6 8-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

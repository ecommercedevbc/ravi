import portfolio from "@/data/portfolio.json";

export default function Contact() {
  const { personal } = portfolio;

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="font-mono text-sm font-medium tracking-wide text-accent">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something scalable
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Open to Senior Full Stack / eCommerce engineering roles and platform migration
          engagements. Reach out directly by phone or email.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {personal.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

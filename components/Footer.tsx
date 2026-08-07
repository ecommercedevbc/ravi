import portfolio from "@/data/portfolio.json";

export default function Footer() {
  const { personal } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {personal.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">{personal.role}</p>
      </div>
    </footer>
  );
}

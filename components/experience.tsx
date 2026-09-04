import Link from "next/link";
import { ArrowRight, Invsjd, MoxieHealthGroup } from "./icons";

export function Experience() {
  return (
    <section className="flex flex-col mt-8">
      <div className="border-b py-2">
        <h2 className="font-bold">Experience</h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start mt-8 gap-4">
        <div className="flex aspect-square w-12 translate-y-0.5 items-center justify-center rounded-lg border text-foreground">
          <MoxieHealthGroup />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between w-full">
            <h2>
              <span className="sm:hidden">Moxie</span>
              <span className="hidden sm:inline">The Moxie Health Group</span>
            </h2>
            <p className="text-primary/80 flex items-center gap-1">
              Jun 2026 <ArrowRight /> Present
            </p>
          </div>
          <p className="text-primary/80">Software Engineer</p>
          <p className="mt-2 text-primary/80">
            Building healthcare software products. Stay tuned.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start mt-8 gap-4">
        <div className="flex aspect-square w-12 translate-y-0.5 items-center justify-center rounded-lg border text-foreground">
          <Invsjd />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between w-full">
            <h2>
              <span className="sm:hidden">INVSJD</span>
              <span className="hidden sm:inline">
                Inversiones San Juan Diego
              </span>
            </h2>
            <p className="text-primary/80 flex items-center gap-1">
              Aug 2025 <ArrowRight /> May 2026
            </p>
          </div>
          <p className="text-primary/80">Co-founder and Software Engineer</p>
          <p className="mt-2 text-primary/80">
            Translated books from Latin to Spanish with AI at{" "}
            <Link
              href="https://www.bibliotecatolica.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              Bibliotecatolica
            </Link>
            . Designed and developed the corporate website. Built Datafluid, an
            ecosystem with a news product, personal assistants and AI solutions
            for Central America. Automated WhatsApp with TuBotYa and launched
            Sabbatismus.
          </p>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Invsjd } from "./icons";

export function Experience() {
  return (
    <section className="flex flex-col mt-8">
      <div className="border-b py-2">
        <h2 className="font-bold">Experience</h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-start mt-4 gap-4">
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
              Aug 2025 <ArrowRight /> Present
            </p>
          </div>
          <p className="text-primary/80">Co-founder and AI Engineer</p>
          <p className="mt-2 text-primary/80">
            Translated books from Latin to Spanish with AI at{" "}
            <Link
              href="https://www.bibliotecatolica.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              Bibliotecatolica
            </Link>
            . Designed and developed the{" "}
            <Link
              href="https://www.invsjd.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              corporate website
            </Link>
            . Built{" "}
            <Link
              href="https://www.datafluid.ai"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              Datafluid
            </Link>
            , an ecosystem with a news product,{" "}
            <Link
              href="https://www.datafluid.ai/tu-ia-24-7"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              personal assistants
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.datafluid.ai/soluciones"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              AI solutions for Central America
            </Link>
            . Automated WhatsApp with{" "}
            <Link
              href="https://www.tubotya.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              TuBotYa
            </Link>{" "}
            and launched{" "}
            <Link
              href="https://www.sabbatismus.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              Sabbatismus
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

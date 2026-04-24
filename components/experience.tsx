import Link from "next/link";
import { ArrowRight, Invsjd } from "./icons";

export function Experience() {
  return (
    <section className="flex flex-col mt-8">
      <div className="border-b py-2">
        <h2 className="font-bold">Experiencia</h2>
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
              Ago 2025 <ArrowRight /> Presente
            </p>
          </div>
          <p className="text-primary/80">Cofundador e Ingeniero de Software</p>
          <p className="mt-2 text-primary/80">
            Traduje libros del latín al español con AI en{" "}
            <Link
              href="https://www.bibliotecatolica.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              Bibliotecatolica
            </Link>
            . Diseñé y desarrollé el{" "}
            <Link
              href="https://www.invsjd.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              sitio corporativo
            </Link>
            . Creé{" "}
            <Link
              href="https://www.datafluid.ai"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              Datafluid
            </Link>
            , un ecosistema con noticiero,{" "}
            <Link
              href="https://www.datafluid.ai/tu-ia-24-7"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              asistentes personales
            </Link>{" "}
            y{" "}
            <Link
              href="https://www.datafluid.ai/soluciones"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              soluciones de AI para Centroamérica
            </Link>
            . Automaticé WhatsApp con{" "}
            <Link
              href="https://www.tubotya.com"
              target="_blank"
              className="underline decoration-muted-foreground hover:decoration-primary text-primary"
            >
              TuBotYa
            </Link>{" "}
            y lancé{" "}
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

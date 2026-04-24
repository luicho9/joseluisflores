import Link from "next/link";
import { AsciiDuck } from "@/components/ascii-duck";

export function About() {
  return (
    <section className="flex flex-col items-center gap-4 mt-6 md:flex-row md:gap-6">
      <p className="text-primary/80 flex-1">
        Cofundador de{" "}
        <Link
          href="https://www.invsjd.com"
          className="underline decoration-muted-foreground hover:decoration-primary text-primary"
          target="_blank"
        >
          Inversiones San Juan Diego
        </Link>
        . Escribo software porque me gusta que la gente lo use y le sirva.
        Ahora estoy metido en AI, agentes de WhatsApp y productos para
        Centroamérica.
      </p>
      <AsciiDuck />
    </section>
  );
}

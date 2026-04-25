import Link from "next/link";
import { AsciiDuck } from "@/components/ascii-duck";

export function About() {
  return (
    <section className="flex flex-col items-center gap-4 mt-6 md:flex-row md:gap-6">
      <p className="text-primary/80 flex-1">
        Co-founder of{" "}
        <Link
          href="https://www.invsjd.com"
          className="underline decoration-muted-foreground hover:decoration-primary text-primary"
          target="_blank"
        >
          Inversiones San Juan Diego
        </Link>
        . I build production AI systems with TypeScript, from RAG pipelines
        over real business data to WhatsApp agents and AI products for Central
        America.
      </p>
      <AsciiDuck />
    </section>
  );
}

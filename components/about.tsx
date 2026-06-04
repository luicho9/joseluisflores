import { AsciiDuck } from "@/components/ascii-duck";

export function About() {
  return (
    <section className="flex flex-col items-center gap-4 mt-6 md:flex-row md:gap-6">
      <p className="text-primary/80 flex-1">
        Software engineer at The Moxie Health Group. I build production
        software focused on healthcare products, reliable user experiences, and
        maintainable systems.
      </p>
      <AsciiDuck />
    </section>
  );
}

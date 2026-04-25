import Link from "next/link";

export function Press() {
  return (
    <section className="flex flex-col mt-12">
      <div className="border-b py-2">
        <h2 className="font-bold">Press</h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="sm:flex sm:items-baseline sm:justify-between sm:gap-2">
          <Link
            href="https://www.bloomberglinea.com/latinoamerica/honduras/la-apuesta-hondurena-que-usa-ia-para-transformar-los-procesos-aduaneros-de-centroamerica/"
            target="_blank"
            className="font-semibold hover:text-muted-foreground transition-colors shrink-0"
          >
            Bloomberg Línea
          </Link>
          <p className="text-primary/80 w-full sm:max-w-[380px] sm:text-right">
            "The Honduran bet using AI to transform customs processes in Central America"
          </p>
        </div>
      </div>
    </section>
  );
}

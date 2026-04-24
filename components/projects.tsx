import Link from "next/link";

export function Projects() {
  return (
    <section className="flex flex-col mt-12">
      <div className="border-b py-2">
        <h2 className="font-bold">Proyectos</h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="sm:flex sm:items-baseline sm:justify-between sm:gap-2">
          <Link
            href="https://www.facturasimple.app/"
            target="_blank"
            className="font-semibold hover:text-muted-foreground transition-colors shrink-0"
          >
            Factura Simple
          </Link>
          <p className="text-primary/80">
            App de facturación autoalojable con exportación a PDF.
          </p>
        </div>
        <div className="sm:flex sm:items-baseline sm:justify-between sm:gap-2">
          <Link
            href="https://github.com/luicho9/kapso-chat-sdk"
            target="_blank"
            className="font-semibold hover:text-muted-foreground transition-colors shrink-0"
          >
            Kapso Chat SDK
          </Link>
          <p className="text-primary/80">
            WhatsApp adapter para Chat SDK via Kapso.
          </p>
        </div>
        <div className="sm:flex sm:items-baseline sm:justify-between sm:gap-2">
          <Link
            href="https://github.com/luicho9/flick-bot"
            target="_blank"
            className="font-semibold hover:text-muted-foreground transition-colors shrink-0"
          >
            Flick Bot
          </Link>
          <p className="text-primary/80">
            WhatsApp Bot para buscar películas sin salir del chat.
          </p>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function Projects() {
  return (
    <section className="flex flex-col mt-12">
      <div className="border-b py-2">
        <h2 className="font-bold">Projects</h2>
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
            Self-hostable invoicing app with PDF export.
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
            WhatsApp adapter for Chat SDK via Kapso.
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
            WhatsApp bot for finding movies without leaving the chat.
          </p>
        </div>
      </div>
    </section>
  );
}

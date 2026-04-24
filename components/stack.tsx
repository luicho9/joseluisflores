import Link from "next/link";

export function Stack() {
  const items = [
    { name: "TypeScript", description: "JavaScript con tipos.", href: "https://www.typescriptlang.org" },
    { name: "Next.js", description: "Full-stack con React.", href: "https://nextjs.org" },
    { name: "React", description: "Componentes declarativos.", href: "https://react.dev" },
    { name: "Tailwind CSS", description: "Estilos con utilidades.", href: "https://tailwindcss.com" },
    { name: "Drizzle ORM", description: "SQL type-safe.", href: "https://orm.drizzle.team" },
    { name: "PostgreSQL", description: "Base de datos relacional.", href: "https://www.postgresql.org" },
    { name: "Redis", description: "Cache y sesiones.", href: "https://redis.io" },
    { name: "Vercel AI SDK", description: "SDK universal para apps con AI.", href: "https://ai-sdk.dev" },
    { name: "Codex", description: "Agente de código de OpenAI.", href: "https://openai.com/codex" },
    { name: "Claude Code", description: "Agente de código de Anthropic.", href: "https://docs.anthropic.com/en/docs/claude-code/overview" },
    { name: "Cursor", description: "Editor con AI integrado.", href: "https://www.cursor.com" },
  ];

  return (
    <section className="flex flex-col mt-12">
      <div className="border-b py-2">
        <h2 className="font-bold">Stack</h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.name} className="sm:flex sm:justify-between sm:items-baseline">
            <Link
              href={item.href}
              target="_blank"
              className="font-semibold hover:text-muted-foreground transition-colors"
            >
              {item.name}
            </Link>
            <p className="text-primary/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

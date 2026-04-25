import Link from "next/link";

export function Stack() {
  const items = [
    { name: "TypeScript", description: "Typed JavaScript.", href: "https://www.typescriptlang.org" },
    { name: "Next.js", description: "Full-stack React.", href: "https://nextjs.org" },
    { name: "React", description: "Declarative components.", href: "https://react.dev" },
    { name: "Tailwind CSS", description: "Utility-first styling.", href: "https://tailwindcss.com" },
    { name: "Drizzle ORM", description: "SQL type-safe.", href: "https://orm.drizzle.team" },
    { name: "PostgreSQL", description: "Relational database.", href: "https://www.postgresql.org" },
    { name: "Redis", description: "Cache and sessions.", href: "https://redis.io" },
    { name: "Vercel AI SDK", description: "Universal SDK for AI apps.", href: "https://ai-sdk.dev" },
    { name: "Codex", description: "OpenAI coding agent.", href: "https://openai.com/codex" },
    { name: "Claude Code", description: "Anthropic coding agent.", href: "https://docs.anthropic.com/en/docs/claude-code/overview" },
    { name: "Cursor", description: "AI-integrated editor.", href: "https://www.cursor.com" },
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

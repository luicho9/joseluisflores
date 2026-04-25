export function Header() {
  return (
    <header className="flex flex-col max-w-2xl px-4 mx-auto mt-20">
      <div>
        <h1 className="font-bold text-xl">Jose Luis Flores</h1>
      </div>
      <nav className="flex border-b py-4">
        <ul className="flex gap-4">
          <li className="text-muted-foreground">
            <a href="mailto:jose.flores@invsjd.com">Email</a>
          </li>
          <li className="text-muted-foreground">
            <a href="https://github.com/luicho9" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
        <span className="ml-auto text-muted-foreground">Honduras</span>
      </nav>
    </header>
  );
}

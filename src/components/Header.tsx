export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white backdrop-blur border-b">
        <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between " >
          <a href="./" className="font-semibold flex items-center gap-2">
            <img src="/escudo.svg" alt="Logo" className="w-8 h-8" />
            Crono Auto
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#">Usuarios</a>
          </nav>
        </div>
      </header>
    );
}
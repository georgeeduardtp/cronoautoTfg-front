export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-950/95 backdrop-blur border-b border-dark-900 shadow-strong">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <a href="./" className="font-heading font-bold text-white flex items-center gap-3 text-xl">
          <img src="/public/escudo.svg" alt="Logo" className="w-36 h-36" />
          <span className="text-gradient">CronoAuto</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a 
            href="#" 
            className="text-dark-300 hover:text-primary-500 font-medium transition-colors duration-200"
          >
            Contactanos
          </a>
          <a 
            href="#" 
            className="text-dark-300 hover:text-primary-500 font-medium transition-colors duration-200"
          >
            Iniciar Sesión
          </a>
          <a 
            href="#" 
            className="btn-primary inline-block text-center no-underline"
          >
            Registrarse
          </a>
        </nav>
      </div>
    </header>
  );
}
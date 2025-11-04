import { Link } from "react-router-dom";
type Props = {
  selectedPage?: string;
};
export default function Header({ selectedPage }: Props) {
  return (
    <>
      {/* Header principal */}
      <header className="hidden md:block top-0 z-50 bg-dark-950/95 backdrop-blur border-b border-red-600 shadow-strong">
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-white flex items-center gap-3 text-xl cursor-pointer">
            <img src="/escudo.svg" alt="Logo" className="w-36 h-36" />
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link 
              to="/contacto" 
              className={`text-dark-300 hover:text-primary-500 font-medium transition-colors duration-200 
                ${selectedPage === "Contacto" ? "text-primary-600" : ""}`}
            >
              Contactanos
            </Link>
            <Link
              to="/coches"
              className={`text-dark-300 hover:text-primary-500 font-medium transition-colors duration-200 
                ${selectedPage === "Coches" ? "text-primary-600" : ""}`}
            >
              Coches
            </Link>
            <Link
              to="/login"
              className={`text-dark-300 hover:text-primary-500 font-medium transition-colors duration-200 
                ${selectedPage === "Login" ? "text-primary-600" : ""}`}
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/registro"
              className={`text-dark-300 hover:text-primary-500 font-medium transition-colors duration-200 
                ${selectedPage === "Registro" ? "text-primary-600" : ""}`}
            >
              Registrarse
            </Link>
          </nav>
        </div>
      </header>

      {/* Menú inferior para móvil */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur border-t border-dark-900 shadow-strong md:hidden">
        <div className="max-w-screen-sm mx-auto px-4 py-3">
          <div className="flex justify-around items-center space-x-4">
            {/* Inicio */}
            <Link 
              to="./"
              className="flex flex-col items-center justify-center min-w-0 flex-1 text-center group"
            >
              <svg className="w-5 h-5 text-dark-300 group-hover:text-primary-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs text-dark-300 group-hover:text-primary-500 transition-colors duration-200 mt-1">Inicio</span>
            </Link>

            {/* Coches */}
            <Link 
              to="/coches"
              className="flex flex-col items-center justify-center min-w-0 flex-1 text-center group"
            >
              <svg className="w-5 h-5 text-dark-300 group-hover:text-primary-500 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 11l1.5-4.5h11L19 11m-14 0h14m-14 0v6a1 1 0 001 1h1a1 1 0 001-1v-1h8v1a1 1 0 001 1h1a1 1 0 001-1v-6M8 15h.01M16 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span className="text-xs text-dark-300 group-hover:text-primary-500 transition-colors duration-200 mt-1">Coches</span>
            </Link>

            {/* Contacto */}
            <Link 
              to="/contacto"
              className="flex flex-col items-center justify-center min-w-0 flex-1 text-center group"
            >
              <svg className="w-5 h-5 text-dark-300 group-hover:text-primary-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-dark-300 group-hover:text-primary-500 transition-colors duration-200 mt-1">Contacto</span>
            </Link>

            {/* Perfil */}
            <Link 
              to="#"
              className="flex flex-col items-center justify-center min-w-0 flex-1 text-center group"
            >
              <svg className="w-5 h-5 text-dark-300 group-hover:text-primary-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs text-dark-300 group-hover:text-primary-500 transition-colors duration-200 mt-1">Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
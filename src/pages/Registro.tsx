import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Registro() {

    return (
        <>
            <Header selectedPage="Registro"/>
            <div className="bg-dark-950 min-h-screen">
                <div className="max-w-none">
                    <div className="flex flex-col lg:flex-row min-h-screen">
                        {/* Imagen de fondo estilo BMW - IZQUIERDA */}
                        <div 
                            className="bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-64 sm:h-80 lg:h-auto lg:w-1/2"
                            style={{
                                backgroundImage: 'url(https://sportwagenmieten-schmidt.de/wp-content/uploads/2023/04/nachlik_photography_sportwagenmieten_schmidt_audi_R8_060.jpg)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-red-900/40"></div>
                            <div className="relative z-10 text-center text-white p-4 lg:p-8">
                                <img 
                                    src="/escudo.svg" 
                                    alt="CronoAuto" 
                                    className="w-16 h-29 sm:w-20 sm:h-30 lg:w-40 lg:h-60 mx-auto mb-2 lg:mb-6 opacity-90 transform scale-450 lg:scale-350"
                                />
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">Únete a CronoAuto</h3>
                                <p className="text-sm sm:text-base lg:text-xl opacity-90 mb-1 lg:mb-2">Crea tu cuenta</p>
                                <p className="text-xs sm:text-sm lg:text-lg opacity-75">Accede a ofertas exclusivas y servicios premium</p>
                            </div>
                        </div>

                        {/* Formulario de registro - DERECHA */}
                        <div className="bg-black p-12 flex flex-col justify-center lg:w-1/2">
                            <div className="max-w-md mx-auto w-full">
                                {/* Desktop: títulos y enlace verticalmente */}
                                <div className="hidden sm:block">
                                    <h2 className="text-3xl font-bold text-white">REGÍSTRATE EN</h2>
                                    <div className="text-right -mt-1 mb-1">
                                        <p className="text-gray-300 text-sm">
                                            ¿Ya tienes cuenta?
                                            <a href="/login" className="text-red-500 hover:text-red-400 underline ml-1">
                                                Inicia sesión
                                            </a>
                                        </p>
                                    </div>
                                    <h1 className="text-4xl font-bold text-red-500">CRONOAUTO</h1>
                                </div>
                                
                                {/* Móvil: títulos en una línea, enlace debajo */}
                                <div className="sm:hidden">
                                    <h1 className="text-2xl font-bold text-white mb-2">
                                        REGÍSTRATE EN <span className="text-red-500">CRONOAUTO</span>
                                    </h1>
                                    <div className="text-center mb-6">
                                        <p className="text-gray-300 text-sm">
                                            ¿Ya tienes cuenta?
                                            <a href="/login" className="text-red-500 hover:text-red-400 underline ml-1">
                                                Inicia sesión
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="hidden sm:block mb-6"></div>
                            
                                <form className="space-y-4">
                                    {/* Campos comunes */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                            Correo electrónico*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                                            Contraseña*
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>

                                    {/* Campos adicionales para registro */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                                                Nombre*
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder=""
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="apellidos" className="block text-sm font-medium text-gray-300 mb-1">
                                                Apellidos*
                                            </label>
                                            <input
                                                type="text"
                                                id="apellidos"
                                                name="apellidos"
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
                                            Teléfono*
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                                            Confirmar contraseña*
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-300 mb-1">
                                            Fecha de nacimiento*
                                        </label>
                                        <input
                                            type="date"
                                            id="fechaNacimiento"
                                            name="fechaNacimiento"
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        />
                                    </div>

                                    {/* Política de privacidad */}
                                    <div className="flex items-start  space-x-3 mt-4 mb-4">
                                        <input
                                            type="checkbox"
                                            id="privacidad"
                                            name="privacidad"
                                            required
                                            className="w-4 h-4 text-red-600 bg-white border-gray-300 rounded-lg focus:ring-red-500 focus:ring-2 mt-1 "
                                        />
                                        <label htmlFor="privacidad" className="text-sm text-gray-300 ">
                                            Acepto la <a href="#" className="text-red-500 hover:text-red-400 underline">política de privacidad</a> y 
                                            el <a href="#" className="text-red-500 hover:text-red-400 underline">tratamiento de datos</a> de CronoAuto.*
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-red-600 rounded-lg hover:bg-red-700 text-white font-medium py-3 px-6 transition-colors duration-300 text-sm tracking-wider"
                                    >
                                        CREAR CUENTA
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ano={2025} />
        </>
    );
}
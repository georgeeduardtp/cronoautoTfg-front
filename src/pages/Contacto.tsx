import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Contacto() {
    return (
        <>
            <Header />
            <div className="bg-dark-950 min-h-screen">
                

                <div className="max-w-none">
                    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
                        {/* Formulario de contacto */}
                        <div className="bg-black p-12 flex flex-col justify-center lg:w-1/2">
                            <div className="max-w-md mx-auto w-full">
                                <h2 className="text-3xl font-bold text-white mb-2">CONTACTA CON</h2>
                                <h1 className="text-4xl font-bold text-red-500 mb-8">CRONOAUTO</h1>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                                            Nombre*
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            required
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="apellido" className="block text-sm font-medium text-gray-300 mb-2">
                                            Apellidos*
                                        </label>
                                        <input
                                            type="text"
                                            id="apellido"
                                            name="apellido"
                                            required
                                            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Correo electrónico*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder=""
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder=""
                                    />
                                </div>

                                <div>
                                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-2">
                                        Asunto*
                                    </label>
                                    <select
                                        id="asunto"
                                        name="asunto"
                                        required
                                        className="w-full px-0 py-3 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                    >
                                        <option value="">Selecciona un asunto</option>
                                        <option value="informacion">Información general</option>
                                        <option value="compra">Consulta de compra</option>
                                        <option value="financiacion">Financiación</option>
                                        <option value="postventa">Postventa</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                                        Mensaje*
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
                                        required
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                        placeholder="Cuéntanos cómo podemos ayudarte..."
                                    ></textarea>
                                </div>

                                {/* Política de privacidad */}
                                <div className="flex items-start space-x-3 mt-6 mb-6">
                                    <input
                                        type="checkbox"
                                        id="privacidad"
                                        name="privacidad"
                                        required
                                        className="w-4 h-4 text-red-600 bg-white border-gray-300 rounded focus:ring-red-500 focus:ring-2 mt-1"
                                    />
                                    <label htmlFor="privacidad" className="text-sm text-gray-300">
                                        Acepto la <a href="#" className="text-red-500 hover:text-red-400 underline">política de privacidad</a> y 
                                        el <a href="#" className="text-red-500 hover:text-red-400 underline">tratamiento de datos</a> de CronoAuto.*
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-6 transition-colors duration-300 text-sm tracking-wider"
                                >
                                    ENVIAR MENSAJE
                                </button>

                                
                            </form>
                            </div>
                        </div>

                        {/* Imagen de fondo estilo BMW */}
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
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">Conecta con CronoAuto</h3>
                                <p className="text-sm sm:text-base lg:text-xl opacity-90 mb-1 lg:mb-2">Estamos aquí para ti</p>
                                <p className="text-xs sm:text-sm lg:text-lg opacity-75">Tu consulta es importante para nosotros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ano={2025} />
        </>
    );
}
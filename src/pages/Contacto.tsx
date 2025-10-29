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
                                <h1 className="text-4xl font-bold text-red-500 mb-6">CRONOAUTO</h1>
                            
                            <form className="space-y-4">
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
                                        <label htmlFor="apellido" className="block text-sm font-medium text-gray-300 mb-1">
                                            Apellidos*
                                        </label>
                                        <input
                                            type="text"
                                            id="apellido"
                                            name="apellido"
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

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
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-1">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        placeholder=""
                                    />
                                </div>

                                <div>
                                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-1">
                                        Asunto*
                                    </label>
                                    <select
                                        id="asunto"
                                        name="asunto"
                                        required
                                        className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
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
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
                                        Mensaje*
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={3}
                                        required
                                        className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                        placeholder="Cuéntanos cómo podemos ayudarte..."
                                    ></textarea>
                                </div>

                                {/* Política de privacidad */}
                                <div className="flex items-start space-x-3 mt-4 mb-4">
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
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 transition-colors duration-300 text-sm tracking-wider"
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
                                backgroundImage: 'url(/imagenEdu.jpg)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-red-900/40"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer ano={2025} />
        </>
    );
}
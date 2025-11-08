import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useEffect } from 'react';

export default function Contacto() {

    useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
        
    return (
        <>
            <Header selectedPage="Contacto"/>
            <div className="bg-dark-950 min-h-screen">
                

                <div className="max-w-none">
                    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
                        {/* Formulario de contacto */}
                        <div className="bg-black p-12 flex flex-col justify-center lg:w-1/2">
                            <div className="max-w-md mx-auto w-full">
                                <h2 className="text-3xl font-bold text-white mb-2">PIDE TU COCHE</h2>
                                <h1 className="text-4xl font-bold text-red-500 mb-6">POR ENCARGO</h1>
                            
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="marca" className="block text-sm font-medium text-gray-300 mb-1">
                                            Marca preferida*
                                        </label>
                                        <select
                                            id="marca"
                                            name="marca"
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">Selecciona una marca</option>
                                            <option value="bmw">BMW</option>
                                            <option value="audi">Audi</option>
                                            <option value="mercedes">Mercedes-Benz</option>
                                            <option value="tesla">Tesla</option>
                                            <option value="porsche">Porsche</option>
                                            <option value="volkswagen">Volkswagen</option>
                                            <option value="ford">Ford</option>
                                            <option value="toyota">Toyota</option>
                                            <option value="honda">Honda</option>
                                            <option value="otro">Otra marca</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="modelo" className="block text-sm font-medium text-gray-300 mb-1">
                                            Modelo específico
                                        </label>
                                        <input
                                            type="text"
                                            id="modelo"
                                            name="modelo"
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder="Ej: Serie 3, A4, Model S..."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="tipoCoche" className="block text-sm font-medium text-gray-300 mb-1">
                                            Tipo de vehículo*
                                        </label>
                                        <select
                                            id="tipoCoche"
                                            name="tipoCoche"
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">Selecciona el tipo</option>
                                            <option value="sedan">Sedán</option>
                                            <option value="suv">SUV</option>
                                            <option value="hatchback">Hatchback</option>
                                            <option value="coupe">Coupé</option>
                                            <option value="convertible">Convertible</option>
                                            <option value="familiar">Familiar</option>
                                            <option value="deportivo">Deportivo</option>
                                            <option value="pickup">Pick-up</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="motor" className="block text-sm font-medium text-gray-300 mb-1">
                                            Tipo de motor*
                                        </label>
                                        <select
                                            id="motor"
                                            name="motor"
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">Selecciona el motor</option>
                                            <option value="gasolina">Gasolina</option>
                                            <option value="diesel">Diésel</option>
                                            <option value="hibrido">Híbrido</option>
                                            <option value="electrico">Eléctrico</option>
                                            <option value="hibrido-enchufable">Híbrido Enchufable</option>
                                            <option value="indiferente">Me es indiferente</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-300 mb-1">
                                            Presupuesto máximo*
                                        </label>
                                        <select
                                            id="presupuesto"
                                            name="presupuesto"
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">Selecciona rango</option>
                                            <option value="hasta-20k">Hasta 20.000€</option>
                                            <option value="20k-40k">20.000€ - 40.000€</option>
                                            <option value="40k-60k">40.000€ - 60.000€</option>
                                            <option value="60k-80k">60.000€ - 80.000€</option>
                                            <option value="80k-100k">80.000€ - 100.000€</option>
                                            <option value="mas-100k">Más de 100.000€</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="tiempoEntrega" className="block text-sm font-medium text-gray-300 mb-1">
                                            Tiempo de entrega
                                        </label>
                                        <select
                                            id="tiempoEntrega"
                                            name="tiempoEntrega"
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">¿Cuándo lo necesitas?</option>
                                            <option value="inmediato">Lo antes posible</option>
                                            <option value="1-mes">Dentro de 1 mes</option>
                                            <option value="3-meses">Dentro de 3 meses</option>
                                            <option value="6-meses">Dentro de 6 meses</option>
                                            <option value="flexible">Soy flexible</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="comentarios" className="block text-sm font-medium text-gray-300 mb-1">
                                        Comentarios adicionales
                                    </label>
                                    <textarea
                                        id="comentarios"
                                        name="comentarios"
                                        rows={3}
                                        className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                        placeholder="Características específicas, colores preferidos, equipamientos especiales..."
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
                                    className="w-full rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 transition-colors duration-300 text-sm tracking-wider"
                                >
                                    SOLICITAR ENCARGO
                                </button>

                                
                            </form>
                            </div>
                        </div>

                        {/* Imagen de fondo para encargos */}
                        <div 
                            className="bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-64 sm:h-80 lg:h-auto lg:w-1/2"
                            style={{
                                backgroundImage: 'url(/imagenEdu.jpg)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-red-900/40"></div>
                            <div className="relative z-10 text-center text-white p-6">
                                <h3 className="text-2xl font-bold mb-4">Tu coche ideal te espera</h3>
                                <p className="text-lg opacity-90 mb-4">
                                    No encontraste lo que buscas en nuestro catálogo?
                                </p>
                                <p className="text-md opacity-80">
                                    Déjanos ayudarte a encontrar el vehículo perfecto para ti. 
                                    Trabajamos con las mejores marcas y concesionarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ano={2025} />
        </>
    );
}
import { Link } from 'react-router-dom';

export default function ShowcaseStock() {
    return (
        <section className="w-full bg-dark-950">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-gradient text-3xl font-bold mb-8">Coches Destacados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Ejemplo de coche destacado */}
                <div className="relative bg-dark-600 rounded-xl transition-all duration-300 hover:shadow-xl overflow-hidden group cursor-pointer" style={{ boxShadow: '0 4px 20px rgba(220, 38, 38, 0.15)' }}>
                    {/* Etiquetas superiores */}
                    <div className="absolute top-3 left-3 z-10 flex gap-1">
                        <span className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                            DEPORTIVO
                        </span>
                        <span className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                            NUEVO
                        </span>
                    </div>
                    
                    {/* Imagen del coche */}
                    <div className="relative bg-gradient-to-br from-dark-500 to-dark-700">
                        <img 
                            src="https://tse1.mm.bing.net/th/id/OIP.4ew3gwjcEOAU-w2Hpt_BVAHaFW?w=1280&h=925&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt="BMW X3"
                            className="w-full h-40 object-cover"
                        />
                    </div>
                    
                    {/* Información del coche */}
                    <div className="p-4">
                        <div className="mb-3">
                            <p className="text-dark-300 text-xs mb-1">BMW</p>
                            <h3 className="text-xl font-bold text-white mb-1">X3</h3>
                            <p className="text-dark-200 text-xs">SUV Premium</p>
                        </div>
                        
                        {/* Características destacadas */}
                        <div className="mb-3">
                            <span className="inline-block bg-accent-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Híbrido Enchufable
                            </span>
                        </div>
                        
                        {/* Precio */}
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-primary-400 font-bold text-lg">Desde 45.900 €</p>
                                <p className="text-dark-400 text-xs line-through">49.900 €</p>
                            </div>
                            <Link 
                                to="/Coche-detail.tsx" 
                                className="bg-primary-600 hover:bg-red-500 hover:text-black text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="relative bg-dark-600 rounded-xl transition-all duration-300 hover:shadow-xl overflow-hidden group cursor-pointer" style={{ boxShadow: '0 4px 20px rgba(220, 38, 38, 0.15)' }}>
                    {/* Etiquetas superiores */}
                    <div className="absolute top-3 left-3 z-10 flex gap-1">
                        <span className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                            ELÉCTRICO
                        </span>
                        <span className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                            ECO
                        </span>
                    </div>
                    
                    {/* Imagen del coche */}
                    <div className="relative bg-gradient-to-br from-dark-500 to-dark-700">
                        <img 
                            src="https://www.bmw.be/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-cp-design-ext-desktop.jpg"
                            alt="Tesla Model 3"
                            className="w-full h-40 object-cover"
                        />
                    </div>
                    
                    {/* Información del coche */}
                    <div className="p-4">
                        <div className="mb-3">
                            <p className="text-dark-300 text-xs mb-1">Tesla</p>
                            <h3 className="text-xl font-bold text-white mb-1">Model 3</h3>
                            <p className="text-dark-200 text-xs">Sedán Eléctrico</p>
                        </div>
                        
                        {/* Características destacadas */}
                        <div className="mb-3">
                            <span className="inline-block bg-success-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                100% Eléctrico
                            </span>
                        </div>
                        
                        {/* Precio */}
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-primary-400 font-bold text-lg">Desde 42.990 €</p>
                                <p className="text-dark-400 text-xs line-through">47.990 €</p>
                            </div>
                            <Link 
                                to="/Coche-detail.tsx" 
                                className="bg-primary-600 hover:bg-red-500 hover:text-black text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative bg-dark-600 rounded-xl transition-all duration-300 hover:shadow-xl overflow-hidden group cursor-pointer" style={{ boxShadow: '0 4px 20px rgba(220, 38, 38, 0.15)' }}>
                    {/* Etiquetas superiores */}
                    <div className="absolute top-3 left-3 z-10 flex gap-1">
                        <span className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                            POPULAR
                        </span>
                        <span className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                            OFERTA
                        </span>
                    </div>
                    
                    {/* Imagen del coche */}
                    <div className="relative bg-gradient-to-br from-dark-500 to-dark-700">
                        <img 
                            src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/05/resize_p90462495_highres_the-new-bmw-3-series.jpg"
                            alt="Audi A4"
                            className="w-full h-40 object-cover"
                        />
                    </div>
                    
                    {/* Información del coche */}
                    <div className="p-4">
                        <div className="mb-3">
                            <p className="text-dark-300 text-xs mb-1">Audi</p>
                            <h3 className="text-xl font-bold text-white mb-1">A4</h3>
                            <p className="text-dark-200 text-xs">Sedán Premium</p>
                        </div>
                        
                        {/* Características destacadas */}
                        <div className="mb-3">
                            <span className="inline-block bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Deportivo Premium
                            </span>
                        </div>
                        
                        {/* Precio */}
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-primary-400 font-bold text-lg">Desde 38.500 €</p>
                                <p className="text-dark-400 text-xs line-through">41.900 €</p>
                            </div>
                            <Link 
                                to="/Coche-detail.tsx" 
                                className="bg-primary-600 hover:bg-red-500 hover:text-black text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
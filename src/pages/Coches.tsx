import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import type { CarCard } from '@/types/car';



export default function Coches() {
    // Mock data para todos los coches
    const[cars,setCars] = useState<CarCard[]>([]);

    useEffect(() => { //captua eventos
    console.log('cargando coches...');
    fetch('http://localhost:8080/cars',{  //peticion a la api
      method: "GET",
    }).then(response => response.json())
    .then((res) => {
      setCars(res);
      console.log('Coches cargados:', res);
    }).catch((error) => {
      console.error('Error fetching cars:', error);
    });
  }, []);

    return (
        <>
            <Header />
            <div className="bg-dark-950 min-h-screen">
                {/* Encabezado con fondo de bandera de carreras */}
                <div 
                    className="w-full py-6.5 px-4 bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/015/275/897/large_2x/race-background-racing-flag-race-checker-background-free-vector.jpg)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-red-900/70 to-black/90"></div>
                    <div className="relative z-10 max-w-7xl mx-auto">
                        <h1 className="text-white text-4xl font-bold mb-4">Todos nuestros coches</h1>
                        <p className="text-gray-200 text-lg">Explora nuestra colección completa de vehículos premium</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-7">

                    {/* Filtros */}
                    <div className="mb-6 flex flex-wrap gap-4">
                        <button className="bg-dark-950 border border-white hover:border-dark-950 hover:bg-primary-600 hover:text-dark-950 text-white px-4 py-1.5  text-sm font-medium transition-colors duration-300">
                            Todos
                        </button>
                        <button className="bg-dark-950 border border-white hover:border-dark-950 hover:bg-primary-600 hover:text-dark-950 text-white px-4 py-1.5  text-sm font-medium transition-colors duration-300">
                            BMW
                        </button>
                        <button className="bg-dark-950 border border-white hover:border-dark-950 hover:bg-primary-600 hover:text-dark-950 text-white px-4 py-1.5  text-sm font-medium transition-colors duration-300">
                            Tesla
                        </button>
                        <button className="bg-dark-950 border border-white hover:border-dark-950 hover:bg-primary-600 hover:text-dark-950 text-white px-4 py-1.5  text-sm font-medium transition-colors duration-300">
                            Audi
                        </button>
                        <button className="bg-dark-950 border border-white hover:border-dark-950 hover:bg-primary-600 hover:text-dark-950 text-white px-4 py-1.5  text-sm font-medium transition-colors duration-300">
                            Eléctricos
                        </button>
                        <button className="bg-dark-950 border border-white hover:border-dark-950 hover:bg-primary-600 hover:text-dark-950 text-white px-4 py-1.5  text-sm font-medium transition-colors duration-300">
                            Híbridos
                        </button>
                    </div>

                    {/* Línea divisoria */}
                    <div className="w-full h-px bg-white mb-8"></div>

                    {/* Grid de coches */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cars.map((car: CarCard) => (
                            <>
                            <div key={car.id} className="relative bg-dark-900 transition-all  overflow-hidden group cursor-pointer border border-transparent hover:border-red-500 hover:shadow-[6px_6px_10px_rgba(220,38,38,0.6),-2px_-2px_8px_rgba(220,38,38,0.2)]">
                                {/* Etiquetas superiores */}
                                <div className="absolute top-3 left-3 z-10 flex gap-1">
                                    {car.tags.map((tag, index) => (
                                        <span key={index} className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Imagen del coche */}
                                <div className="relative bg-gradient-to-br from-dark-500 to-dark-700">
                                    <img 
                                        src={car.imageUrl}
                                        alt={`${car.brand} ${car.model}`}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                                
                                {/* Información del coche */}
                                <div className="p-4">
                                    <div className="mb-3">
                                        <p className="text-dark-300 text-xs mb-1">{car.brand}</p>
                                        <h3 className="text-xl font-bold text-white mb-1">{car.model}</h3>
                                        <p className="text-dark-200 text-xs">{car.car_type}</p>
                                    </div>
                                    
                                    {/* Características destacadas */}
                                    <div className="mb-3">
                                        <span className={`inline-block text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border shadow-lg ${
                                            car.engine_type.includes('Eléctrico') ? 'bg-green-400/70 border-green-500/30' :
                                            car.engine_type.includes('Híbrido') ? 'bg-blue-600/70 border-blue-500/30' :
                                            car.engine_type.includes('Gasolina') ? 'bg-orange-400/70 border-orange-500/30' :
                                            'bg-accent-500/70 border-accent-500/30'
                                        }`}>
                                            {car.engine_type}
                                        </span>
                                    </div>
                                    
                                    {/* Precio */}
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-primary-600 font-bold text-lg">Desde {car.price.toLocaleString()} €</p>
                                            {car.original_price && (
                                                <p className="text-dark-400 text-xs line-through">{car.original_price.toLocaleString()} €</p>
                                            )}
                                        </div>
                                        <Link 
                                            to={`/Coche-detail`} 
                                            className="bg-primary-600 hover:bg-red-500 hover:text-black text-white px-4 py-2 text-sm font-medium transition-colors duration-300"
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>

                    
                </div>
                <Footer ano={2025} />
            </div>
        </>
    );
}
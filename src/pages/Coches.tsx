import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import type { CarCard } from '@/types/car';



export default function Coches() {
    // Mock data para todos los coches
    const[cars,setCars] = useState<CarCard[]>([]);
    const[searchTerm, setSearchTerm] = useState('');

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

  // Filtramos coches en multiples campos de búsqueda
  const filteredCars = cars.filter((car: CarCard) =>  
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.car_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.engine_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <>
            <Header />
            <div className="bg-dark-950 min-h-screen">
                {/* Encabezado con fondo de bandera de carreras */}
                <div 
                    className="w-full py-12 px-4 bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/027/533/475/non_2x/car-or-bike-smokie-background-realistic-ai-generative-free-photo.jpg)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-red-900/70 to-black/90"></div>
                    <div className="relative z-10 max-w-7xl mx-auto text-center">
                        <h1 className="text-white text-4xl font-bold mb-4">Todos nuestros coches</h1>
                        <p className="text-gray-200 text-lg mb-8">Explora nuestra colección completa de vehículos premium</p>
                        
                        {/* Buscador integrado en el hero */}
                        <div className="max-w-lg mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar BMW, Tesla, Audi o cualquier modelo..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all duration-300 text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-7">

                    {/* Mostrar término de búsqueda activo */}
                    {searchTerm && (
                        <div className="mb-6 text-center">
                            <p className="text-gray-400">
                                Resultados para: <span className="text-white font-semibold">"{searchTerm}"</span>
                                <button 
                                    onClick={() => setSearchTerm('')}
                                    className="ml-3 text-red-500 hover:text-red-400 text-sm underline"
                                >
                                    Limpiar búsqueda
                                </button>
                            </p>
                        </div>
                    )}

                    {/* Línea divisoria */}
                    <div className="w-full h-px bg-primary-600 mb-8"></div>

                    {/* Mensaje cuando no hay resultados */}
                    {filteredCars.length === 0 && searchTerm && ( //solo salta la condicion si hay algo escrito y no encuentra coincidencias
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-lg mb-2">No se encontraron coches</div>
                            <div className="text-gray-500">Intenta con otros términos de búsqueda</div>
                        </div>
                    )}

                    {/* Grid de coches */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredCars.map((car: CarCard) => ( //mapeamos solo los coches filtrados
                            <div key={car.id} className="relative bg-dark-900 transition-all  overflow-hidden group cursor-pointer border border-transparent hover:border-red-500 hover:shadow-[6px_6px_10px_rgba(220,38,38,0.6),-2px_-2px_8px_rgba(220,38,38,0.2)]">
                                {/* Etiquetas superiores */}
                                <div className="absolute top-3 left-3 z-10 flex gap-1">
                                    {car.tags && car.tags.map((tag, index) => ( //verifica que car.tags existe antes de mapear
                                        <span key={`${car.id}-tag-${index}`} className="text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg border border-white/30 backdrop-blur-sm">
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
                                            car.engine_type && car.engine_type.includes('Eléctrico') ? 'bg-green-400/70 border-green-500/30' : 
                                            car.engine_type && car.engine_type.includes('Híbrido') ? 'bg-blue-600/70 border-blue-500/30' :
                                            car.engine_type && car.engine_type.includes('Gasolina') ? 'bg-orange-400/70 border-orange-500/30' :
                                            'bg-accent-500/70 border-accent-500/30'
                                        }`}>
                                            {car.engine_type}
                                        </span>
                                    </div>
                                    
                                    {/* Precio */}
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-primary-600 font-bold text-lg">Desde {car.price ? car.price.toLocaleString() : 0} €</p>
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
                        ))}
                    </div>

                    
                </div>
                <Footer ano={2025} />
            </div>
        </>
    );
}
import type { CarCardDestacado } from '@/types/car';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowcaseStock() {

    // usamos el tipo CarCardDestacado porque el backend devuelve la propiedad `destacado` en algunos coches
    const[cars,setCars] = useState<CarCardDestacado[]>([]);
    
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
        <section className="w-full bg-dark-950 ">
            <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 py-7">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-gradient text-3xl font-bold">Coches Destacados</h2>
                    <Link 
                        to="/coches" 
                        className="bg-dark-950 border border-primary-600 hover:bg-primary-600 hover:text-dark-950 text-primary-600 px-6 py-3  text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                    >
                        Ver todos los coches
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Mostrar solo coches destacados */}
                {/*He filtrado por destacados y agregado un max de 3*/  }
                {cars.filter((car) => car.destacado===true).slice(0, 3).map((car: CarCardDestacado) => ( 
                    <div key={car.id}>
                {/* Ejemplo de coche destacado */}
                <div className="relative bg-dark-900 lg:min-h-[420px] transition-all duration-0 overflow-hidden group cursor-pointer border border-transparent hover:border-primary-800 hover:shadow-[6px_6px_10px_rgba(220,38,38,0.6),-2px_-2px_8px_rgba(220,38,38,0.2)]">
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
                            className="w-full h-48 md:h-56 lg:h-64 object-cover"
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
                                car.engine_type.includes('Híbrido') ? 'bg-blue-400/70 border-blue-500/30' :
                                car.engine_type.includes('Gasolina') ? 'bg-orange-400/70 border-orange-500/30' :
                                    'bg-accent-400/70 border-accent-500/30'
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
                                to={`/coche-detail/${car.id}`} 
                                className="bg-dark-950 border border-primary-600 hover:bg-primary-600 hover:text-dark-950 text-primary-600 px-5 py-2.5  text-sm font-medium transition-colors duration-300"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>   
                </div>                
                ))}
                
                
                
            </div>
            </div>
        </section>
    );
}
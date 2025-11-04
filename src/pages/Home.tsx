import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { CarCardDestacado } from "@/types/car";
import { listCars } from "@/services/methods";


export default function Home() {

          const[cars,setCars] = useState<CarCardDestacado[]>([]);
          const[loading,setLoading] = useState<boolean>(true);
          const[error,setError] = useState<string | null>(null);
          
              
            useEffect(() => {
          listCars()
          .then(cars => {
           const a = cars.map(a => {
              return {
                id: a.id,
                brand: a.brand,
                model: a.model,
                car_type: a.car_type,
                imageUrl: a.imageUrl,
                tags: a.tags,
                engine_type: a.engine_type,
                price: a.price,
                original_price: a.original_price,
                destacado: a.destacado
            };
            });
            setCars(a);
          }
              )
          .catch(error => {
            console.error('Error al cargar los artistas:', error);
            setError('Error al cargar los artistas.');
          }).finally(() => {
            setLoading (false);
          });
        }, []);
      
        
      
  useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
      
            if (loading) {
      
                    return (
                        <>
                            <Header />
                            <main className="flex-1 flex items-center justify-center min-h-screen bg-dark-950">
                                <div className="text-center">
                                    <img src="/escudo.svg" alt="Cargando" className="w-80 h-80 mx-auto logo-pulse" />
                                    <p className="mt-4 text-white">Cargando coches...</p>
                                </div>
                            </main>
                            <Footer ano={2025} />
                        </>
                    );
      
                }
        if (error) {
      
          return <div>Error: {error}</div>;
        }
  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col">
        <section className="relative bg-gray-100 py-16 overflow-hidden w-full min-h-screen">
        <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop
        >
        <source src="/hero.mp4" type="video/mp4" />
        </video>
         
        <div className="relative z-10 max-w-9xl mx-auto px-4 text-center h-full flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Bienvenido a Crono Auto</h1>
        <p className="text-lg text-white">Tu solución para encontrar el coche de tus sueños al mejor precio.</p>
        </div>
        
        </section>
        
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
                {cars.filter((car) => car.destacado===true).slice(0, 4).map((car: CarCardDestacado) => ( 
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
     
      
        
        
      </main>
      <Footer ano={2025} />
      

    </> //etiqueta de cierre del fragmento, 
    // permitiendo devolver múltiples elementos sin un contenedor adicional
  );
}

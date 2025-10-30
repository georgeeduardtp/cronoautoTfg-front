import type { CarDetail } from '../types/car';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

// Datos de ejemplo para mostrar la estructura


export default function CocheDetail() {
    const[car,setCar] = useState<CarDetail>({
        id: 0,
        brand: "",
        model: "",
        car_type: "",
        imageUrl: "",
        year: 0,
        mileage: 0,
        tags: [],
        engine_type: "",
        price: 0,
        original_price: 0,
        potencia: 0,
        transmission: "",
        motor: "",
        etiqueta_ambiental: "",
        description: "",
        propietarios: 0,
        puertas: 0
});

    const {id} = useParams();
    

    useEffect(() => { //captura eventos
    console.log('cargando coche...');
    fetch(`http://localhost:8080/cars/${id}`,{  //peticion a la api
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Coche cargado:', data);
        setCar(data);
    })
    .catch(error => {
        console.error('Error al cargar el coche:', error);
    });
}, [id]);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-ES', { //el Intl.NumberFormat permite formatear números según la localización, debes agregar parametro "es-ES" para formato español, st
            style: 'currency', //existen mas estilos , como percent, decimal, unit
            currency: 'EUR', // Moneda: euros
            minimumFractionDigits: 0 // Sin decimales
        }).format(price);
    };

    const formatMileage = (mileage: number) => {
        return new Intl.NumberFormat('es-ES', { 
            style: 'unit', 
            unit: 'kilometer' }).format(mileage);
    };

    //ES SOLO PARA UN SCROLL PERSONALIZADO EN EL SIDEBAR
    const sidebarRef = useRef<HTMLDivElement>(null); //hacve referencia al div del sidebar
    
    useEffect(() => { 
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (sidebarRef.current) {
                sidebarRef.current.scrollTop += e.deltaY;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    

    return (
        <>
            <Header />
            <div className="bg-dark-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-1 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Solo imagen - lado izquierdo */}
                        <div className="lg:col-span-2">
                            {/* Imagen del coche */}
                            <div className="bg-dark-900 border border-red-600 rounded-lg overflow-hidden relative">
                                <img 
                                    src={car.imageUrl} 
                                    alt={`${car.brand} ${car.model}`}
                                    className="w-full h-64 md:h-[500px] object-cover"
                                />
                                {/* Degradado desde abajo */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                {/* Información del coche */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {car.brand} {car.model}
                                    </h2>
                                    <p className="text-xl text-gray-200">{car.car_type} • {car.year}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar derecho con todos los datos */}
                        <div  
                            ref={sidebarRef} //usamos el hook useRef para referenciar el div del sidebar
                            className="h-64 md:h-[500px] overflow-y-auto space-y-6 p-1"
                            style={{ //hacemos que no aparezca la barra de scroll
                                scrollbarWidth: 'none', 
                                msOverflowStyle: 'none',
                            }}
                        >
                            {/* Precio y datos básicos */}
                            <div className="bg-dark-900 border border-red-600 rounded-lg p-6">
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <span className="text-2xl font-bold text-primary-500">
                                            {formatPrice(car.price)}
                                        </span>
                                        {car.original_price > car.price && (
                                            <span className="text-lg text-gray-400 line-through">
                                                {formatPrice(car.original_price)}
                                            </span>
                                        )}
                                    </div>
                                    {car.original_price > car.price && (
                                        <span className="text-sm text-red-500 font-medium">
                                            Ahorro: {formatPrice(car.original_price - car.price)}
                                        </span>
                                    )}
                                </div>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {car.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 bg-primary-600 text-white rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Características técnicas */}
                            <div className="bg-dark-900 border border-red-600 rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4 text-white">Características Técnicas</h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Año:</span>
                                        <span className="font-medium text-white text-sm">{car.year}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Kilómetros:</span>
                                        <span className="font-medium text-white text-sm">{formatMileage(car.mileage)}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Combustible:</span>
                                        <span className="font-medium text-white text-sm">{car.engine_type}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Motor:</span>
                                        <span className="font-medium text-white text-sm">{car.motor}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Potencia:</span>
                                        <span className="font-medium text-white text-sm">{car.potencia} CV</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Transmisión:</span>
                                        <span className="font-medium text-white text-sm">{car.transmission}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Puertas:</span>
                                        <span className="font-medium text-white text-sm">{car.puertas}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Propietarios:</span>
                                        <span className="font-medium text-white text-sm">{car.propietarios}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dark-700 pb-2">
                                        <span className="text-gray-300 text-sm">Etiqueta Ambiental:</span>
                                        <span className="font-medium bg-primary-600 text-white px-2 py-1 rounded text-xs">
                                            {car.etiqueta_ambiental}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Descripción */}
                            <div className="bg-dark-900 border border-red-600 rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4 text-white">Descripción</h2>
                                <p className="text-gray-300 leading-relaxed text-sm">{car.description}</p>
                            </div>

                            {/* Botones de acción */}
                            <div className="bg-dark-900 border border-red-600 rounded-lg p-6">
                                <div className="space-y-3">
                                    <button className="w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
                                        Contactar
                                    </button>
                                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm">
                                        Solicitar Información
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ano={2025} />
        </>
    );
}
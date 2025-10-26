import Header from '@/components/Header';
import React from 'react';
import { useParams } from 'react-router-dom';

interface CarDetails {
    id: string;
    name: string;
    brand: string;
    year: number;
    cv: number;
    fuel: string;
    transmission: string;
    kilometers: number;
    price: number;
    image: string;
    description: string;
}

const CocheDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Mock data
    const carData: CarDetails = {
        id: id || '1',
        name: 'BMW Serie 3',
        brand: 'BMW',
        year: 2020,
        cv: 184,
        fuel: 'Gasolina',
        transmission: 'Automático',
        kilometers: 45000,
        price: 28500,
        image: 'https://tse1.mm.bing.net/th/id/OIP.6rF1ep32k2vQTuGbEWQyWwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Excelente estado, revisiones al día, único propietario.'
    };

    return (
        <>
        <Header />
        <div className="bg-black min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Imagen */}
                    <div className="flex justify-center">
                        <img 
                            src={carData.image} 
                            alt={carData.name}
                            className="w-full max-w-2xl h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Detalles */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-white">{carData.name}</h1>
                            <p className="text-xl text-gray-300">{carData.brand}</p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700">
                            <h2 className="text-xl font-semibold mb-4 text-white">Especificaciones</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="font-medium text-gray-300">Año:</span>
                                    <p className="text-gray-400">{carData.year}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-300">Potencia:</span>
                                    <p className="text-gray-400">{carData.cv} CV</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-300">Combustible:</span>
                                    <p className="text-gray-400">{carData.fuel}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-300">Transmisión:</span>
                                    <p className="text-gray-400">{carData.transmission}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-300">Kilómetros:</span>
                                    <p className="text-gray-400">{carData.kilometers.toLocaleString()} km</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-900 p-6 rounded-lg border border-red-700">
                            <h3 className="text-2xl font-bold text-red-100">
                                €{carData.price.toLocaleString()}
                            </h3>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-700">
                            <h3 className="text-lg font-semibold mb-2 text-white">Descripción</h3>
                            <p className="text-gray-400">{carData.description}</p>
                        </div>

                        <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-200 font-medium">
                            Contactar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CocheDetail;
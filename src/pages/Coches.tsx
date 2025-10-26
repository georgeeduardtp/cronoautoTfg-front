import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

interface Car {
    id: string;
    name: string;
    brand: string;
    year: number;
    price: number;
    originalPrice?: number;
    image: string;
    type: string;
    fuel: string;
    tags: string[];
}

export default function Coches() {
    // Mock data para todos los coches
    const allCars: Car[] = [
        {
            id: '1',
            name: 'X3',
            brand: 'BMW',
            year: 2020,
            price: 45900,
            originalPrice: 49900,
            image: 'https://tse1.mm.bing.net/th/id/OIP.4ew3gwjcEOAU-w2Hpt_BVAHaFW?w=1280&h=925&rs=1&pid=ImgDetMain&o=7&rm=3',
            type: 'SUV Premium',
            fuel: 'Híbrido Enchufable',
            tags: ['DEPORTIVO', 'NUEVO']
        },
        {
            id: '2',
            name: 'Model 3',
            brand: 'Tesla',
            year: 2021,
            price: 42990,
            originalPrice: 47990,
            image: 'https://tse3.mm.bing.net/th/id/OIP.pT3MCAJmyt00cHpRADgA8gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
            type: 'Sedán Eléctrico',
            fuel: '100% Eléctrico',
            tags: ['ELÉCTRICO', 'ECO']
        },
        {
            id: '3',
            name: 'A4',
            brand: 'Audi',
            year: 2019,
            price: 38500,
            originalPrice: 41900,
            image: 'https://www.actualidadmotor.com/wp-content/uploads/2022/02/Audi-A4-Portada.jpg',
            type: 'Sedán Premium',
            fuel: 'Gasolina',
            tags: ['POPULAR', 'OFERTA']
        },
        {
            id: '4',
            name: 'Serie 5',
            brand: 'BMW',
            year: 2022,
            price: 52900,
            originalPrice: 58900,
            image: 'https://www.bmwblog.es/wp-content/uploads/2017/01/P90237242-highRes.jpg',
            type: 'Sedán Ejecutivo',
            fuel: 'Híbrido',
            tags: ['EJECUTIVO', 'PREMIUM']
        },
        {
            id: '5',
            name: 'Model Y',
            brand: 'Tesla',
            year: 2023,
            price: 48500,
            originalPrice: 52000,
            image: 'https://cdn.motor1.com/images/mgl/xqZP9p/s1/tesla-model-y-in-quicksilver-das-exterieur.jpg',
            type: 'SUV Eléctrico',
            fuel: '100% Eléctrico',
            tags: ['NUEVO', 'ECO']
        },
        {
            id: '6',
            name: 'Q5',
            brand: 'Audi',
            year: 2021,
            price: 44900,
            originalPrice: 49900,
            image: 'https://tse3.mm.bing.net/th/id/OIP.fKds2PYYLGbuApeWgLAoTwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
            type: 'SUV Premium',
            fuel: 'Gasolina',
            tags: ['SUV', 'PREMIUM']
        }
    ];

    return (
        <>
            <Header />
            <div className="bg-dark-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Encabezado */}
                    <div className="mb-8">
                        <h1 className="text-gradient text-4xl font-bold mb-4">Todos nuestros coches</h1>
                        <p className="text-dark-300 text-lg">Explora nuestra colección completa de vehículos premium</p>
                    </div>

                    {/* Filtros */}
                    <div className="mb-8 flex flex-wrap gap-4">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Todos
                        </button>
                        <button className="bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            BMW
                        </button>
                        <button className="bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Tesla
                        </button>
                        <button className="bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Audi
                        </button>
                        <button className="bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Eléctricos
                        </button>
                        <button className="bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Híbridos
                        </button>
                    </div>

                    {/* Grid de coches */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {allCars.map((car) => (
                            <div key={car.id} className="relative bg-dark-600 rounded-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-transparent hover:border-red-500">
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
                                        src={car.image}
                                        alt={`${car.brand} ${car.name}`}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                                
                                {/* Información del coche */}
                                <div className="p-4">
                                    <div className="mb-3">
                                        <p className="text-dark-300 text-xs mb-1">{car.brand}</p>
                                        <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
                                        <p className="text-dark-200 text-xs">{car.type}</p>
                                    </div>
                                    
                                    {/* Características destacadas */}
                                    <div className="mb-3">
                                        <span className={`inline-block text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border shadow-lg ${
                                            car.fuel.includes('Eléctrico') ? 'bg-green-600/70 border-green-500/30' :
                                            car.fuel.includes('Híbrido') ? 'bg-blue-600/70 border-blue-500/30' :
                                            car.fuel.includes('Gasolina') ? 'bg-orange-600/70 border-orange-500/30' :
                                            'bg-accent-600/70 border-accent-500/30'
                                        }`}>
                                            {car.fuel}
                                        </span>
                                    </div>
                                    
                                    {/* Precio */}
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-primary-400 font-bold text-lg">Desde {car.price.toLocaleString()} €</p>
                                            {car.originalPrice && (
                                                <p className="text-dark-400 text-xs line-through">{car.originalPrice.toLocaleString()} €</p>
                                            )}
                                        </div>
                                        <Link 
                                            to={`/Coche-detail.tsx`} 
                                            className="bg-primary-600 hover:bg-red-500 hover:text-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
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
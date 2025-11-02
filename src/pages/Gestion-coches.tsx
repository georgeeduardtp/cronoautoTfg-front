import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { useEffect, useState } from 'react';
import type { CarCard } from '@/types/car';
import { confirmationAlert, mostrarAlertaEliminar } from '@/components/Alert';

export default function GestionCoches() {
    const [cars, setCars] = useState<CarCard[]>([]); // Estado para almacenar los coches existentes
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el buscador
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        car_type: '',
        imageUrl: '',
        year: '',
        mileage: '',
        tags: '',
        engine_type: '',
        price: '',
        original_price: '',
        potencia: '',
        transmission: '',
        motor: '',
        etiqueta_ambiental: '',
        description: '',
        propietarios: '',
        puertas: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Convertir tags de string a array
        const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
        
        // Convertimos los datos al formato del backend
        const carData = {
            ...formData,
            year: parseInt(formData.year),
            mileage: parseInt(formData.mileage),
            price: parseInt(formData.price),
            original_price: formData.original_price ? parseInt(formData.original_price) : null, //condicional ya que es opcional
            potencia: parseInt(formData.potencia),
            propietarios: parseInt(formData.propietarios),
            puertas: parseInt(formData.puertas),
            tags: tagsArray
        };

        try {
            console.log('Enviando coche:', carData);
            const response = await fetch('http://localhost:8080/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData)
            });

            if (response.ok) {
                console.log('Coche creado exitosamente');
                // Resetear formulario
                setFormData({
                    brand: '',
                    model: '',
                    car_type: '',
                    imageUrl: '',
                    year: '',
                    mileage: '',
                    tags: '',
                    engine_type: '',
                    price: '',
                    original_price: '',
                    potencia: '',
                    transmission: '',
                    motor: '',
                    etiqueta_ambiental: '',
                    description: '',
                    propietarios: '',
                    puertas: ''
                });
                alert('Coche creado exitosamente');
            } else {
                console.error('Error al crear el coche');
                alert('Error al crear el coche');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión');
        }
    };

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

    // Filtrar coches basado en el término de búsqueda
    const filteredCars = cars.filter((car: CarCard) =>  
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.car_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.engine_type.toLowerCase().includes(searchTerm.toLowerCase())
    );
   
    const handleDeleteCar = async (carId: number) => {
        const result = await confirmationAlert('¿Estás seguro de que deseas eliminar este coche?', 'Esta acción no se puede deshacer.');
        if (!result.isConfirmed) return;
        try {
            await fetch(`http://localhost:8080/cars/${carId}`, {
                method: 'DELETE',
            });
            setCars(prev => prev.filter(car => car.id !== carId));
            console.log('Coche eliminado:', carId);
            mostrarAlertaEliminar();
        } catch (error) {
            console.error('Error al eliminar coche:', error);
            alert('Error al eliminar coche');
        }
    };
     
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Header />
            <div className="bg-dark-950 h-screen flex flex-col">
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                    <div className="flex flex-col lg:flex-row flex-1">
                        {/* Formulario de crear coche */}
                        <div className="bg-black lg:w-1/2 flex flex-col">
                            <div className="p-6 border-b border-gray-800">
                                <h2 className="text-3xl font-bold text-white mb-2">AGREGAR NUEVO</h2>
                                <h1 className="text-4xl font-bold text-red-500">VEHÍCULO</h1>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 scroll-left">
                                <div className="max-w-md mx-auto w-full">
                            
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Información básica */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="brand" className="block text-sm font-medium text-gray-300 mb-1">
                                                Marca*
                                            </label>
                                            <input
                                                type="text"
                                                id="brand"
                                                name="brand"
                                                value={formData.brand}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="BMW, Audi, Tesla..."
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-1">
                                                Modelo*
                                            </label>
                                            <input
                                                type="text"
                                                id="model"
                                                name="model"
                                                value={formData.model}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="Serie 3, A4, Model S..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="car_type" className="block text-sm font-medium text-gray-300 mb-1">
                                            Tipo de vehículo*
                                        </label>
                                        <select
                                            id="car_type"
                                            name="car_type"
                                            value={formData.car_type}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">Selecciona un tipo</option>
                                            <option value="Sedán">Sedán</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="Coupé">Coupé</option>
                                            <option value="Convertible">Convertible</option>
                                            <option value="Familiar">Familiar</option>
                                            <option value="Deportivo">Deportivo</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-1">
                                            URL de la imagen*
                                        </label>
                                        <input
                                            type="url"
                                            id="imageUrl"
                                            name="imageUrl"
                                            value={formData.imageUrl}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder="https://ejemplo.com/imagen.jpg"
                                        />
                                    </div>

                                    {/* Especificaciones del motor */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="engine_type" className="block text-sm font-medium text-gray-300 mb-1">
                                                Tipo de motor*
                                            </label>
                                            <select
                                                id="engine_type"
                                                name="engine_type"
                                                value={formData.engine_type}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                            >
                                                <option value="">Selecciona el tipo</option>
                                                <option value="Gasolina">Gasolina</option>
                                                <option value="Diésel">Diésel</option>
                                                <option value="Híbrido">Híbrido</option>
                                                <option value="Eléctrico">Eléctrico</option>
                                                <option value="Híbrido Enchufable">Híbrido Enchufable</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="potencia" className="block text-sm font-medium text-gray-300 mb-1">
                                                Potencia (CV)*
                                            </label>
                                            <input
                                                type="number"
                                                id="potencia"
                                                name="potencia"
                                                value={formData.potencia}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="150"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="transmission" className="block text-sm font-medium text-gray-300 mb-1">
                                                Transmisión*
                                            </label>
                                            <select
                                                id="transmission"
                                                name="transmission"
                                                value={formData.transmission}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                            >
                                                <option value="">Selecciona la transmisión</option>
                                                <option value="Manual">Manual</option>
                                                <option value="Automática">Automática</option>
                                                <option value="CVT">CVT</option>
                                                <option value="Semiautomática">Semiautomática</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="motor" className="block text-sm font-medium text-gray-300 mb-1">
                                                Motor*
                                            </label>
                                            <input
                                                type="text"
                                                id="motor"
                                                name="motor"
                                                value={formData.motor}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="2.0 TDI, 1.6 TSI..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="etiqueta_ambiental" className="block text-sm font-medium text-gray-300 mb-1">
                                            Etiqueta Ambiental*
                                        </label>
                                        <select
                                            id="etiqueta_ambiental"
                                            name="etiqueta_ambiental"
                                            value={formData.etiqueta_ambiental}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                        >
                                            <option value="">Selecciona la etiqueta</option>
                                            <option value="0">0 (Sin etiqueta)</option>
                                            <option value="B">B (Amarilla)</option>
                                            <option value="C">C (Verde)</option>
                                            <option value="ECO">ECO (Azul y verde)</option>
                                            <option value="CERO">CERO (Azul)</option>
                                        </select>
                                    </div>

                                    {/* Datos del vehículo */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">
                                                Año*
                                            </label>
                                            <input
                                                type="number"
                                                id="year"
                                                name="year"
                                                value={formData.year}
                                                onChange={handleChange}
                                                required
                                                min="1990"
                                                max="2025"
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="2020"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="mileage" className="block text-sm font-medium text-gray-300 mb-1">
                                                Kilometraje*
                                            </label>
                                            <input
                                                type="number"
                                                id="mileage"
                                                name="mileage"
                                                value={formData.mileage}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="50000"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="propietarios" className="block text-sm font-medium text-gray-300 mb-1">
                                                Núm. propietarios*
                                            </label>
                                            <input
                                                type="number"
                                                id="propietarios"
                                                name="propietarios"
                                                value={formData.propietarios}
                                                onChange={handleChange}
                                                required
                                                min="1"
                                                max="10"
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="1"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="puertas" className="block text-sm font-medium text-gray-300 mb-1">
                                                Núm. puertas*
                                            </label>
                                            <select
                                                id="puertas"
                                                name="puertas"
                                                value={formData.puertas}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-black border-0 border-b-2 border-gray-600 text-white focus:outline-none focus:border-red-500 transition-colors"
                                            >
                                                <option value="">Selecciona</option>
                                                <option value="2">2 puertas</option>
                                                <option value="3">3 puertas</option>
                                                <option value="4">4 puertas</option>
                                                <option value="5">5 puertas</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Precios */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">
                                                Precio actual (€)*
                                            </label>
                                            <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="25000"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="original_price" className="block text-sm font-medium text-gray-300 mb-1">
                                                Precio original (€)
                                            </label>
                                            <input
                                                type="number"
                                                id="original_price"
                                                name="original_price"
                                                value={formData.original_price}
                                                onChange={handleChange}
                                                className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                                placeholder="30000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-1">
                                            Etiquetas (separadas por comas)
                                        </label>
                                        <input
                                            type="text"
                                            id="tags"
                                            name="tags"
                                            value={formData.tags}
                                            onChange={handleChange}
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                            placeholder="Premium, Deportivo, Económico"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                                            Descripción*
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={3}
                                            required
                                            className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                            placeholder="Describe las características y estado del vehículo..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 transition-colors duration-300 text-sm tracking-wider mt-6"
                                    >
                                        CREAR VEHÍCULO
                                    </button>
                                </form>
                                </div>
                            </div>
                        </div>

                        {/* Panel de coches existentes */}
                        <div className="bg-dark-950 lg:w-1/2 flex flex-col border-l border-gray-800">
                            <div className="p-6 border-b border-gray-800">
                               
                                
                                {/* Buscador */}
                                <div className="mb-3">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Buscar por marca, modelo, tipo..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                                        />
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Contador de resultados */}
                                <div className="flex justify-between items-center text-sm">
                                    <p className="text-gray-400">
                                        Total: {cars.length} vehículos
                                    </p>
                                    {searchTerm && ( //solo muestra si hay algo escrito
                                        <p className="text-primary-600">
                                            {filteredCars.length} resultado{filteredCars.length !== 1 ? 's' : ''} {/*Si la cantidad es distinta de 1, plural*/}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6"> {/* Con el overflow-y-auto se crea barra de scroll independiente */}
                            
                            <div className="space-y-3">
                                {filteredCars.map((car) => (
                                        <div key={car.id} className="bg-dark-900 border border-gray-700 hover:border-red-500 transition-all duration-300 p-4 flex items-center space-x-4 group">
                                            {/* Imagen del coche */}
                                            <div className="flex-shrink-0">
                                                <img 
                                                    src={car.imageUrl} 
                                                    alt={`${car.brand} ${car.model}`}
                                                    className="w-20 h-16 object-cover rounded"
                                                />
                                            </div>
                                            
                                            {/* Información principal */}
                                            <div className="flex-grow">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-white font-semibold text-lg group-hover:text-red-400 transition-colors">
                                                        {car.brand} {car.model}
                                                    </h4>
                                                    <span className="text-red-500 font-bold text-lg">
                                                        {car.price.toLocaleString()}€
                                                    </span>
                                                </div>
                                                
                                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                                                    <span>ID: {car.id}</span>
                                                    <span>•</span>
                                                    <span>{car.car_type}</span>
                                                    <span>•</span>
                                                    <span>{car.engine_type}</span>
                                                    {car.original_price && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="line-through text-gray-500">
                                                                {car.original_price.toLocaleString()}€
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                
                                                {/* Tags */}
                                                {car.tags && car.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mt-2">
                                                        {car.tags.slice(0, 3).map((tag, index) => (
                                                            <span 
                                                                key={index}
                                                                className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded-full border border-red-600/30"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {car.tags.length > 3 && (
                                                            <span className="text-xs text-gray-500">+{car.tags.length - 3} más</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* Botones de acción */}
                                            <div className="flex-shrink-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity"> {/* Le asigno opacidad 0 y se cambia cuando hay hover con group-hover */}
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded text-xs">
                                                    ✏️
                                                </button>
                                                <button 
                                                onClick={() => handleDeleteCar(car.id)}
                                                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded text-xs"  
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }

                                {/* Mensaje cuando no hay resultados */}
                                {filteredCars.length === 0 && searchTerm && ( //solo salta la condicion si hay algo escrito y no encuentra coincidencias
                                    <div className="text-center py-12">
                                        <div className="text-gray-400 text-lg mb-2">No se encontraron coches</div>
                                        <div className="text-gray-500">Intenta con otros términos de búsqueda</div>
                                    </div>
                                )}
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
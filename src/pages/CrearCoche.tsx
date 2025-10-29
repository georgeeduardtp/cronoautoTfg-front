import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState } from 'react';

export default function CrearCoche() {
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

    return (
        <>
            <Header />
            <div className="bg-dark-950 min-h-screen">
                <div className="max-w-none">
                    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
                        {/* Formulario de crear coche */}
                        <div className="bg-black p-12 flex flex-col justify-center lg:w-1/2 overflow-y-auto">
                            <div className="max-w-md mx-auto w-full">
                                <h2 className="text-3xl font-bold text-white mb-2">AGREGAR NUEVO</h2>
                                <h1 className="text-4xl font-bold text-red-500 mb-6">VEHÍCULO</h1>
                            
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

                        {/* Imagen de fondo */}
                        <div 
                            className="bg-cover bg-center bg-no-repeat relative flex items-center justify-center h-64 sm:h-80 lg:h-auto lg:w-1/2"
                            style={{
                                backgroundImage: 'url(https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-red-900/40"></div>
                            <div className="relative z-10 text-center text-white">
                                <h3 className="text-2xl font-bold mb-4">Agregar Nuevo Vehículo</h3>
                                <p className="text-lg opacity-90">Completa el formulario para añadir un nuevo coche a nuestra colección</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ano={2025} />
        </>
    );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShowcaseStock from "@/components/ShowcaseStock";


export default function Home() {
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
        <ShowcaseStock />
        <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-gradient text-3xl font-bold mb-8">¿Por qué elegir Crono Auto?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-dark-600 p-6 rounded-xl shadow-medium text-center border border-dark-500 hover:border-primary-600 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 text-white">Variedad</h3>
        <p className="text-dark-200">Accede a una amplia selección de vehículos de diferentes marcas y modelos.</p>
        </div>
        <div className="bg-dark-600 p-6 rounded-xl shadow-medium text-center border border-dark-500 hover:border-primary-600 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 text-white">Precios Competitivos</h3>
        <p className="text-dark-200">Compara precios y encuentra las mejores ofertas del mercado.</p>
        </div>
        <div className="bg-dark-600 p-6 rounded-xl shadow-medium text-center border border-dark-500 hover:border-primary-600 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 text-white">Facilidad de Uso</h3>
        <p className="text-dark-200">Navega por nuestra plataforma intuitiva y encuentra tu coche ideal en minutos.</p>
        </div>
        </div>
        </section>
      </main>
      <Footer ano={2024} />
      

    </> //etiqueta de cierre del fragmento, 
    // permitiendo devolver múltiples elementos sin un contenedor adicional
  );
}

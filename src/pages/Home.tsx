import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShowcaseStock from "@/components/ShowcaseStock";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
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
        
      </main>
      <Footer ano={2025} />
      

    </> //etiqueta de cierre del fragmento, 
    // permitiendo devolver múltiples elementos sin un contenedor adicional
  );
}

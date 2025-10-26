import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold mb-4">Crono Auto</h1>
        <p className="text-neutral-600 mb-8 max-w-xl">La plataforma integral de importacion de vehiculos por encargo</p>
      </main>
      <Footer ano={2024} />

    </> //etiqueta de cierre del fragmento, 
    // permitiendo devolver múltiples elementos sin un contenedor adicional
  );
}

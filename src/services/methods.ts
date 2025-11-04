import type { CarCardDestacado } from "@/types/car";

const baseUrlApi:string = "http://localhost:8080";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const listCars = async (): Promise<CarCardDestacado[]> => {
        await sleep(500); // Simula una demora de 500 ms
    const response = await fetch(`${baseUrlApi}/cars`,
    {
        method:"GET",
    });
    if(!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const artists: CarCardDestacado[] = await response.json();
    return artists;
}
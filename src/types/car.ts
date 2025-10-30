export type CarCard = {
    id: number;
    brand: string;
    model: string;
    car_type: string;
    imageUrl: string;
    tags: string[];
    engine_type: string;
    price: number;
    original_price: number;
};

export type CarCardDestacado = {
    id: number;
    brand: string;
    model: string;
    car_type: string;
    imageUrl: string;
    tags: string[];
    engine_type: string;
    price: number;
    original_price: number;
    destacado: boolean;
};

export type CarDetail = {
    id: number;
    brand: string;
    model: string;
    car_type: string;
    imageUrl: string;
    year: number;
    mileage: number;
    tags: string[];
    engine_type: string;
    price: number;
    original_price: number;
    potencia: number;
    transmission: string;
    motor: string;
    etiqueta_ambiental: string;
    description: string;
    propietarios: number;
    puertas: number;
};

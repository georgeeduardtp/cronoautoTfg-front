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
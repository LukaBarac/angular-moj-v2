export interface Product {
    id: string;
    name: string;
    color: string;
    price: number;
    warantyExpiryDate?: Date;
    availability?: 'In stock' | 'Out of stock' | null;
}
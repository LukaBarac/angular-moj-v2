import { Product } from "./product.model";

export class ProductService {
    private products: Product [] = [
        {
            id: 'TV',
            name: 'LG tv',
            color: 'black',
            price: 10400,
            warantyExpiryDate: new Date(),
            availability: 'In stock'
        },
        {
            id: 'TV',
            name: 'Samsung tv',
            color: 'white',
            price: 30200,
            warantyExpiryDate: new Date(),
            availability: 'In stock'
        },
        {
            id: 'Phone',
            name: 'Samsung phone',
            color: 'black',
            price: 5312,
            warantyExpiryDate: new Date(),
            availability: 'Out of stock'
        },
        {
            id: 'Phone',
            name: 'Xiaomi redmi',
            color: 'blue',
            price: 1342,
            warantyExpiryDate: new Date(),
            availability: 'In stock'
        },
        {
            id: 'Phone',
            name: 'Apple iphone',
            color: 'yellow',
            price: 9873,
            warantyExpiryDate: new Date(),
            availability: 'In stock'
        },
        {
            id: 'Phone',
            name: 'Xiaomi note',
            color: 'red',
            price: 2315,
            warantyExpiryDate: new Date(),
            availability: 'Out of stock'
        }
        
    ];

    getProducts(){
        return this.products;
    }


}
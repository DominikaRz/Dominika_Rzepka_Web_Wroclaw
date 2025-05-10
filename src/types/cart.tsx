import { Product } from "./product";

//interface for the cart to not repeat the cart items
export interface CartItem{
    product: Product;
    quantity: number;
}
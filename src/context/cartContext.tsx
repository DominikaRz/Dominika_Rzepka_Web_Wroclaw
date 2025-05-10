//not used, but it is another possibility 
import {useState, createContext, ReactNode} from 'react';
import { Product } from '../types/product';

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (products: Product) => {
        setCartItems((prev) => [...prev, products]);
    }

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
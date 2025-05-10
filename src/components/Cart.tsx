import React from "react";
import { Product, formatPrice } from "../types/product";
import { CartItem } from "../types/cart";

interface Props {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    decreaseFromCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    total: number;
}

function Cart({cartItems, total, addToCart, decreaseFromCart, removeFromCart} : Props){
    total = cartItems.reduce((sum, item) => sum + formatPrice(item.product.price) * item.quantity, 0);

    return (
        <div>
            <h2>Twój koszyk:</h2>
            {cartItems.length === 0 
                ? <p>jest aktualnie pusty. <br/>Aby wybrać produkt kliknij przycisk 'Dodaj do koszyka' na stronie Produktów</p>
                :
                <>
                    <table className="centerTable">
                        <thead>
                            <tr>
                                <th>Nazwa produktu</th>
                                <th>Cena</th>
                                <th>Ilość</th>
                                <th>Cena produktów</th>
                                <th>Usuń produkt</th>
                            </tr>
                        </thead>
                        <tbody>    
                        {cartItems.map(item => (
                            <tr key={item.product.id}>
                                <td className="ptd">{item.product.name}</td>
                                <td className="ptd">{formatPrice(item.product.price)} zł</td>
                                <td className="ptd">
                                    {/* <p>{item.quantity}</p> */}
                                    <div>
                                        <button onClick={() => decreaseFromCart(item.product.id)}>-</button>
                                        <input type="number" id="quantity" name="quantity" value={item.quantity}/>
                                        <button onClick={() => addToCart(item.product)}>+</button>
                                    </div>
                                </td>
                                <td className="ptd">{(formatPrice(item.product.price)*item.quantity).toFixed(2)} zł</td>
                                <td className="ptd"><button onClick={() => removeFromCart(item.product.id)}>Remove</button></td>
                            </tr>
                                
                        ))}
                        </tbody>
                    </table>
                    <h3>Łączny koszt: {total.toFixed(2)} zł</h3>
                </>
            }
        </div>
    )

}

export default Cart;
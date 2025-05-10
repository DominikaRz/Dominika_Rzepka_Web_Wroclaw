import React from "react";
import { formatPrice } from "../types/product";
import { CartItem } from "../types/cart";

interface Props {
    cartItems: CartItem[];
    total: number;
}

function Checkout({cartItems, total} : Props){
    total = cartItems.reduce((sum, item) => sum + formatPrice(item.product.price) * item.quantity, 0);


    //the summary must be in new HTML, not the part of SPA. 
    // I know that can be done by setting the context, but I think the local storage 
    // will be better for this. Can be done also with routes 
    const handleSummary = () => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        window.location.href= '/summary.html';
    }

    return (
        <div>
            <h2>Twoje zamówienie:</h2>
            {cartItems.length === 0 
            ? <p>nie jest jeszcze gotowe. Proszę, wybierz produkty, które chcesz kupić na stronie Produkty.</p> 
            :
            <>
                <table className="centerTable">
                    <thead>    
                        <tr>
                            <th>Nazwa produktu</th>
                            <th>Cena</th>
                            <th>Ilość</th>
                            <th>Suma częściowa</th>
                        </tr>
                    </thead>
                    <tbody>  
                    {cartItems.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{formatPrice(item.product.price)} zł</td>
                            <td>
                                <p>{item.quantity}</p> 
                            </td>
                            <td>{(formatPrice(item.product.price)*item.quantity).toFixed(2)} zł</td>
                        </tr>
                            
                    ))}
                    </tbody>
                </table>
                <h3>Łączny koszt: {total.toFixed(2)} zł</h3>
                <div>
                    <button onClick={() => handleSummary() }>Złóż zamówienie</button>
                </div>
            </>
            }
        </div>
    )

}

export default Checkout;;
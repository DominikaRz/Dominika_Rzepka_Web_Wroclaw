import React from "react";
import { Product, products, formatPrice } from "../types/product";

interface Props {
    addToCart: (product: Product) => void;
}

function ProductList( {addToCart}: Props) {
    return(
        <div>
            <h2>Lista produktów sklepu:</h2>
            {products.map(prod => (
                <div key={prod.id} className="product">
                    <p><b>{prod.name}</b></p>
                    <p>Cena: {formatPrice(prod.price)}zł</p>
                    <button onClick={() => addToCart(prod)}>Dodaj do koszyka</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;
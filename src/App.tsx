import React, { useState, useEffect } from 'react';
import './App.css';

import { Product, products } from './types/product';
import { CartItem } from './types/cart';

import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';





function App() {
  //variable for changing the tabs (
  //  possibility to change: 
  //    0 - product list,
  //    1 - cart,
  //    2 - checkout
  // )  
  const [tab, setTab] = useState(0);
  //setting up cart if something is in lcal storage or set empty cart
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>{ 
    try{
      const storedData = localStorage.getItem('cart');
      return storedData ? JSON.parse(storedData) : [];
    }
    catch(e) {
      console.log('Koszyk jest pusty.');
    }
  });
  //set cart to local storage on change of cartItem
  useEffect(() => { localStorage.setItem('cart', JSON.stringify(cartItems))}, [cartItems]);

  //functionality of the cart:
    //adding the product to cart
    const addToCart = (product: Product) => {
      setCartItems(prev => {
        const existing = prev.find(item => item.product.id === product.id);
        if(existing){
          return prev.map(item =>
            item.product.id === product.id
            ? {...item, quantity: item.quantity +1}
            : item
          )
        }
        else {
          return [...prev, {product, quantity: 1}];
        }
      })
    }

    //decreasing product from cart
    const decreaseFromCart = (productId: number) => {
      setCartItems(prev =>
        prev.map(item =>
          item.product.id === productId
          ? {...item, quantity: item.quantity - 1 }
          : item
        )
        .filter(item => item.quantity > 0 )
      )
    }

    //remove from cart
    const removeFromCart = (productId: number) => {
      setCartItems(prev =>
        prev.filter(item => item.product.id !== productId)
      )
    }

    //total amount of money to pay for order
    const [total, setTotal] = useState(0.00);
    


  return (
    <div className="App">
      <header className="App-header">
        {/* tabs / navbar for user for better navigation */}
        <ul>
          <li><button onClick={() => setTab(0)}>Produkty</button></li>
          <li><button onClick={() => setTab(1)}>Koszyk</button></li>
          <li><button onClick={() => setTab(2)}>Podsumowanie</button></li>
        </ul>
      </header>
      <div>
        {/* Products list */}
        {tab === 0 && 
          <div>
            <button onClick={() => setTab(1)}>Przejdź do koszyka</button>
            <ProductList addToCart={addToCart}/>
          </div>  
        }
        {/* Cart */}
        {tab === 1 && 
          <div>
            <button onClick={() => setTab(0)}>Wybierz produkty</button>
            <Cart cartItems={cartItems} total={total} addToCart={addToCart} decreaseFromCart={decreaseFromCart} removeFromCart={removeFromCart}/>
            <button onClick={() => setTab(2)}>Podsumowanie zamówienia</button>
            
          </div>  
        }
        {/* Checkout */}
        {tab === 2 && 
          <div>
            <button onClick={() => setTab(1)}>Powrót do koszyka</button>
            <Checkout cartItems={cartItems} total={total}/>
          </div>  
        }
      </div>
    </div>
  );
}

export default App;

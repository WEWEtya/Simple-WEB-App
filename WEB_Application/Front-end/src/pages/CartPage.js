import React from "react";
import { useCart } from "../components/Navigation/Cart"
import "../styles/CartPage/cartPage.css"

const CartPage = () => {
    const { cartItems, removeFromCart, handleQuantityChange} = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price || 0) * item.quantity, 0);
    const handleCheckout = () => {

    };

    return (
        <div className="cart_page">   
            <div className="cart_left">
                <h1>Your Cart</h1>

                {cartItems.lenght === 0 ? (
                    <p>Your cart is empty.</p>
                ) : ( 
                    <ul className="cart_items">   
                        {cartItems.map((item, index) => (
                           <li key={index} className="cart_item">

                                <img 
                                    src={item.images?.[0]?.imageUrl} 
                                    alt="item.name" 
                                    className="cart_item-img">
                                </img>

                                <div className="cart_item-info">
                                    <h2>{item.name}</h2>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>

                                <div className="quantity_controls">
                                    <select
                                        id={`quantity-${item.id}`}
                                        value={item.quantity}  // Set the current quantity
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    >
                                        {[...Array(9).keys()].map(i => (
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                        ))}
                                     </select>
                                </div>
                                <button 
                                    className="remove_button"
                                    onClick={() => removeFromCart(item.id)}>
                                        🗑️
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="cart_right">
                <div className="cart_summary">
                    <h2>Total: ${totalPrice.toFixed(2)}</h2>
                    <button className="buy_button" onClick={handleCheckout}>Buy Now</button>
                </div>
            </div>
            

        </div>
    );
}

export default CartPage;
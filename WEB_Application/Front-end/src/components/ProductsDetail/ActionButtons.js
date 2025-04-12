import React from "react";
import { useCart } from "../Navigation/Cart";

const ActionButtons = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="buttons">
            <button className="add_to_cart" onClick={() => addToCart(product)}> Add to Cart</button>
            <button className="buy_now" onClick={() => addToCart(product)}> Buy Now</button>
            <p>Free Shipping over $50</p>
        </div>
    );
};

export default ActionButtons;

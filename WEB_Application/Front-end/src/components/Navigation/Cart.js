import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cartItems");
        return stored ? JSON.parse(stored) : [];
    });

    const addToCart = (product) => {
        const updatedItems = [...cartItems, product];
        setCartItems(updatedItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

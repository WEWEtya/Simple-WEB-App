import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const hasInitialized = sessionStorage.getItem("cartInitialized");

        if (!hasInitialized) {
            localStorage.removeItem("cartItems");
            sessionStorage.setItem("cartInitialized", "true");
        }

        const stored = localStorage.getItem("cartItems");
        setCartItems(stored ? JSON.parse(stored) : []);

    }, []);

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

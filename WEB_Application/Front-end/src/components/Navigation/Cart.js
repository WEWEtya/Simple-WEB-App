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

    // Add or increment the quantity of an item in the cart
    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
        if (existingItemIndex !== -1) {
            // Item already exists, increment quantity
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity += 1;
            updatedItems[existingItemIndex].totalPrice = updatedItems[existingItemIndex].quantity * parseFloat(updatedItems[existingItemIndex].price);
    
            setCartItems(updatedItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        } else {
            // Item doesn't exist, add new item with quantity 1
            const newItem = {
                ...product,
                quantity: 1,
                totalPrice: parseFloat(product.price) // Calculate the total price
            };
    
            const updatedItems = [...cartItems, newItem];
            setCartItems(updatedItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        }
    };
    

    // Remove item from cart
    const removeFromCart = (productId) => {
        const updatedItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    };

    // Handle quantity change
    const handleQuantityChange = (productId, quantity) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item => 
                item.id === productId ? { ...item, quantity } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, handleQuantityChange}}>
            {children}
        </CartContext.Provider>
    );
};

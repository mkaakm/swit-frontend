'use client';

import { createContext, useCallback } from 'react';

import useLocalStorage from "../../shared/hooks/useLocalStorage";

export const cartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage("swit-cart", []);

    const addToCart = useCallback((data) => setCart(prevCart => {
        const itemIndex = prevCart.findIndex(item => item.id === data.id);
        if(itemIndex === -1) {
            const newItem = {
                ...data,
                count: 1,
            };
            return [newItem, ...prevCart];
        }
        const fullCopy = prevCart.map(item => ({...item}));
        fullCopy[itemIndex].count += 1;

        return fullCopy;
    }), [setCart]);

    const clearCart = useCallback(()=> setCart([]), [setCart]);

    const increaseItem = useCallback((id) => setCart(prevCart => {
        const fullCopy = prevCart.map(item => ({...item}));
        const itemIndex = prevCart.findIndex(item => item.id === id);
        fullCopy[itemIndex].count += 1;

        return fullCopy;
    }), [setCart]);

    const decreaseItem = useCallback((id) => setCart(prevCart => {
        const fullCopy = prevCart.map(item => ({...item}));
        const itemIndex = prevCart.findIndex(item => item.id === id);
        fullCopy[itemIndex].count -= 1;
        if(!fullCopy[itemIndex].count) {
            fullCopy.splice(itemIndex, 1)
        }

        return fullCopy;
    }), [setCart]);

    const removeItem = useCallback((id) => setCart(prevCart => prevCart.filter(item => item.id !== id)), [setCart]);

    const value = {
        cart,
        addToCart,
        clearCart,
        increaseItem,
        decreaseItem,
        removeItem,
    }

    return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

export default CartProvider;
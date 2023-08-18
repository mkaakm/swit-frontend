'use client';

import { createContext, useCallback } from 'react';

import useLocalStorage from "../../shared/hooks/useLocalStorage";

export const favoriteContext = createContext([]);

const FavoriteProvider = ({children}) => {
    const [favorite, setFavorite] = useLocalStorage("swit-favorite", []);

    const toggleFavorite = useCallback((data) => setFavorite(prevFavorite => {
        const itemIndex = prevFavorite.findIndex(({id}) => id === data.id);
        if(itemIndex === -1) {
            return [data, ...prevFavorite];
        }

        const result = prevFavorite.filter(({id}) => id !== data.id);

        return result;
    }), [setFavorite]);

    const value = {
        favorite,
        toggleFavorite
    }

    return <favoriteContext.Provider value={value}>{children}</favoriteContext.Provider>
}

export default FavoriteProvider;
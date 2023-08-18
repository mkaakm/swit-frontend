'use client'

import {useState, useEffect, useCallback} from "react";

import useFavorite from "../../hooks/useFavorite";

import styles from "./like-icon.module.scss";

const LikeIcon = ({product}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const {favorite, toggleFavorite} = useFavorite();

    useEffect(()=> {
        setIsFavorite(Boolean(favorite.find(({id}) => id === product.id)));
    }, [favorite]);

    const fullClassName = isFavorite ? `${styles['product-btn']} ${styles.active}` : styles['product-btn'];

    const handleClick = useCallback(() => toggleFavorite(product), []);

    return (
        <span onClick={handleClick} className={fullClassName}>
            <svg className={`${styles['product-btn-icon']} ${styles['_like']}`}>
                <use href='/icons/product-buttons.svg#icon-like'/>
            </svg>
        </span>
    )
}

export default LikeIcon;
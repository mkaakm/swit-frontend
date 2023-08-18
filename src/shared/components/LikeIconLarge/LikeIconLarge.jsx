'use client'

import {useCallback} from "react";

import useFavorite from "../../hooks/useFavorite";

import styles from "./like-icon-large.module.scss";

const LikeIconLarge = ({product}) => {
   const {favorite, toggleFavorite} = useFavorite();

    const isFavorite = Boolean(favorite.find(({id}) => id === product.id));

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

export default LikeIconLarge;
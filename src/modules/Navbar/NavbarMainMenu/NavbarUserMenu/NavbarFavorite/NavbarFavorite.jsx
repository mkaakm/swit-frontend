'use client';

import {useState, useEffect} from "react";
import Link from "next/link";

import useFavorite from "../../../../../shared/hooks/useFavorite";

import styles from "../NavbarUserMenu.module.scss";

const NavbarFavorite = () => {
    const [showCounter, setShowCounter] = useState(false);

    const {favorite} = useFavorite();

    const {length: counter} = favorite;

    useEffect(()=> {
        setShowCounter(Boolean(counter));
    }, [favorite])

    return (
        <li className={styles['item']}>
            <Link href="/favorite-products" className={styles['link']}>
                <div className={styles['icon-wrapper']}>
                    <svg className={styles['icon']}>
                        <use href={`/icons/user-menu.svg#icon-favourite`}/>
                    </svg>
                    {showCounter && <div className={styles['counter']}>{counter}</div>}
                </div>
                <p className={styles.cartName}>Обране</p>
            </Link>
        </li>
    )
}

export default NavbarFavorite;
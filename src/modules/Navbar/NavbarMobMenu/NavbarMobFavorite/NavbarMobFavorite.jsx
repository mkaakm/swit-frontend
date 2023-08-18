'use client';

import {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

import useFavorite from "../../../../shared/hooks/useFavorite";

import styles from "./NavbarMobFavorite.module.scss";

const NavbarMobFavorite = ({toggle}) => {
    const [showCounter, setShowCounter] = useState(false);
    const {favorite} = useFavorite();
    const router = useRouter();

    const {length: counter} = favorite;

    useEffect(()=> {
        setShowCounter(Boolean(counter));
    }, [favorite]);

    const handleClick = useCallback(()=> {
        toggle();
        router.push("/favorite-products");
    }, []);

    return (
            <li className={styles['item']}>
                <div onClick={handleClick} className={styles['link']}>
                    <div className={styles['icon-wrapper']}>
                        <svg className={styles['icon']}>
                            <use href={`/icons/user-menu.svg#icon-favourite`}/>
                        </svg>
                        {showCounter && <div className={styles['counter']}>{counter}</div>}
                    </div>
                </div>
            </li>
    )
}

export default NavbarMobFavorite;
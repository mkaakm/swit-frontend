'use client';

import {useState, useCallback} from "react";
import Link from 'next/link';

import NavbarMobMenuList from './NavbarMobMenuList';
import NavbarMobCart from "./NavbarMobCart";
import NavbarMobSearch from "./NavbarMobSearch";

import styles from './NavbarMobMenu.module.scss';

const NavbarMobMenu = ({ menu }) => {

    const [state, setState] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = useCallback(()=> setShowSearch(prevState => !prevState), [setShowSearch])

    const toggle = () => {
        setState(prevState => !prevState);
    };

    const isActive = state ? "active" : "";

    return (
        <div className={styles['section']}>
            {showSearch && <NavbarMobSearch close={toggleSearch} placeholder="Пошук" />}
            <svg onClick={toggle} className={styles['icon']}>
                <use href='/icons/menu-btn.svg#icon-menu-btn' />
            </svg>
            <a href="tel:+380445414313">
                <svg className={styles['icon']}>
                    <use href='/icons/nav-phone.svg#icon-nav-phone' />
                </svg>
            </a>
            <Link href='/' className={styles['logo']}>
                    <img className={styles['logo-icon']} src="/icons/logo.svg" alt="logo" />
            </Link>
            <span>
                <svg onClick={toggleSearch} className={styles['icon']}>
                    <use href='/icons/nav-search.svg#icon-nav-search' />
                </svg>
            </span>
            <NavbarMobCart />
            <NavbarMobMenuList toggle={toggle} isActive={isActive} menu={menu} />
            <div className={`${styles['menu-close']} ${styles[isActive]}`} onClick={toggle}>
                <svg className={styles['icon']}>
                    <use href='/icons/menu-btn.svg#icon-cross' />
                </svg>
            </div>
        </div>
    )
}

export default NavbarMobMenu;
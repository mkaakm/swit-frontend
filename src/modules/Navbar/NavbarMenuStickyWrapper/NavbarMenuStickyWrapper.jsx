'use client';

import {useEffect} from "react";

import styles from './navbar-menu-sticky-wrapper.module.scss';

const isSticky = () => {
    const header = document.querySelector(`.${styles.menu}`);
    const scrollTop = window.scrollY;
    scrollTop >= 133 ? header.classList.add(styles['scrolled']) : header.classList.remove(styles['scrolled']);
};

const NavbarMenuStickyWrapper = ({children}) => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    return (
        <div className={styles.menu}>
            {children}
        </div>
    )
}

export default NavbarMenuStickyWrapper;
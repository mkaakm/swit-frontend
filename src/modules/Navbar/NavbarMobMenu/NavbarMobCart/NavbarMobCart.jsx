'use client';

import {useState, useEffect, useCallback} from "react";

import Modal from "../../../Modal";
import Cart from "../../../Cart";

import useCart from "../../../../shared/hooks/useCart";

import styles from "./NavbarMobCart.module.scss";

const NavbarMobCart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [showCounter, setShowCounter] = useState(false);

    const {cart} = useCart();

    const counter = cart.reduce((acum, {count}) => acum + count, 0);

    useEffect(()=> {
        setShowCounter(Boolean(counter));
    }, [cart]);

    const toogleCart = useCallback(()=> setCartOpen(prevState => !prevState) , [])

    return (
        <>
            <li className={styles['item']}>
                <div onClick={toogleCart} className={styles['link']}>
                    <div className={styles['icon-wrapper']}>
                        <svg className={styles['icon']}>
                            <use href={`/icons/user-menu.svg#icon-basket`}/>
                        </svg>
                        {showCounter && <div className={styles['counter']}>{counter}</div>}
                    </div>
                </div>
            </li>
            {cartOpen && <Modal close={toogleCart}><Cart goBack={toogleCart} /></Modal>}
        </>
    )
}

export default NavbarMobCart;
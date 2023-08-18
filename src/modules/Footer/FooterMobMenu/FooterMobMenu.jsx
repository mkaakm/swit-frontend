'use client';

import { useState, useRef } from "react";

import styles from './FooterMobMenu.module.scss';

const FooterMobMenu = ({ mobMenu }) => {

    const mainMenu = mobMenu["main-menu"];
    const paymentMenu = mobMenu["bottom-menu"].payment.list;

    const [openMenuIdx, setOpenMenuIdx] = useState(false);

    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const menuLists = mainMenu.map(({ id, title, list }, index) => {

        const elRef = useRef(null);

        const isActive = (index === openMenuIdx) ? "active" : "";

        let elementStyle = {};
        if (elRef.current && (index === openMenuIdx)) {
            const { style, scrollHeight } = elRef.current;
            elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
        }

        const menuElements = list.map(({ id, link, text, icon }) => {
            const iconElement = (icon) ? (
                <svg className={styles['icon']}>
                    <use href={`/icons/footer-contacts.svg${icon}`} />
                </svg>
            ) : null;
            return (
                <li key={id} className={styles['item']}>
                    <a href={link} className={styles['link']}>
                        {iconElement}
                        {text}
                    </a>
                </li>
            )
        })

        return (
            <div key={id} className={styles['menu']}>
                <h3 className={`${styles['title']} ${styles[isActive]}`} onClick={() => toggle(index)}>{title}</h3>
                <ul className={styles['dropdown']} ref={elRef} style={elementStyle}>
                    {menuElements}
                </ul>
            </div>
        )
    });

    const paymentList = paymentMenu.map(({ id, icon }) => {
        return (
            <li key={id} className={styles['payment-item']}>
                <svg className={styles['payment-icon']}>
                    <use href={`/icons/payment.svg${icon}`} />
                </svg>
            </li>
        )
    });

    return (
        <div className={styles['section']}>
            {menuLists}
            <ul className={styles['payment-list']}>
                {paymentList}
            </ul>
        </div>
    )
}

export default FooterMobMenu;
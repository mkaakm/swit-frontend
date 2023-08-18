import { useState, useRef } from "react";

import styles from './NavbarMobMenuProducts.module.scss';

const NavbarMobMenuProducts = ({ productMenuList }) => {

    const [openMenuIdx, setOpenMenuIdx] = useState(false);

    const toggle = (idx) => {
        setOpenMenuIdx(prevState => {
            return (prevState === idx) ? false : idx;
        });
    };

    const productMenuElements = productMenuList.map(({ id, link, text, list = false }, index) => {
        if (list) {

            const elRef = useRef(null);

            const isActive = (index === openMenuIdx) ? "active" : "";

            let elementStyle = {};
            if (elRef.current && (index === openMenuIdx)) {
                const { style, scrollHeight } = elRef.current;
                elementStyle.maxHeight = style.maxHeight ? null : `${scrollHeight}px`;
            }

            const subMenuElements = list.map(({ id, link, text }) => {
                return (
                    <li key={id} className={styles['sub-item']}>
                        <a href={link} className={styles['sub-link']}>{text}</a>
                    </li>
                )
            });

            return (
                <li key={id} className={`${styles['item']} ${styles[isActive]}`} onClick={() => toggle(index)}>
                    <p className={styles['link']}>{text}</p>
                    <div className={styles['dropdown']} ref={elRef} style={elementStyle}>
                        <ul className={styles['sub-menu']} >
                            {subMenuElements}
                        </ul>
                    </div>
                </li>
            )
        } else {
            return (
                <li key={id} className={styles['item']}>
                    <a href={link} className={styles['link']}>{text}</a>
                </li>
            )
        }
    })
    
    return (
        <ul className={styles['list']}>
            {productMenuElements}
        </ul>
    )
}

export default NavbarMobMenuProducts;
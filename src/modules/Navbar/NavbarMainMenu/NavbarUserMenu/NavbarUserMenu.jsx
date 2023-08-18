import Link from "next/link";

import NavbarFavorite from "./NavbarFavorite";
import NavbarCart from "./NavbarCart";

import styles from './NavbarUserMenu.module.scss';

const NavbarUserMenu = ({ userMenuList }) => {

    const userMenuElements = userMenuList.map(({ id, img, link = "#", text, counter }) => {
        const style = id === "1" ? {fontWeight: "bold", fontSize: "12px"} : {};
        return (
            <li key={id} className={styles['item']}>
                <Link href={link} className={styles['link']}>
                    <div className={styles['icon-wrapper']}>
                        <svg className={styles['icon']}>
                            <use href={`/icons/user-menu.svg#${img}`} />
                        </svg>
                        {/*{(counter) ? <span className={styles['counter']}>{counter}</span> : ''}*/}
                    </div>
                    <p style={style}>{text}</p>
                </Link>
            </li>
        )
    })

    return (
        <ul className={styles['list']}>
            {userMenuElements}
            <NavbarFavorite />
            <NavbarCart />
        </ul>
    )
}

export default NavbarUserMenu;

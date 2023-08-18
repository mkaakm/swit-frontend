import NavbarMobFavorite from "../../NavbarMobFavorite";

import styles from './NavbarMobMenuUser.module.scss';

const NavbarMobMenuUser = ({ toggle, userMenuList }) => {

    const userMenuElements = userMenuList.map(({ id, img, link, counter, mobile }) => {
        if (mobile) {
            return (
                <li key={id} className={styles['item']}>
                    <a href={link} className={styles['link']}>
                        <div className={styles['icon-wrapper']}>
                            <svg className={styles['icon']}>
                                <use href={`/icons/user-menu.svg#${img}`} />
                            </svg>
                            {(counter) ? <span className={styles['counter']}>{counter}</span> : ''}
                        </div>
                    </a>
                </li>
            )
        } else {
            return null
        }
    })

    return (
        <ul className={styles['list']}>
            {userMenuElements}
            <NavbarMobFavorite toggle={toggle} />
        </ul>
    )
}

export default NavbarMobMenuUser;
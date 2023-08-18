import styles from './NavbarContacts.module.scss';

const NavbarContacts = () => {
    return (
        <ul className={styles['list']}>
            <li className={styles['item']}>
                <svg className={styles['icon']}>
                    <use href="/icons/nav-phone.svg#icon-nav-phone" />
                </svg>
                <a href="tel:+380445414313" className={styles['link']}>+38 (044) 541-43-13</a>
            </li>
            <li className={styles['item']}>
                <svg className={styles['icon']}>
                    <use href="/icons/nav-phone.svg#icon-nav-phone" />
                </svg>
                <a href="tel:+380504774277" className={styles['link']}>+38 (050) 477-42-77</a>
            </li>
        </ul>
    )
}

export default NavbarContacts;
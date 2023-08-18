import Link from 'next/link';

import styles from './NavbarProductMenu.module.scss';

const NavbarProductMenu = ({ productMenuList }) => {

    const productMenuElements = productMenuList.map(({ id, link, text, list = false }) => {
        if (list) {

            const subMenuElements = list.map(({ id, link, text, list }) => {
                let submenu = null;
                if(list) {
                    submenu = list.map(({id, link, text}) => {
                        return (
                            <li key={id} className={styles['sub-sub-menu-item']}>
                                <Link href={link} className={styles['sub-sub-menu-link']}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })
                }
                return (
                    <li key={id} className={styles['sub-item']}>
                        <Link href={link} className={styles['sub-link']}>
                            {text}
                        </Link>
                        {submenu && <ul className={styles['sub-sub-menu']}>{submenu}</ul>}
                    </li>
                )
            });

            return (
                <li key={id} className={styles['item']}>
                    <Link href={link} className={styles['link']}>
                        {text}
                    </Link>
                    <ul className={styles['sub-menu']}>
                        {subMenuElements}
                    </ul>
                </li>
            )
        } else {
            return (
                <li key={id} className={styles['item']}>
                    <Link href={link} className={styles['link']}>{text}</Link>
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

export default NavbarProductMenu;

import Link from 'next/link';

import styles from './NavbarInfoMenu.module.scss';

const NavbarInfoMenu = ({ infoMenuList }) => {

    const menuElements = infoMenuList.map(({ id, link, text }) => {
        return (
            <li key={id} className={styles['item']}>
                <Link href={link} className={styles['link']}>
                    {text}
                </Link>
            </li>
        )
    });

    return (
        <ul className={styles['list']}>
            {menuElements}
        </ul>
    )
}

export default NavbarInfoMenu;
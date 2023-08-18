import styles from './NavbarMobMenuInfo.module.scss';

const NavbarMobMenuInfo = ({ infoMenuList }) => {
    
    const menuElements = infoMenuList.map(({ id, link, text }) => {
        return (
            <li key={id} className={styles['item']}>
                <a href={link} className={styles['link']}>{text}</a>
            </li>
        )
    });

    return (
        <ul className={styles['list']}>
            {menuElements}
        </ul>
    )
}

export default NavbarMobMenuInfo;
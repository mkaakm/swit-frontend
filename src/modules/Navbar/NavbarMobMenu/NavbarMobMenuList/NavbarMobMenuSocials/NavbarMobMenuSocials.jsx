import styles from './NavbarMobMenuSocials.module.scss';

const NavbarMobMenuSocials = ({ socialsList }) => {

    const socialsElements = socialsList.map(({ id, link, icon }) => {
        return (
            <li key={id} className={styles['item']}>
                <a href={link}>
                    <svg className={styles['icon']}>
                        <use href={`/icons/socials.svg${icon}`} />
                    </svg>
                </a>
            </li>
        )
    })

    return (
        <ul className={styles['list']}>
            {socialsElements}
        </ul>
    )
}

export default NavbarMobMenuSocials;
import Link from 'next/link';

import styles from './FooterMainMenu.module.scss';

const FooterMainMenu = ({ mainMenu }) => {

    const menuLists = mainMenu.map(({ id, title, list }) => {

        const menuElements = list.map(({ id, link, text, icon }) => {
            const iconElement = (icon) ? (
                <svg className={styles['icon']}>
                    <use href={`/icons/footer-contacts.svg${icon}`} />
                </svg>
            ) : null;
            return (
                <li key={id} className={styles['item']}>
                    <Link href={link} className={styles['link']}>
                            {iconElement}
                            {text}
                    </Link>
                </li>
            )
        })

        return (
            <div key={id} className={styles['menu']}>
                <h3 className={styles['title']}>{title}</h3>
                <ul>
                    {menuElements}
                </ul>
            </div>
        )
    });

    return (
        <div className={styles['section']}>
            {menuLists}
        </div>
    )
}

export default FooterMainMenu;
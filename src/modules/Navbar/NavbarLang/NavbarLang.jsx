import Link from 'next/link';

import { allLangs } from "./allLangs";

import styles from './NavbarLang.module.scss';

const NavbarLang = () => {

    const langsElements = allLangs.map(({ id, locale, text }) => {
        const className = `${styles['lang-item']} ${(id === "1") ? styles['active'] : ''}`;
        return (
            <Link href={`/${locale}`} locale={locale} key={id} className={className}>
                {text}
            </Link>
        )
    });

    return (
        <div className={styles['lang']}>
            {langsElements}
        </div>
    )
}

export default NavbarLang;
import Link from 'next/link';
import Image from "next/image";

import logoSrc from "../../../../../public/icons/logo.svg"

import styles from './NavbarLogo.module.scss';

const NavbarLogo = () => {
    return (
        <Link href="/" className={styles['logo']}>
            <Image alt="logo" src={logoSrc}/>
        </Link>
    )
}

export default NavbarLogo;
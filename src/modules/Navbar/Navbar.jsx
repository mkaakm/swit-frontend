import NavbarMobMenu from './NavbarMobMenu';
import NavbarTopMenu from './NavbarTopMenu';
import NavbarMainMenu from './NavbarMainMenu';

import navbar from "./navbar.json";

import styles from './Navbar.module.scss';

const Navbar = () => {

    return (
        <nav className={styles.section}>
            <NavbarMobMenu menu={navbar} />
            <NavbarTopMenu topMenu={navbar["top-menu"]} />
            <NavbarMainMenu mainMenu={navbar["main-menu"]} />
        </nav>
    )
}

export default Navbar;
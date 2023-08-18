import NavbarMenuStickyWrapper from "../NavbarMenuStickyWrapper";
import Container from '../../../shared/components/Container';
import NavbarContacts from './NavbarContacts';
import NavbarLogo from './NavbarLogo';
import NavbarUserMenu from './NavbarUserMenu';
import NavbarProductMenu from './NavbarProductMenu';
import NavbarSearch from './NavbarSearch';

import styles from './NavbarMainMenu.module.scss';

const NavbarMainMenu = ({ mainMenu }) => {
    return (
        <div className={styles['section']}>
            <Container className={styles['container']}>
                <NavbarLogo />
                <NavbarContacts />
                <NavbarSearch placeholder={mainMenu['search-text']} />
                <NavbarUserMenu userMenuList={mainMenu['user-menu']} />
            </Container>
            <NavbarMenuStickyWrapper>
                <NavbarProductMenu productMenuList={mainMenu['product-menu']} />
            </NavbarMenuStickyWrapper>
        </div>
    )
}

export default NavbarMainMenu;

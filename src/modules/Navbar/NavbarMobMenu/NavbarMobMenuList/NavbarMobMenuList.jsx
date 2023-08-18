import NavbarMobMenuUser from './NavbarMobMenuUser';
import NavbarLang from '../../NavbarLang';
import NavbarMobMenuProducts from './NavbarMobMenuProducts';
import NavbarMobMenuInfo from './NavbarMobMenuInfo';
import NavbarMobMenuSocials from './NavbarMobMenuSocials';

import styles from './NavbarMobMenuList.module.scss';

const NavbarMobMenuList = ({ toggle, isActive, menu }) => {

    const userMenu = menu["main-menu"]["user-menu"];
    const productMenu = menu["main-menu"]['product-menu'];
    const infoMenu = menu["top-menu"];
    const socials = menu["socials"];

    return (
        <div className={`${styles['menu']} ${styles[isActive]}`}>
            <div className={styles['top-menu']}>
                <NavbarMobMenuUser toggle={toggle} userMenuList={userMenu} />
                <NavbarLang />
            </div>
            <NavbarMobMenuProducts productMenuList={productMenu} />
            <NavbarMobMenuInfo infoMenuList={infoMenu} />
            <NavbarMobMenuSocials socialsList={socials} />
        </div>
    )
}

export default NavbarMobMenuList;
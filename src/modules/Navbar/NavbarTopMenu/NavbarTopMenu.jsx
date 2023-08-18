import Container from '../../../shared/components/Container';
import NavbarInfoMenu from './NavbarInfoMenu';
import NavbarLang from '../NavbarLang';

import styles from './NavbarTopMenu.module.scss';

const NavbarTopMenu = ({ topMenu }) => {
    return (
        <div className={styles.section}>
            <Container className={styles.container}>
                <NavbarInfoMenu infoMenuList={topMenu} />
                <NavbarLang />
            </Container>
        </div>
    )
}

export default NavbarTopMenu;
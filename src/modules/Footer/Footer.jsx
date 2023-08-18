import Container from '../../shared/components/Container';
import FooterSocials from './FooterSocials';
import FooterMobMenu from './FooterMobMenu';
import FooterMainMenu from './FooterMainMenu';
import FooterBottomMenu from './FooterBottomMenu';

import footer from "./footer.json"

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles['section']}>
            <FooterSocials socials={footer["bottom-menu"].socials} />
            <Container>
                <FooterMobMenu mobMenu={footer} />
                <FooterMainMenu mainMenu={footer["main-menu"]} />
                <FooterBottomMenu bottomMenu={footer["bottom-menu"]} />
            </Container>
        </footer>
    )
}

export default Footer;
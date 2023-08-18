import Container from '../../shared/components/Container';

import styles from './AboutCompany.module.scss';

const AboutCompany = ({ info }) => {

    function createMarkup() {
        return {__html: info.content.rendered};
    }

    return (
        <section className={styles['section']}>
            <Container>
                <div className={styles['text']} dangerouslySetInnerHTML={createMarkup()} />
            </Container>
        </section>
    )
}

export default AboutCompany;
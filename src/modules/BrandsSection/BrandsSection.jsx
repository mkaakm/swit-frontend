import Image from 'next/image';
import Link from 'next/link';
import Container from '../../shared/components/Container';

import brandsList from './brandsList.json';

import styles from './BrandsSection.module.scss';

const BrandsSection = () => {
    
    const brandsElements = brandsList.map(({id, img, link}) => {
        return (
            <Link href={link} className={styles['link']}>
                <li key={id} className={styles['item']}>
                    <Image src={img} fill={true} alt={link} style={{objectFit: "contain", objectPosition: "center"}}/>
                    {/*<img className={styles['img']} src={img} alt="brand logo"/>*/}
                </li>
            </Link>
        )
    })

    return (
        <section className={styles['section']}>
            <Container>
                <ul className={styles['list']}>
                    {brandsElements}
                </ul>
            </Container>
        </section>
    )
}

export default BrandsSection;

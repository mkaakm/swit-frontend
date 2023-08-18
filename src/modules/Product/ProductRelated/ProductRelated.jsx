import { useTranslation } from 'next-i18next';

import Container from '../../../shared/Container';
import ProductItem from '../../../shared/OrderListItem';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './ProductRelated.module.scss';

const ProductRelated = () => {

    const { t } = useTranslation('top-products');

    const productsList = t('list', {returnObjects: true});

    const productsElements = productsList.map(({ id, ...props }) => {
        return (
            <ProductItem className={styles['item']} key={id} props={props} buyBtnText={t('buy-btn')} currency={t('currency')} newText={t('new-text')} outOfStock={t('out-of-stock')} />
        )
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <section className={styles['section']}>
            <Container>
                <h3 className={styles['title']}>C этим товаром покупают</h3>
                <div className={styles['wrapper']}>
                    <Slider {...settings} className={styles['slider']}>
                        {productsElements}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default ProductRelated;
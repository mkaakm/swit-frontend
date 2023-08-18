import Container from '../Container';
import ProductItem from '../ProductItem';

import styles from './ProductsSlider.module.scss';

const ProductsSlider = ({ products, title }) => {
    const productsElements = products.map(item => {
        return (
            <ProductItem className={styles['item']} key={item.id} props={item} buyBtnText="Купити" currency="грн" newText="НОВИНКА" outOfStock="Немає в наявності" />
        )
    });

    return (
        <section className={styles['section']}>
            <Container>
                <h2 className={styles['title']}>{title}</h2>
                <ul className={styles['list']}>
                    {productsElements}
                </ul>
            </Container>
        </section>
    )
}

export default ProductsSlider;

ProductsSlider.defaultProps = {
    products: []
}

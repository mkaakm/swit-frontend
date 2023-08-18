'use client'

import Container from "../../shared/components/Container";

import ProductItem from "../../shared/components/ProductsList/ProductItem";

import useFavorite from "../../shared/hooks/useFavorite";

import styles from "./favorite-products.module.scss"

const FavoriteProducts = () => {
    const {favorite} = useFavorite();

    const productsElements = favorite.map(item => {
        return (
            <ProductItem className={styles['item']} key={item.id} props={item} buyBtnText="Купити" currency="грн"
                         newText="НОВИНКА" outOfStock="Немає в наявності"/>
        )
    });

    return (
        <Container>
            <h2 className={styles.title}>Обране</h2>
            <div className={styles.list}>
                {productsElements}
            </div>
        </Container>
    )
}

export default FavoriteProducts;
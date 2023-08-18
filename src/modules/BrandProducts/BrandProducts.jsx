"use client"

import {useState, useCallback, useMemo} from "react";
import Shop from "../../modules/Shop"
import Container from '../../shared/components/Container';
import Breadcrumbs from '../../shared/components/Breadcrumbs';

import ProductsList from "../../shared/components/ProductsList";
import CategoriesFilter from "../../shared/components/CategoriesFilter";
import PriceRange from "../../shared/components/PriceRange";
import Description from "../../shared/components/Description";

import {getMinPrice, getMaxPrice, getPriceFilterProducts, getSortProducts, getToggleCategoryHandler, getCategoriesId, getSelectProducts} from "../../shared/lib/functions";

import styles from './BrandProducts.module.scss';

// import {getCleanCategories, getProductsWithCleanCategories, getCategoriesId} from "./functions";

const BrandProducts = ({ brand = [], products = [], categories = [] }) => {
    const [selectCategories, setSelectCategories] = useState([]);
    const [selectSubCategories, setSelectSubCategories] = useState([]);
    const [selectSubSubCategories, setSelectSubSubCategories] = useState([]);
    const [priceRange, setPriceRange] = useState(null);
    const [perPage, setPerPage] = useState(12);
    const [sort, setSort] = useState(null);

    const clearFilter = useCallback(()=> {
        setSelectCategories([]);
        setSelectSubCategories([]);
        setSelectSubSubCategories([]);
    }, [])

    const changeSort = ({value}) => setSort(value);

    const changePagination = ({value}) => setPerPage(Number(value));

    const toogleCategory = getToggleCategoryHandler(setSelectCategories);

    const toggleSubCategory = getToggleCategoryHandler(setSelectSubCategories);

    const toggleSubSubCategory = getToggleCategoryHandler(setSelectSubSubCategories);

    let result = getSelectProducts({products, selectCategories, selectSubCategories, selectSubSubCategories})

    const minPrice = useMemo(() => getMinPrice(products), []);
    const maxPrice = useMemo(() => getMaxPrice(products), []);

    result = getPriceFilterProducts(priceRange, result);
    result = getSortProducts(sort, result);

    return (
        <>
            {/*<div className={styles['img']} />*/}
            <section className={styles['section']}>
                <Container>
                    <Breadcrumbs data={['Интернет-магазин кухонных товаров SWIT', 'Бренды', brand?.title?.rendered.replace(`&#8211;`, "-")]} />
                    {/* <Image src={img.link} width={img.width} height={img.height} alt="brand logo" /> */}
                    <Description title={brand.title} content={brand.content} />
                </Container>
            </section>
            <Shop changePagination={changePagination} changeSort={changeSort} />
            <Container>
                <div className={styles.productsContainer}>
                    <div>
                        <p className={styles.filterTitle}>Фільтри</p>
                        <PriceRange minValue={priceRange?.min} maxValue={priceRange?.max} min={minPrice} max={maxPrice} onChange={setPriceRange} />
                        <CategoriesFilter categories={categories} products={products} selectCategories={selectCategories} selectSubCategories={selectSubCategories} selectSubSubCategories={selectSubSubCategories} toogleCategory={toogleCategory} toggleSubCategory={toggleSubCategory} toggleSubSubCategory={toggleSubSubCategory} />
                        <button onClick={clearFilter} className={styles.filterBtn} type="button">Очистити</button>
                    </div>
                    <div>
                        <ProductsList perPage={perPage} products={result} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default BrandProducts;

BrandProducts.defaultProps = {
    categories: []
}

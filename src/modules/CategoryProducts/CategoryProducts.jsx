"use client"

import {useState, useCallback, useMemo} from "react";
import Shop from "../../modules/Shop"
import Container from '../../shared/components/Container';
import Breadcrumbs from '../../shared/components/Breadcrumbs';

import ProductsList from "../../shared/components/ProductsList";
import BrandsFilter from "../../shared/components/BrandsFilter";
import SubCategoriesFilter from "../../shared/components/SubCategoriesFilter";
import PriceRange from "../../shared/components/PriceRange";
import CategoryDescription from "../../shared/components/CategoryDescription";

import {getMinPrice, getMaxPrice, getPriceFilterProducts, getSortProducts, getToggleCategoryHandler, getCategoriesId, getSelectProducts, getSelectProductsWithBrands} from "../../shared/lib/functions";

import styles from './BrandProducts.module.scss';

const CategoryProducts = ({ category, products, categories, brands }) => {

    const [selectBrands, setSelectBrands] = useState([]);
    const [selectCategories, setSelectCategories] = useState([]);
    const [selectSubCategories, setSelectSubCategories] = useState([]);
    const [priceRange, setPriceRange] = useState(null);
    const [perPage, setPerPage] = useState(12);
    const [sort, setSort] = useState(null);

    // const clearFilter = useCallback(()=> {
    //     setSelectCategories([]);
    //     setSelectSubCategories([]);
    //     setSelectSubSubCategories([]);
    // }, [])

    const changeSort = ({value}) => setSort(value);

    const changePagination = ({value}) => setPerPage(Number(value));

    const toggleBrand = getToggleCategoryHandler(setSelectBrands);

    const toogleCategory = getToggleCategoryHandler(setSelectCategories);

    const toggleSubCategory = getToggleCategoryHandler(setSelectSubCategories);
    //
    // const toggleSubSubCategory = getToggleCategoryHandler(setSelectSubSubCategories);
    //

    let result = getSelectProductsWithBrands({products, selectBrands});

    result = getSelectProducts({products: result, selectCategories, selectSubCategories});

    const minPrice = useMemo(() => getMinPrice(products), []);
    const maxPrice = useMemo(() => getMaxPrice(products), []);

    result = getPriceFilterProducts(priceRange, result);
    result = getSortProducts(sort, result);

    return (
        <>
            {/*<div className={styles['img']} />*/}
            <section className={styles['section']}>
                <Container>
                    <Breadcrumbs data={['Интернет-магазин кухонных товаров SWIT', 'Категорії', category.name]} />
                    {/* <Image src={img.link} width={img.width} height={img.height} alt="brand logo" /> */}
                    <CategoryDescription title={category.name} content={category.description} />
                </Container>
            </section>
            <Shop changePagination={changePagination} changeSort={changeSort} />
            <Container>
                <div className={styles.productsContainer}>
                    <div>
                        <p className={styles.filterTitle}>Фільтри</p>
                        <PriceRange minValue={priceRange?.min} maxValue={priceRange?.max} min={minPrice} max={maxPrice} onChange={setPriceRange} />
                        <h4 className={styles.filterSubTitle}>Бренди</h4>
                        <BrandsFilter brands={brands} products={products} selectBrands={selectBrands} toggleBrand={toggleBrand} />
                        {Boolean(categories.length) && <><h4 className={styles.filterSubTitle}>Категорії</h4><SubCategoriesFilter categories={categories} products={products} selectCategories={selectCategories} selectSubCategories={selectSubCategories} toogleCategory={toogleCategory} toggleSubCategory={toggleSubCategory} /></>}


            {/*            <BrandsFilter categories={categories} products={products} selectCategories={selectCategories} selectSubCategories={selectSubCategories} selectSubSubCategories={selectSubSubCategories} toogleCategory={toogleCategory} toggleSubCategory={toggleSubCategory} toggleSubSubCategory={toggleSubSubCategory} />*/}
            {/*            <button onClick={clearFilter} className={styles.filterBtn} type="button">Очистити</button>*/}
                    </div>
                    <div>
                        <ProductsList perPage={perPage} products={result} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CategoryProducts;

CategoryProducts.defaultProps = {
    categories: []
}

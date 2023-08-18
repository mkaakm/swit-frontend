'use client'

import {useState, useEffect} from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import Container from '../Container';
import ProductItem from './ProductItem';

import styles from './ProductsList.module.scss';

const ProductsList = ({ perPage = 12, products }) => {
    const [page, setPage] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const currentPage = searchParams.get('page');


    useEffect(()=> {
        if(currentPage && Number(currentPage) !== page) {
            setPage(Number(currentPage));
        }
    }, []);

    const calculatePage = (currentPage && Number(currentPage) !== page) ? Number(currentPage) : page;
    const total = products.length;
    const start = (calculatePage - 1) * perPage;
    const end = calculatePage * perPage;
    const productsElements = products.slice(start, end).map(item => {
        return (
            <ProductItem className={styles['item']} key={item.id} props={item} buyBtnText="Купити" currency="грн" newText="НОВИНКА" outOfStock="Немає в наявності" />
        )
    });

    const pagination = Array(Math.ceil(total / perPage)).fill(0).map((_, index)=> {
        return <span onClick={()=> {
            const newPage = index + 1;
            setPage(newPage);
            const params = new URLSearchParams(searchParams);
            //
            params.set("page", newPage);
            router.push(`${pathname}?${params}`);
            // router.replace(`${pathname}?page=2`);
            // router.push({ query: {  page: '2' } }, undefined, { shallow: true });
        }} key={index} className={calculatePage === (index +1) ? `${styles.paginationItem} ${styles.active}` : styles.paginationItem}>{index + 1}</span>
    })

    // const { t } = products;
    //
    // const productsList = t('list', {returnObjects: true});
    //
    // const productsElements = productsList.map(({ id, ...props }) => {
    //     return (
    //         <OrderListItem className={styles['item']} key={id} props={props} buyBtnText={t('buy-btn')} currency={t('currency')} newText={t('new-text')} outOfStock={t('out-of-stock')} />
    //     )
    // });

    return (
        <section className={styles['section']}>
            <Container>
                <h2 className={styles['title']}></h2>
                <ul className={styles['list']}>
                    {productsElements}
                </ul>
                {total > 12 && <div className={styles.pagination}>{pagination}</div>}
            </Container>
        </section>
    )
}

export default ProductsList;

ProductsList.defaultProps = {
    products: []
}

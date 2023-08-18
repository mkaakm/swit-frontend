'use client'

import {useState, useEffect} from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import Container from "../../shared/components/Container";

import ProductItem from "../../shared/components/ProductsList/ProductItem";

import {searchProducts} from "../../shared/lib/api/products";

import styles from "./search-products.module.scss";

const SearchProducts = ({allProducts = []}) => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();

    const search = searchParams.get('search');
    useEffect(() => {
        // const fetchProducts = async() => {
        //     try {
        //         const normalizedSearch = search.toLowerCase();
        //         const data = await searchProducts(normalizedSearch);
        //         setProducts(data);
        //     }
        //     catch({response}) {
        //         console.log(response.data.message);
        //     }
        // }
        // fetchProducts();

        
        const normalizedSearch = search.toLowerCase();
        if(allProducts) {
            const products = allProducts?.filter(({name, sku, categories})=> {
                const categoryFind = categories.find(({name}) => name.toLowerCase().includes(normalizedSearch));
                return name.toLowerCase().includes(normalizedSearch) || sku.includes(search) || categoryFind;
            });
            setProducts(products);
        }
    }, [search]);

    const productsElements = products.map(item => {
        return (
            <ProductItem className={styles['item']} key={item.id} props={item} buyBtnText="Купити" currency="грн"
                         newText="НОВИНКА" outOfStock="Немає в наявності"/>
        )
    });

    return (
        <Container>
            <h2 className={styles.title}>Результати пошуку "{search}"</h2>
            <div className={styles.list}>
                {productsElements}
            </div>
        </Container>
    )
}

export default SearchProducts;
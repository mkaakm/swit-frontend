import BrandProducts from '../../../src/modules/BrandProducts';

import brandStaticParams from "./brandStaticParams";

import {getBrandPage} from "../../../src/shared/lib/api/pages";
import {getBrandProducts,} from "../../../src/shared/lib/api/products";
import { getCategoriesWithStructure} from "../../../src/shared/lib/functions";

export const generateStaticParams = async () => brandStaticParams;

const BrandPage = async ({params}) => {
    const brandRequest = getBrandPage(params.name);
    const brandProductsRequest = getBrandProducts(params.name);

    const [brand, brandProducts] = await Promise.all([brandRequest, brandProductsRequest]);
    const {products, categories} = brandProducts;

    const resultCategories = getCategoriesWithStructure(categories);


    return (
        <BrandProducts brand={brand} products={products} categories={resultCategories} />
    )
}

export default BrandPage;

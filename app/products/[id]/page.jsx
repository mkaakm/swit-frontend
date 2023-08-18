import Product from "../../../src/modules/Product";

import {geAllProductsId, getProductById, testGet} from "../../../src/shared/lib/api/products";

export const generateStaticParams = async () => {
    const allProducts = await geAllProductsId();
    return allProducts;
}

const ProductPage = async ({params}) => {

    const data = await getProductById(params.id);

    return (
        <Product {...data} />
    )
}

export default ProductPage;

import Header from "../src/modules/Header";
import BrandsSection from "../src/modules/BrandsSection";
import ProductsSlider from "../src/shared/components/ProductsSlider";

import {geTopProducts, getLastProducts} from "../src/shared/lib/api/products"

const Home = async () => {
    const topProductsRequest = geTopProducts();
    const newProductsRequest = getLastProducts();

    const [topProducts, newProducts] = await Promise.all([topProductsRequest, newProductsRequest])

    return (
        <>
            <Header />
            <BrandsSection/>
            <ProductsSlider products={topProducts} title="ТОП ПРОДАЖУ"/>
            <ProductsSlider products={newProducts} title="НОВИНКИ"/>
        </>
    )
}

export default Home;
import Container from "../../shared/components/Container";
import Breadcrumbs from "../../shared/components/Breadcrumbs";
import ProductCard from "./ProductCard";
import ProductInfo from "./ProductInfo";
// import ProductRelated from "./ProductRelated";

import productPage from "./product-page.json";

const Product = (props) => {

    const {shopName, texts, benefits, info} = productPage;

    const category = props.categories[2].name;
    const productName = props.name;

    return (
        <section>
            <Container>
                {/*<Breadcrumbs data={[shopName, 'Аксессуары', 'Ножницы', 'Ножницы для измельчения зелени GEFU CUTARE (12660)']} />*/}
                <Breadcrumbs data={[shopName, category, productName]} />
                <ProductCard data={props} texts={texts} benefits={benefits} />
            </Container>
            <ProductInfo data={props} info={info} />
            {/*<ProductRelated />*/}
        </section>
    )
}

export default Product;

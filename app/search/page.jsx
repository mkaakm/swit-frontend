import SearchProducts from "../../src/modules/SearchProducts";

import {geAllProducts} from "../../src/shared/lib/api/products";


const SearchPage = async () => {
        const allProducts = await geAllProducts();

        return <SearchProducts allProducts={allProducts} />
}

export default SearchPage;
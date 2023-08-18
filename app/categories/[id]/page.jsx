import CategoryProducts from "../../../src/modules/CategoryProducts";

import {getSubCategoriesWithStructure} from "../../../src/shared/lib/functions";

import {getProductsByCategory} from "../../../src/shared/lib/api/products";

import {getAllCategories, getCategoryById} from "../../../src/shared/lib/api/categories";

export const generateStaticParams = async () => {
    const allCategories = await getAllCategories();
    return allCategories.map((category) => ({
        id: String(category.id),
    }));
}

const CategoryPage = async ({params}) => {
    const categoryRequest = getCategoryById(params.id);
    const productsByCategoryRequest = getProductsByCategory(params.id);

    const [category, productsByCategory] = await Promise.all([categoryRequest, productsByCategoryRequest]);
    const {products, brands, categories} = productsByCategory;

    const subCategories = getSubCategoriesWithStructure(categories, params.id);

    return (
        <CategoryProducts categories={subCategories} category={category} products={products} brands={brands}/>
    )
}

export default CategoryPage;

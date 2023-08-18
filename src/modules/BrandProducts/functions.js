import brandList from "./brandList";

export const getCleanCategories = item => {
    const {categories} = item;
    const cleanCategories = categories.filter(({slug}) => slug !== "brendy" && !brandList.includes(slug));
    return cleanCategories
}

export const getProductsWithCleanCategories = item => {
    const {categories} = item;
    const cleanCategories = categories.filter(({slug}) => slug !== "brendy" && !brandList.includes(slug));
    return {...item, categories: cleanCategories}
}

export const getCategoriesId = categories => categories.map(({id}) => id)

import {baseURL, fetchSettings} from "./settings";

const fetchCategories = async (path = "") => {
    const res = await fetch(`${baseURL}/categories${path}`);
    const result = await res.json();
    return result;
}

export const getAllCategories = async () => {
   return fetchCategories("/")
}

export const getCategoryById = (id) => {
    return fetchCategories(`/${id}`)
}

//
// export const searchProducts = async(search)=> {
//     const res = await fetch(`${productsBaseURL}?search=миска`, productsHeaders);
//     const data = await res.json();
//     const normalizedSearchProducts = filterProductsData(data);
//     return normalizedSearchProducts;
// }
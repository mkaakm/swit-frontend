import {baseURL, fetchSettings} from "./settings";

const fetchProducts = async (path = "") => {
    const res = await fetch(`${baseURL}/products${path}`);
    const result = await res.json();
    return result;
}

export const geTopProducts = ()=> {
    return fetchProducts("/top")
}

export const getLastProducts = ()=> {
    return fetchProducts("/last")
}

export const getBrandProducts = (brandName)=> {
    return fetchProducts(`/brand/${brandName}`);
}

export const geAllProductsId = ()=> {
    return fetchProducts("/all-id");
}

export const geAllProducts = async ()=> {
    const res = await fetch(`https://swit-proxy-server.herokuapp.com/api/products`);
    const result = await res.json();
    return result;
}

export const testGet = async(id) => {
    const res = await fetch(`https://swit-proxy-server.herokuapp.com/api/products/3659`);
    const result = await res.json();
    return result;
}

export const getProductById = (id) => {
    return fetchProducts(`/${id}`);
}

export const getProductsByCategory = async(categoryId)=> {
   return fetchProducts(`/categories/${categoryId}`)
}

export const searchProducts = async(search)=> {
    return fetchProducts(`/search?search=${search}`)
}
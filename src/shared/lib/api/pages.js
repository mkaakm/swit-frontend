import {baseURL, fetchSettings} from "./settings";

const fetchPage = async(path = "") => {
    const res = await fetch(`${baseURL}/pages${path}`);
    const result = await res.json();
    return result;
}

export const getPage = (pageId)=> {
    return fetchPage(`/${pageId}`);
}

export const getBrandPage = async(brandName)=> {
    return fetchPage(`/brand/${brandName}`)
}



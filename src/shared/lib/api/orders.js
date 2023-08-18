import axios from "axios";

import {baseURL} from "./settings";

const orderInstance = axios.create({
    baseURL: `${baseURL}/orders`,
})

export const addOrder = async (data) => {
    const {data: result} = await orderInstance.post("/", data);
    return result;
}

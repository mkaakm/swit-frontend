import {useContext} from "react";

import {cartContext} from "../../context/CartProvider/CartProvider";

const useCart = () => {
    const cart = useContext(cartContext);

    return cart;
}

export default useCart;
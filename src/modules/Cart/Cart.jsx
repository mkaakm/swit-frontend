'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";

import CartButton from "./CartButton";
import CartItem from "./CartItem";

import useCart from "../../shared/hooks/useCart";

import styles from "./cart.module.scss";

const Cart = ({goBack}) => {
    const {cart, clearCart} = useCart();
    const router = useRouter();

    const elements = cart.map(item => <CartItem key={item.id} {...item} />);

    const makeOrder = ()=> {
        goBack();
        router.push("/order")
    }

    const sum = cart.reduce((acum, {count, price}) => acum + count * price, 0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <div className={styles.emptyDiv}></div>
                <h5 className={styles.title}>Кошик</h5>
                <span onClick={clearCart} className={styles.clearBtn}>Очистити кошик</span>
            </div>

            {elements}

            <div className={styles.payBlock}>
                <span className={styles.toPay}>До сплати</span>
                <span className={styles.sum}>{sum} грн</span>
            </div>

            <div className={styles.cartButtons}>
                <CartButton onClick={goBack}>Продовжити покупки</CartButton>
                {Boolean(cart.length) && <CartButton onClick={makeOrder}>
                    Оформити замовлення
                </CartButton>}
            </div>
        </div>
    )
}

export default Cart;
'use client';

import {useRouter} from "next/navigation";

import CartButton from "../../Cart/CartButton";

import styles from "./success-order.module.scss";

const SuccessOrder = () => {
    const router = useRouter();

    const goBack = () => router.push("/");

    return (
        <>
            <h5 className={styles.title}>Замовлення прийняте</h5>
            <div className={styles.buttonWrapper}>
                <CartButton onClick={goBack}>Повернутися на сайт</CartButton>
            </div>

        </>
    )
}

export default SuccessOrder;
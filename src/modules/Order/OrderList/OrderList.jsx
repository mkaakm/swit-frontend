'use client';

import OrderListItem from "./OrderListItem";

import styles from "./order-list.module.scss";

const OrderList = ({items}) => {
    const elements = items.map(item => <OrderListItem key={item.id} {...item} />);

    const sum = items.reduce((acum, {count, price}) => acum + count * price, 0);

    return (
        <div className={styles.wrapper}>
            <h5 className={styles.title}>Ваше замовлення:</h5>

            <table className={styles.list}>
                <thead>
                    <tr>
                        <th className={styles.name}>Назва товару</th>
                        <th className={styles.count}>Кількість</th>
                        <th className={styles.price}>Ціна</th>
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>

            <p className={styles.toPay}><span>До сплати:</span> <span>{sum} грн</span> </p>
        </div>
    )

}

export default OrderList;
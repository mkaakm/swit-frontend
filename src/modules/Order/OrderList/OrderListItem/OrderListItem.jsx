'use client';

import useCart from "../../../../shared/hooks/useCart";

import styles from './order-list-item.module.scss';

const OrderListItem = ({  id, name, count, price }) => {

    const {increaseItem, decreaseItem} = useCart();

    return (
      <tr className={styles.item}>
          <td className={styles.name}>{name}</td>

          <td className={styles.count}>
              <span onClick={()=> decreaseItem(id)}>-</span>
              {count}
              <span onClick={()=> increaseItem(id)}>+</span>
          </td>

          <td className={styles.price}>
              {price} грн
          </td>
      </tr>
    )
}

export default OrderListItem;

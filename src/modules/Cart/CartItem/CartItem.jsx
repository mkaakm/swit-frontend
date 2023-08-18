'use client';

import Image from 'next/image';

import removeIcon from "./removeIcon.svg";

import useCart from "../../../shared/hooks/useCart";

import styles from './CartItem.module.scss';

const CartItem = ({ images, id, name, count, price }) => {

    const {increaseItem, decreaseItem, removeItem} = useCart();

    return (
      <div className={styles.item}>
          <div className={styles['imgWrapper']}>
              <Image className={styles['img']} src={images[0].src} alt='product photo' layout='fill' objectFit='contain' />
          </div>

          <div className={styles.content}>
                <p className={styles.name}>{name}</p>
              <div className={styles.count}>
                  <span onClick={()=> decreaseItem(id)}>-</span>
                  {count}
                  <span onClick={()=> increaseItem(id)}>+</span>
              </div>
          </div>

          <div className={styles.priceWrapper}>
              <span onClick={()=> removeItem(id)} className={styles.removeIcon}>
                <Image priority src={removeIcon} alt="remove icon" />
              </span>

              <span className={styles.price}>{price} грн</span>
          </div>
      </div>
    )
}

export default CartItem;

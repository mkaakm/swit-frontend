'use client';

import Link from 'next/link';
import Image from 'next/image';

import LikeIcon from "../LikeIcon";

import useCart from "../../hooks/useCart";

import styles from './ProductItem.module.scss';

const ProductItem = ({ props, buyBtnText, currency, newText, outOfStock, className = null }) => {

    const { images, id, name, price, isnew, stock = true, discount = false } = { ...props };

    const {addToCart} = useCart();

    return (
        <li className={`${styles['product']} ${className}`}>
            <div className={styles['photo']}>
                <Link href={`/products/${id}`} className={styles['imgWrapper']}>
                    <Image className={styles['img']} src={images[0].src} alt='product photo' fill={true} style={{objectFit: "contain", objectPosition: "center"}} />
                </Link>
                {/*<div className={styles['imgWrapper']}>*/}
                {/*    */}
                {/*</div>*/}

                {/*<Image className={styles['img']} src={images[0].src} alt='product photo' width={190} height={146} />*/}
                {/*<div className={styles['imgContainer']} style={{backgroundImage: `url(${images[0].src})`}} />*/}
                {(isnew) ? <span className={styles['mark-new']}>{newText}</span> : ''}
                <div className={styles['product-buttons']}>
                    <a href="#" className={styles['product-btn']}>
                        <svg className={`${styles['product-btn-icon']} ${styles['_compare']}`}>
                            <use href='/icons/product-buttons.svg#icon-compare' />
                        </svg>
                    </a>
                    <LikeIcon product={props} />
                    {/*<a href="#" className={styles['product-btn']}>*/}
                    {/*    <svg className={`${styles['product-btn-icon']} ${styles['_like']}`}>*/}
                    {/*        <use href='/icons/product-buttons.svg#icon-like' />*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                </div>
            </div>
            <div className={styles['info']}>
                <Link href={`/products/${id}`} className={styles['name']}>{name}</Link>
                <div className={styles['buy']}>
                    <div className={(!stock) ? styles['out-of-stock'] : ''}>
                        {(!stock) ? <p className={styles['stock-text']}>{outOfStock}</p> : ''}
                        {(discount) ? <p className={styles['old-price']}>{price} {currency}</p> : ''}
                        <p className={`${styles['price']} ${(discount) ? styles['discount'] : ''}`}>
                            {(discount) ? discount : price} {currency}
                        </p>
                    </div>
                    <span onClick={()=> addToCart(props)} className={styles['buy-btn']}>{buyBtnText}</span>
                </div>
            </div>
        </li>
    )
}

export default ProductItem;

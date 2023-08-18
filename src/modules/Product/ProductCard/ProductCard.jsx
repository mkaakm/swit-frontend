'use client';

import Image from 'next/image';

import ProductCardGallery from './ProductCardGallery';
import LikeIconLarge from "../../../shared/components/LikeIconLarge";

import useCart from "../../../shared/hooks/useCart";

import styles from './ProductCard.module.scss';

const ProductCard = ({ texts, data, benefits }) => {


    const {addToCart} = useCart();

    const {name, images, attributes, categories, price, sku, id} = data;

    // const [manufacturer] = attributes.find(({name}) => name === "Країна виробник" || name === "Страна производитель").options;
    const manufacturer = categories[0].name;

    const benefitsElements = benefits.map(({ id, img, text }) => {
        return (
            <li key={id} className={styles['benefits-item']}>
                <Image className={styles['benefits-img']} src={img.src} width={img.width} height={img.height} alt='icon' />
                <p className={styles['benefits-text']}>{text}</p>
            </li>
        )
    });

    const series = attributes.find(({name}) => name === "Серія" || name === "Серия");

    return (
        <div className={styles['card']}>
            <div className={styles['title']}>
                <h2 className={styles['title-name']}>{name}</h2>
                <ul className={styles['data']}>
                    <li className={styles['data-item']}>
                        <span className={styles['data-title']}>{texts.manufacture}:</span>
                        <span>{manufacturer}</span>
                    </li>
                    {series && <li className={styles['data-item']}>
                        <span className={styles['data-title']}>Серия:</span>
                        <span>{series.options.join(" ")}</span>
                    </li>}
                    {sku && <li className={styles['data-item']}>
                        <span className={styles['data-title']}>Артикул:</span>
                        <span>{sku}</span>
                    </li>}
                </ul>
            </div>

            <ProductCardGallery images={images} />

            <div className={styles['info']}>
                <div className={styles['buy']}>
                    <div className={styles['buy-price']}>
                        {/*<p className={styles['buy-price-old']}>{price} грн</p>*/}
                        <div className={styles['buy-price-content']}>
                            <span className={styles['buy-price-new']}>{price} грн</span>
                            <span className={styles['buy-price-stock']}>{texts.availability}</span>
                        </div>
                    </div>
                    <div className={styles['buttons']}>
                        <a href="#">
                            <svg className={`${styles['buttons-item']} ${styles['_compare']}`}>
                                <use href='/icons/product-buttons.svg#icon-compare' />
                            </svg>
                        </a>
                        <LikeIconLarge product={data} />
                        {/*<a href="#">*/}
                        {/*    <svg className={`${styles['buttons-item']} ${styles['_like']}`}>*/}
                        {/*        <use href='/icons/product-buttons.svg#icon-like' />*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <span onClick={()=> addToCart({id, images, name, price})} className={styles['buttons-buy']}>{texts.buy}</span>
                    </div>
                </div>

                <ul className={styles['benefits']}>
                    {benefitsElements}
                </ul>
            </div>
        </div>
    )
}

export default ProductCard;

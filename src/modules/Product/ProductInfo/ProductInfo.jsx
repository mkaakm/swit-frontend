'use client'

import { useState } from "react";

import Container from '../../../shared/components/Container';
import ProductInfoDescription from './ProductInfoDescription';
import ProductInfoFeatures from './ProductInfoFeatures';
import ProductInfoComments from './ProductInfoComments';

import menu from './menu.json';

import styles from './ProductInfo.module.scss';

const ProductInfo = ({ data, info }) => {

    const [activeTab, setActiveTab] = useState(0);

    const menuElements = info.heading.map(({ id, text }, idx) => {
        const fullClassName = `${styles["menu-item"]} ${(activeTab === idx) ? styles["selected"] : ''}`;
        return <li key={id} className={fullClassName} onClick={() => setActiveTab(idx)}>{text}</li>
    });

    const contentArr = [<ProductInfoDescription description={data.description} key={0} />,
                        <ProductInfoFeatures attributes={data.attributes}  key={1} />,
                        <ProductInfoComments key={2} transl={info.comments} />];

    const contentElements = contentArr.filter((el, idx) => activeTab === idx);

    return (
        <>
            <div className={styles['menu']}>
                <Container>
                    <ul className={styles['menu-list']}>
                        {menuElements}
                    </ul>
                </Container>
            </div>
            <div className={styles['content']}>
                <Container>
                    {contentElements}
                </Container>
            </div>
        </>
    )
}

export default ProductInfo;



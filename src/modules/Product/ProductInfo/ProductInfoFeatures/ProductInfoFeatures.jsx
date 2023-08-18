import data from './data.json';

import styles from './ProductInfoFeatures.module.scss';

const ProductInfoFeatures = ({attributes}) => {

    const paramsElements = data.params.map(({ id, title, text }) => {
        return (
            <tr key={id} className={styles['params-row']}>
                <td className={`${styles['title']} ${styles['item']}`}>{title}</td>
                <td className={styles['item']}>{text}</td>
            </tr>
        )
    });

    const elements = attributes.map(({ name, options }, index) => {
        return (
            <tr key={index} className={styles['params-row']}>
                <td className={`${styles['title']} ${styles['item']}`} dangerouslySetInnerHTML={{__html: name}} />
                <td className={styles['item']} dangerouslySetInnerHTML={{__html: options.join(" ")}} />
            </tr>
        )
    });

    return (
        <table className={styles.table}>
            {/*<thead>*/}
            {/*    <tr>*/}
            {/*        <th className={`${styles['heading']} ${styles['item']}`}>{data.title}</th>*/}
            {/*    </tr>*/}
            {/*</thead>*/}
            <tbody className={styles['params']}>
                {elements}
            </tbody>
        </table>
    )
}

export default ProductInfoFeatures;

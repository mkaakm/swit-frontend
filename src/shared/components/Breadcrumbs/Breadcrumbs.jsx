import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ data }) => {

    const items = data.map((el, i) => <span key={i} className={styles['item']}>{el}</span>);

    return (
        <div className={styles['content']}>
            {items}
        </div>
    )
}

export default Breadcrumbs;
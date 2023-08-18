import Select from 'react-select'

import Container from '../../shared/components/Container';

import styles from './Shop.module.scss';

const sortOptions = [
    { value: 'price: low-high', label: 'За ціною (Низька - Висока)' },
    { value: 'price: high-low', label: 'За ціною (Висока - Низька)' },
    { value: 'popularity', label: 'За популярністю' }
];

const paginationOptions = [
    { value: '12', label: '12' },
    { value: '24', label: '24' },
    { value: '200', label: 'Всі' }
];

const Shop = ({changePagination, changeSort}) => {
    return (
        <>
            <section className={styles['panel']}>
                <Container className={styles['panel-container']}>
                    <p>Каталог</p>
                    <div className={styles['settings']}>
                        <div className={styles['settings-item']}>
                            <span className={styles['settings-text']}>Сортування:</span>
                            <Select onChange={changeSort} className="sort" classNamePrefix="sort-select" placeholder="За замовчуванням" options={sortOptions} />
                            {/*<select name="sort" id="sort">*/}
                            {/*    <option>По Цене (Низкая - Высокая)</option>*/}
                            {/*    <option>По Цене (Высокая - Низкая)</option>*/}
                            {/*</select>*/}
                        </div>
                        <div className={styles['settings-item']}>
                            <span className={styles['settings-text']}>Показати:</span>
                            <Select onChange={changePagination} className="sort" classNamePrefix="sort-select" defaultValue={{ value: '12', label: '12' }} options={paginationOptions} />
                            {/*<select name="sort" id="sort">*/}
                            {/*    <option>12</option>*/}
                            {/*    <option>24</option>*/}
                            {/*    <option>Все</option>*/}
                            {/*</select>*/}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Shop;

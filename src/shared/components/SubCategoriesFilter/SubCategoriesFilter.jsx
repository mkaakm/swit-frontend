import Checkbox from "../Checkbox";

import {getCategoriesId} from "../../lib/functions";

import styles from "./sub-categories-filter.module.scss";

const SubCategoriesFilter = ({categories, products, selectCategories, selectSubCategories, toogleCategory, toggleSubCategory }) => {
    const filters = categories.map(item => {
        const {name, id} = item;
        const checked = Boolean(selectCategories.find(elem => elem.id === id));

        let subfilters = [];
        if(checked) {
            subfilters = item.subCategories.filter(({id}) => Boolean(products.find(({categories}) => getCategoriesId(categories).includes(id))))
                .map(item => {
                    const {name, id} = item;
                    const checked = Boolean(selectSubCategories.find(elem => elem.id === id));

                    return (
                        <li key={id} className={styles.filterListItem}>
                            <Checkbox checked={checked} onSelect={() => toggleSubCategory(item)} label={name} />
                        </li>
                    )
                })
        }

        return (<li className={styles.filterListItem} key={id} >
            <Checkbox checked={checked} onSelect={() => toogleCategory(item)} label={name} />
            {subfilters.length > 0 && (
                <ul className={styles.subfilters}>
                    {subfilters}
                </ul>
            )}
        </li>)
    })

    return (
        <ul className={styles.filterList}>
            {filters}
        </ul>
    )
}

export default SubCategoriesFilter;
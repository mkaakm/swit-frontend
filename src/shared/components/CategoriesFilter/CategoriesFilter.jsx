import Checkbox from "../Checkbox";

import {getCategoriesId} from "../../lib/functions";

import styles from "./categories-filter.module.scss";

const CategoriesFilter = ({categories, products, selectCategories, selectSubCategories, selectSubSubCategories, toogleCategory, toggleSubCategory, toggleSubSubCategory }) => {
    const filters = categories.map(item => {
        const {name, id} = item;
        const checked = Boolean(selectCategories.find(elem => elem.id === id));

        let subfilters = [];
        if(checked) {
            subfilters = item.subCategories.filter(({id}) => Boolean(products.find(({categories}) => getCategoriesId(categories).includes(id))))
                .map(item => {
                    const {name, id} = item;
                    const checked = Boolean(selectSubCategories.find(elem => elem.id === id));
                    let subSubFilters = [];
                    if(checked) {
                        subSubFilters = item.subSubCategories.filter(({id}) => Boolean(products.find(({categories}) => getCategoriesId(categories).includes(id))))
                            .map(item => {
                                const {name, id} = item;
                                const checked = Boolean(selectSubSubCategories.find(elem => elem.id === id));
                                return (
                                    <li key={id} className={styles.filterListItem}>
                                        <Checkbox checked={checked} onSelect={() => toggleSubSubCategory(item)} label={name} />
                                    </li>
                                )
                            })
                    }
                    return (
                        <li key={id} className={styles.filterListItem}>
                            <Checkbox checked={checked} onSelect={() => toggleSubCategory(item)} label={name} />
                            {subSubFilters.length > 0 && (
                                <ul className={styles.subSubfilters}>
                                    {subSubFilters}
                                </ul>
                            )}
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

export default CategoriesFilter;
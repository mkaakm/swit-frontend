import Checkbox from "../Checkbox";

import {getCategoriesId} from "../../lib/functions";

import styles from "./brands-filter.module.scss";

const BrandsFilter = ({brands, products, selectBrands, toggleBrand }) => {
    const filters = brands.map(item => {
        const {name, id} = item;
        const checked = Boolean(selectBrands.find(elem => elem.id === id));
        return (<li className={styles.filterListItem} key={id} >
            <Checkbox checked={checked} onSelect={() => toggleBrand(item)} label={name} />
        </li>)
    })

    return (
        <ul className={styles.filterList}>
            {filters}
        </ul>
    )
}

export default BrandsFilter;
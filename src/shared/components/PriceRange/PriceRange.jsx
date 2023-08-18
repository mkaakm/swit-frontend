import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

import styles from "./price-range.module.scss";

const PriceRange = ({min, max, minValue, maxValue, onChange}) => {
    return (<div>
        <p className={styles.rangeTitle}>Ціна: від <span className={styles.rangePrice}>{minValue}</span> до <span className={styles.rangePrice}>{maxValue}</span></p>
        <MultiRangeSlider min={min} max={max} onChange={onChange} />
    </div>)
}

export default PriceRange;
'use client'

import {useState} from "react";

import styles from "./category-description.module.scss";

const getShortDescription = (text) => {
    const index = text.indexOf("\n");
    return text.slice(0, index);
}

const CategoryDescription = ({title, content})=> {
    const [showMore, setShowMore] = useState(false);

    const onShowMore = () => setShowMore(prevState => !prevState);

    const text = showMore ? content : getShortDescription(content);

    return (
        <>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <p className={styles.loadMoreContainer}><span onClick={onShowMore} className={styles.loadMore}>{showMore ? "Приховати" : "Показати повністю"}</span></p>
        </>
    )
}

export default CategoryDescription;
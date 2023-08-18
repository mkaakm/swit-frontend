'use client'

import {useState} from "react";

import styles from "./description.module.scss"

const createMarkup = (title, text)=> {
    return {__html: `<h2>${title?.rendered}</h2> ${text}`};
}

const Description = ({title, content})=> {
    const [showMore, setShowMore] = useState(false);

    const onShowMore = () => setShowMore(prevState => !prevState);

    const text = showMore ? content?.rendered : (content?.rendered.split("</p>").slice(0, 1).join("</p>") + "</p>")

    const markup = createMarkup(title, text);

    return (
        <>
            <div className={styles.text} dangerouslySetInnerHTML={markup} ></div>
            <p className={styles.loadMoreContainer}><span onClick={onShowMore} className={styles.loadMore}>{showMore ? "Приховати" : "Показати повністю"}</span></p>
        </>
    )
}

export default Description;
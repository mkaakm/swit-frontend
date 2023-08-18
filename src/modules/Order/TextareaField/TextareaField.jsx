import styles from "./textarea-field.module.scss";

const TextareaField = (props) => {
    return <textarea {...props} className={styles.field} />
}

export default TextareaField;
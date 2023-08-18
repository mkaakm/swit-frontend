import styles from "./text-field.module.scss";

const TextField = (props) => {
    return <input {...props} className={styles.field} />
}

export default TextField;
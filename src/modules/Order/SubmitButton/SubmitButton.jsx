import styles from "./submit-button.module.scss";

const SubmitButton = ({children}) => {

    return <button className={styles.btn} type="submit">{children}</button>
}

export default SubmitButton;
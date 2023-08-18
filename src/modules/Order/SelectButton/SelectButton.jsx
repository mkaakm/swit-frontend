import styles from "./select-button.module.scss";

const SelectButton = ({active = false, onClick, children}) => {
    const className = active ? `${styles.btn} active` : styles.btn;

    return <button onClick={onClick} className={className} type="button">{children}</button>
}

export default SelectButton;
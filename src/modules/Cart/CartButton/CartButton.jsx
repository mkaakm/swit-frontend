import styles from "./cart-button.module.scss";

const CartButton = ({onClick, children}) => {
    return <button className={styles.btn} onClick={onClick}>{children}</button>
}

export default CartButton;
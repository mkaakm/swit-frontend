'use client';

import {useState} from "react";

import Container from "../../shared/components/Container";
import Modal from "../Modal";
import TextField from "./TextField";
import SelectButton from "./SelectButton";
import TextareaField from "./TextareaField";
import SubmitButton from "./SubmitButton";
import OrderList from "./OrderList";
import SuccessOrder from "./SuccessOrder";

import useForm from "../../shared/hooks/useForm";
import useCart from "../../shared/hooks/useCart";

import {addOrder} from "../../shared/lib/api/orders";

import initialState from "./initialState";
import fields from "./fields";

import styles from "./order.module.scss";

const Order = () => {
    const {cart, clearCart} = useCart();
    const [showModal, setShowModal] = useState(false);

    const onSubmit = async()=> {
        setShowModal(true);
        clearCart();
        const result = await addOrder({...state, cart});
    }

    const {state, setState, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const selectPaymentMethod = (value) => setState(prevState => ({...prevState, paymentMethod: value}))
    const selectDeliveryMethod = (value) => setState(prevState => ({...prevState, deliveryMethod: value}))

    return (
        <Container>
            {showModal && <Modal>< SuccessOrder /></Modal>}
            <form onSubmit={handleSubmit} className={styles.wrapper}>
                <div>
                    <div className={styles.contacts}>
                        <h4 className={styles.blockTitle}>Контактні дані</h4>
                        <TextField {...fields.name} onChange={handleChange} />
                        <TextField {...fields.lastName} onChange={handleChange} />
                        <TextField {...fields.phone} onChange={handleChange} />
                        <TextField {...fields.email} onChange={handleChange} />
                    </div>

                    <div className={styles.contacts}>
                        <h4 className={styles.blockTitle}>Спосіб оплати</h4>
                        <SelectButton active={state.paymentMethod === "Готівкою при отриманні"} onClick={()=> selectPaymentMethod("Готівкою при отриманні")}>Готівкою при отриманні</SelectButton>
                        <SelectButton active={state.paymentMethod === "Кредит чи оплата частинами"} onClick={()=> selectPaymentMethod("Кредит чи оплата частинами")}>Кредит чи оплата частинами</SelectButton>
                        <SelectButton active={state.paymentMethod === "Картою онлайн"} onClick={()=> selectPaymentMethod("Картою онлайн")}>Картою онлайн</SelectButton>
                    </div>

                    <div className={styles.payment}>
                        <h4 className={styles.blockTitle}>Спосіб доставки</h4>
                        <SelectButton active={state.deliveryMethod === "Самовивіз"} onClick={()=> selectDeliveryMethod("Самовивіз")}>Самовивіз</SelectButton>
                        <SelectButton active={state.deliveryMethod === "Кур'єром Нової пошти"} onClick={()=> selectDeliveryMethod("Кур'єром Нової пошти")}>Кур'єром Нової пошти</SelectButton>
                        <SelectButton active={state.deliveryMethod === "У відділення Нової пошти"} onClick={()=> selectDeliveryMethod("У відділення Нової пошти")}>У відділення Нової пошти</SelectButton>
                    </div>

                    {(state.deliveryMethod === "Кур'єром Нової пошти" || state.deliveryMethod === "У відділення Нової пошти") && (
                        <div>
                            {state.deliveryMethod === "Кур'єром Нової пошти" && <TextField {...fields.address} onChange={handleChange} />}
                            {state.deliveryMethod === "У відділення Нової пошти" && <TextField {...fields.deliveryDepartment} onChange={handleChange} />}
                        </div>
                    )}

                    <div className={styles.comment}>
                        <h4 className={styles.blockTitle}>Коментар до замовлення</h4>
                        <TextareaField {...fields.comment} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <OrderList items={cart} />
                    <div className={styles.orderWrapper}>
                        <SubmitButton>Оформити замовлення</SubmitButton>
                    </div>
                </div>

            </form>
        </Container>
    )
}

export default Order;

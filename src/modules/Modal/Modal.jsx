'use client';

import {useState, useRef, useEffect} from "react";
import {createPortal} from "react-dom";

import styles from "./modal.module.scss";

const Modal = ({close, style = {}, children}) => {
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);

    const closeModal = ({target, currentTarget}) => {
        if(target === currentTarget) {
            close()
        }
    }

    useEffect(()=> {
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        ref.current = document.getElementById("modal-root");
        if(ref.current) {
            setMounted(true)
        }

        return ()=> body.style.overflow = "auto";
    }, [])

    return mounted ? createPortal(
        <div onClick={closeModal} className={styles.backdrop}>
            <div style={style} className={styles.modal}>
                {children}
            </div>
        </div>,
        ref.current
    ) : null
}

export default Modal;
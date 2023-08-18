import { useState } from "react";

import CommentForm from '../CommentForm';

import styles from './CommentItem.module.scss';

const CommentItem = ({ props, transl }) => {

    const [state, setState] = useState(false);

    const toggle = () => {
        setState(prevState => !prevState);
    };

    const { name, text } = props;

    return (
        <div className={styles['item']}>
            <p className={styles['name']}>{name}</p>
            <p className={styles['text']}>{text}</p>
            <span className={styles['btn']} onClick={toggle}>{transl['btn-answer']}</span>
            {(state) ? <CommentForm transl={transl['form-answer']} toggleFnc={() => toggle()} /> : null}
        </div>
    )
}

export default CommentItem;
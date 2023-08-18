import { useState } from "react";

import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

import comments from './comments.json';

import styles from './ProductInfoComments.module.scss';

const ProductInfoComments = ({ transl }) => {

    const [state, setState] = useState(false);

    const toggle = () => {
        setState(prevState => !prevState);
    };

    const commentItems = comments.map(({ id, ...props }) => {
        return <CommentItem key={id} props={props} transl={transl} />
    })

    return (
        <div>
            <div className={styles['heading']}>
                <p className={styles['amount']}>{transl['amount']} 2</p>
                <p className={styles['btn-add']} onClick={toggle} >{transl['btn-add']}</p>
                {(state) ? <CommentForm transl={transl['form-add']} toggleFnc={() => toggle()} /> : null }
            </div>
            {commentItems}
        </div>
    )
}

export default ProductInfoComments;
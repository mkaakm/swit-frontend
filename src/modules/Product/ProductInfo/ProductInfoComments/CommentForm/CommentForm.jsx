import styles from './CommentForm.module.scss';

const CommentForm = ({ transl, toggleFnc }) => {
    return (
        <div className={styles['backdrop']}>
            <div className={styles['content']}>
                <form className={styles['form']} action="">
                    <label className={styles['title']}>{transl.title}</label>
                    <textarea className={styles['textarea']} placeholder={transl.textarea} />
                    <input className={styles['input']} type="text" placeholder={transl.name} />
                    <input className={styles['input']} type="text" placeholder={transl.email} />
                    <div className={styles['form-footer']}>
                        {(transl['add-file']) ? (
                            <div className={styles['add-file']}>
                                <a href="#" className={styles['add-file-link']}>
                                    <svg className={styles['icon']}> 
                                        <use href='/icons/file.svg#icon-file' />
                                    </svg>
                                    <span className={styles['add-file-link-span']}>{transl['add-file']}</span>
                                </a>
                                <span className={styles['add-file-text']}>{transl['max-files']}</span>
                            </div>
                        ) : null}
                        
                        <button className={styles['button']}>{transl.btn}</button>
                    </div>
                </form>
                <div className={styles['close']} onClick={toggleFnc} />
            </div>
        </div>
    )
}

export default CommentForm;
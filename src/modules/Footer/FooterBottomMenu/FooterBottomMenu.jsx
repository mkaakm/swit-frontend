import styles from './FooterBottomMenu.module.scss';

const FooterBottomMenu = ({ bottomMenu }) => {

    const paymentList = bottomMenu.payment.list.map(({ id, icon }) => {
        return (
            <li key={id} className={styles['payment-item']}>
                <svg className={styles['payment-icon']}>
                    <use href={`/icons/payment.svg${icon}`} />
                </svg>
            </li>
        )
    });

    const socialsList = bottomMenu.socials.list.map(({ id, icon, link }) => {
        return (
            <li key={id} className={styles['socials-item']}>
                <a href={link} rel="noreferrer" target="_blank">
                    <svg className={styles['socials-icon']}>
                        <use href={`/icons/socials.svg${icon}`} />
                    </svg>
                </a>
            </li>
        )
    });

    return (
        <div className={styles['section']}>
            <p className={styles['text']}>(c) 2021 swit.ua</p>
            <div className={styles['payment']}>
                <p className={styles['text']}>{bottomMenu['payment']['text']}</p>
                <ul className={styles['list']}>
                    {paymentList}
                </ul>
            </div>
            <div className={styles['socials']}>
                <p className={styles['text']}>{bottomMenu['socials']['text']}</p>
                <ul className={styles['list']}>
                    {socialsList}
                </ul>
            </div>
        </div>
    )
}

export default FooterBottomMenu;

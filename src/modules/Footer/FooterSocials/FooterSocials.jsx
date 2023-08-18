import styles from './FooterSocials.module.scss';

const FooterSocials = ({ socials }) => {
    
    const socialsElements = socials.list.map(({ id, link, icon }) => {
        return (
            <li key={id} href={link} className={styles['item']}>
                    <svg className={styles['icon']}>
                        <use href={`/icons/socials.svg${icon}`} />
                    </svg>
            </li>
        )
    })

    return (
        <div className={styles['section']}>
            <div className={styles['block']}>
                <h3 className={styles['title']}>{socials['text-mob']}</h3>
                <ul className={styles['list']}>
                    {socialsElements}
                </ul>
            </div>
        </div>
    )
}

export default FooterSocials;
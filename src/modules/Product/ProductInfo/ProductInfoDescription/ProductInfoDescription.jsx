import styles from './ProductInfoDescription.module.scss';

const ProductInfoDescription = ({description}) => {

    return (
        <div className={styles['content']} dangerouslySetInnerHTML={{ __html: description }}>
            {/*{text}*/}
            {/*<p className={styles['text']}>Блендеры "Bamix" – лучшие погружные блендеры в мире с 1950 года! Производятся только в Швейцарии!</p>*/}
            {/*<p className={styles['text']}>Одна из отличительных особенностей этой марки - уникальная надежность.</p>*/}
            {/*<p className={styles['text']}>Абсолютно надежный двигатель переменного тока, обеспечивающий рекордно высокие обороты (от 10 до 15 тысяч)*/}
            {/*До 5 минут непрерывной работы прибора*/}
            {/*Полностью монолитный герметичный корпус*/}
            {/*Эргономическая рукоять из нейлона*/}
            {/*Алюминиевый кожух*/}
            {/*Ножи и насадки для всех типов кулинарных потребностей из нержавеющей стали.*/}
            {/*Этот компактный прибор заменит громоздкие кухонные комбайны: он взбивает, замешивает, смешивает, молотит, рубит, готовит пюре, эмульсии, аэрирует и т.д. Блендер взобьет обезжиренное молоко в густой крем за 20 секунд, измельчит лед и замороженные ягоды в пюре за 10 секунд, сделает домашний майонез за 7 секунд, перемелет кофе, шоколад, палочки корицы и многое другое! Немаловажно то, что турбулентное перемешивание жидкости избавит кулинаров от брызг продуктов, а компактная и удобная подставка обеспечит удобное хранение всех насадок и компонентов. Все чаши и ножи легко моются, ножи можно повторно затачивать и в целом: все очень удобно, практично и надежно.</p>*/}
        </div>
    )
}

export default ProductInfoDescription;

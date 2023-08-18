"use client";

import Image from 'next/image';
import Slider from "react-slick";

import Container from '../../shared/components/Container';

import gallery from './gallery.json';

import useWindowSize from '../../shared/hooks/useWindowSize';
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Header.module.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false
    // cssEase: 'linear'
};

// const DesktopSlider = () => {
//     return (
//         <>
//             <div className={`${styles.sliderImage} ${styles.sliderImg1}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg2}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg3}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg4}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg5}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg6}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg7}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg8}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg9}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg10}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg11}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg12}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg13}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg14}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg15}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg16}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg17}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg18}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg19}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg20}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg21}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg22}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg23}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg24}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg25}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg26}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg27}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg28}`}/>
//         </>
//     )
// }
//
// const MobileSlider = () => {
//     return (
//         <>
//             <div className={`${styles.sliderImage} ${styles.sliderImg1}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg2}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg3}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg4}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg6}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg7}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg9}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg21}`}/>
//             <div className={`${styles.sliderImage} ${styles.sliderImg23}`}/>
//         </>
//     )
// }

const Header = () => {

    const {width} = useWindowSize();
    // const kef = (width - 32) / 440;
    // const galleryItems = gallery.map((el, i) => {
    //     // <div className={styles.imgWrapper}>
    //     //     <Image src={src} fill={true} objectFit='cover' />
    //     // </div>
    //     if (width <= 440) {
    //         // return <div className={styles.sliderImage} style={{height: `${width * 1.334}px`, backgroundImage: `url("${el[0]}")`}} />
    //         // return <Image key={i} src={el[0]} width={width - 32} height={width * 1.334} />
    //         return <Image key={i} src={el[0]} width={358} height={477} />
    //         // return (<div className={styles.imgWrapper}>
    //         //     <Image src={el[0]} fill={true} style={{objectFit: "cover", objectPosition: "center"}} />
    //         // </div>)
    //     } else if (width <= 920) {
    //         return <Image key={i} src={el[1]} width={920} height={460} />
    //     } else if (width <= 1400) {
    //         return <Image key={i} src={el[2]} width={1400} height={438} />
    //     } else {
    //         return <Image key={i} src={el[3]} width={1920} height={600} />
    //     }
    // });
    // console.log(width)
    return (
        <header className={styles['section']}>
            <Container>
                {/*<div className={styles.imgWrapper}>*/}
                {/*    <Image src={src} fill={true} objectFit='cover' />*/}
                {/*</div>*/}
                {/*{width < 440 && <div className={styles.sliderImage} style={{height: `${width * 1.334}px`, backgroundImage: `url("${gallery[0][0]}")`}} />}*/}
                {/*{width > 440 && <Image  src={gallery[0][1]} width={920} height={460} />}*/}
                <Slider {...settings} className={styles['slider']}>
                    {/*{galleryItems}*/}
                    <div className={`${styles.sliderImage} ${styles.sliderImg1}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg2}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg3}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg4}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg6}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg7}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg9}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg21}`}/>
                    <div className={`${styles.sliderImage} ${styles.sliderImg23}`}/>
                </Slider>
            </Container>
        </header>
    )
}

export default Header;

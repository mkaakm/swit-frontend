'use client'

import { useState, useCallback } from "react";

import Image from 'next/image';

import Modal from "../../../Modal";

// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import useWindowSize from "../../../../shared/hooks/useWindowSize";

import styles from './ProductCardGallery.module.scss';

const ProductCardGallery = ({images}) => {
    const [showModal, setShowModal] = useState(false);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [end, setEnd] = useState(3);

    const {width} = useWindowSize();

    const prev = () => setEnd(prevState => {
        const prevIndex = prevState - 1;
        if(prevIndex < 3) {
            return 3;
        }
        return prevIndex;
    });

    const next = () => setEnd(prevState => {
        const nextIndex = prevState + 1;
        if(nextIndex < images.length) {
            return nextIndex;
        }
        return images.length;
    });

    const toggleModal = useCallback(()=> setShowModal(prevState => !prevState), []);

    const mainImg = images[mainImageIndex];

    const otherImages = images.map((item, index) =>  <div key={index} className={styles.otherImageWrapper} onClick={() => setMainImageIndex(index)}><Image className={styles['gallery-content-img']} src={item.src} layout='fill' objectFit='contain' alt='product photo' /></div>);
    const elements = otherImages.filter((_, index) => index !== mainImageIndex).slice(end - 3, end);
    const mainImageStyle = width < 430 ? {height: width - 32} : {};
    return (
        <div className={styles['gallery']}>
            {showModal && <Modal style={{width: width < 430 ? width : "600px", padding: 0}} close={toggleModal}><div style={mainImageStyle} className={styles.largeImgWrapper}><Image className={styles['gallery-img']} src={mainImg.src} fill={true} style={{objectFit: "contain", objectPosition: "center"}} alt='product photo' /></div></Modal>}
            <div className={styles.imgWrapper} style={mainImageStyle}>
                <Image onClick={toggleModal} className={styles['gallery-img']} src={mainImg.src} fill={true} style={{objectFit: "contain", objectPosition: "center"}} alt='product photo' />
            </div>

            {elements.length > 0 && (<div className={styles['gallery-content']}>
                    {images.length > 3 && <div onClick={prev} className={styles['gallery-content-btn']} />}
                {elements}
                    {images.length > 3 && <div onClick={next} className={styles['gallery-content-btn']} />}
            </div>)}
            {/* <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}></Slider>

            <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}></Slider> */}
        </div>
    )
}

export default ProductCardGallery;

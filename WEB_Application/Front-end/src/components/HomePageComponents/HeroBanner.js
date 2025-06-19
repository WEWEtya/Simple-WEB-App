import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/global.css';
import '../../styles/HomePage/heroBanner.css';

import iphone from "../../assets/images/HomePage/HeroBanner/iphone.png";
import airpods1 from "../../assets/images/HomePage/HeroBanner/airpods.png";
import image1 from "../../assets/images/AboutUs/placeholder.jpg";

const slides = [
    {
        image: iphone, 
        title: "iPhone 14 Series",
        discount: "Up to 10% off Voucher",
        background: "black_background",
        icon: "fa-brands fa-apple"
    },
    {
        image: airpods1,
        title: "Airpods Pro", 
        discount: "Special Offer",
        background: "black_background",
        icon: "fa-brands fa-apple",
    },
    {
        image: image1, 
        title: "Exclusive Deals", 
        discount: "|:D", 
        background: "blue_background"
    },
];

const HeroBanner = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="custom_swiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={`hero_banner ${slide.background} ${index === 1 ? 'second_slide' : ''}`}>
                        <div className="hero_content">
                            <div className="title_container">
                                {slide.icon && <i className={slide.icon}></i>}
                                <h2>{slide.title}</h2>
                            </div>
                            <p>{slide.discount}</p>
                            <a href="/" className="shop_now-btn">
                                <span>Shop Now</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>

                        <div className="side_image right">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                       
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroBanner;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/global.css';
import '../../styles/HomePage/heroBanner.css';

import iphone from "../../assets/images/HomePage/iphone.png";
import airpods from "../../assets/images/HomePage/airpods.png";
import airpods2 from "../../assets/images/HomePage/airpods_2.png";
import image1 from "../../assets/images/AboutUs/hehehe.jpg";

const slides = [
    {
        image: iphone, 
        title: "iPhone 14 Series",
        discount: "Up to 10% off Voucher",
        background: "black_background",
        icon: "fa-brands fa-apple"
    },
    {
        image: airpods2, 
        image1: airpods,  // Two images for this slide
        title: "Airpods Pro", 
        background: "black_background",
        icon: "fa-brands fa-apple"
    },
    {
        image: image1, 
        title: "me", 
        discount: "|:D", 
        background: "blue_background"
    },
];

const HeroBanner = () => {
    return (
        <Swiper
            modules={[ Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="custom-swiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={`hero_banner ${slide.background}`}>
                        <img src={slide.image} alt={slide.title} />
                        {slide.image1 && (
                            <img src={slide.image1} alt="Second image" className="second_image" />
                        )}
                        <div className="hero_content">
                            <div className="title-container">

                                {slide.icon && <i className={`fa-brands ${slide.icon}`}></i>}
                                <h2>{slide.title}</h2>
                            </div>
                            <p>{slide.discount}</p>
                            <a href='/' className="shop_now-btn">
                                <span>Shop Now</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroBanner;

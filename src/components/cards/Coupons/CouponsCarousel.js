import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CouponCard from './CouponCard';



export default function CouponsCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 1.4,
        slidesToScroll: 1,
       
    };
    return (
        <div className="couponsCarouselContainer">
            <h2 className="tsn-heading-1"> Coupons For You</h2>
            <Slider {...settings}>
                <div>
                    <CouponCard />
                </div>
                <div>
                    <CouponCard />
                </div>
                <div>
                    <CouponCard />
                </div>
                <div>
                    <CouponCard />
                </div>
            </Slider>
        </div>
    )
}

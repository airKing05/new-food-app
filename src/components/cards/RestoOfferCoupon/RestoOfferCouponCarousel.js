import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestoTopOfferCoupon from './RestoTopOfferCoupon';
import RestoOfferCoupon from './RestoOfferCoupon';




export default function RestoOfferCouponCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 4000,
        // autoplay: true,
        // slidesToShow: 1.4,
        slidesToScroll: 1
    };
    return (
        <div className="CCarouselContainer">
            <Slider {...settings}>
                 
                <div>
                <RestoTopOfferCoupon/>
                </div>
                <div>
                   <RestoOfferCoupon />
                </div>
                

            </Slider>
        </div>
    )
}

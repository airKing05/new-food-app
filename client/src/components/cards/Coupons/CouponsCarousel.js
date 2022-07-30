import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CouponCard from './CouponCard';



export default function CouponsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
       
    };
    return (
        <div className="couponsCarouselContainer">
            <div className="tsn-heading-1"> Coupons For You</div>
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

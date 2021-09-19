import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComboCard from './ComboCard';



export default function CCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1.04,
        slidesToScroll: 1
    };
    return (
        <div className="CCarouselContainer">
            <Slider {...settings}>
                <div>
                    <ComboCard />
                </div>
                <div>
                    <ComboCard />
                </div>
                <div>
                    <ComboCard />
                </div>

            </Slider>
        </div>
    )
}

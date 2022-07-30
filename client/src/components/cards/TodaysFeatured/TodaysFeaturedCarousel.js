import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComboCard from '../ComboCarousel/ComboCard';


export default function TodaysFeaturedCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1.03,
        slidesToScroll: 1
    };
   
    return (
        <div className="CCarouselContainer">
            <Slider {...settings}>
                <div>
                    <ComboCard/>
                </div>
                <div>
                    <ComboCard/>
                </div>
                <div>
                    <ComboCard/>
                </div>
                <div>
                    <ComboCard/>
                </div>
                <div>
                    <ComboCard/>
                </div>
            </Slider>

        </div>
    )
}

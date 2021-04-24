import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrySNFullDetailsCard from './TrySNFullDetailsCard';
import TrySNCard from './TrySNCard';


export default function TrySNCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1.03,
        slidesToScroll: 1
    };
    const settings2 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1.03,
        slidesToScroll: 1
    };
    return (
        <div className="trySNCarouselContainer">
            <h2>&#128523; Try Something New</h2>
            <p>Discover a new restaurant you haven't explored before.</p>
            <Slider {...settings}>
                <div>
                    <TrySNFullDetailsCard />
                </div>
                <div>
                    <TrySNFullDetailsCard />
                </div>
                <div>
                    <TrySNFullDetailsCard />
                </div>
            </Slider>

            <Slider {...settings2}>
                <div>
                    <TrySNCard />
                </div>
                <div>
                    <TrySNCard />
                </div>
                <div>
                    <TrySNCard />
                </div>
            </Slider>
        </div>
    )
}

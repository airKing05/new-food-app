import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularBrandCard from './PopularBrandCard';

export default function PopularBrandCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 2000,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="trySNCarouselContainer container mt-5">
            <div className="tsn-heading-1">Popular Brands</div>
            <Slider {...settings}>
                <div>
                    <PopularBrandCard/>
                </div>
                <div>
                    <PopularBrandCard/>
                </div>
                <div>
                    <PopularBrandCard/>
                </div>
                <div>
                    <PopularBrandCard/>
                </div>
                <div>
                    <PopularBrandCard/>
                </div>
                <div>
                    <PopularBrandCard/>
                </div>
                <div>
                    <PopularBrandCard/>
                </div>
            </Slider>

            {/* <Slider {...settings2}>
                <div>
                    <TrySNCard />
                </div>
                <div>
                    <TrySNCard />
                </div>
                <div>
                    <TrySNCard />
                </div>
            </Slider> */}
        </div>
    )
}

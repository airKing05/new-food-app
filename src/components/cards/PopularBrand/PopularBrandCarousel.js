import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularBrandCard from './PopularBrandCard';

export default function PopularBrandCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className=" container mt-5" style={{paddingLeft: '0px'}}>
            <h2 className="tsn-heading-1">Popular Brands</h2>
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

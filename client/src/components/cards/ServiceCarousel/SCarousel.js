import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallCard from './SmallCard';



export default function SCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="container" style={{maxWidth: '500px', paddingLeft: '0px'}}>
            <Slider {...settings}>
                <div>
                    <SmallCard/>
                </div>
                <div>
                    <SmallCard/>
                </div>
                <div>
                    <SmallCard/>
                </div>
                <div>
                    <SmallCard/>
                </div>
                <div>
                    <SmallCard/>
                </div>
                <div>
                    <SmallCard/>
                </div>
            </Slider>
        </div>
    )
}

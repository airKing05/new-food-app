import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CurationMarkedCard from './CurationMarkedCard';
import CurationCard from './CurationCard';


export default function CurationCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        // autoplay: true,
        slidesToShow: 3.5,
        slidesToScroll: 1
    };

    return (
        <div className="container my-5" style={{maxWidth: '500px', paddingLeft: '0px'}}>
            <h2 className="tsn-heading-1">Popular Curations</h2>
            <Slider {...settings}>
                <div>
                    <CurationMarkedCard />
                    <CurationCard />
                </div>
                <div>
                    <CurationCard />
                    <CurationMarkedCard />
                </div>
                <div>
                    <CurationMarkedCard />
                    <CurationCard />
                </div>
                <div>
                    <CurationMarkedCard />
                    <CurationCard />
                </div>
                <div>
                    <CurationMarkedCard />
                    <CurationCard />
                </div>
                <div>
                    <CurationCard />
                    <CurationMarkedCard />
                </div>
                <div>
                    <CurationMarkedCard />
                </div>
            </Slider>

        </div>
    )
}

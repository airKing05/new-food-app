import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodSmallCard from './FoodSmallCard';


export default function CarouselCont() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 1
    };
    return (
        <div className="pickUpCarouselContainer">
            <h2> &#128077; Top Picks For You</h2>
            <Slider {...settings}>
                <div>
                    <FoodSmallCard />
                </div>
                <div>
                    <FoodSmallCard />
                </div>
                <div>
                    <FoodSmallCard />
                </div>
                <div>
                    <FoodSmallCard />
                </div>
                <div>
                    <FoodSmallCard />
                </div>
                <div>
                    <FoodSmallCard />
                </div>
            </Slider>



        </div>
    )
}

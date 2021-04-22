import React from 'react'
import CarouselCont from './cards/pickUpCarousel/CarouselCont'
import RestaurantCard from './cards/RestaurantCard'

export default function MainBody() {
    return (
        <div className="main-body-container"> 
            <RestaurantCard/>
            <CarouselCont/>
        </div>
    )
}

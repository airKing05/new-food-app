import React from 'react'
import CCarousel from './cards/ComboCarousel/CCarousel'
import CarouselCont from './cards/pickUpCarousel/CarouselCont'
import RestaurantCard from './cards/RestaurantCard'
import SCarousel from './cards/ServiceCarousel/SCarousel'

export default function MainBody() {
    return (
        <div className="main-body-container"> 
            <RestaurantCard/>
            <SCarousel/>
            <CarouselCont/>
            <CCarousel/>
        </div>
    )
}

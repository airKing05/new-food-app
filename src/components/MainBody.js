import React from 'react'
import CCarousel from './cards/ComboCarousel/CCarousel'
import NearRestoCont from './cards/NearByResto/NearRestoCont'
import CarouselCont from './cards/pickUpCarousel/CarouselCont'
import RestaurantCard from './cards/RestaurantCard'
import SCarousel from './cards/ServiceCarousel/SCarousel'
import CheckBoxCont from './CheckBox/CheckBoxCont'
import RestoButton from './RestoButton'
import TagLine from './TagLine'

export default function MainBody() {
    return (
        <div className="main-body-container"> 
            <RestaurantCard/>
            <SCarousel/>
            <CarouselCont/>
            <CCarousel/>
            <NearRestoCont/>
            <RestoButton/>
            <CheckBoxCont/>
            <TagLine/>
        </div>
    )
}

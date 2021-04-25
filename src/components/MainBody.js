import React from 'react'
import CCarousel from './cards/ComboCarousel/CCarousel'
import CouponsCarousel from './cards/Coupons/CouponsCarousel'
import NearRestoCont from './cards/NearByResto/NearRestoCont'
import CarouselCont from './cards/pickUpCarousel/CarouselCont'
import PopularBrandCarousel from './cards/PopularBrand/PopularBrandCarousel'
import CurationCarousel from './cards/PopularCurations/CurationCarousel'
import RestaurantCard from './cards/RestaurantCard'
import SCarousel from './cards/ServiceCarousel/SCarousel'
import TrySNCarousel from './cards/TrySomethingNew/TrySNCarousel'
import TodaysFeaturedCarousel from './cards/TodaysFeatured/TodaysFeaturedCarousel'
import CheckBoxCont from './CheckBox/CheckBoxCont'
import RestoButton from './RestoButton'
import TagLine from './TagLine'
import TodayFeaturedHeading from './cards/TodaysFeatured/TodayFeaturedHeading'

export default function MainBody() {
    return (
        <div className="main-body-container"> 
            <RestaurantCard/>
            <SCarousel/>
            <CarouselCont/>
            <CCarousel/>
            <CouponsCarousel/>
            <TodayFeaturedHeading/>
            <TodaysFeaturedCarousel/>
            <PopularBrandCarousel/>
            <CurationCarousel/>
            <TrySNCarousel/>
            <NearRestoCont/>
            <RestoButton/>
            <CheckBoxCont/>
            <TagLine/>
        </div>
    )
}

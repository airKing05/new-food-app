import React from 'react';
import RestoOfferCouponCarousel from '../RestoOfferCoupon/RestoOfferCouponCarousel';
import './RestoDetails.css';

export default function RestoDetails() {
    return (
        <div class="resto-detils-container">
        <div class="rd-header">
            <a href="#home"><i class="fal fa-long-arrow-left rd-header-back"></i> </a>
            <a href="#wishlist"><i class="fal fa-heart rd-header-wish"></i> </a>
            <a href="#search"><i class="fal fa-search rd-header-search"></i></a>
        </div>
        <h2>Burger King</h2>
        <span>American, Fast Food </span>
        <span> Old Gurgaon (Zone 6) | 5.6 kms <i class="fas fa-sort-down"></i></span>
        <p><i class="fa fa-info-circle" aria-hidden="true" ></i> Based on distance, an additional delivery fee will apply
        </p>
        <hr class="new3" />
        <div class="rd-row-details">
            <div class="col-3">
                <span><i class="fas fa-star"></i> 4.3 <i class="fal fa-chevron-right"></i></span>
                <p>1000<i class="fal fa-plus"></i> ratings</p>
            </div>
            <div class="col-3">
                <span>55 mins</span>
                <p> Delivery Time</p>
            </div>
            <div class="col-3">
                <span>₹350</span>
                <p>Cost for 2</p>
            </div>
        </div>
        <button class="rd-safety-link">
            <p>
            <i class="far fa-shield-check"></i> 
            <span>This restaurant follows Best Safety Standards <i class="fas fa-chevron-right"></i></span> 
            
            </p>
        </button>
        <hr class="new3" />
        {/* <RestoOfferCouponCarousel /> */}
    </div>
    )
}

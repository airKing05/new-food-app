import React from 'react';
import RestoOfferCouponCarousel from '../RestoOfferCoupon/RestoOfferCouponCarousel';
import './RestoDetails.css';

export default function RestoDetails() {
    return (
        <div className="resto-detils-container">
        <div className="rd-header">
            <a href="#home"><i className="fal fa-long-arrow-left rd-header-back"></i> </a>
            <a href="#wishlist"><i className="fal fa-heart rd-header-wish"></i> </a>
            <a href="#search"><i className="fal fa-search rd-header-search"></i></a>
        </div>
        <h2>Burger King</h2>
        <span>American, Fast Food </span>
        <span> Old Gurgaon (Zone 6) | 5.6 kms <i className="fas fa-sort-down"></i></span>
        <p><i className="fa fa-info-circle" aria-hidden="true" ></i> Based on distance, an additional delivery fee will apply
        </p>
        <hr className="new3" />
        <div className="rd-row-details">
            <div className="col-3">
                <span><i className="fas fa-star"></i> 4.3 <i className="fal fa-chevron-right"></i></span>
                <p>1000<i className="fal fa-plus"></i> ratings</p>
            </div>
            <div className="col-3">
                <span>55 mins</span>
                <p> Delivery Time</p>
            </div>
            <div className="col-3">
                <span>₹350</span>
                <p>Cost for 2</p>
            </div>
        </div>
        <button className="rd-safety-link">
            <p>
            <i className="far fa-shield-check"></i> 
            <span>This restaurant follows Best Safety Standards <i className="fas fa-chevron-right"></i></span> 
            
            </p>
        </button>
        <hr className="new3" />
        <RestoOfferCouponCarousel />
    </div>
    )
}

import React from 'react';
import RestoOfferCouponCarousel from '../RestoOfferCoupon/RestoOfferCouponCarousel';
import './RestoDetails.css';

export default function RestoDetails() {
    return (
        <div className=" container" style={{maxWidth: '500px'}}>
        <div className="row ">
            <a href="#home" className="text-decoration-none col-1 rd-icon-1" style={{cursor: 'pointer'}}><i class="fas fa-long-arrow-alt-left "></i> </a>
            <div className="col-9"></div>
            <a href="#wishlist" className="text-decoration-none col-1 rd-icon-1"><i className="fas fa-heart "></i> </a>
            <a href="#search" className="text-decoration-none col-1 rd-icon-1"><i className="fas fa-search "></i></a>
        </div>
        <h2 className="rd-heading-1">Burger King</h2> 
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

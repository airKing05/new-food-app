import React from 'react';
import hyderabadiBiryaniImg from '../../../images/hyderabadi-biryani.png';
import './NearRestoCardWithoutAD.css';

export default function NearRestoCardWithoutAD() {
    return (
<div className="near-resto-cont">
    <div className="near-resto-small-container">
        <div className="near-resto-woad-row-img">
          <img src={hyderabadiBiryaniImg} alt="food-small-card-img" />
          {/* <a href="" style={{cursor: 'pointer'}}>
            <!-- <div className="ad-container">
                <span>AD</span>
            </div> -->
          </a> */}
          <div className="near-resto-offer-box">
              <span> 40 % OFF</span>
          </div>
        </div>
    </div>
    <div className="near-resto-woad-details">
        <h2>The Chicken Factory</h2>
        <h4>Chiness, Pastas, Beverages, South...</h4>
        <h4 style={{display: 'flex', justifyContent:'flex-start'}}>Talwandi, 0.4 kms</h4>
        <div className="reviews">
            <span><i className="fas fa-star"> &#8211;</i></span>
            <span> &#8226; 41mins &#8226;</span>
            <span>₹250 for two</span>
            {/* <!-- <hr>
            <p>&#128512; Buy 2 Get 1 Free </p> --> */}
        </div>
    </div>
</div>
    )
}

import React from 'react';
import hyderabadiBiryaniImg from '../../../images/hyderabadi-biryani.png';
import './NearRestoCardWithoutAD.css';

export default function NearRestoCardWithoutAD() {
    return (
<div class="near-resto-cont">
    <div class="near-resto-small-container">
        <div class="near-resto-woad-row-img">
          <img src={hyderabadiBiryaniImg} alt="food-small-card-img" />
          {/* <a href="" style={{cursor: 'pointer'}}>
            <!-- <div class="ad-container">
                <span>AD</span>
            </div> -->
          </a> */}
          <div class="near-resto-offer-box">
              <span> 40 % OFF</span>
          </div>
        </div>
    </div>
    <div class="near-resto-woad-details">
        <h2>The Chicken Factory</h2>
        <h4>Chiness, Pastas, Beverages, South...</h4>
        <h4 style={{display: 'flex', justifyContent:'flex-start'}}>Talwandi, 0.4 kms</h4>
        <div class="reviews">
            <span><i class="fas fa-star"> &#8211;</i></span>
            <span> &#8226; 41mins &#8226;</span>
            <span>₹250 for two</span>
            {/* <!-- <hr>
            <p>&#128512; Buy 2 Get 1 Free </p> --> */}
        </div>
    </div>
</div>
    )
}

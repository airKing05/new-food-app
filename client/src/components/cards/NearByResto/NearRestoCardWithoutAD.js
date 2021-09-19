import React from 'react';
import hyderabadiBiryaniImg from '../../../images/hyderabadi-biryani.png';
import './NearRestoCardWithoutAD.css';

export default function NearRestoCardWithoutAD() {
    return (
<div className="near-resto-cont container">
  
    <div className="near-resto-small-container">
        <div className="near-resto-woad-row-img">
          <img src={hyderabadiBiryaniImg} alt="food-small-card-img" />
          {/* <a href="" style={{cursor: 'pointer'}}>
            <!-- <div className="ad-container">
                <span>AD</span>
            </div> -->
          </a> */}
          <div className="d-flex justify-content-center">
          <a href="off" className="off-btn" style={{top:'131px'}}>
              <span> 40 % OFF</span>
          </a>
          </div>
        </div>
    </div>
    <div className="near-resto-woad-details ">
        <div className="tsn-heading-2">The Chicken Factory</div>
        <div className="tsn-text-2 mt-3">Chiness, Pastas, Beverages, South...</div>
        <div className="tsn-text-2" style={{display: 'flex', justifyContent:'flex-start'}}>Talwandi, 0.4 kms</div>
        <div className=" tsn-text-3 mt-2">
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

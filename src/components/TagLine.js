import React from 'react';
import IceCreamImg from '../images/Ice-Cream-Cup.png'

export default function TagLine() {
    return (
        <div class="tag-container">
        <h1>LIVE </h1>
        <h1> FOR </h1>
        <h1> FOOD</h1>
        <img src={IceCreamImg} alt="ice cream cup " />
        {/* <h5>MADE BY FOOD LOVER <br /> New SWIGGY HQ, BENGALORE</h5> */}
        <div className="heading-5">
        <h5>MADE BY FOOD LOVER </h5>
        <h5>New SWIGGY HQ, BENGALORE</h5>
        </div>
        <div class="hr-line"> <hr /></div>
  </div>
    )
}

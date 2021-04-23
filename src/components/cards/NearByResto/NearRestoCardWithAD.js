import React from 'react';
import Rominus from '../../../images/Rominus.png';
import './NearRestoCardWithAD.css';

export default function NearRestoCardWithAD() {
    return (
        <div class="near-resto-cont">
            <div class="near-resto-small-container">
                <div class="near-resto-row-img">
                    <img src={Rominus} alt="food-small-card-img" />
                    <a href="#ad-link" style={{cursor: 'pointer'}}>
                        <div class="near-resto-ad-container">
                            <span>AD</span>
                        </div>
                    </a>
                    <div class="near-resto-offer-box">
                        <span> 60 % OFF</span>
                    </div>
                </div>
            </div>
            <div class="near-resto-details">
                <h2>Rominus Pizza And Burger</h2>
                <h4>Italian-American, Pizzas, Fastfood,...</h4>
                <h4 style={{display: 'flex', justifyContent:'start'}}>Talwandi, 2.5 kms</h4>
                <div class="reviews">
                    <span>
                        <i class="fas fa-star"></i>
                        {/* &#9733; */}
                         3.8</span>
                    <span> &#8226; 41mins &#8226;</span>
                    <span>₹200 for two</span>
                    
                </div>
                <hr/>
                <p>&#128512; Buy 2 Get 1 Free </p>
            </div>
        </div>
    )
};

import React from 'react';
import RominusImg from '../../../images/Rominus.png';
import './NearRestoCardWithAD.css';

export default function NearRestoCardWithAD() {
    return (
        <div className="near-resto-cont">
            <div className="near-resto-small-container">
                <div className="near-resto-row-img">
                    <img src={RominusImg} alt="food-small-card-img" />
                    <a href="#ad-link" style={{cursor: 'pointer'}}>
                        <div className="near-resto-ad-container">
                            <span>AD</span>
                        </div>
                    </a>
                    <div className="near-resto-offer-box">
                        <span> 60 % OFF</span>
                    </div>
                </div>
            </div>
            <div className="near-resto-details">
                <h2>Rominus Pizza And Burger</h2>
                <h4>Italian-American, Pizzas, Fastfood,...</h4>
                <h4 style={{display: 'flex', justifyContent:'flex-start'}}>Talwandi, 2.5 kms</h4>
                <div className="reviews">
                    <span>
                        <i className="fas fa-star"></i>
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

import React from 'react';
import RominusImg from '../../../images/Rominus.png';
import './NearRestoCardWithAD.css';

export default function NearRestoCardWithAD() {
    return (
        <div className="near-resto-cont container">
            <div className="near-resto-small-container">
                <div className="near-resto-row-img">
                    <img src={RominusImg} alt="food-small-card-img" />
                    <a href="#ad-link" style={{cursor: 'pointer'}}>
                        <div className="near-resto-ad-container">
                            <span>AD</span>
                        </div>
                    </a>
                    <div className="d-flex justify-content-center">
                    <a href="#off" className="off-btn" style={{top:'131px'}}>
                        <span> 60 % OFF</span>
                    </a>
                    </div>
                </div>
            </div>
            <div className="near-resto-details">
                <div className="tsn-heading-2">Rominus Pizza And Burger</div>
                <div className="tsn-text-2 mt-3">Italian-American, Pizzas, Fastfood,...</div>
                <div className="tsn-text-2" style={{display: 'flex', justifyContent:'flex-start'}}>Talwandi, 2.5 kms</div>
                <div className="tsn-text-3 mt-1">
                    <span>
                        <i className="fas fa-star"></i>
                        {/* &#9733; */}
                         3.8</span>
                    <span> &#8226; 41mins &#8226;</span>
                    <span>₹200 for two</span>
                    
                </div>
                <hr className="mt-1 mb-3" />
                <div className="tsn-text-2">&#128512; Buy 2 Get 1 Free </div>
            </div>
        </div>
    )
};

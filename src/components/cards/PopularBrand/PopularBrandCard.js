import React from 'react';
import FassosImg from '../../../images/fasso.png'
import './PopularBrandCard.css'

export default function PopularBrandCard() {
    return (
        <div className="brands-card-container">
            <div className="brands-row-border">
                <img src={FassosImg} alt="fasso-img" />
                <div className="brands-offer-box">
                    <span> 15 % OFF</span>
                </div>
                <div className="brands-row-details">
                    <span > Fassos </span>
                    <p className="brands-time">50 mins</p>
                </div>
            </div>

        </div>
    )
}

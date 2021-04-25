import React from 'react';
import FassosImg from '../../../images/fasso.png'
import './PopularBrandCard.css'

export default function PopularBrandCard() {
    return (
        <div class="brands-card-container">
            <div class="brands-row-border">
                <img src={FassosImg} alt="fasso-img" />
                <div class="brands-offer-box">
                    <span> 15 % OFF</span>
                </div>
                <div class="brands-row-details">
                    <span > Fassos </span>
                    <p class="brands-time">50 mins</p>
                </div>
            </div>

        </div>
    )
}

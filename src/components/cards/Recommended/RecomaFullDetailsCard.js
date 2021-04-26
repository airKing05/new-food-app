import React from 'react';
import './RecomaFullDetailsCard.css'

export default function RecomaFullDetailsCard() {
    return (
        <div class="recoma-outer-container">
        <div class="recoma-container">
            <div class="recoma-details">
                <span><i class="far fa-stop-circle dot" ></i><i class="fas fa-star rating-stat" ></i> Bestseller</span>
                <h6>Dal Fry</h6>
                <label for="">₹60</label>
                <button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum ...more </button>
            </div>
            <div class="recoma-img">
                <img src="https://bit.ly/32kDhW0" alt="dal-fry-img" />
                <div class="add-box">
                    <i class="fal fa-plus"></i>
                    <span> ADD </span>
                </div>
                <p>Customisable</p>
            </div>
            
        </div>
        <div class="hr-line">
            <hr/>
        </div>
        </div>
    )
}

import React from 'react';
import './RecomaFullDetailsCard.css'

export default function RecomaFullDetailsCard() {
    return (
        <div className="recoma-outer-container">
        <div className="recoma-container">
            <div className="recoma-details">
                <span><i className="far fa-stop-circle dot" ></i><i className="fas fa-star rating-stat" ></i> Bestseller</span>
                <h6>Dal Fry</h6>
                <label for="">₹60</label>
                <button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum ...more </button>
            </div>
            <div className="recoma-img">
                <img src="https://bit.ly/32kDhW0" alt="dal-fry-img" />
                <div className="add-box">
                    <i className="fal fa-plus"></i>
                    <span> ADD </span>
                </div>
                <p>Customisable</p>
            </div>
            
        </div>
        <div className="hr-line">
            <hr/>
        </div>
        </div>
    )
}

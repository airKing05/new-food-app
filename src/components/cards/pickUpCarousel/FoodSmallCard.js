import React from 'react'

export default function FoodSmallCard() {
    return (
        <div className="small-container">
            <div className="row-img">
                <img src="https://bit.ly/3t3FJvM" alt="food-small-card-img" />
                <a href="#ad-link" style={{cursor: 'pointer'}}>
                    <div className="ad-container">
                        <span>AD</span>
                    </div>
                </a>
                <div className="offer-box">
                    <span> 15 % OFF</span>
                </div>
            </div>
            <div className="row-details">
                <span style={{marginLeft: '-10px'}}> Chai Point </span>
                <p className="time">51 mins</p>
            </div>
        </div>
    )
}

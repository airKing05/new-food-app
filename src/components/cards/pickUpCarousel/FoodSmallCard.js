import React from 'react'

export default function FoodSmallCard() {
    return (
        <div class="small-container">
            <div class="row-img">
                <img src="https://bit.ly/3t3FJvM" alt="food-small-card-img" />
                <a href="#ad-link" style={{cursor: 'pointer'}}>
                    <div class="ad-container">
                        <span>AD</span>
                    </div>
                </a>
                <div class="offer-box">
                    <span> 15 % OFF</span>
                </div>
            </div>
            <div class="row-details">
                <span style={{marginLeft: '-10px'}}> Chai Point </span>
                <p class="time">51 mins</p>
            </div>
        </div>
    )
}

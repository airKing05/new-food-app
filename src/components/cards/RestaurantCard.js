import React from 'react';
import restocardImg from '../../images/hyderabadi-biryani-pil.png';
// import {FontAwesome} from 'react-fontawesome'
// import {faStyles} from 'font-awesome/css/font-awesome.css'


export default function RestaurantCard() {
    return (
        <div class="Resto-container">
            <div class="row-0">
                <div class="col-deatils">
                    <h2>Restaurants</h2>
                    <p>No-Contact Delivery Available</p>
                </div>
                <div class="col-img">
                    <img src={restocardImg} alt="Restaurants-img"/>
                </div>
                </div>
                <div class="row-1">
                    <button>
                        <span>View all  <i class="fas fa-arrow-right"></i></span>
                    </button>
                </div>
        </div>
        

    )
}

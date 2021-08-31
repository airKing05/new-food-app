import React from 'react';
import restocardImg from '../../images/hyderabadi-biryani-pil.png';
// import {FontAwesome} from 'react-fontawesome'
// import {faStyles} from 'font-awesome/css/font-awesome.css'


export default function RestaurantCard() {
    return (
        <div className="Resto-container">
            <div className="row-0">
                <div className="col-deatils">
                    <h2>Restaurants</h2>
                    <p>No-Contact Delivery Available</p>
                </div>
                <div className="col-img">
                    <img src={restocardImg} alt="Restaurants-img"/>
                </div>
                </div>
                <div className="row-1">
                    <button>
                        <span>View all  <i className="fas fa-arrow-right"></i></span>
                    </button>
                </div>
        </div>
        

    )
}

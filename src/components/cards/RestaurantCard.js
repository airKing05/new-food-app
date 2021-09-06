import React from 'react';
import restocardImg from '../../images/hyderabadi-biryani-pil.png';



export default function RestaurantCard() {
    return (
        <div className="container Resto-container my-4 rounded" style={{ maxWidth: '500px', color:'#fff', background: '#e46d47' }}>
            <div className="row row-0">
                <div className="col-8 col-deatils">
                    <h2>Restaurants</h2>
                    <p>No-Contact Delivery Available</p>
                </div>
                <div className="col-4 col-img">
                    <img src={restocardImg} className="img-fluid" alt="Restaurants-img" />
                </div>
            </div>
            <div className=" row row-1">
                <button>
                    <span>View all  <i className="fas fa-arrow-right"></i></span>
                </button>
            </div>
        </div>


    )
}

import React from 'react';
import FassosImg from '../../../images/fasso.png'
import './PopularBrandCard.css'

export default function PopularBrandCard() {
    return (
        <div className="brands-card-container mt-3 mb-5 container">
            <div className="brands-row-border">
                <div className="d-flex align-items-center align-middle mt-4">
                <img src={FassosImg} className="img-fluid " alt="fasso-img" style={{maxWidth: '70px'}}/>
                </div>
                <div className="d-flex justify-content-center">
                <a href="#off" className="off-btn">
                    <span className="d-flex align-items-center"> 15 % OFF</span> 
                </a>
                </div>
                <div className=" mt-4 pt-3 text-center" style={{position: 'relative'}}>
                    <span className="tsn-text-2"> Fassos </span>
                    <p className="tsn-text-3">50 mins</p>
                </div>
            </div>

        </div>
    )
}

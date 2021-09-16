import React from 'react';
import './RestoTopOfferCoupon.css';

export default function RestoTopOfferCoupon() {
    return (
        <div className="container border border-1 rounded py-2 mx-2" style={{maxWidth: '350px'}}>
        <div className="roc-rotate">
            <h5 className="roc-text-2 text-center">TOP OFFER</h5>
            <hr />
        </div> 
        <div className="text-center">
        <h3 className="roc-heading-1">&#128512; 50% OFF UPTO ₹100</h3>
        <p className="roc-text-1" style={{marginBottom: '0px'}}>USE SPECIALS | ON SELECT ITEMS</p>
        </div>
       
    </div>
    )
}

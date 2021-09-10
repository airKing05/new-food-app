import React from 'react';
import IceCreamImg from '../images/Ice-Cream-Cup.png'

export default function TagLine() {
    return (
        <div className="container" style={{maxWidth: '500px', color: 'rgb(199, 194, 194)', background: 'rgb(243, 241, 237)'}}>
        <h1 className="tag-heading-1">LIVE </h1>
        <h1 className="tag-heading-1"> FOR </h1>
        <h1 className="tag-heading-1"> FOOD</h1>
        <img src={IceCreamImg} className="img-fluid" alt="ice cream cup " style={{position: 'relative', top: '-104px', left: '107px', maxWidth: '132px'}}/>
        <h5 className="tag-heading-2 mb-3 " >MADE BY FOOD LOVER <br /> New SWIGGY HQ, BENGALORE</h5>
        
        <div className=" row mt-4 pb-4"> 
        <div className="col ">
        <hr style={{color: '#000', maxWidth: '100px'}}/>
        </div>
        </div>
  </div>
    )
}

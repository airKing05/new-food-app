import React from 'react';
import starImg from '../../../images/Gold-Star-PNG-Clipart.png';
import amazonImg from '../../../images/Amazon-PNG-Transparent-Image.png';
import JunkFoodImg from '../../../images/Combo-Junk-Food-PNG-Image.png' 

export default function ComboCard() {
    return (
        <div className="big-card-container">
        <div className="row">
            <div className="col">
                <div className="small-img">
                    <img src={starImg} alt="details-img" />
                </div>
                <div className="text">
                    <h2>UP TO</h2>
                    <h1>60% Off</h1>
                    <h3 style={{marginLeft:'0px'}}>Grab big discount from the </h3>
                    <h3 style={{marginLeft:'0px'}}> biggest brand in town</h3>
                    <div className="row">
                        <div className="col-text">
                            <h4> * extra cashback with </h4>
                        </div>
                        <div className="col-link">
                            <a href="amazonPay-link" style={{cursor: 'pointer'}}>
                                <img src={amazonImg} alt="amazonPay-link" />
                            </a>
                        </div>
                    </div>
                    <button>
                        ORDER NOW
                    </button>
                </div>

            </div>
            <div className="col">
                <div className="big-img">
                    <img src={JunkFoodImg} alt="big-card-img" />
                </div>
            </div>
        </div>
    </div>
    )
}

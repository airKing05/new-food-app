import React from 'react';
import starImg from '../../../images/Gold-Star-PNG-Clipart.png';
import amazonImg from '../../../images/Amazon-PNG-Transparent-Image.png';
import JunkFoodImg from '../../../images/Combo-Junk-Food-PNG-Image.png' 

export default function ComboCard() {
    return (
        <div class="big-card-container">
        <div class="row">
            <div class="col">
                <div class="small-img">
                    <img src={starImg} alt="details-img" />
                </div>
                <div class="text">
                    <h2>UP TO</h2>
                    <h1>60% Off</h1>
                    <h3>Grab big discount from the <br/> biggest brand in town</h3>
                    <div class="row">
                        <div class="col-text">
                            <h4> * extra cashback with </h4>
                        </div>
                        <div class="col-link">
                            <a href="" style={{cursor: 'pointer'}}>
                                <img src={amazonImg} alt="amazonPay-link" />
                            </a>
                        </div>
                    </div>
                    <button>
                        ORDER NOW
                    </button>
                </div>

            </div>
            <div class="col">
                <div class="big-img">
                    <img src={JunkFoodImg} alt="big-card-img" />
                </div>
            </div>
        </div>
    </div>
    )
}

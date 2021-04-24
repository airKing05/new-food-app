import React from 'react';
import './TrySNCard.css';
import PaneerImg from '../../../images/paneer.png'

export default function TrySNCard() {
    return (
        <>
            <div class="try-SN-cont">
                <div class="try-SN-container">
                    <div class="try-SN-row-img">
                        <img src={PaneerImg} alt="food-small-card-img" />
                        {/* <a href="" style="cursor: pointer;">
                                <!-- <div class="ad-container">
                                    <span>AD</span>
                                </div> --> 
                            </a>*/}
                        <div class="try-SN-offer-box">
                            <span> 50 % OFF</span>
                        </div>
                    </div>
                </div>
                <div class="try-SN-details">
                    <div class="try-SN-heading">
                        <h2>The Good B...</h2>
                        <i class="fal fa-shield-check"></i>
                        <span className="try-SN-best-safty"><p> BEST SAFETY</p></span>
                    </div>
                    <h4>North Indain, Biryani, Asian,...</h4>
                    <h4>Talwandi, 2.5 kms</h4>
                    <div class="try-SN-reviews">
                        <span><i class="fas fa-star"> 4.1</i></span>
                        <span>&nbsp; &#8226; &nbsp;48 mins&nbsp; &#8226; &nbsp;</span>
                        <span> ₹600 for two</span>
                    </div>
                    <hr />
                    <p>&#128512; Use TRYNEW </p>

                </div>
            </div>
        </>
    )
}

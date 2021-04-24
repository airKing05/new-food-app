import React from 'react';
import './TrySNFullDetailsCard.css';
import FireFlameImg from '../../../images/fire-flame.png';
import TryNewPizzaImg from '../../../images/try-new-pizza.png'

export default function TrySNFullDetailsCard() {
    return (
        <>
            <div class="try-SNFDC-cont">
                <div class="try-SNFDC-container">
                    <div class="try-SNFDC-row-img">
                        <div class="try-SNFDC-img-heading">
                            <img src={FireFlameImg} alt="fire-flame" />
                            <div class="try-SNFDC-img-text">
                                <h4>Oven <br /> Story</h4>
                                <span >Pizza</span>
                            </div>
                        </div>
                        <img src={TryNewPizzaImg} alt="food-small-card-img" />
                        {/* <a href="#" style="cursor: pointer;">
                            <!-- <div class="ad-container">
                                            <span>AD</span>
                                        </div> -->
                        </a> */}
                        <div class="try-SNFDC-offer-box">
                            <span> 50 % OFF</span>
                        </div>
                    </div>
                </div>
                <div class="try-SNFDC-details">
                    <div class="try-SNFDC-heading">
                        <h2>Ovenstory P...</h2>
                        <i class="fal fa-shield-check"></i>
                        <span className="try-SNFDC-best-safty"><p> BEST SAFETY</p></span>
                    </div>
                    <h4>Pizzas</h4>
                    <h4>Talwandi, 2.5 kms</h4>
                    <div class="try-SNFDC-reviews">
                        <span><i class="fas fa-star"> 4.1</i></span>
                        <span>&nbsp; &#8226; &nbsp;48 mins&nbsp; &#8226; &nbsp;</span>
                        <span> ₹600 for two</span>
                    </div>
                    <hr />
                    <p>&#128512; Use TRYNEW </p>
                    <div className="try-SNFDC-speciality"><i class="far fa-gem" ></i> Pizzas with 4 standout <br/>cheese flavours </div>
                    <div class="try-SNFDC-bg-color"></div>
                </div>
            </div>  
        </>
    )
}

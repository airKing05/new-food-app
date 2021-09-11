import React from 'react';
// import './TrySNFullDetailsCard.css';
import FireFlameImg from '../../../images/fire-flame.png';
import TryNewPizzaImg from '../../../images/try-new-pizza.png'

export default function TrySNFullDetailsCard() {
    return ( 
        <>
            <div className="try-SNFDC-cont container d-flex" style={{maxWidth: '500px'}}>
                <div className="try-SNFDC-container row">
                    <div className="try-SNFDC-row-img col-5" style={{border: '1px solid blue'}}>
                        {/* <div className="try-SNFDC-img-heading">
                            <img src={FireFlameImg} alt="fire-flame" />
                            <div className="try-SNFDC-img-text">
                                <h4>Oven <br /> Story</h4>
                                <span >Pizza</span>
                            </div>
                        </div> */}
                        <img src={TryNewPizzaImg} alt="food-small-card-img" className="img-fluid"/>
                        {/* <a href="#" style="cursor: pointer;">
                            <!-- <div className="ad-container">
                                            <span>AD</span>
                                        </div> -->
                        </a> */}
                        <div className="try-SNFDC-offer-box">
                            <span> 50 % OFF</span>
                        </div>
                    </div>
                
                <div className="try-SNFDC-details col-7" style={{border: '1px solid gray'}}>
                    <div className="try-SNFDC-heading">
                        <h4 className="tsn-heading-2">Ovenstory P...</h4>
                        <i className="fal fa-shield-check"></i>
                        <span className="try-SNFDC-best-safty tsn-text-4"><p> BEST SAFETY</p></span>
                    </div>
                    <h4>Pizzas</h4>
                    <h4>Talwandi, 2.5 kms</h4>
                    <div className="try-SNFDC-reviews">
                        <span><i className="fas fa-star"> 4.1</i></span>
                        <span>&nbsp; &#8226; &nbsp;48 mins&nbsp; &#8226; &nbsp;</span>
                        <span> ₹600 for two</span>
                    </div>
                    <hr />
                    <p>&#128512; Use TRYNEW </p>
                    <div className="try-SNFDC-speciality"><i className="far fa-gem" ></i> Pizzas with 4 standout <br/>cheese flavours </div>
                    <div className="try-SNFDC-bg-color"></div>
                </div>
                </div>
            </div>  
        </>
    )
}

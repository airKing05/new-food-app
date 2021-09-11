import React from 'react';
// import './TrySNFullDetailsCard.css';
import FireFlameImg from '../../../images/fire-flame.png';
import TryNewPizzaImg from '../../../images/try-new-pizza.png'

export default function TrySNFullDetailsCard() {
    return ( 
        <>
            <div className="container d-flex" style={{maxWidth: '500px'}}>
                <div className="row">
                    <div className=" col-5" style={{border: '1px solid blue'}}>
                        <div className="container border rounded" style={{maxWidth: '120px', background:'rgb(223, 32, 32)'}}>
                        <div className="row mt-3">
                            <div className="col-6 pr-1" >
                            <img src={FireFlameImg} alt="fire-flame" className="" style={{width:'37px'}}/>
                            </div>
                            <div className="col-6 pl-2" >
                                <div className="tsn-heading-3">Oven <br /> Story</div>
                                <div className="tsn-text-5">Pizza</div>
                            </div>
                        </div>
                        <img src={TryNewPizzaImg} alt="food-small-card-img" className="img-fluid" style={{width:'105px'}}/>
                        {/* <a href="#" style="cursor: pointer;">
                            <!-- <div className="ad-container">
                                            <span>AD</span>
                                        </div> -->
                        </a> */}
                        <div className="try-SNFDC-offer-box">
                            <span> 50 % OFF</span>
                        </div>
                        </div>
                    </div>
                
                <div className="col-7" style={{border: '1px solid gray'}}>
                    <div className="row">
                        <div className="col-7">
                        <div className="tsn-heading-2">Ovenstory P...</div>
                        </div>
                       
                       <div className="col-5 " style={{paddingRight: '0px'}}>
                       {/* <i className="fa fa-shield-alt"></i> */}
                        <span className="tsn-text-4 border-top border-right border-bottom py-1 pr-1  d-flex justify-content-end " style={{paddingRight: '0px'}}>BEST SAFETY</span>
                       </div>
                    </div>
                    <div className="tsn-text-2">Pizzas</div>
                    <div  className="tsn-text-2">Talwandi, 2.5 kms</div>
                    <div className="tsn-text-3" style={{paddingRight: '0px'}}>
                        <span><i className="fas fa-star"> 4.1</i></span>
                        <span> &#8226; 48 mins &#8226; </span>
                        <span> ₹600 for 2</span>
                    </div>
                    <hr />
                    <div  className="tsn-text-2">&#128512; Use TRYNEW </div>
                    <div  className="tsn-text-2"><i className="far fa-gem" ></i> Pizzas with 4 standout <br/>cheese flavours </div>
                    <div className="try-SNFDC-bg-color"></div>
                </div>
                </div>
            </div>  
        </>
    )
}

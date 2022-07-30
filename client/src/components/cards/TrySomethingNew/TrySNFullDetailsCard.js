import React from 'react';
// import './TrySNFullDetailsCard.css';
import ovenStory from '../../../images/ovenStory.PNG';
import TryNewPizzaImg from '../../../images/try-new-pizza.png'

export default function TrySNFullDetailsCard() {
    return (
        <>
            <div className="container d-flex" style={{ maxWidth: '500px', paddingLeft: '0px' }}>
                <div className="row">
                    <div className=" col-5">
                        <div className="border" style={{ width: '120px', background: '#9c1e21', borderRadius: '10px' }}>
                            <img src={ovenStory} alt="fire-flame" className="mt-2" style={{ width: '40px' }} />
                            <img src={TryNewPizzaImg} alt="food-small-card-img" className="" style={{ width: '105px' }} />
                            <div className="d-flex justify-content-center" >
                                <a href="#off" className="off-btn " style={{ top: '113px' }}>
                                    <span> 50 % OFF</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-7 ">
                        <div className="row">
                            <div className="col-7">
                                <div className="tsn-heading-2">Ovenstory Pizza</div>
                            </div>

                            <div className="col-5 " style={{ paddingRight: '0px'}}>
                                {/* <i className="fa fa-shield-alt"></i> */}
                                <span className="tsn-text-4 border-top border-right border-bottom py-1 pr-2  d-flex justify-content-end " style={{ paddingRight: '0px' }}>BEST SAFETY</span>
                            </div>
                        </div>
                        <div className="tsn-text-2 mt-3">Pizzas</div>
                        <div className="tsn-text-2">Talwandi, 2.5 kms</div>
                        <div className="tsn-text-3" style={{ paddingRight: '0px' }}>
                            <span><i className="fas fa-star"> 4.1</i></span>
                            <span> &#8226; 48 mins &#8226; </span>
                            <span> ₹600 for 2</span>
                        </div>
                        <hr className="mt-2" style={{ marginBottom: '10px' }} />
                        <div className="tsn-text-2">&#128512; Use TRYNEW </div>
                        <div className="tsn-text-2"><i className="far fa-gem" ></i> Pizzas with 4 standout <br />cheese flavours </div>
                        {/* <div className="rounded-circle" style={{width: '24px', height:'24px', background:'rgb(239 32 36)', position: 'absolute',top: '150px', zIndex :'-1'}}></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

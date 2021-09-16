import React from 'react';
import './TrySNCard.css';
import PaneerImg from '../../../images/paneer.png'

export default function TrySNCard() {
    return (
        <>
            <div className="container mt-5" style={{ maxWidth: '500px', paddingLeft: '0px ' }}>
                <div className="row">
                    <div className="col-5" >
                        <div className="border" style={{ width: '110px',  height: '130px', backgroundImage: `url("https://bit.ly/3yZwNKd")`, borderRadius: '10px'}}>
                            <img src={PaneerImg} alt="food-small-card-img" style={{ width: '105px' }} />
                            <div className="d-flex justify-content-center" >
                                <a href="#off" className="off-btn" style={{ top: '113px' }}>
                                    <span> 50 % OFF</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-7">
                        <div className="row">
                            <div className="col-7">
                                <div className="tsn-heading-2">The Good Food</div>
                            </div>

                            <div className="col-5 " style={{ paddingRight: '0px' }}>
                                {/* <i className="fa fa-shield-alt"></i> */}
                                <span className="tsn-text-4 border-top border-right border-bottom py-1 pr-2  d-flex justify-content-end " style={{ paddingRight: '0px' }}>BEST SAFETY</span>
                            </div>
                        </div>
                        <div className="tsn-text-2 mt-3">North Indain, Biryani, Asian</div>
                        <div className="tsn-text-2">Talwandi, 2.5 kms</div>
                        <div className="tsn-text-3" style={{ paddingRight: '0px' }}>
                            <span><i className="fas fa-star"> 4.1</i></span>
                            <span> &#8226; 48 mins &#8226; </span>
                            <span> ₹600 for 2</span>
                        </div>
                        <hr className="mt-2" style={{ marginBottom: '10px' }} />
                        <div className="tsn-text-2">&#128512; Use TRYNEW </div>

                    </div>
                </div>
            </div>
        </>
    )
}

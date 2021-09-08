
import React from 'react';
import AddBtn2 from '../cards/button/AddBtn2';

export default function DetailsCart() {
    return (
        <div>
            <div className="container" style={{ maxWidth: '500px' }}>
                <div className="row">
                    <div className="col-2">
                        <img src="https://alias.live/aUL1qP" className="" style={{ width: '45px', height: '45px' }} alt="cart-img-brand" />
                    </div>
                    <div className="col-10 align-middle" >
                        <div className="row">
                            <div className="cd-heading-2"> McDonald's</div>
                        </div>
                        <div className="row">
                            <div className="cd-text-3">Indraprastha Industrail Area</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-1 align-middle">
                        <i class="far fa-dot-circle cd-icon-5"></i>
                    </div>
                    <div className="col-6" style={{ padding: '0px !important', maxWidth: '250px' }}>
                        <div className="cd-heading-3">
                            EVM Chickenn Maharaja Mac Burger
                        </div>
                        <div className="cd-text-3">
                            Coke (Medium), Noodle Masala seasoning Al-a-Carte, Chilli Sa...
                        </div>
                        <div className="cd-text-3" style={{ color: 'black' }}>
                            CUSTOMIZE
                        </div>
                    </div>
                    <div className="col-3 pr-1">
                        <AddBtn2 />
                    </div>
                    <div className="col-2 text-end">₹411</div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-1">
                        <i class="far fa-clipboard cd-icon-3"></i>
                    </div>
                    <div className="col-11 cd-text-2 " style={{}}>
                        Any restaurant request? We will try our best to co
                    </div>
                </div>

            </div>

            <div className="container">
                 <hr style={{height: '15px' }}/> 
            </div>

            <div className="container" style={{maxWidth: '500px'}}>
            <div className="container rounded py-2" style={{border: '1px solid #fd9e69', background: '#fffbf5'}}>
                <div className="row">
                   <div className="col">
                   <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  style={{width:'20px', height: '20px', borderColor: '#e27217'}}/>
                        <label className ="form-check-label" for="flexCheckChecked">
                        <div className="cd-heading-1 ml-1"> Opt in for No-contact Delivery</div>
                        <div className="cd-text-1 ml-1" >Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</div>
                        </label>
                    </div>
                   </div>
                </div>
            </div>
            </div>
            <div className="container my-4" style={{maxWidth: '500px'}}>
                <div className="row ">
                    <div className="col-1"><i class="fas fa-hand-holding-usd cd-icon-2"></i></div>
                    <div className="col-11">
                        <div className="row">
                            <div className="cd-heading-2"> Tip yor hunger saviour &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{background: '#fff'}}></i> </div>
                            <div className="cd-text-3">Thanks to your delivery partner for helping you stay safe indoors. Support them these though times with a tip.</div>
                        </div>
                        <div className="row my-3 ">
                            <div className="col-3">
                                <a href="#cd-com-btn" className="cd-com-btn text-decoration-none  cd-text-3 d-flex justify-content-center align-items-center">30</a>
                            </div>
                            <div className="col-3 ">
                                <a href="#cd-com-btn" className="cd-com-btn text-decoration-none  cd-text-3 d-flex justify-content-center align-items-center">50</a>
                            </div>
                            <div className="col-3 ">
                                <a href="#cd-com-btn" className="cd-com-btn text-decoration-none  cd-text-3 d-flex justify-content-center align-items-center">70</a>
                            </div>
                            <div className="col-3 ">
                                <a href="#cd-com-btn" className="cd-com-btn text-decoration-none  cd-text-3 d-flex justify-content-center align-items-center">Other</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                 <hr style={{height: '15px' }}/> 
            </div>
           
            <div className="container " style={{maxWidth: '500px'}}>
                <a href="#apply-coupon" className="row text-decoration-none" style={{}}>
                    <div className="col-1"><i class="fab fa-buffer cd-icon-2"></i></div>
                    <div className="col-10 cd-heading-2">APPLY COUPONS</div>
                    <div className="col-1"><i class="fas fa-chevron-right cd-icon-4"></i></div>
                </a>

            </div>

            <div className="container">
                 <hr style={{height: '15px' }}/> 
            </div>

            <div className="container" style={{maxWidth: '500px'}}>
                <div className="row">
                    <div className="col">
                        <div className="cd-heading-4">Bill Details</div>
                        <div className="row cd-text-2">
                            <div className="col-10 ">Item Total</div>
                            <div className="col-2 d-flex justify-content-end">₹410.72</div>
                        </div>
                        <div className="row cd-text-2">
                            <div className="col-10 ">Delivery Partner fee for 0.00 kms  &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{background: '#fff'}}></i> </div>
                            <div className="col-2 d-flex justify-content-end">₹22</div>
                        </div>
                        <div className="cd-text-3">This fee goes towards paying your Delivery Partner fairly</div>
                        
                        <hr/>

                        <div className="row cd-text-2">
                            <div className="col-10">Delivery Tip</div>
                            <div className="col-2">
                                <a href="#add-tip" className="text-decoration-none d-block" style={{color: ' #ad684e'}}>
                                    Add tip
                                </a>
                            </div>
                        </div>
                        <div className="row cd-text-2">
                            <div className="col-10">Texes and Charges &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{background: '#fff'}}></i></div>
                            <div className="col-2 d-flex justify-content-end">
                               ₹38.24
                            </div>
                        </div>

                        <hr/>

                        <div className="row cd-heading-4">
                            <div className="col-10">To Pay</div>
                            <div className="col-2 d-flex justify-content-end">₹471</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                 <hr style={{height: '10px' }}/> 
            </div>

            <div className="container">
                <div className="row my-2">
                    <div className="col-1"><i class="far fa-list-alt cd-icon-2 pt-1"></i></div>
                    <div className="col-11 cd-heading-4">Review your order and address details to avoid cancellations</div>
                </div>
                <div className="row my-2">
                    <div className="col-1"><i class="fas fa-stopwatch cd-icon-4"></i></div>
                    <div className="col-11 cd-heading-3">I you choose to cancel, you can do with in 60 seconds after placing the order.</div>
                </div>
                <div className="row my-2">
                    <div className="col-1 cd-icon-4">&#8377;</div>
                    <div className="col-11 cd-heading-3">Post 60 seconds, you will be charged 100% cancellations fees.</div>
                </div>
                <div className="row my-2">
                    <div className="col-1"><i class="fas fa-hands cd-icon-4"></i></div>
                    <div className="col-11 cd-heading-3">However, it the event of an unusual delay of order, you will not be charged a cancellations fees.</div>
                </div>
                <div className="row my-2">
                    <div className="col-1"><i class="fas fa-praying-hands cd-icon-4"></i></div>
                    <div className="col-11 cd-heading-3">This police helps us  avoid food wastage and compensate restaurants/ delivery partner for their efforts.</div>
                </div>
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-11"><a href="#read-policy" className="text-decoration-none" style={{borderBottom: '1px dotted black'}}>Read policy</a></div>
                </div>

            </div>
        </div>
    )
}

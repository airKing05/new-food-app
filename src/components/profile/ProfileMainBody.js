import React, { Component } from 'react';
import './profile.css';




export default class ProfileMainBody extends Component {
    render() {
        return (
            <div className="container" style={{ maxWidth: '500px', background: '' }}>
                <div className="row mt-5">
                    <div className="col-10 " >
                        <h4 className="d-flex justify-content-start">ANIL</h4>
                        <p className="d-flex justify-content-start ct-text">9632587410 	&nbsp; &#8226; 	&nbsp; codejuggler.xy@gmail.com</p>
                    </div>
                    <div className="col-2 ">
                        <a href="#edit" style={{ textDecoration: 'none', color: '#ff8702', fontSize: '18px', fontWeight: '400' }}>EDIT</a>
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <div className="u-line" style={{ borderColor: '3px solid black' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div class="accordion accordion-flush" id="accordionFlushExample" style={{ color: '#fff !important' }}>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class=" acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h5 className="ct-heading d-flex justify-content-start" >My Account </h5>
                                        <p className="ct-text d-flex justify-content-start" >Address, Favorites &#38; Offers</p>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div className="mt-n-2 u-d-line" ></div>
                                        <ul className="body-ul">
                                            <li className="mt-4 " > <a href="#manage-address" className="text-decoration-none ct-heading"> <i class="fas fa-home "></i>  &nbsp; Mange Address <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                                            <li className="mt-4 " > <a href="#favorite" className="text-decoration-none ct-heading"> <i class="fas fa-home "></i>  &nbsp; Favorites <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                                            <li className="mt-4 " > <a href="#offers" className="text-decoration-none ct-heading"> <i class="fas fa-percentage mr-1"></i>  &nbsp;  Offers <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h5 className="ct-heading d-flex justify-content-start" >Payment &#38; Refunds </h5>
                                        <p className="ct-text d-flex justify-content-start" >Manage your Refunds, Payment Mode</p>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div className="mt-n-2 u-d-line" ></div>
                                        <ul className="body-ul">
                                            <li className="mt-4 " > <a href="#refunds" className="text-decoration-none ct-heading"> <i class="fas fa-wallet"></i>  &nbsp; Active Refunds <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                                            <li className="mt-4 " > <a href="#payment-mode" className="text-decoration-none ct-heading"> <i class="fas fa-home "></i>  &nbsp; Payment Modes <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="u-line" ></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-11">
                                <h5 className="ct-heading d-flex" >New Swiggy Money <span className="new-tag">NEW</span></h5>
                                <p className="ct-text">View Account Balance and Transition History</p>
                            </div>
                            <div className="col-1 mt-3"> <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i></div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="u-line" ></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-11">
                                <h5 className="ct-heading d-flex" >New Swiggy Super</h5>
                                <p className="ct-text">Save big with Free Delivery and More benefits</p>
                            </div>
                            <div className="col-1 mt-3"> <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i></div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="u-line" ></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-11">
                                <h5 className="ct-heading d-flex" >Help</h5>
                                <p className="ct-text">FAQ &#38; Links</p>
                            </div>
                            <div className="col-1 mt-3"> <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i></div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <h5 className="ct-heading pt-4 pb-3" style={{ background: '#f4f4f5' }}>PAST ORDERS</h5>
                    <div className="col" >
                        <section>
                            <div className="pb-4" style={{ background: '#fff' }}>
                                <div className="row pt-4" >
                                    <div className="col-9">
                                        <h5 className="ct-heading ">Faasos</h5>
                                        <p className="ct-text mb-0 mt-0">Gandhinager</p>
                                        <p className="ct-text">₹145 <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </p>
                                    </div>
                                    <div className="col-3">
                                        <p className="d-flex">Delivered <i class="fas fa-check px-1 py-1 rounded-circle" style={{ background: ' #60b246', color: '#fff', }}></i></p>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col">
                                        <div className="u-d-line" ></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col ">
                                        <p className="ct-text mb-0">
                                            <span >Massala Panner Tikka  Wrap. <label>&#40;1&#41;</label> &#44;</span>
                                            <span>Cheese Melt Panner Wrap. <label>&#40;1&#41;</label> &#44; </span>
                                            <span>Falefel Nuggets with Mayo Dip. <label>&#40;1&#41;</label></span>
                                        </p>
                                        <span className="ct-text mt-2">Nov 18, 2018 10:30 PM</span>
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="col d-flex">
                                        <button className=" sec-btn" style={{ color: '#fc8019', borderColor: '#fc8019' }}>REORDER</button>
                                    </div>
                                    <div className="col">
                                        <button className=" sec-btn" style={{ color: '#282c3f', borderColor: '#282c3f' }}>RATE FOOD</button>
                                    </div>
                                </div>

                                <p className="ct-text">You haven't rated this food yet.</p>

                                <div className="row mt-4 mb-2">
                                    <div className="col">
                                        <div className="u-line" ></div>
                                    </div>
                                </div>


                                <a className="sec-btn pl-0 " href="view-more-oder" style={{ color: '#fc8019' }}>VIEW MORE ORDERS </a>

                            </div>
                        </section>
                    </div>
                    
                    <div className="py-3" style={{ background: '#f4f4f5' }}></div>
                    <div className="row">
                        <div className="col">
                            <section className="py-2">
                                <a href="#logout" className="row sec-btn py-2 " style={{ color: '#282c3f' }}>
                                    <div className="col-11 pl-0">LOGOUT</div>
                                    <div className="col-1 pr-0 d-flex justify-content-end" >
                                        <span className=" text-align-end "><i class="fas fa-sign-out-alt"></i></span>
                                    </div>
                                </a>
                            </section>
                        </div>
                    </div>
                    <div style={{ background: '#f4f4f5' }}>
                    <div className="row" >
                        <div className="col" >
                            <section className="my-4 py-3 d-flex justify-content-center">
                                <p className="ct-text">&#64;Copyright 2021, New Swiggy Version 1.0.0</p>
                            </section>
                        </div>
                    </div>
                    </div>
                    




                </div>

            </div>
        )
    }
}

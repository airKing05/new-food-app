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
                        <div className="u-line" style={{ borderBottom: '3px solid black' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div class="accordion accordion-flush" id="accordionFlushExample" style={{color: '#fff !important'}}>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class=" abc collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h5 className="ct-heading d-flex justify-content-start" >My Account </h5>
                                        <p className="ct-text d-flex justify-content-start" >Manage your Refund, Payment Mode</p>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li> <i class="fas fa-home"></i> Mange Address</li>
                                            <li> <i class="far fa-heart"> </i>  Favorites</li>
                                            <li> <i class="fas fa-percentage"></i> Offers</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

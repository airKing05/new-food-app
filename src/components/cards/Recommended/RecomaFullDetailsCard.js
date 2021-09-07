import React from 'react';
import AddBtn from '../button/AddBtn';
import './RecomaFullDetailsCard.css'

export default function RecomaFullDetailsCard() {
    return (
        <div className=" mt-5" style={{ maxWidth: '500px', border: '1px solid black' }}>
            <div className="container">
                <div className="row">
                    <div className="col-8 ">
                        <span style={{ color: ' #ee9c00', fontSize: '12px' }}><i className="far fa-stop-circle dot " style={{ color: ' rgb(46, 44, 44)', fontSize: '15px' }}></i> &nbsp; <i className="fas fa-star rating-stat" ></i> Bestseller</span>
                        <h6 className="pt-2" style={{ color: ' #282c3f', fontWeight: '500' }}>Dal Fry</h6>
                        <span className="mt-n-2" style={{ fontSize: '12px' }}>₹60</span>
                        <div className="">
                            <a href="more-text" className="text-decoration-none" style={{ color: ' #686b78', fontSize: '12px', cursor: 'pointer', letterSpacing: '-1px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum ...more </a>
                        </div>

                    </div>

                    <div className="col-4 " >
                        <div className="row" >
                            <img src="https://bit.ly/32kDhW0" className="img-fluid rounded mt-3" alt="dal-fry-img" />

                            <div className="d-flex justify-content-center" style={{ position: 'relative', top: '-20px' }}>
                                <AddBtn className="ml-3" />
                            </div>

                            <p className="d-flex justify-content-center mt-2" style={{ fontSize: '10px', fontWeight: '300', color: ' #7e808c' }}>Customisable</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" hr-line" style={{marginTop:'-15px'}}>
                <hr />
            </div>
        </div>
    )
}

import React from 'react';
import AddBtn from '../button/AddBtn';
import './RecomaFullDetailsCard.css'


export default function RecomaFullDetailsCard() {
    return (
        <div className=" mt-2" style={{ maxWidth: '500px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-8 ">
                        <span style={{ color: ' #ee9c00', fontSize: '12px' }}><i className="far fa-stop-circle dot " style={{ color: ' rgb(46, 44, 44)', fontSize: '15px' }}></i> &nbsp; <i className="fas fa-star rating-stat" ></i> Bestseller</span>
                        <h6 className="pt-2" style={{ color: ' #282c3f', fontWeight: '500' }}>Butter Dal Tadka</h6>
                        <span className="mt-n-2" style={{ fontSize: '12px' }}>₹80</span>
                    </div>

                    <div className="col-4 " >
                        <div className="row" >
                            <img src="https://bit.ly/3ae2Ts3" className="img-fluid rounded mt-3" alt="dal-fry-img" />

                            <div className="d-flex justify-content-center" style={{ position: 'relative', top: '-20px' }}>
                                <AddBtn className="ml-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
                <hr className="mt-4" />
            
        </div>
    )
}

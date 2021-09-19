import React from 'react';
import defaultCartImg from '../../images/defaultCart.png'

export default function DefaultSearch() {
    return (
        <div className="container" style={{maxWidth: '500px', background: '', padding: '150px 0px'}}>
            <img src={defaultCartImg} alt="default-cart-img" className="d-flex justify-content-center img-fluid" style={{maxWidth: '250px', height: 'auto'}}/>
            <div className="row mt-4">
                <div className="col text-center">
                    <h4 className="">Good food is always cooking</h4>
                    <p>Your card is empty. Add something form the menu</p>
                </div>
            </div>
        </div>
    )
}

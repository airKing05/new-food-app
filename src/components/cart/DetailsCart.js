
import React from 'react';
import AddBtn2 from '../cards/button/AddBtn2';

export default function DetailsCart() {
    return (
        <div className="container" style={{maxWidth: '500px'}}>
            <div className="row">
                <div className="col-2">
                <img src="https://alias.live/aUL1qP" className="" style={{width: '45px', height: '45px'}} alt="cart-img-brand"/>
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
                <i class="far fa-dot-circle cd-icon-4"></i>
                </div> 
                <div className="col-6" style={{padding: '0px'}}>
                    <div className="cd-heading-3">
                        EVM Chickenn Maharaja Mac Burger
                    </div>
                    <div className="cd-text-3">
                        Coke (Medium), Noodle Masala seasoning Al-a-Carte, Chilli Sa...
                    </div>
                    <div className="cd-text-3" style={{color: 'black'}}>
                        CUSTOMIZE
                    </div>
                </div>
                <div className="col-3">
                    <AddBtn2/>
                </div>
                <div className="col-2">₹411</div>
            </div>
            <AddBtn2/>
        </div>
    )
}

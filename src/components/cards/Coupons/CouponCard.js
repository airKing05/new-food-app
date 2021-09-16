import React from 'react'

export default function CouponCard() {
    return (
        <>
            <div className="coupons-container container mt-2" >
                <div className="icon-box">
                    <i className="fas fa-cricket"></i>
                </div>
                <div className="row d-flex justify-content-center mt-4" style={{fontSize: '18px', fontWeight: '500'}}>-UNLIMITED-</div>
                <div className="text-center mt-1" style={{fontSize: '14px', fontWeight: '500'}}>LARGE <br/> DISCOUNTS</div>
                <div className="dotes dot-1"></div>
                <div className="dotes dot-2"></div>
                <div className="dotes dot-3"></div>
                <div className="dotes dot-4"></div>
                <div className="dotes dot-5"></div>
                <div className="dotes dot-6"></div>
            </div>
            <div className="wave"></div>
        </>
    )
}

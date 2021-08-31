import React from 'react'

export default function CouponCard() {
    return (
        <>
            <div className="coupons-container">
                <div className="icon-box">
                    <i className="fal fa-cricket"></i>
                </div>
                <h4>-UNLIMITED-</h4>
                <h2>LARGE</h2>
                <h2 style={{marginLeft: '-25px'}}>DISCOUNTS</h2>
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

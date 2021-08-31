import React from 'react';
import './RecomaFullDetailsCard.css'

export default function RecomaLessDetailsCard() {
    return (
        <div className="recoma-outer-container">
        <div className="recoma-container">
            <div className="recoma-details">
                <span style={{marginLeft:'-69px'}}><i className="far fa-stop-circle dot" ></i></span>
                <h6>Butter Dal Tadka</h6>
                <label for="">₹80</label>
                
            </div>
            <div className="recoma-img">
                <img src="https://bit.ly/3ae2Ts3" alt="dal-fry-img" />
                <div className="add-box">
                    <i className="fal fa-plus"></i>
                    <span> ADD </span>
                </div>
            </div>
            
        </div>
        <div className="hr-line">
            <hr style={{margin:'35px 0px'}}/>
        </div>
        </div>
    )
}

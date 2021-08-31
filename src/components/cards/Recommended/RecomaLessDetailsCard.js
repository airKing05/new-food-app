import React from 'react';
import './RecomaFullDetailsCard.css'

export default function RecomaLessDetailsCard() {
    return (
        <div class="recoma-outer-container">
        <div class="recoma-container">
            <div class="recoma-details">
                <span style={{marginLeft:'-69px'}}><i class="far fa-stop-circle dot" ></i></span>
                <h6>Butter Dal Tadka</h6>
                <label for="">₹80</label>
                
            </div>
            <div class="recoma-img">
                <img src="https://bit.ly/3ae2Ts3" alt="dal-fry-img" />
                <div class="add-box">
                    <i class="fal fa-plus"></i>
                    <span> ADD </span>
                </div>
            </div>
            
        </div>
        <div class="hr-line">
            <hr style={{margin:'35px 0px'}}/>
        </div>
        </div>
    )
}

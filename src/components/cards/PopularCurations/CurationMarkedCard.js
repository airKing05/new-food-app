import React from 'react';
import HealthySaladImg from '../../../images/Healthy-Salad.png';
import './CurationMarkedCard.css'

export default function CurationMarkedCard() {
    return (
        <>
            <div class="CurMC-container">
                <div class="CurMC-row-img">
                    <img src={HealthySaladImg} alt="north-indian-img" />
                    <a href="#curations-healthy-salad" style={{ cursor: 'pointer' }}>
                    </a>
                    <div class="CurMC-icon-box">
                        <i class="fas fa-shield-check" style={{ fontSize: '25px' }}></i>
                    </div>
                </div>
                <div class="CurMC-row-details">
                    <span> Helthy Food </span>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import HealthySaladImg from '../../../images/Healthy-Salad.png';
import './CurationMarkedCard.css'

export default function CurationMarkedCard() {
    return (
        <>
            <div className="CurMC-container">
                <div className="CurMC-row-img">
                    <img src={HealthySaladImg} alt="north-indian-img" />
                    <a href="#curations-healthy-salad" style={{ cursor: 'pointer' }}>
                    </a>
                    <div className="CurMC-icon-box">
                        <i className="fas fa-shield-check" style={{ fontSize: '25px' }}></i>
                    </div>
                </div>
                <div className="CurMC-row-details">
                    <span> Helthy Food </span>
                </div>
            </div>
        </>
    )
}

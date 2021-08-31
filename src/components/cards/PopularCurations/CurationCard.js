import React from 'react';
import IndianFoodImg from '../../../images/Noth-indian-food.png';
import './CurationMarkedCard.css'


export default function CurationCard() {
    return (
        <div className="CurMC-container">
        <div className="CurMC-row-img">
          <img src={IndianFoodImg} alt="north-indian-img" />
          <a href="#curation-indian-food" style={{cursor: 'pointer'}}>
          </a>
        </div>
        <div className="CurMC-row-details">
            <span> North Indian </span> 
        </div>
    </div>
    )
}

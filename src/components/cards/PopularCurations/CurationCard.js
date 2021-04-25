import React from 'react';
import IndianFoodImg from '../../../images/Noth-indian-food.png';
import './CurationMarkedCard.css'


export default function CurationCard() {
    return (
        <div class="CurMC-container">
        <div class="CurMC-row-img">
          <img src={IndianFoodImg} alt="north-indian-img" />
          <a href="#curation-indian-food" style={{cursor: 'pointer'}}>
          </a>
        </div>
        <div class="CurMC-row-details">
            <span> North Indian </span> 
        </div>
    </div>
    )
}

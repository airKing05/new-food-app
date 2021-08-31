import React from 'react'

export default function SmallCard() {
    return (
        <div className="small-container">
        <div className="row-img">
          <img src="https://bit.ly/3e7q4Wf" alt="small-card-img"/>
        </div>
        <div className="row-details">
            <span style={{marginLeft: '3px'}}> Anything </span> 
            <span> Delivered</span>
        </div>
    </div>
    )
}

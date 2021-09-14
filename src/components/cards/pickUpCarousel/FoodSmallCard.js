import React from 'react'

export default function FoodSmallCard() {
    return (
        <div className="container mt-4" >
            <div style={{position: 'relative'}}>
                <img src="https://bit.ly/3t3FJvM" className="img-fluid" alt="food-small-card-img" style={{borderRadius: '5px', maxWidth: '100PX', maxHeight: '100px'}}/>
                <div className="d-flex align-items-start" style={{ position: 'absolute', top: '0px'}}>
                    <a href="#ad-link" className="add-btn-3">
                        <span>AD</span>
                    </a>
                </div>
                <div className="d-flex justify-content-center text-center" style={{ marginTop: '-10px' }}>
                    <a href="#off" className="off-btn text-decoration-none ">
                        <span> 15 % OFF</span>
                    </a>
                </div>
            </div>
            <div className="text-center mt-4 pt-3" style={{ position: 'relative' }}>
                <span className="tsn-text-2"> Chai Point </span>
                <p className="tsn-text-3">51 mins</p>
            </div>
        </div>
    )
}

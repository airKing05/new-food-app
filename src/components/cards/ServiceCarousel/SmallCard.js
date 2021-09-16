import React from 'react'

export default function SmallCard() {
    return (
        <div className="container my-5" style={{maxWidth: '500px', paddingLeft: '0px'}}>
        <div className="">
          <img src="https://bit.ly/3e7q4Wf" alt="small-card-img" className="img-fluid"  style={{borderRadius: '5px', maxWidth: '100PX', height: '100px'}}/>
        </div>
        <div className="text-center">
            <span className="tsn-text-2"> Anything <br/> Delivered </span> 
            
        </div>
    </div>
    )
}

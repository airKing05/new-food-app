import React from 'react';
import restocardImg from '../../images/hyderabadi-biryani-pil.png';



export default function RestaurantCard() {
    return (
        <div className="container Resto-container my-4 py-1 px-3 rounded-2" style={{ maxWidth: '500px', color:'#fff', background: '#e46d47' }}>
            <div className="row row-0">
                <div className="col-8 pt-2 col-deatils">
                    <h2 className="" style={{fontSize:'28px' ,fontWeight:'600'}}>Restaurants</h2>
                    <p className="d-flex pt-n-1" style={{fontSize:'15px', fontWeight:'450', letterSpacing:'-1px'}}>No-Contact Delivery Available</p>
                    <a href="view-all" className="text-decoration-none" style={{color:' #fff', marginTop:'-10px !important'}}>
                    <span>View All  <i className="fas fa-arrow-right"></i></span>
                    </a>
                </div>
                <div className="col-4 pt-2 col-img">
                    <img src={restocardImg} className="img-fluid mr-1" alt="Restaurants-img" style={{maxWidth:'120px', height:'auto', zIndex: '99'}}/>
                </div>
            </div>
           
               
           
        </div>


    )
}

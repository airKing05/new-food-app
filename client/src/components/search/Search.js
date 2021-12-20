import React from 'react';
import CurationCard from '../cards/PopularCurations/CurationCard';

export default function Search() {
    return (
        <div className="container" style={{maxWidth:'500px'}}>
            <div className="row">
                <div className="col">
                    <div className="py-2 "> 
                        <input className="py-2 pl-4 text-start border border-2 rounded" placeholder="Search for Restaurant and food" style={{width: '100%', fontSize: '18px', fontWeight: '500'}}/> 
                        {/* <i class="fas fa-search" style={{position: 'absolute', top: '25px', left: '390px'}}></i> */}
                        <i class="fas fa-times" style={{position: 'absolute', top: '25px', left: '390px'}}></i>
                        <i class="fas fa-chevron-left" style={{position: 'absolute', top: '25px', left: '20px'}}></i>
                    </div>         
                </div>
            </div>
            <div className="row my-3">
                <div className="col d-flex justify-content-start">
                    <span className=" py-2 px-3 border border-2 border-dark rounded-pill">Restaurants</span>
                    <span className=" py-2 px-3 border border-2 border-dark rounded-pill ">Dishes</span>
                </div>
            </div>
            <div className="row my-3 ">
            
                  <div style={{borderBottom: '2px solid #7e808c'}}></div>
              
            </div>

            <h3 className="" style={{fontSize: '18px', color: '#3d4152', letterSpacing: '-0.3px'}}>Recent Search</h3>
            <div className="row mt-4 mb-4">
                <div className="col-1" style={{position: 'relative', top:'0px', left: '-62px'}}>  <i class="fas fa-search"> </i> </div>
                <h5 className="col-11" style={{fontSize: '17px', color: '#686b78', fontWeight: '400', letterSpacing: '-0.15'}}> MRF Punjabi Food</h5>
            </div>

           
                <h2 style={{fontSize: '23px', fontWeight: '800', letterSpacing: '-0.3px', color: '#3d4152'}}>Popular Cuisines</h2>
           
            <div className="row mt-4 mb-5 ">
                <div className="col-3">
                    <CurationCard/>
                </div>
                <div className="col-3">
                    <CurationCard/>
                </div>
                <div className="col-3">
                    <CurationCard/>
                </div>
                <div className="col-3">
                    <CurationCard/>
                </div>
            </div>
        </div>
    )
}
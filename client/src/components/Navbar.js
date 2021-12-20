import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar sticky-top container py-3 d-flex align-item-center" style={{ maxWidth: '500px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
            <div className="row">
                <div className="address col-10" style={{maxWidth: ''}}>
                    <div className="row mb-1">
                        <span className="headingMainAdd" style={{color: '#3d4152', fontWeight: '700'}}>
                            <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                            <span className="mainAdd" style={{maxWidth: '250px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>Rangbari</span>
                        </span>
                    </div>
                    <div className="row " style={{marginLeft: '0px !important'}}>
                        <span className="fullAdd " style={{maxWidth: '250px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', color: ' #686b78'}}>1282, Rangbari, Kota, Rajasthan 324005, India</span>
                        <span className="icon-downArrow kVKTT"></span>
                    </div>

                </div>
                <div className="offers col-2 d-flex justify-content-end">
                    <a href="offers-link" className="offersLink d-flex text-decoration-none" style={{color:'#3d4152', fontWeight: '500'}}>
                    {/* <i class="fab fa-buffer "></i> */}
                        <span className="offersText" >  Offers</span>
                    </a>
                </div>
            </div>

        </nav>
    )
}

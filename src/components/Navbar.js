import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
        <label  className="address">
            <span className="headingMainAdd">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span className="mainAdd">Rangbari</span>
            </span>
            <span className="fullAdd">1282, Rangbari, Kota, Rajasthan 324005, India</span>
            <span className="icon-downArrow kVKTT"></span>
        </label>
        <label className="offers">
            <a href="offers-link" className="offersLink">
            {/* <span className="icon-downArrow kVKTT"></span> */}
            <span className="offersText"> &#128512; &nbsp;Offers</span>
        </a>
        </label>
    </nav>
    )
}

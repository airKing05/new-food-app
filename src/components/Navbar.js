import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar">
        <label  class="address">
            <span class="headingMainAdd">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span class="mainAdd">Rangbari</span>
            </span>
            <span class="fullAdd">1282, Rangbari, Kota, Rajasthan 324005, India</span>
            <span class="icon-downArrow kVKTT"></span>
        </label>
        <label class="offers">
            <a href="offers-link" class="offersLink">
            {/* <span class="icon-downArrow kVKTT"></span> */}
            <span class="offersText"> &#128512; &nbsp;Offers</span>
        </a>
        </label>
    </nav>
    )
}

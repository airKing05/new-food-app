import React from 'react';
import logo from '../images/logo.jpeg'

export default function Footer() {
    return (
        <footer class="footer">
            <ul class="icon-list">
                <li class="icon">
                    <a href="#icon-link" class="icon-link">
                        <img src={logo} alt="brand-logo"/>
                        {/* <i class="fa fa-bus" aria-hidden="true"  style={{paddingLeft:'45px', color:'#e46d47'}}></i> */}
                        {/* <span style={{color:'#e46d47'}}>NEW SWIGGY</span> */}
                    </a>
                </li>
                <li class="icon">
                    <a href="#icon-link" class="icon-link" style={{position:'relative', top:'0px', left:'20px'}}>
                        <i class="fa fa-search" aria-hidden="true" style={{left:'0px'}}></i>
                        <span>SEARCH</span>
                    </a>

                </li>
                <li class="icon">
                    <a href="#icon-link" class="icon-link" style={{position:'relative', top:'0px', left:'50px'}}>
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        <span>CART</span>
                    </a>

                </li>
                <li class="icon">
                    <a href="#icon-link" class="icon-link" style={{position:'relative', top:'0px', left:'66px'}}>
                        <i class="fa fa-user" aria-hidden="true" ></i>
                        <span>ACCOUNT</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

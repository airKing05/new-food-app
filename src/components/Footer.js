import React from 'react';
import logo from '../images/logo.jpeg'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="icon-list">
                <li className="icon">
                    <a href="#icon-link" className="icon-link">
                        <img src={logo} alt="brand-logo"/>
                        {/* <i className="fa fa-bus" aria-hidden="true"  style={{paddingLeft:'45px', color:'#e46d47'}}></i> */}
                        {/* <span style={{color:'#e46d47'}}>NEW SWIGGY</span> */}
                    </a>
                </li>
                <li className="icon">
                    <a href="#icon-link" className="icon-link" style={{position:'relative', top:'0px', left:'20px'}}>
                        <i className="fa fa-search" aria-hidden="true" style={{left:'0px'}}></i>
                        <span>SEARCH</span>
                    </a>

                </li>
                <li className="icon">
                    <a href="#icon-link" className="icon-link" style={{position:'relative', top:'0px', left:'50px'}}>
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        <span>CART</span>
                    </a>

                </li>
                <li className="icon">
                    <a href="#icon-link" className="icon-link" style={{position:'relative', top:'0px', left:'66px'}}>
                        <i className="fa fa-user" aria-hidden="true" ></i>
                        <span>ACCOUNT</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

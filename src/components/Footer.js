import React from 'react';
import logo from '../images/logo.jpeg';
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <nav className="container py-3" style={{maxWidth: '500px', margin: '0px auto', boxShadow: '0px 0px 5px 0px #000'}} >
            
            <div className="row " style={{ margin: 'auto', cursor: 'pointer'}} >
                <div className="col-3">
                    <NavLink exact to='/' className="text-decoration-none text-center">
                        <img src={logo} alt="brand-logo" style={{maxWidth: '80px', height: 'auto'}}/>
                    </NavLink>
                </div>
                <div className="col-3">
                    <NavLink exact to='/search' className="text-decoration-none text-center" 
                    style={{color: '#3d4152'}}
                    >
                        <i className="fa fa-search d-block" aria-hidden="true" style={{left:'0px'}}></i>
                        <span className="d-block  mt-1">SEARCH</span>
                    </NavLink>

                </div>
                <div className="col-3">
                    <NavLink exact to="/cart" className="text-decoration-none text-center" 
                    style={{color: '#3d4152'}}
                    >
                        <i className="fa fa-shopping-bag d-block" aria-hidden="true"></i>
                        <span className="d-block  mt-1">CART</span>
                    </NavLink>

                </div>
                <div className="col-3">
                    <NavLink exact to='/profile'  className=" text-decoration-none text-center" 
                    style={{color: '#3d4152'}}
                    >
                        <i className="fa fa-user d-block " aria-hidden="true" ></i>
                        <span className="d-block mt-1">ACCOUNT</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

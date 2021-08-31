import React from 'react';
import './PopUpButton.css'                                          

export default function PopUpButton() {
    return (
        <>
            <div className="box">
                <a className="button" href="#popup1"><i className="fas fa-utensils"></i>BROWES MENU</a>
            </div>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>BROWES MENU</h2>
                    <a className="close" href="#time">&times;</a>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Recommended</div>
                                    <div className="col-number">14</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Navratri Special</div>
                                    <div className="col-number">13</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">All Day Breakfast</div>
                                    <div className="col-number">2</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Handmade Chocolates</div>
                                    <div className="col-number">1</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Breakfast Special</div>
                                    <div className="col-number">1</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Summer Coolers</div>
                                    <div className="col-number">10</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Pickel Mania</div>
                                    <div className="col-number">4</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

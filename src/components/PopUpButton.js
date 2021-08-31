import React from 'react';
import './PopUpButton.css'                                          

export default function PopUpButton() {
    return (
        <>
            <div class="box">
                <a class="button" href="#popup1"><i class="fas fa-utensils"></i>BROWES MENU</a>
            </div>
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>BROWES MENU</h2>
                    <a class="close" href="#time">&times;</a>
                    <div class="content">
                        <ul>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">Recommended</div>
                                    <div class="col-number">14</div>
                                </div>
                            </li>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">Navratri Special</div>
                                    <div class="col-number">13</div>
                                </div>
                            </li>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">All Day Breakfast</div>
                                    <div class="col-number">2</div>
                                </div>
                            </li>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">Handmade Chocolates</div>
                                    <div class="col-number">1</div>
                                </div>
                            </li>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">Breakfast Special</div>
                                    <div class="col-number">1</div>
                                </div>
                            </li>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">Summer Coolers</div>
                                    <div class="col-number">10</div>
                                </div>
                            </li>
                            <li>
                                <div class="popup-row">
                                    <div class="col-cat">Pickel Mania</div>
                                    <div class="col-number">4</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

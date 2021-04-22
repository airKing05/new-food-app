import React from 'react'

export default function Footer() {
    return (
        <footer class="footer">
            <ul class="icon-list">
                <li class="icon">
                    <a href="" class="icon-link">
                        <i data-feather="circle"></i>
                        <i class="fa fa-bus" aria-hidden="true"  style={{paddingLeft:'45px', color:'#e46d47'}}></i>
                        <span style={{color:'#e46d47'}}>NEW SWIGGY</span>
                    </a>
                </li>
                <li class="icon">
                    <a href="" class="icon-link">
                        <i class="fa fa-search" aria-hidden="true" style={{paddingLeft: '25px'}}></i>
                        <span>SEARCH</span>
                    </a>

                </li>
                <li class="icon">
                    <a href="" class="icon-link">
                        <i class="fa fa-shopping-bag" aria-hidden="true" style={{paddingLeft: "15px"}}></i>
                        <span>CART</span>
                    </a>

                </li>
                <li class="icon">
                    <a href="" class="icon-link">
                        <i class="fa fa-user" aria-hidden="true" style={{paddingLeft: '30px'}}></i>
                        <span>ACCOUNT</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

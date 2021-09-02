import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './profile.css';



export default function ProfileMainBody() {
    return (
        <div className="container" style={{ maxWidth: '500px', background: '' }}>
            <div className="row mt-5">
                <div className="col-10 " >
                    <h4 className="d-flex justify-content-start">ANIL</h4>
                    <p className="d-flex justify-content-start ct-text">9632587410 	&nbsp; &#8226; 	&nbsp; codejuggler.xy@gmail.com</p>
                </div>
                <div className="col-2 ">
                    <a href="#edit" style={{ textDecoration: 'none', color: '#ff8702', fontSize: '18px', fontWeight: '400' }}>EDIT</a>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                    <div className="u-line" style={{ borderBottom: '3px solid black' }}></div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{maxWidth: '500px', textAlign: 'start'}}>
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

        </div>
    )
}

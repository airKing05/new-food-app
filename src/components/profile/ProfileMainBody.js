import React from 'react';
// import './bootstrapClassChange.css'



export default function ProfileMainBody() {
    return (
        <div className="container" style={{maxWidth: '500px', background: 'gray'}}>
            <div className="row">
                <div className="col-10  " >
                <h4 className="d-flex justify-content-start">ANIL</h4>
                <p className="d-flex justify-content-start">9632587410 &#8226; <span>codejuggler.xy@gmail.com</span></p>
                </div>
                <div className="col-2 ">
                    <a href="#edit" style={{textDecoration:'none', color: '#ff8702', fontSize: '18px', fontWeight: '400'}}>EDIT</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <hr/>
                </div>
            </div>
            
           
        </div>
    )
}

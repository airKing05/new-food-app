import React from 'react'

export default function AddBtn2() {
    return (
        <div className="container add-btn-2" >

            <div className="row d-flex" >
                <a href="#minus" className="col-4 border" style={{ padding: '0' }}>
                
                  <i className="fas fa-minus py-2  px-2" ></i>
                  
                    

                </a>
                <div className="col-4 border-bottom border-top py-2 px-2" style={{ padding: '0', fontSize: '11px' }}>
                  1
                </div>
                <a href="#add" className="col-4 border" style={{ padding: '0' }} >
                
                    <i className="fas fa-plus py-2  px-2" ></i>
                  
                </a>
            </div>


        </div>
    )
}

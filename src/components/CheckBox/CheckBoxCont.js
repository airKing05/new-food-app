import React from 'react'
import CheckBox from './CheckBox'

export default function CheckBoxCont() {
    return (
        <div className="container d-flex justify-content-evenly border border-3 rounded py-2 my-3" style={{paddingLeft: ' '}}>
            <div className="row" >
                <div className="col-4">
                <CheckBox/>
                </div>
                <div className="col-4">
                <CheckBox/>
                </div>
                <div className="col-4">
                <CheckBox/>
                </div>
            </div>
              
             
           
           
        </div>
    )
}

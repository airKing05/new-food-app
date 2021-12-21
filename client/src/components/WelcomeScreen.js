import React from 'react'

export default function WelcomeScreen() {
    return (
        <div className='container bg-danger bg-gradient py-5' style={{maxWidth:'500px', height:'650px'}}>
            <h1 className='text-center mt-3' style={{fontWeight: '900', color:'#ffffff'}}>Welcome <br/> to <br/><br/> <span style={{fontSize: '50px'}}>N-Platter</span> </h1>
            <div className='row mt-5 d-flex' style={{maxWidth: '250px', margin:'0 auto'}}>
                <div className='col py-2'>
                    <a href='/login' className=' btn btn-outline-light' style={{fontSize:'25px'}}>
                        LOGIN
                    </a>
                </div>
                <div className='col  py-2'>
                    <a href='/profile' className=' btn btn-outline-light' style={{fontSize:'25px'}}>
                        GUEST
                    </a>
                </div>
            </div>
            <h4 className='text-center lh-lg ' style={{fontWeight:'700', marginTop:'90px', color:'#fd7e14'}}>Powered by <br/> PLAN-N-PLATTER</h4>
        </div>
    )
}

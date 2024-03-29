import React from 'react'

export default function WelcomeScreen() {
    return (
        <div className='container py-5' style={{maxWidth:'500px', height:'650px', background:'#FF4339'}}>
            <h1 className='text-center mt-3' style={{fontWeight: '900', color:'#ffffff'}}>Welcome <br/> to <br/><br/> <span style={{fontSize: '50px'}}>New Swiggy</span> </h1>
            <div className='row mt-5  text-center' style={{maxWidth: '250px', margin:'0 auto'}}>
                <div className='col py-2 '>
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
            <h4 className='text-center lh-lg ' style={{fontWeight:'700', marginTop:'90px', color:' #38353c'}}>Powered by <br/> Anilraj</h4>
        </div>
    )
}

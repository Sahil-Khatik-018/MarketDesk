import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h1 className='fs-3 text-center mb-5'>People</h1>
                <div className='col-4 text-center mt-4'>
                    <img src='/media/images/nithinKamath.jpg' alt='Nithin Kamath'style={{width: "90%", borderRadius: "50%", marginLeft: '4rem'}} />
                    <div className='row text-center mt-3' style={{marginLeft: "4rem"}}>
                        <h2 className='fs-5 mb-3'>Nithin Kamath</h2>
                        <p className='text-muted'>Founder, CEO</p>
                    </div>
                </div>
                <div className='col-8 ps-5 mt-4' style={{fontSize: "1.2rem"}}>
                    <p className='ps-5'>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>

                       <p className='ps-5'> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p className='ps-5'>Playing basketball is his zen. </p>

                </div>
            </div>
        </div>
     );
}

export default Team;
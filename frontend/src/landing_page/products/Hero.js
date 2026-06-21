import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='mt-5 p-2 text-center'>
                <h1 className='fs-3 mt-5'>Zerodha Products</h1>
                <h3 className='fs-5 text-muted mb-4'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mb-5'>Check out our <a href='' style={{textDecoration: "none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
            <hr />
        </div>
     );
}

export default Hero;
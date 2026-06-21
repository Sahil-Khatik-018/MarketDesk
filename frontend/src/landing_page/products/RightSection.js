import React from 'react';

function RightSection({imageURL, productName, productDesc, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 p-5 mt-5' >
                    <h1 className='fs-3 mt-5'>{productName}</h1>
                    <p className='text-muted'>{productDesc}</p>
                    <a href={learnMore} style={{textDecoration: "none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                {/* <div className='col-1'></div> */}
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
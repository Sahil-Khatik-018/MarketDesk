import React from 'react';

function LeftSection({imageURL, productName, productDesc, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container p-5'>
            <div className='row '>
                <div className='col-6 p-5' >
                    <img src={imageURL}/>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5' >
                    <h1 className='fs-3 mb-4'>{productName}</h1>
                    <p className='text-muted fs-6'>{productDesc}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{marginLeft: "10%", textDecoration: "none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore} style={{marginLeft: "5%"}}><img src='media/images/appStoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
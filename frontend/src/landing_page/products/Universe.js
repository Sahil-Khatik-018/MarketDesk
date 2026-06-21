import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5'>
                <p className='fs-5 mb-5'>
                    Want to know more about our technology stack? Check out the <a className="text-decoration-none">Zerodha.tech</a> blog.
                </p>
                <h1 className='fs-3 mb-4 fw-normal mt-5'>The Zerodha Universe</h1>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='row mt-5 mb-5'>
                    <div className='col-4 ps-5'>
                        <img src='media/images/zerodhaFundhouse.png' style={{width:"70%"}}/>
                        <p className='text-muted mt-3' style={{fontSize: "14px"}}>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col-4 ps-5'>
                        <img src='media/images/sensibullLogo.svg' style={{width:"70%"}}/>
                        <p className='text-muted mt-3' style={{fontSize: "14px"}}>Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className='col-4 ps-5'>
                        <img src='media/images/kiteLogo.png' style={{width:"70%"}}/>
                        <p className=' text-muted mt-3' style={{fontSize: "14px"}}>
                            Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                        </p>
                    </div>
                </div>
                <div className='row mt-4 mb-5'>
                    <div className='col-4 ps-5'>
                        <img src='media/images/streakLogo.png' style={{width:"70%"}}/>
                        <p className='text-muted mt-3' style={{fontSize: "14px"}}>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                    <div className='col-4 ps-5'>
                        <img src='media/images/smallcaseLogo.png' style={{width:"70%"}}/>
                        <p className='text-muted mt-3' style={{fontSize: "14px"}}>
                            Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className='col-4 ps-5'>
                        <img src='media/images/dittoLogo.png' style={{width:"70%"}}/>
                        <p className=' text-muted mt-3' style={{fontSize: "14px"}}>
                            Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </div>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-3' style={{width: "20%", margin: "0 auto" }}>
                    Sign up for free
                </button>
            </div>
        </div>
     );
}

export default Universe;
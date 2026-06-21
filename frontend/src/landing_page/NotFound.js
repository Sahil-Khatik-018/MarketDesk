import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-3 mb-4'>404 Not Found</h1>
                <p className='text-muted mb-4'>Sorry, the page you are looking for does not exist.</p>
                <Link to='/'>
                    <button className='p-1 btn btn-primary fs-5 mb-5' style={{width: "15%", margin: "0 auto" }}>Go Back Home</button>
                </Link>
            </div>
        </div>
     );
}

export default NotFound;
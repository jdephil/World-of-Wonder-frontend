import React from 'react';
import { Link } from 'react-router-dom';
import './Office.css'

const Office = () => {

    return (
            <main>
                <div className='officeDiv'>
                <Link className='egyptPortalLink' to='/ancientEgypt'></Link>
                <Link className='pacificPortalLink' to='/pacific'></Link>
                <Link className='nativePortalLink' to='/nativeAmerican'></Link>
                <img className='officeImg' src='./office1.png' alt='Office with artifacts'/>
                </div>
            </main>
    );
};

export default Office;
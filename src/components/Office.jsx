import React from 'react';
import { Link } from 'react-router-dom';
import './Office.css'

const Office = () => {

    return (
            <main>
                <div className='officeDiv'>
                    <img className='officeImg' src='./office1.png' alt='Office with artifacts'/>
                    <Link className='egyptPortalLink' to='/ancientEgypt'></Link>
                    <Link className='pacificPortalLink' to='/pacific'></Link>
                    <Link className='nativePortalLink' to='/nativeAmerican'></Link>
                </div>
            </main>
    );
};

export default Office;
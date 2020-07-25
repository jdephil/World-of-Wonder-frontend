import React from 'react';
import { Link } from 'react-router-dom';
import './Office.css'

const Office = () => {

    return (
            <main>
                <Link className='egyptPortalLink col l6' to='/ancientEgypt'>Ancient Egypt</Link>
                <Link className='pacificPortalLink' to='/pacific'>Pacific</Link>
                <Link className='nativePortalLink' to='/nativeAmerican'>Native American</Link>
                <img className='officeImg' src='./office1.png' alt='Office with artifacts'/>
            </main>
    );
};

export default Office;
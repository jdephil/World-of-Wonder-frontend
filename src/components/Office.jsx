import React from 'react';
import { Link } from 'react-router-dom';

const Office = () => {

    return (
            <main class = "container">
                <Link to='/ancientEgypt'>Ancient Egypt</Link>
                <Link to='/pacific'>Pacific</Link>
                <Link to='/nativeAmerican'>Native American</Link>
                <img src='./office1.png' alt='Office with artifacts'/>
                
            </main>
    );
};

export default Office;
import React, { useState } from 'react';
import './Pacific.css';
import axios from 'axios';

const Pacific = () => {
    const [artifacts, setArtifacts] = useState({
        name: "",
        description: "", 
        imageURL: ""
      })

    const showArtifactInfo = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/artifact`, artifacts)
            .then(response => {

            })
    }






    return (
        <div>
            <div  className='pacificDiv'>
            <img className='fishingHook pacificArtifact modalButtonEvent' src='/fishing-hook-pacific.png' alt='fishing hook' onClick={() => showArtifactInfo()} />
            <img className='fishingBox pacificArtifact' src='/fishing-box-pacific.png' alt='fishing box' />
            <img className='danceDress pacificArtifact' src='/dance-dress-pacific.png' alt='dance dress' />
            <img className='fan pacificArtifact' src='/fan-pacific.png' alt='fan' />
            <img className='kite pacificArtifact' src='/kite-pacific.png' alt='kite' />
            <img className='canoe pacificArtifact' src='/model-canoe-pacific.png' alt='model canoe' />
            <img className='wovenMat pacificArtifact' src='/woven-mat-pacific.png' alt='woven mat' />
            <img className='waistGarment pacificArtifact' src='/waist-garment-pacific.png' alt='waist garment' />
            <img className='pacificRoomImg' src='/pacific-room.png' alt='maori and pacific museum room' />
            </div>
        </div>
    );
};

export default Pacific;
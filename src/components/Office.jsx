import React from 'react';
import { Link } from 'react-router-dom';
import './Office.css'

const Office = () => {
    let dialogue = 'Welcome to World of Wonder! My name is Nicholas, and I am the museum curator of this esteemed establishment. Feel free to take a look around at our wonderous artifacts from every corner of this great blue marble we call Earth! Register to become a curator yourself and add artifacts to your personal collection. Or take down some research notes in your journal. We look forward to having you here!'
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(dialogue)
    speechSynthesis.getVoices()

    const startRead = () => {
        utterThis.lang='en-GB'
        synth.speak(utterThis)
        utterThis.onend = () => {
            synth.cancel()
        }
    }

    const stopRead = () => {
        synth.cancel()
    }

    return (
            <main>
                <div className='officeDiv'>
                    <img className='officeImg' src='./office2.png' alt='Office with artifacts'/>
                    <div className="thought">
                        <p>{dialogue}</p>
                        <p>
                            <i onClick={startRead} className='material-icons'>play_arrow</i>
                            <i onClick={stopRead} className='material-icons'>stop</i>
                        </p>
                    </div>
                    <Link className='egyptPortalLink' to='/ancientEgypt'></Link>
                    <Link className='pacificPortalLink' to='/pacific'></Link>
                </div>
            </main>
    );
};

export default Office;
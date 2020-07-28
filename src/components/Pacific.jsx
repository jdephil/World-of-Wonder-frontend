import React, { useState } from 'react';
import './Pacific.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

// import Artifact from '../modals/Artifact'

const Pacific = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const [artifacts, setArtifacts] = useState({
    name: "",
    description: "", 
    imageURL: ""
  })
  
  const handleShow = (e) => {
    console.log(e.target.id)
    setShow(true);
    axios.get(`${process.env.REACT_APP_SERVER_URL}/artifact/${e.target.id}`, artifacts)
        .then(response => {
            let articleTitle = response.data['dc:title'][0].value
            let articleDescription = response.data['dc:description'][0].value
            let articleImage = response.data['ecrm:P138_has_representation'][0].value
            setArtifacts({ name: articleTitle, description: articleDescription, imageURL: articleImage })
        })
    }
    

    return (
        <div>
             <div className='Modal'>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>{artifacts.name}</h3>
                        <p>{artifacts.description}</p>
                        <img src={artifacts.imageURL} />
                    </Modal.Body>
                </Modal>
            </div>
            <div  className='pacificDiv'>
            <img className='fishingHook pacificArtifact' id='660574' src='/fishing-hook-pacific.png' alt='fishing hook' onClick={handleShow}/>
            <img className='fishingBox pacificArtifact' src='/fishing-box-pacific.png' alt='fishing box' onClick={handleShow}/>
            <img className='danceDress pacificArtifact' src='/dance-dress-pacific.png' alt='dance dress' onClick={handleShow}/>
            <img className='fan pacificArtifact' src='/fan-pacific.png' alt='fan' onClick={handleShow}/>
            <img className='kite pacificArtifact' src='/kite-pacific.png' alt='kite' onClick={handleShow}/>
            <img className='canoe pacificArtifact' src='/model-canoe-pacific.png' alt='model canoe' onClick={handleShow}/>
            <img className='wovenMat pacificArtifact' src='/woven-mat-pacific.png' alt='woven mat' onClick={handleShow}/>
            <img className='waistGarment pacificArtifact' src='/waist-garment-pacific.png' alt='waist garment' onClick={handleShow} />
            <img className='pacificRoomImg' src='/pacific-room.png' alt='maori and pacific museum room' onClick={handleShow} />
            </div>
        </div>
    );
};

export default Pacific;
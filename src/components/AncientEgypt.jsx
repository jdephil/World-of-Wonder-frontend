import React, { useState } from 'react';
import './AncientEgypt.css'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';


const AncientEgypt = () => {
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
        <div class="egyptDiv">
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
            <img className="egyptArtifact wallHanging hoverable" src="egypt/wall-hanging-egypt.png" alt="wall hanging" onClick={handleShow} />
            <img className="egyptArtifact mummies hoverable" src="egypt/mummy2-egypt.png" alt="mummy" onClick={handleShow} />
            <img className="egyptArtifact slippers hoverable" src="egypt/slippers-egypt.png" alt="slippers" onClick={handleShow} />
            <img className="egyptArtifact cosmetics hoverable" src="egypt/cosmetics-egypt.png" alt="cosmetics" onClick={handleShow} />
            <img className='egyptArtifact writings hoverable' src="egypt/writings-egypt.png" alt="writings" onClick={handleShow} />
            <img className="egyptArtifact mummifiedBirds hoverable" src="egypt/mummified-birds-egypt.png" alt="mummified birds" onClick={handleShow} />
            <img className="egyptArtifact funeralBeads hoverable" src="egypt/funeral-beads-egypt.png" alt="funeral beads" onClick={handleShow} />
            <img className="egyptRoomImg hoverable" src="egypt/egypt-room.jpg" alt="ancient egyptian museum room" onClick={handleShow} />
        </div>

    );
};

export default AncientEgypt;
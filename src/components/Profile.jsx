import { Link } from 'react-router-dom';
import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'
import './Profile.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './modal.css'

const Profile = (props) => {

  const [show, setShow] = useState(false);
  const [artifacts, setArtifacts] = useState([])
  const [artifact, setArtifact] = useState({
    name: "",
    description: "",
    imageurl: "",
  })


  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/profile`)
      .then(response => {

        if (response.status === 200) {
          setArtifacts(response.data)
        } else {
          setError(response.statusText)
        }

        console.log(response.data)

      })
      .catch(err => {
        console.log(err)
        setError(err.message)
      })
  }, [])


  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    console.log(e.target.id)
    setShow(true);
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/profile`)
    //   .then(response => {

    //     if (response.status === 200) {
    //       setArtifact(
    //         {name:}
    //       )
    //     } else {
    //       setError(response.statusText)
    //     }

    //     console.log(response.data)

    //   })
    //   .catch(err => {
    //     console.log(err)
    //     setError(err.message)
    //   })
  }

  let userData = props.user
    ?
    <div>

    </div>
    : <h4>Loading...</h4>

  let errorDiv = () => {
    return (
      <div className="text-center pt-4"><h3>Please <Link to='/login'>login</Link> to view this page</h3></div>
    )
  }

  let individualArtifact = () => {
    return (
      <div>
        <h3>{artifact.name}</h3>
        <p>{artifact.description}</p>
        <img className="modalImage" src={artifact.imageurl} />
      </div>
    )
  }

  let artifactList = artifacts.length < 1 ?
    <h3>There are no favorited artifacts</h3> :
    artifacts.map((artifact) => (
      <div className="imageRow">
        <ul className="test">
          <li>
            <h3>{artifact.name}</h3>
            <img className="savedArtifacts" src={artifact.imageurl} alt="Saved artifacts" onClick={handleShow} />
          </li>
        </ul>


      </div>
    ))

  return (
    <div className="profileBackground">

      <div className="container center-align topBar">

        <div className="modalWindow">
          <Modal show={show} className='modalContent'>
            <Modal.Body>

              <div class="closeButton">
                <button class="closeModal" onClick={handleClose} >&times;</button>
              </div>

              {individualArtifact}
              {/* {artifactList} */}

              <h3>{artifacts.name}</h3>
              <p>{artifacts.description}</p>
              <img className="modalImage" src={artifacts.imageurl} />
              <form>
                <input type="hidden" name="name" value={artifacts.name}></input>
                <input type="hidden" name="description" value={artifacts.description}></input>
                <input type="hidden" name="imageurl" value={artifacts.imageurl}></input>
              </form>
            </Modal.Body>
          </Modal>
        </div>

        {props.user ? userData : errorDiv()}

        {artifactList}

      </div>
    </div>
  )
};

export default Profile;
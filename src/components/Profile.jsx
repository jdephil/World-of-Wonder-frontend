import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './profileJournal.css'
import './modal.css'
import Journal from './Journal'

const Profile = (props) => {
  let userData = props.user
    ? <div>
        <h1>Profile</h1>
          <p><strong>Name:</strong> {props.user.name}</p>
          <p><strong>email:</strong> {props.user.email}</p>
          <p><strong>ID:</strong> {props.user.id}</p>
      </div>
    : <h4>Loading...</h4>

    // let errorDiv = () => {

    
  return (
    <div className="profile">
      {/* <div className="text-center pt-4"><h3>Please <Link to='/login'>login</Link> to view this page</h3></div>
      <div>
        {props.user ? userData : errorDiv() }
      </div>
   */}
          
  
      <div>
       <Link to='/journal'>
          <img id="journalImage" src="/books.png" alt="books" />
        </Link>
      </div>
    </div>
      )
    }
    
    

export default Profile;
import React, { useState, useEffect } from 'react';
import './profileJournal.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import axios from 'axios'

const Journal = () => {
  const [journalEntries, setJournalEntries] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/journal`, journalEntries)
          .then(response => {
            setJournalEntries(response.data)
            console.log(journalEntries)
          })
          .catch(error => console.log(error))
  }, [])

    const [showModal, setShowModal] = useState(false);
    const [journalEntry, setJournalEntry] = useState({
      id: "",
      title: "",
      entry: ""
    })
 
    const handleCloseModal = () => setShowModal(false);
      
    const handleShowJournal = () => {
      setShowModal(true);
      axios.get(`${process.env.REACT_APP_SERVER_URL}/journal`, journalEntries)
          .then(response => {
            setJournalEntries(response.data)
          })
      }
    
    const openJournal = (e) => {
      setShowModal(true)
      axios.get(`${process.env.REACT_APP_SERVER_URL}/journal/${e.target.id}`, journalEntries)
        .then(response => {
          console.log(response.data)
          setJournalEntry(response.data)
        })
      console.log(journalEntry)
    }
     
    const editJournalEntry = () => {
      axios.put(`${process.env.REACT_APP_SERVER_URL}/journal/:id`, journalEntries)
        .then(response => {
          setJournalEntry(response.data)
        })
    }
 

  return (
    <div>
      <h3>Table of Contents</h3>
      <ul>
        {journalEntries.map(entry => (
            <li key={entry.title} id={entry._id} onClick={openJournal}>{entry.title}</li>
        ))}
      </ul>
      <div className="modalWindow">
      <Modal show={showModal} className='modalContent'>
          <Modal.Body id="journalModal">
              <div class="closeButton">
                  <button class="closeModal" onClick={handleCloseModal} >&times;</button>
              </div>
            <div class="editJournalEntry">
                <form>
                  <label for="title" className="formLabel">Edit Title:</label>
                  <input type="text" placeholder={journalEntry.title} className="formInput" ></input>
                  <label for="entry" className="formLabel">Edit Entry:</label>
                  <input type="text" placeholder={journalEntry.entry} ></input>
                  <button type="submit" className="modalButton" value="Edit Entry" className="formInput" onClick={editJournalEntry}>Edit Journal Entry</button>
                </form>
              </div>
          </Modal.Body>
      </Modal>
    </div>
  </div>
  )
}

export default Journal;
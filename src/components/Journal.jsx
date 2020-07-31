import React, { useState, useEffect } from 'react';
import './profileJournal.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import axios from 'axios'

const Journal = () => {
  const [journalEntries, setJournalEntries] = useState([])
  const [title, setTitle] = useState([]);
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/journal`, journalEntries)
          .then(response => {
            setJournalEntries(response.data)
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
    
    const openJournal = (e) => {
      setShowModal(true)
      axios.get(`${process.env.REACT_APP_SERVER_URL}/journal/${e.target.id}`, journalEntry)
        .then(response => {
          console.log(response.data)
          setJournalEntry({title: response.data.title, entry: response.data.entry, id: response.data._id})
          console.log(journalEntry)
        })
    }

    let editJournalEntry = (e) => {
      e.preventDefault()
      console.log(journalEntry.id)
      axios.put(`${process.env.REACT_APP_SERVER_URL}/journal/${journalEntry.id}`, journalEntry)
      .then(response => {
          console.log(`RESPONSE: ${response}`)
          console.log(response.data)
          setJournalEntry(response.data)
          console.log(journalEntry)
          
      })
      .catch(err => console.log(err))
    }

    let handleTitle = (e) => {
      setTitle(e.target.value)
    }

    let handleEntry = (e) => {
        etEntry(e.target.value)
    }
     
    // const editJournalEntry = (e) => {
    //   console.log("ISTHIS WORKING")
    //   axios.put(`${process.env.REACT_APP_SERVER_URL}/journal/${e.target.id}`, journalEntry)
    //     .then(response => {
    //       console.log(response.data)
    //       setJournalEntry(response.data)
    //     })
    // }
 

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
                <form onSubmit={editJournalEntry}>
                  <label for="title" className="formLabel">Edit Title:</label>
                  <input type="text" placeholder={journalEntry.title} id={journalEntry._id} className="formInput" onChange={handleTitle}></input>
                  <label for="entry" className="formLabel">Edit Entry:</label>
                  <input type="text" placeholder={journalEntry.entry} onChange={handleEntry}></input>
                  <input type="submit" className="modalButton" id={journalEntry._id} value="Edit Journal Entry"></input>
                </form>
              </div>
          </Modal.Body>
      </Modal>
    </div>
  </div>
  )
}

export default Journal;
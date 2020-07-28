import React, {useState} from 'react';
import './App.css';
import './components/Footer.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Office from './components/Office'
import Navbar from './components/Navbar'
import About from './components/About';
import Profile from './components/Profile'
import Footer from './components/Footer'
import Pacific from './components/Pacific'
import NativeAmerican from './components/NativeAmerican'
import AncientEgypt from './components/AncientEgypt'
import TeamPage from './components/teamPage'
import axios from 'axios'

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [artifacts, setArtifacts] = useState({
   name: "",
   description: "", 
   imageurl: ""
 })
 
 const handleShow = (e) => {
   console.log(e.target.id)
   setShow(true);
   axios.get(`${process.env.REACT_APP_SERVER_URL}/artifact/${e.target.id}`, artifacts)
       .then(response => {
           let articleTitle = response.data['dc:title'][0].value
           let articleDescription = response.data['dc:description'][0].value
           let articleImage = response.data['ecrm:P138_has_representation'][0].value
           setArtifacts({ name: articleTitle, description: articleDescription, imageurl: articleImage })
       })
   }

   const saveToProfile = (e) => {
       e.preventDefault()
       axios.post(`${process.env.REACT_APP_SERVER_URL}/profile/artifact/`, artifacts)
           
   }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/pacific' component={Pacific} saveToProfile={saveToProfile} handleShow={handleShow} handleClose={handleClose} />
          <Route path='/nativeAmerican' component={NativeAmerican} saveToProfile={saveToProfile} handleShow={handleShow} handleClose={handleClose}/>
          <Route path='/ancientEgypt' exact component={AncientEgypt} saveToProfile={saveToProfile} handleShow={handleShow} handleClose={handleClose}/>
          <Route path="/office" exact component={Office} />
          <Route path="/" exact component={About} />
          <Route path="/profile" exact component={Profile} />
          <Route path='/ancientEgypt' component={AncientEgypt} />
          <Route path='/pacific' component={Pacific} />
          <Route path='/nativeAmerican' component={NativeAmerican} />
          <Route path='/teampage' component={TeamPage} />
        </Switch>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import './components/Footer.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Office from './components/Office'
import Navbar from './components/Navbar'
import About from './components/About';
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/office" exact component={Office} />
          <Route path="/about" exact component={About} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

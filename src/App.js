import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Footer.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Office from './components/Office'
import Navbar from './components/Navbar'
import About from './components/About';
import Profile from './components/Profile'
import Footer from './components/Footer'
import Pacific from './components/Pacific'
import NativeAmerican from './components/NativeAmerican'
import AncientEgypt from './components/AncientEgypt'
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/pacific' component={Pacific} />
          <Route path='/nativeAmerican' component={NativeAmerican} />
          <Route path='/ancientEgypt' exact component={AncientEgypt} />
          <Route path="/office" exact component={Office} />
          <Route path="/" exact component={About} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Office from './components/Office'
import Navbar from './components/Navbar'
import About from './components/About';
import Profile from './components/Profile'
import Footer from './components/Footer'
import Pacific from './components/Pacific'
import NativeAmerican from './components/NativeAmerican'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/office" exact component={Office} />
          <Route path="/about" exact component={About} />
          <Route path="/profile" exact component={Profile} />
<<<<<<< HEAD
          <Route path='/ancientEgypt' component={AncientEgypt} />
          <Route path='/pacific' component={Pacific} />
          <Route path='/nativeAmerican' component={NativeAmerican} />
=======
          <Route path="/pacific" exact component={Pacific} />
>>>>>>> jens-branch
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

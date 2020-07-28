import React from 'react';
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

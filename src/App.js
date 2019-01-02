import React, { Component } from 'react';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Expeditions from './pages/Expeditions'
import Wildlife from './pages/Wildlife'
import Destinations from './pages/Destinations'
import News from './pages/News'
import About from './pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route path="/expedition-type" component={Expeditions}/>
          <Route path="/wildlife" component={Wildlife}/>
          <Route path="/destinations" component={Destinations}/>
          <Route path="/news" component={News}/>
          <Route path="/about-us" component={About}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

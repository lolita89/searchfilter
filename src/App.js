import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        {/* < Navbar /> */}
        <Route exact path="/" component={Home} />
      </div>
    </Router>
    );
  }
}

export default App;
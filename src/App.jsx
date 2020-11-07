// React Core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React components
import Card from './components/Card';
import Nav from './components/Nav';
import Home from './components/Home';


// Media Items
import logo from './assets/logo.svg';
import './style/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/Card" component={Card} />
        <Route path="/Home" component={Home} />
   

      </div>
    </Router>
  );
}

export default App;

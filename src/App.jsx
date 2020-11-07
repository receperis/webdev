// React Core
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React components
import Card from './components/Card';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';


// Media Items
import logo from './assets/logo.svg';
import './style/App.css';
import "./style/index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/Home" component={Home} />
        <Route path="/Card" exact component={Card} />
        <Route path="/Card/:id" component={Details} />
   

      </div>
    </Router>
  );
}

export default App;

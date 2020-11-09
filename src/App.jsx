// React Core
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// React components
import Card from './components/Card';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';


// Media Items

import './style/App.css';
import "./style/index.css";


function App() {


  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');

    const items = await data.json();

    setItems(items);
  }

  const list = items;




  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Card" exact render={() => <Card data={list} />} />
          <Route path="/Card/:id"
            render={({ match }) => <Details match={match} data={list} />} />
        </Switch>

      </div>
    </Router>
  );




}

export default App;

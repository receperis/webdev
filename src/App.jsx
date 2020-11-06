// React Core
import { useState } from "react";

// React components
import Card from "./components/card"
import Header from "./components/Header"

// Media Items
import logo from './assets/logo.svg';
import './style/App.css';

function App() {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
       <h1>
       Package Tracking
       </h1>
      </header>
    </div>
  );
}

export default App;

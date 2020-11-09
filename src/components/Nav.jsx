// React Core
import React from 'react';
import { Link } from 'react-router-dom';
import {FaDhl} from 'react-icons/fa';

// Media Items

import '../style/App.css';
import "../style/index.css";

function Nav() {
    return (
        <nav>
            
            <Link to={`/Home`}>
            <h3><FaDhl size="7em"/></h3>
            </Link>
         
        
            
            <ul className="nav-bar">
               
                <Link to={`/Home`}>
                <li>Home</li>
                </Link>
                
                <Link to={`/Card`}>
                <li>Orders</li>
                </Link>
            </ul>
        </nav>
    );
}







export default Nav;
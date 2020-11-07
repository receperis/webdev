import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


function Card() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        
            <ol>
            {items.map(item => (
                
                   <li key={item.id}> 
                  <Link to= {`/Card/${item.id}`}> 
                  {item.id} 
                  </Link>
                   </li>
                
            ))}
            </ol>
    
    );
}

export default Card;
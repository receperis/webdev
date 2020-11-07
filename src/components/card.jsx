import React, {useState, useEffect} from 'react';


function Card(){

useEffect(()=>{
    fetchItems(); 
},[]);

const[items, setItems]= useState([]);

const fetchItems = async () => {
    const data = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');
    
    const items =await data.json();
    console.log(items);
    setItems(items);
}

    return(
    <div>
        
            {items.map(item=>(
               <h1>{item.id, item.sender}</h1>
            ))}
    
    </div>
    );
}

export default Card;
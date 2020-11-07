import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Card({info}) {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://my.api.mockaroo.com/orders.json?key=e49e6840');

        const items = await data.json();
       
        setItems(items);
    }

  /*
    const {
        eta,
        id,
        last_updated,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_id,
        location_name,
        location_status_ok,
        notes,
        parcel_id,
        sender,
        status,
        user_name,
        user_phone,
        verification_required,
    } = items;





const Card = items.map(item => {
    return [<li key={item.id}>
            <Link to={`/Card/${item.id}`}>
             {item.id },  
             {item.sender}
             </Link>
             </li>];
          
});
*/

const Card = items.map(item => {
    return [
         <tr key={item.id}>    
            <td>{item.id }</td>  
            <td>{item.sender}</td>
            </tr>]
             
          
});

    return (
/*
        <ol>
            {items.map(item => (

                <li key={item.id}>
                    <Link to={`/Card/${item.id}`}>
                        {item.id}
                    </Link>
                </li>

            ))}
        </ol>
*/
<Link to={`/Card/${items.id}`}>
<table>
    {Card}
</table>
</Link>
            
            
            
    );
}

export default Card;
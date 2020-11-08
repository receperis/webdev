import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Details from './Details';





function Card() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`https://my.api.mockaroo.com/orders.json?key=e49e6840`);

        const items = await data.json();

        setItems(items);
    }

   
    const list = items;


   
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
    } = list;


*/
    const Card = items.map(item => {
        return [<li key={item.id}>
            <Link to={`/Card/${item.id}`}>
                {item.id},
                {item.sender}
            </Link>
        </li>];

    });

     /*
        const Details = (props) => (
            <section>
                <Details props ={list} />
            </section>
        )
   
        const Card = items.map(item => {
            return [
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.sender}</td>
                </tr>]
        });
    
    */




    return (
        <div>

            {Card}



            <Details props={list} />


        </div>

    );
}

export default Card;
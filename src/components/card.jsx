import React from 'react';
import { Link } from 'react-router-dom';



function Card({ data }) {
    console.log(data);



    const Card = data.map(item => {
        return [
        
        <div key={item.id}>
            
            
            <Link to={`/Card/${item.id}`}>
            
            <td>{item.id}</td> <td>{item.sender}</td>

            </Link>

        </div>];

    });

    return (


        <div className="card">

            Please select to view details
            <table className="short-card">
            <tr><td>Order ID</td><td>Sender</td></tr>
                {Card}
            </table>
        </div>

    );
}

export default Card;
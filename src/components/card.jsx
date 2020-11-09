import React from 'react';
import { Link } from 'react-router-dom';



function Card({data}) {
console.log(data);



const Card = data.map(item => {
    return [<li key={item.id}>
            <Link to={`/Card/${item.id}`}>
             {item.id },  
             {item.sender}
             </Link>
             </li>];
          
});



             

    return (


<article>
{Card}
</article>
            
    );
}

export default Card;
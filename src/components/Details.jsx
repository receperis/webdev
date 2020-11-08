import React from 'react';


function Details( {props} ) {

const lista = props.map(item => {
        return [<div>
            {item.id},
            {item.sender},
            {item.status}
            </div>];

    });

    return (

        <ol>
            <span>{lista}</span>

        </ol>

    );
}

export default Details;
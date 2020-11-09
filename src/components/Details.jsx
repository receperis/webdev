import React, { useState } from 'react';


function Details({ match, data }) {


    const state = data.filter(item => {
        return (item.id === match.params.id);
    });

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
    } = state[0];





    return (

        <ol>
            {id}
            {eta}
            {last_updated}
            {location_coordinate_latitude}
            {location_coordinate_longitude}
            {location_id}
            {location_name}
            {location_status_ok}
            {notes}
            {parcel_id}
            {sender}
            {status}
            {user_name}
            {user_phone}
            {verification_required}

        </ol>
    )
}



export default Details;
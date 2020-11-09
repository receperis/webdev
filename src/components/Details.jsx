import React from 'react';


function Details({ match, data }) {

    //Filters the item of the whole array with the same ID
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
        notes,
        parcel_id,
        sender,
        status,
        user_name,
        user_phone,
      
    } = state[0]; //filter returns only one array. So index is "0"





    return (

        <table className="results">

            <tr> <td> Order ID   </td>      <td> {id} </td></tr>
            <tr> <td> Est. Time of Arrival   </td>           <td> {eta} </td></tr>
            <tr> <td> Last updated </td>    <td> {last_updated}</td></tr>
            <tr> <td> Location Coordinate Latitude</td>  <td> {location_coordinate_latitude}</td></tr>
            <tr> <td> Location Coordinate Longitude</td> <td> {location_coordinate_longitude}</td></tr>
            <tr> <td> Location_id </td>      <td> {location_id}</td></tr>
            <tr> <td> Location name</td>     <td>{location_name}</td></tr>
            <tr> <td> Notes </td>            <td>{notes}</td></tr>
            <tr> <td> Parcel ID</td>         <td> {parcel_id}</td></tr>
            <tr> <td> Sender</td>            <td> {sender}</td></tr>
            <tr> <td> Status</td>            <td> {status}</td></tr>
            <tr> <td> User Name </td>        <td> {user_name}</td></tr>
            <tr> <td> user_phone</td>        <td>{user_phone}</td></tr>
           

        </table>
    )
}



export default Details;
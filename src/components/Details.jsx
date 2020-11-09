import React from 'react';


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

        <table>

            <tr> <td> Order ID   </td>      <td> {id} </td></tr>
            <tr> <td> eta   </td>           <td> {eta} </td></tr>
            <tr> <td> last updated </td>    <td> {last_updated}</td></tr>
            <tr> <td> Location Coordinate Latitude</td>  <td> {location_coordinate_latitude}</td></tr>
            <tr> <td> location_coordinate_longitude</td> <td> {location_coordinate_longitude}</td></tr>
            <tr> <td> location_id </td>      <td> {location_id}</td></tr>
            <tr> <td> location_name</td>     <td>{location_name}</td></tr>
            <tr> <td> notes </td>            <td>{notes}</td></tr>
            <tr> <td> parcel_id</td>         <td> {parcel_id}</td></tr>
            <tr> <td> sender</td>            <td> {sender}</td></tr>
            <tr> <td> status</td>            <td> {status}</td></tr>
            <tr> <td> user_name </td>        <td> {user_name}</td></tr>
            <tr> <td> user_phone</td>        <td>{user_phone}</td></tr>
           

        </table>
    )
}



export default Details;
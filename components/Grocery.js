import React from 'react';
import '../App.css';
import SelectQuantity from './SelectQuantity';


function Grocery({id}) {
    return (
       
        <tr>
            <td>{id.name}</td>
            <td> {id.price}</td>
            <td><SelectQuantity/> </td>
        </tr>
       

    );
}

export default Grocery
import React from 'react';
import '../App.css';
import ZipSearch from './ZipSearch';



function Stores({id}) {
    return (
        
        <tr>
            <td>{id.city}</td>
            <td> {id.state}</td>
            <td> {id.zipCode}</td>
        </tr>
        
    
    );
}

export default Stores
import React from 'react';
import stores from '../data/items';
import '../App.css';
import StoreRow from './StoreRow.js';


function StoreTable({stores}) {                             
    return (
        <table>
            <thead>
                <tr>
                    <th>City</th>
                    <th>State</th>
                    <th>ZipCode</th>
                </tr>
            </thead>
            <tbody>
                <StoreRow stores={stores}></StoreRow>
            </tbody>
        </table>

    );


}

export default StoreTable
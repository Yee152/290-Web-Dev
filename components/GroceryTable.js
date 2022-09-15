import React from 'react';
import items from '../data/items';
import '../App.css';
import GroceryRow from './GroceryRow';


function GroceryTable({items}) {                             
    return (
      
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <GroceryRow items={items}></GroceryRow>
            </tbody>
        </table>

    );


}

export default GroceryTable
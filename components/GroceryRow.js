import React from 'react';
import items from '../data/items';
import '../App.css';
import Grocery from './Grocery';



function GroceryRow({items}) {                             
    return (
            items.map((id,index) => <Grocery id={id} key = {index} />)
            
    );


}

export default GroceryRow
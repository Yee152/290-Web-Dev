import React from 'react';
import stores from '../data/stores';
import '../App.css';
import Stores from './Stores';


function StoreRow({stores}) {                             
    return (
            stores.map((id,index) => <Stores id={id} key = {index} />)
            
    );

}

export default StoreRow
import React from 'react';
import {Link} from 'react-router-dom';
import GroceryTable from '../components/GroceryTable';


function OrderPage({items}) {
  return (
    <>
      <h2>Order Page</h2>
      <p>Select the quantity of the items you want to buy</p>
      <GroceryTable items={items}></GroceryTable>
      <p>Go back to the home page</p>
      <Link className="App-link" to="/"> HomePage</Link>

    </>
  );
}

export default OrderPage;
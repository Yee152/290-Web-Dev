import React from 'react';
import {Link} from 'react-router-dom';
import StoreTable from '../components/StoreTable';
import ZipSearch from '../components/ZipSearch';

function StoresPage({stores}) {
  return (
    <>
      <h2>StoresPage</h2>
      <p> Find the closest store to your zip code</p>
      <StoreTable stores={stores}></StoreTable>
      <ZipSearch/>
      <p>Go back to the home page</p>
      <Link className="App-link" to="/"> HomePage</Link>
    </>
  );
}

export default StoresPage;
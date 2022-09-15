import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h2>Welcome to Beaver Mart.</h2>
            <p>Order What you Need</p>
            <Link className="App-link" to="/order"> Shop online</Link>
            <p>From Our Stores Across the Country</p>
            <Link className="App-link" to="/stores"> See a list of Beaver Mart Stores</Link>
        </>
    )
}

export default HomePage;
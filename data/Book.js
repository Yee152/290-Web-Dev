import React from 'react';
import './Books.css';

function Book({ book }) {
    return (
        <div className="list-item">
            <h3>{book.title}</h3>
            <p>Price: {book.price}</p>
        </div>
    );
}

export default Book;
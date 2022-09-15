import '../App.css';
import React, { useState } from 'react';


function ZipSearch() {
  const [number, setName] = useState('');
  return (
    <form>
        <fieldset>
            <legend>Enter your 5 digit zip code:</legend>
            <label> 
                <input type="text" value={number}
                    onChange={e => setName(e.target.value)} />
            </label>
        </fieldset>
        <button onClick={e => {
            setName(e.target.value);
            alert(`You entered ${number}`);
            e.preventDefault();
          }}>Submit</button>
        </form>
  
  );
}

export default ZipSearch;
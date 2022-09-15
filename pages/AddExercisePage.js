import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


export const AddExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}
        const response = await fetch('/exercises', {
            method: 'POST', 
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json', 
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise");
        }else {
            alert(`Failed to add exercise, status code = ${response.status}`);

        }

        history.push("/");
    };

    return (
        <div>
            <header>
                <h1>Exercise Tracker</h1>
                <p>Full Stack MERN App Demonstration</p>
             </header>
            
             <nav>
                <Link to="/">Homepage</Link>
                <br></br>
                <Link to="/add-exercise">Add a exercise</Link>
            </nav>

            <br></br>
            <p>Add values for the exercise</p>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                placeholder="Enter weight here"
                onChange={e => setWeight(e.target.value)} />

            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value={"kgs"}>kgs</option>
                <option value={"lbs"}>lbs</option>
            </select>

            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>

            <footer>© 2022 Eileen Yee</footer>
        </div>
        
    );
}

export default AddExercisePage;
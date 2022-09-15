import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExercisesToEdit}) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();


    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'})
        if(response.status ===204) {
            const newExercises = exercises.filter(m => m._id !== _id);
            setExercises(newExercises);

        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    };

    const onEdit = exercise => {
        setExercisesToEdit(exercise)
        history.push("/edit-exercise");

    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        //this is what is returned rom the rest API
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

   


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
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
            <footer>© 2022 Eileen Yee</footer>
        </div>
      
    );
}

export default HomePage;
import { useState } from 'react';
import './Nav.css';

export default function Skeleton() {
    const exercises = [ 'exercise 1', 'exercise 2' ];

    const sets = [ 2, '3 - 4' ];

    const reps = [ '4 - 6', '8 - 12' ];

    const weight = [ 33, 28 ];

    const initialFormState = {
        sets: '',
        reps: '',
        weight: '',
    };

    const [clicked, setClicked] = useState(false);

    const [formData, setFormData] = useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", formData);
        setFormData({ ...initialFormState})
    }

    const row = exercises.map((exercise) => {
        const index = exercises.indexOf(exercise)
        return (
        <tr>
        <td>{exercises[index]}</td>
        <td className='center'>{sets[index]}</td>
        <td className='center'>{reps[index]}</td>
        <td className='center'>{weight[index]}</td>
        <td className='center'I>
            <form onSubmit={ handleSubmit }>
                <td className='center'I>
                    <input id="sets" type='text' name='sets' className="input" onChange={ handleChange } placeholder="sets" value={FormData.sets} />
                </td>
                <td className='center'I>
                    <input id="reps" type='text' name='reps' className="input" onChange={ handleChange } placeholder="reps" value={FormData.reps} />
                </td>
                <td className='center'I>
                    <input id="weight" type='text' name='weight' className="input" onChange={ handleChange } placeholder="weight" value={FormData.weight} />
                </td>
                <td className='center'>
                    <button type='submit' onClick={() => setClicked(!clicked)}>{clicked ? "Save" : "Done"}</button>
                </td>
            </form>
        </td>
    </tr> 
        )
}) 

    return (
        <>
        <h1>Skeleton</h1>
        <table>
            <thead>
                <tr>
                    <th>Exercises</th>
                    <th className='center wide'>Sets</th>
                    <th className='center wide'>Reps</th>
                    <th className='center wide'>Weight</th>
                    <th className='center wide'>Actual</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </table>
        </>
      );
};
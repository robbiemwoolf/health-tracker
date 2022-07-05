import { useState } from 'react';

export default function Push() {

    const exercises = [ 'Flat DB Bench', 'Incline DB Bench', 'Chest Flies', 'Push Ups', 'DB Lateral Raises', 'Incline BB Skullcrushers', 'Cable Close Grip Tricep Pushdowns' ];

    const sets = [ 2, '3 - 4', '3 - 4', 3, '3 - 4', 3, 3 ];

    const reps = [ '4 - 6', '8 - 12', '8 - 12', 'Failure', '12 - 16', '8 - 12', '12 - 16' ];

    const weight = [ 33, 28, 10, '-', 10, 25.5, 20 ];

    const [clicked, setClicked] = useState(false);

    const initialFormState = {
        sets: '',
        reps: '',
        weight: '',
    };

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
                <td className='center'>
                    <input id="sets" type='text' name='sets' className="input" onChange={ handleChange } placeholder="sets" value={FormData.sets} />
                </td>
                <td className='center'>
                    <input id="reps" type='text' name='reps' className="input" onChange={ handleChange } placeholder="reps" value={FormData.reps} />
                </td>
                <td className='center'>
                    <input id="weight" type='text' name='weight' className="input" onChange={ handleChange } placeholder="weight" value={FormData.weight} />
                </td>
                <td className='center'>
                    <button type='submit' onClick={() => setClicked(!clicked)}>{clicked ? "Done" : "Save"}</button>
                </td>
            </form>
        </td>
    </tr> 
        )
}) 

    return (
        <>
        <h1>Push</h1>
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
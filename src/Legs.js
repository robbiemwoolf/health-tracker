import { useState } from "react";

export default function Legs() {

    const exercises = [ 'BB Squat', 'BB Squat', 'DB Sumo Squat', 'Manual Hamstring Curl', 'Standing Calf Raises' ];

    const sets = [ 2, 2, 3, 3, 4 ];

    const reps = [ '5 - 8', '8 - 12', '10 - 15', 'Failure', '10 - 15' ];

    const weight = [ 85, 60, 10, '-', '-' ];

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
        <td className='center'>
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
                    <button type='submit'>Save</button>
                </td>
            </form>
        </td>
    </tr> 
        )
}) 

    return (
        <>
        <h1>Legs</h1>
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
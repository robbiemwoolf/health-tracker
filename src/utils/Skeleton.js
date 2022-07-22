import { useState } from 'react'
import './nav/Nav.css'

export default function Skeleton({ values }) {

    const day = values[0][0].day
    const exercises = values[0][1].exercises
    const sets = values[0][2].sets
    const reps = values[0][3].reps
    const weight = values[0][4].weight

    const initialFormState = {
        sets: '',
        reps: '',
        weight: '',
    }

    const [clicked, setClicked] = useState(false)

    const [formData, setFormData] = useState({ ...initialFormState })

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", formData)
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
        <h1>{ day }</h1>
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
      )
}
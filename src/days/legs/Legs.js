import Skeleton from "../../utils/Skeleton"

export default function Legs() {

    const day = 'Legs'

    const exercises = [ 'BB Squat Heavy', 'BB Squat', 'DB Sumo Squat', 'Manual Hamstring Curl', 'Standing Calf Raises' ]

    const sets = [ 2, 2, 3, 3, 4 ]

    const reps = [ '5 - 8', '8 - 12', '10 - 15', 'Failure', '10 - 15' ]

    const weight = [ 85, 60, 10, '-', '-' ]

    return (
        <Skeleton day={day} exercises={exercises} sets={sets} reps={reps} weight={weight} />
    )
}
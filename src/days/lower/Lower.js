import Skeleton from "../../utils/Skeleton"

export default function Lower() {

    const day = 'Lower'

    const exercises = [ 'BB Squat - Drop Set', 'Manual Hamstring Curl', 'Standing Calf Raises' ]

    const sets = [ 10, 3, 3 ]

    const reps = [ 10, 'Failure', '10 - 15' ]

    const weight = [ 60, '-', '-' ]

    return (
        <Skeleton day={day} exercises={exercises} sets={sets} reps={reps} weight={weight} />
    )
}
import Skeleton from "../../utils/Skeleton"

export default function Upper() {
    
    const day = 'Upper'

    const exercises = [ 'Bent Over BB Row', 'Lebert Dips', 'DB Arnold Press', 'Overhead DB Tricep Extension', 'Seated DB Hammer Curls', 'Cable Flies SS Cable Reverse Flies' ]

    const sets = [ 3, 3, '2 - 3', 3, '3 - 4', 3 ]

    const reps = [ '10 - 15', 'Failure', '8 - 12', '10 - 15', '10 - 15', '10 - 12' ]

    const weight = [ 65, '-', 18, 18, 8, 25.5 ]

    return (
        <Skeleton day={day} exercises={exercises} sets={sets} reps={reps} weight={weight} />
    )
}
import Skeleton from "../../utils/Skeleton"

export default function Push() {

    const day = 'Push'

    const exercises = [ 'Flat DB Bench', 'Incline DB Bench', 'Chest Flies', 'Push Ups', 'DB Lateral Raises', 'Incline BB Skullcrushers', 'Cable Close Grip Tricep Pushdowns' ]

    const sets = [ 2, '3 - 4', '3 - 4', 3, '3 - 4', 3, 3 ]

    const reps = [ '4 - 6', '8 - 12', '8 - 12', 'Failure', '12 - 16', '8 - 12', '12 - 16' ]

    const weight = [ 33, 28, 10, '-', 10, 25.5, 20 ]

    return (
        <Skeleton day={day} exercises={exercises} sets={sets} reps={reps} weight={weight} />
    )
}
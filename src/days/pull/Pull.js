import Skeleton from "../../utils/Skeleton"

export default function Pull() {

    const day = 'Pull'

    const exercises = [ 'Seated Cable Rows Heavy', 'Seated Cable Rows', 'Lat Pulldowns', 'Cable Lat Pullovers', 'Rear Delt Flies', 'Alternating DB Curl', 'Standing BB Curl SS Reverse' ]

    const sets = [ 2, 2, 3, 2, '3-4', 2, 3 ]

    const reps = [ '4 - 6', '8 - 16', '8 - 12', 16, '12 - 16', '8 - 12', '8 - 12']

    const weight = [ 100, 75, 45, 20, 5, 13, 25.5 ]

    return (
        <Skeleton day={day} exercises={exercises} sets={sets} reps={reps} weight={weight} />
    )
}
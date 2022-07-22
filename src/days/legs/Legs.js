import Skeleton from "../../utils/Skeleton"
const legs = require('./legsdb')

export default function Legs() {

    const values = Object.values(legs)

    return (
        <Skeleton values={values} />
    )
}
import Skeleton from "../../utils/Skeleton"
const upper = require('./upperdb')

export default function Upper() {

    const values = Object.values(upper)

    return (
        <Skeleton values={values} />
    )
}
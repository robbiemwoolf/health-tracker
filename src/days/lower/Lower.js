import Skeleton from "../../utils/Skeleton"
const lower = require('./lowerdb')

export default function Lower() {

    const values = Object.values(lower)

    return (
        <Skeleton values={values} />
    )
}
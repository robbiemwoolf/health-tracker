import Skeleton from "../../utils/Skeleton"
const pull = require('./pulldb')

export default function Pull() {

    const values = Object.values(pull)

    return (
        <Skeleton values={values} />
    )
}
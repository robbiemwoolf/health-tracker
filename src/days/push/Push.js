import Skeleton from "../../utils/Skeleton"
const push = require('./pushdb')

export default function Push() {

    const values = Object.values(push)

    return (
        <Skeleton values={values} />
    )
}
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
    <div className="btn-group-vertical btn-group-lg" role="group" >
        <Link to='/' className='width'>
            <button type="button" className="btn btn-block btn-outline-dark">Home</button>
        </Link>
        <Link to="/push" className='width'>
            <button type="button" className="btn btn-block btn-outline-dark">Push</button>
        </Link>
        <Link to="/pull" className='width'>
            <button type="button" className="btn btn-block btn-outline-dark">Pull</button>
        </Link>
        <Link to="/lower" className='width'>
            <button type="button" className="btn btn-block btn-outline-dark">Lower</button>
        </Link>
        <Link to="/upper" className='width'>
            <button type="button" className="btn btn-block btn-outline-dark">Upper</button>
        </Link>
        <Link to="/legs" className='width'>
            <button type="button" className="btn btn-block btn-outline-dark">Legs</button>
        </Link>
    </div>
    )
};
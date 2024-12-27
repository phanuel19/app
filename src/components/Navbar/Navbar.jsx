import { FaInfoCircle, FaDatabase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { GrAction } from "react-icons/gr";
import './navbar.css'
function Navbar() {
    return (
        <nav>
                <h1 className="logo">NOVA</h1>
            <ul>
                <li><FaInfoCircle /><a href="#about">About</a></li>
                <li><FaDatabase /><a href="#dataCharts">Données</a></li>
                <li><FaLightbulb /><a href="#advices">Recommendations</a></li>
                <li><GrAction /><a href="#controlButtons">Actions</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

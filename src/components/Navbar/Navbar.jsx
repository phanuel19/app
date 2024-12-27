import { FaInfoCircle, FaDatabase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { GrAction } from "react-icons/gr";
import './navbar.css'
function Navbar() {
    return (
        <nav>
                <h1 className="logo">NOVA</h1>
            <ul>
                <li><a href="#about"><FaInfoCircle />About</a></li>
                <li><a href="#dataCharts"><FaDatabase />Data</a></li>
                <li><a href="#advices"><FaLightbulb />Recommendations</a></li>
                <li><a href="#controlButtons"><GrAction />Actions</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

import { FaInfoCircle, FaDatabase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrAction } from "react-icons/gr";
import { Link } from "react-router-dom";


import { RiPlantFill } from "react-icons/ri";
import './navbar.css'
function Navbar() {
   return (
        <nav id="nav">
            <div className="logoBlock">
                <IconContext.Provider value={{size: 50 }}>
                    <RiPlantFill className="logo-img" />
                </IconContext.Provider>
                <h1 className="logo">NOVA</h1>
            </div>
         
            <ul>
                <li>
                    <FaInfoCircle />
                    <Link to="/">About</Link>
                </li>
                <li>
                    <FaDatabase />
                    <Link to="/datacharts">Données</Link>
                </li>
                <li>
                    <FaLightbulb />
                    <Link to="/advices">Recommendations</Link>
                </li>
                <li>
                    <GrAction />
                    <Link to="/control-buttons">Actions</Link>
                </li>
            </ul>
        
        </nav>
      
        
    )
}

export default Navbar

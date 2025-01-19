import { FaInfoCircle, FaDatabase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrAction } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { RiPlantFill } from "react-icons/ri";
import './navbar.css'
function Navbar() {
    return (
        <>
        <nav id="nav">
            <div className="logoBlock">
                <IconContext.Provider value={{size: 50 }}>
                    <RiPlantFill className="logo-img" />
                </IconContext.Provider>
                <h1 className="logo">NOVA</h1>
            </div>
            <ul>
                <li><FaInfoCircle /><a href="/">About</a></li>
                <li><FaDatabase /><a href="/datacharts">Données</a></li>
                <li><FaLightbulb /><a href="/advices">Recommendations</a></li>
                <li><GrAction /><a href="/controlButtons">Actions</a></li>
                <li><VscAccount /><a href="#">Dashboard</a></li>
            </ul>
        </nav>
      
        </>
    )
}

export default Navbar

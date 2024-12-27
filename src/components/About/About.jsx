import { FaInfoCircle } from "react-icons/fa";
import img from '../../assets/img.png'
import './about.css'
function About() {
    return (
        <div id="about">
            <div className="desc">
                <div className="texte">
                    <h2><FaInfoCircle /> Bienvenue sur Nova</h2>
                    <p> L &apos;  industrie 4.0 au cœur de l &apos; agriculture ivoirienne
                        L&apos; agriculture est l&apos; âme de la Côte d&apos; Ivoire. Chez [Nom de votre solution], nous combinons innovation technologique et expertise agricole pour offrir des solutions modernes adaptées aux défis d&apos; aujourd&apos; hui.
                        </p> <p>
                        Grâce aux outils de l&apos; industrie 4.0, tels que l&apos; Internet des Objets (IoT), l&apos; intelligence artificielle (IA) et l&apos; analyse des données, nous révolutionnons les pratiques agricoles pour les rendre plus efficaces, durables et rentables.
                       
                    </p>
                    <p>  Notre mission est claire :
                        Accompagner les agriculteurs et les acteurs du secteur en Côte d&apos; Ivoire à entrer dans une nouvelle ère d&apos; agriculture intelligente et connectée.</p>
                  </div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default About

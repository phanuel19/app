import { FaInfoCircle } from "react-icons/fa";
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import img from '../../assets/img.png'
import './about.css'
function About() {
    return (
        <>
            <Navbar />

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
            <div id="parent">
                <img src="../../../public/culture_du_riz.jpg" alt="" className="carousel-img" />
                <p> Cette image reflète la réalité quotidienne des riziculteurs ivoiriens,
                    mettant en lumière le travail acharné nécessaire pour nourrir les populations.
                    Cependant, des défis comme la gestion de l&apos;eau, l&apos;analyse des données et la planification agricole
                    limitent souvent le potentiel de production. Avec notre solution numérique basée sur les principes
                    de l&apos;industrie 4.0, nous visons à transformer cette réalité. Grâce à des outils connectés, les agriculteurs pourront surveiller leurs cultures en temps réel, optimiser l&apos;irrigation, et planifier efficacement leurs cycles agricoles. L&apos;objectif est d&apos;augmenter les rendements tout en préservant les ressources naturelles, pour une agriculture plus durable et compétitive en Côte d&apos;Ivoire.</p>

            </div>
            <Footer />
        </>
    )
}

export default About

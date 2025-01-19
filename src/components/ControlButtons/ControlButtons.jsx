import { GrAction } from "react-icons/gr";
import powerOn from "../../../public/power-button-power-svgrepo-com.svg"
import check from "../../../public/analyse-svgrepo-com.svg"
import watering from "../../../public/agriculture-watering-can-svgrepo-com.svg"
import harvest from "../../../public/barley-crop-food-grain-harvest-plant-svgrepo-com.svg"
import './controlButtons.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
function ControlButtons() {
    return (
        <>
            <Navbar />
            <div id="controlButtons" >
                <h2><GrAction />Actions</h2>
                <div className="controlZone">
                    <div className="buttons">
                        <img src={powerOn} alt="" className="img-btn" />
                        <h3>Activation du système</h3>
                        <p className="description">
                            Activez ou désactivez le dispositif principal pour démarrer ou arrêter l&apos;ensemble des systèmes connectés. Assurez-vous que tout est opérationnel avant de poursuivre.
                        </p>
                        <button>Activer</button>
                    </div>


                    <div className="buttons">
                        <img src={check} alt="" className="img-btn" />
                        <h3>Surveillance des données</h3>
                        <p className="description">
                            Consultez les données en temps réel pour surveiller l&apos;état de vos cultures, le sol et les conditions climatiques. Prenez des décisions éclairées grâce à des analyses détaillées.
                        </p>
                        <button>Consulter</button>
                    </div>


                    <div className="buttons">
                        <img src={watering} alt="" className="img-btn" />
                        <h3>Gestion de l&apos;irrigation</h3>
                        <p className="description">
                            Gérez l&apos;irrigation de vos cultures grâce à notre système intelligent. Optimisez l&apos;apport en eau selon les besoins détectés pour économiser les ressources et maximiser la croissance.
                        </p>
                        <button>Gérer</button>
                    </div>


                    <div className="buttons">
                        <img src={harvest} alt="" className="img-btn" />
                        <h3>Planification des cultures</h3>
                        <p className="description">
                            Planifiez vos cycles agricoles en fonction des données de votre terrain et des prévisions climatiques. Obtenez des recommandations pour choisir les meilleures périodes de semis et de récolte.
                        </p>
                        <button>Planifier</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ControlButtons

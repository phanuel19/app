import { FaLightbulb } from "react-icons/fa6";
import './advices.css';
function Advices() {
    return (
        <div id="advices">
            <h2> <FaLightbulb /> Recommandations</h2>
            <ul>
                <li className="advices check">
                    Analyse des sols :
                    Utilisez des capteurs et des outils d&apos;analyse pour déterminer les besoins en nutriments du sol avant la plantation.
                </li><li className="advices check">
                    Sélection de variétés adaptées :
                    Choisissez des variétés de riz résistantes aux maladies et adaptées aux conditions climatiques locales.
                </li><li className="advices error">
                    Application excessive d&apos;engrais :
                    Trop d&apos;engrais peut nuire à la croissance des plantes et polluer l&apos;environnement.
                </li><li className="advices error">
                    Ignorer les ravageurs et maladies :
                    Ne pas surveiller régulièrement les cultures peut entraîner des infestations coûteuses et difficiles à gérer.
                </li>  <li className="advices check">
                    Suivi en temps réel :
                    Utilisez des technologies IoT pour surveiller la croissance des plants, détecter les maladies ou le stress hydrique à un stade précoce.
                </li> <li className="advices error">
                    Utilisation de semences de faible qualité :
                    Les semences non certifiées ou mal stockées peuvent compromettre les rendements.
                </li> <li className="advices check">
                    Fertilisation optimisée :
                    Appliquez des engrais en fonction des besoins spécifiques détectés grâce aux données collectées par les capteurs ou les drones.
                </li>  <li className="advices check">
                    Rotation et diversification des cultures :
                    Intégrez des rotations culturales pour améliorer la qualité du sol et prévenir l&apos;épuisement des ressources.
                </li>  <li className="advices check">
                    Formation continue des agriculteurs :
                    Proposez des formations pour sensibiliser les producteurs aux bonnes pratiques agricoles et à l&apos;utilisation des nouvelles technologies.
                </li> <li className="advices error">
                    Négliger la mécanisation :
                    Une absence d&apos;équipement moderne peut limiter la productivité, surtout sur de grandes surfaces.
                </li> <li className="advices check">
                    Prévisions climatiques :
                    Appuyez-vous sur les outils de prévisions météorologiques pour planifier les semis et les récoltes.
                </li><li className="advices error">
                    Sur-irrigation :
                    Une mauvaise gestion de l&apos;eau peut entraîner des pertes de nutriments et favoriser le développement de maladies.
                </li><li className="advices error">
                    Mauvaise gestion des ressources humaines :
                    Sous-estimer le besoin de main-d&apos;œuvre pendant les périodes critiques comme la récolte.
                </li><li className="advices error">
                    Manque de planification post-récolte :
                    L&apos;absence de stockage adéquat et de logistique peut entraîner des pertes importantes après la récolte.
                </li>  <li className="advices check">
                    Irrigation intelligente :
                    Adoptez des systèmes d&apos;irrigation connectés pour fournir la quantité exacte d&apos;eau nécessaire, en évitant le gaspillage.
                </li>  <li className="advices error">Sous-exploitation des données :
                    Collecter des données avec des outils numériques mais ne pas les analyser pour prendre des décisions éclairées.
                </li>
            </ul>



        </div>
    )
}

export default Advices

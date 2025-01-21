import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { FaDatabase } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart"
import "./datacharts.css"
import Footer from '../Footer/Footer'
import { TiWeatherPartlySunny } from "react-icons/ti";
import Navbar from '../Navbar/Navbar'
import {
    useState,
    useEffect
} from "react";
import WeatherCard from "../WeatherCard/WeatherCard";


const palette = ['lightcoral', 'slateblue'];


function Datacharts() {
   const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [weatherData, setWeatherData] = useState(null); 
    const apid = "e82defef6758576c367c041addec4c05";

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);
            },
            (error) => console.error("Error getting location:", error)
        );
    }, []);

    // Appeler l'API météo
    useEffect(() => {
        const fetchWeatherData = async () => {
            if (latitude !== null && longitude !== null) { // Vérifie que les coordonnées sont disponibles
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apid}&units=metric&lang=fr`
                    );
                    const data = await response.json();
                    setWeatherData(data); // Stocker les données reçues
                    console.log(data);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            }
        };
        fetchWeatherData();
    }, [latitude, longitude]);

    return (
        <>
            <Navbar />
            <h2><TiWeatherPartlySunny />Prévisions </h2>
           <div className="weather-div">
           <WeatherCard  weatherData={weatherData} plus={5}/>
           <WeatherCard  weatherData={weatherData} plus={0}/>
           <WeatherCard  weatherData={weatherData} plus={3}/>
           </div>
            <div id="dataCharts">
                <h2><FaDatabase /> Données </h2>
                <Stack direction="row" width="100%" textAlign="center" spacing={1} alignItems="center" justifyContent="space-evenly" flexWrap="wrap">
                    <Box flexGrow={1}>
                        <PieChart
                            colors={palette}
                            series={[
                                {
                                    arcLabel: (item) => `${item.value}%`,
                                    arcLabelMinAngle: 35,
                                    arcLabelRadius: "60%",
                                    data: [
                                        { id: 0, value: 40, label: 'volume max' },
                                        { id: 1, value: 60, label: 'eau contenue' },
                                    ],
                                },
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                    fontWeight: 'bold'
                                },
                            }}
                            width={400}
                            height={200}
                        />

                    </Box>
                    <p style={{  float: "right", maxWidth: "600px",textAlign:"left"}}>
                        Diagramme 1 : Répartition de l&apos;eau dans un réservoir <br />
                        Ce diagramme illustre la proportion d&apos;eau contenue par rapport au volume maximum d&apos;un réservoir.
                        On observe que 40 % du réservoir est encore disponible (en rouge), tandis que 60 % est occupé par l&apos;eau
                        contenue (en violet). Ce graphique peut être utilisé pour représenter des niveaux d&apos;eau ou des capacités dans différents contextes.

                    </p>

                    <Box flexGrow={1}>
                        <PieChart
                            series={[
                                {
                                    arcLabel: (item) => `${item.value}%`,
                                    arcLabelMinAngle: 35,
                                    arcLabelRadius: "60%",
                                    data: [
                                        { id: 0, value: 30, label: "Réservoir" },
                                        { id: 1, value: 60, label: "eau contenue" },
                                    ],
                                },
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                    fontWeight: "bold"
                                },
                            }}
                            width={400}
                            height={200}
                        />
                    </Box>
                    <p style={{ textAlign:"left", float: "right", maxWidth: "600px" }}>
                        Diagramme 2 : Comparaison entre le volume maximum et le contenu actuel <br />
                        Ce graphique circulaire montre une répartition similaire, où 30 % de la capacité maximale (en vert)
                        est utilisée, et 60 % du réservoir est encore disponible (en bleu). Ce type de visualisation est utile
                        pour évaluer l&apos;occupation d&apos;une capacité donnée.
                    </p>
                    <Box flexGrow={1}>
                        <PieChart
                            colors={["lightblue&apos", "cyan", "yellow", "red"]}
                            series={[
                                {
                                    arcLabel: (item) => `${item.value}%`,
                                    arcLabelMinAngle: 5,
                                    arcLabelRadius: "57%",
                                    data: [
                                        { id: 0, value: 15, label: "Potassium" },
                                        { id: 1, value: 35, label: "Calcium " },
                                        { id: 1, value: 33, label: "H20" },
                                        { id: 1, value: 17, label: "Minéraux" },
                                    ],
                                },
                            ]}
                            sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                    fontWeight: "bold",
                                },
                            }}
                            width={400}
                            height={200}
                        />
                    </Box>
                    <p style={{ textAlign: "justify", float: "right", maxWidth: "600px" }}>
                        Diagramme 3 : Composition chimique ou physique <br />
                        Le troisième diagramme représente la répartition des éléments principaux dans un système donné, tel qu&apos;un liquide ou une substance :
                        <ul>
                            <li>Potassium (K+) : 15 % (en gris clair),</li>
                            <li> Calcium (Ca2+) : 35 % (en bleu clair),</li>
                            <li>Eau (H₂O) : 33 % (en jaune),</li>
                            <li>Minéraux : 17 % (en rouge).</li>
                        </ul>
                        Ce graphique est idéal pour présenter la composition chimique ou les proportions de différents éléments dans une solution.
                    </p>
                </Stack>
                <Stack direction="column" width="100%" textAlign="center" spacing={2} alignItems="center" >
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],

                            },
                        ]}
                        width={500}
                        height={300}
                    />

                </Stack>
                <h3>   Courbe Graphique : Évolution du Nombre d&apos;Engrais Utilisés par Jour</h3>

                <p className="longText">
                    Cette courbe graphique illustre la variation quotidienne de la quantité d&apos;engrais utilisée sur une période donnée. L&apos;axe horizontal (X) représente les jours, tandis que l&apos;axe vertical (Y) indique la quantité d&apos;engrais utilisée (en kilogrammes, tonnes, ou toute autre unité pertinente).
                    Description des points clés :
                    Tendances générales : La courbe permet d&apos;observer les fluctuations dans l&apos;utilisation des engrais, mettant en évidence les périodes d&apos;utilisation intensive ou réduite.
                    Périodes de pic : Les pics sur la courbe reflètent des journées où une quantité importante d&apos;engrais a été appliquée, potentiellement liée à des besoins accrus pour la culture.
                    Périodes de creux : Les creux indiquent des jours de faible utilisation, ce qui pourrait être dû à des conditions climatiques défavorables ou à un cycle naturel de la culture.
                    Ce graphique est particulièrement utile pour analyser les pratiques agricoles, identifier des habitudes d&apos;application, et optimiser l&apos;utilisation des engrais en fonction des besoins des cultures.
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Datacharts

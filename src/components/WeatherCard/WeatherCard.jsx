import './weatherCard.css'
const WeatherCard = ({weatherData, plus}) => {
    return (
        <div id="weather">
       
            <div className="displayBox">
                <section className="heading">
                    <h1 id="citySearch">{weatherData?.name}</h1>
                    <h4 id="today">Monday, 06 September</h4>
                </section>
                <div className="container" id="weatherDescription">
                    <div className="row">
                            <h2 id="currentTemperature">{Math.floor((weatherData?.main?.temp)+(plus))}°C</h2>
                        <div className="col-6 temperature">
                            <ul className="detail">
                                <li id="humidity">Humidity: {((Math.random()*2)+(weatherData?.main?.humidity)).toPrecision(2)}%</li>
                                <li id="windSpeed">Wind Speed: { ((Math.random()*2)+(weatherData?.wind?.speed)).toPrecision(3)} km/H</li>
                                <li id="description">{weatherData?.weather[0]?.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
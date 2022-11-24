import { useState, useEffect } from "react"
import axios from "axios"



// console.log(latlonUrl)
// console.log(url)

export default function Weather() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState("")

    const APIKey = "51993ef1d38a647520fb607bad1fe4ae"

    // const latlonUrl = `https://api.openweathermap.org/geo/1.0/direct?q={cityName}&limit={limit}&appid={APIKey}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`
    const startUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${APIKey}`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation("")
        }
    }

    useEffect(() => {
        axios.get(startUrl).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }, [])


    return (
        <div className="Weather">

            <div className="search">
                <input 
                value={location}
                onChange={event => setLocation(event.target.value)}
                placeholder="Enter Location"
                onKeyPress={searchLocation}
                type="text" />
            </div>

            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{(data.main.temp - 273).toFixed()}°C</h1> : null}
                    </div>
                    <div className="description">
                        <p>{data.weather ? data.weather[0].description : null}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                    {data.main ? <p className="bold">{(data.main.feels_like - 273).toFixed(0)}°C</p> : <p className="bold">--°C</p>}
                        <p className="bar--words">feels like</p>
                    </div>
                    <div className="humidity">
                        <p className="bold">{data.main ? data.main.humidity : "--"}%</p>
                        <p className="bar--words">humidity</p>
                    </div>
                    <div className="wind">
                        <p className="bold">{data.wind ? data.wind.speed.toFixed( ) : "--"} mph</p>
                        <p className="bar--words">windspeed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// https://api.openweathermap.org/data/2.5/weather?q=keshod&appid=55aac46bf828fa0b448545e7b695f34f
import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard'

const Weather = () => {

    const [searchValue, setSearchValue] = useState("keshod")
    const [weatherInfo, setWeatherInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=55aac46bf828fa0b448545e7b695f34f&units=metric`
            const data = await fetch(url)
            const jsonData = await data.json()

            const {temp, humidity, pressure} = jsonData.main
            const {main: weatherMood} = jsonData.weather[0]
            const {name} = jsonData
            const {speed} = jsonData.wind
            const {country, sunset} = jsonData.sys

            const newWeatherInfo = {temp, humidity, pressure, weatherMood, name, speed, country, sunset}

            setWeatherInfo(newWeatherInfo)
            // console.log(temp)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])
    return (
        <>
            <div className="container my-5">
                <h2 className='text-center my-4'>☁️ Current Weather Data ☁️</h2>
                <div className="input-group mb-3">
                    <input type="search" className="form-control" placeholder="Enter City..." aria-label="Recipient's username" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} aria-describedby="button-addon2" />
                    <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={getWeatherInfo}>Search</button>
                </div>

                <WeatherCard weatherInfo={weatherInfo} />
            </div>
        </>
    )
}

export default Weather

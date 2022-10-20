import React from 'react'

const WeatherCard = ({weatherInfo}) => {

    const {temp, humidity, pressure, weatherMood, name, speed, country, sunset} = weatherInfo

    let sec = sunset
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <div className="text-center">
                <div className="row">
                    <div className="col border border-primary py-5">
                        Weather Icon
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="row">
                    <div className="col border border-primary py-4">
                        <p className='fs-1'>{temp}&#176;</p>
                    </div>
                    <div className="col border border-primary py-4">
                        <p className='fs-2'>{weatherMood}</p> 
                        <p>{name},{country}</p>
                    </div>
                    <div className="col border border-primary py-4">
                        1/8/2002
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="row">
                    <div className="col border border-primary py-4">
                        <p>{timeStr} PM</p>
                        <p>Sunset</p>
                    </div>
                    <div className="col border border-primary py-4">
                        <p>{humidity}</p>
                        <p>Humidity</p>
                    </div>
                    <div className="col border border-primary py-4">
                        <p>{pressure}</p>
                        <p>Pressure</p>
                    </div>
                    <div className="col border border-primary py-4">
                        <p>{speed}</p>
                        <p>Speed</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard

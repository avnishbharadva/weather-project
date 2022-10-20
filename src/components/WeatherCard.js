import React from 'react'

const WeatherCard = ({ weatherInfo }) => {

    const { temp, humidity, pressure, weatherMood, name, speed, country, sunset } = weatherInfo

    let sec = sunset
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    setInterval(() => {
        document.getElementById("time").innerHTML = new Date().toLocaleTimeString()
    },1000)

    return (
        <>
            <div className='weatherCard'>
                <div className="text-center">
                    <div className="row bg-light">
                        <div className="col py-5 fs-1">
                            <i class="fa-solid fa-sun"></i>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="row bg-info">
                        <div className="col py-4">
                            <p className='fs-1 pt-4'>{temp}&#176;</p>
                        </div>
                        <div className="col py-4">
                            <p className='fs-2'>{weatherMood}</p>
                            <p className='fs-5'>{name},{country}</p>
                        </div>
                        <div className="col py-4">
                            <p className='fs-5 pt-3'>{new Date().toDateString()}</p>
                            <p className='fs-5' id='time'></p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="row bg-light">
                        <div className="col py-4">
                            <p className='fs-5'>{timeStr}</p>
                            <p className='fs-5'>Sunset</p>
                        </div>
                        <div className="col py-4">
                            <p className='fs-5'>{humidity}</p>
                            <p className='fs-5'>Humidity</p>
                        </div>
                        <div className="col py-4">
                            <p className='fs-5'>{pressure}</p>
                            <p className='fs-5'>Pressure</p>
                        </div>
                        <div className="col py-4">
                            <p className='fs-5'>{speed}</p>
                            <p className='fs-5'>Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard

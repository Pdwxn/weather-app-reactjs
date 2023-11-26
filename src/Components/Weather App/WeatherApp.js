import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../Assets/weather-svgrepo-com.svg'

function WeatherApp() {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c0ba5cb47bd9767f9f19114ef057860a`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                // console.log(response.data)
            });
            setLocation('');
        };
    }

    return (
        <div className='app'>
            <div className='search'>
                <div className='top-bar'>
                    <img className='logo' src={Logo} alt='logo' />
                    <h1>WeatherApp</h1>
                </div>
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Search City'
                    type='text' />
            </div>
            <main className='container'>
                <header className='top'>
                    <section className='location'>
                        {data.sys ? <span>
                            <span>{data.name}, </span>
                            <span className='country'>{data.sys.country}</span></span> : null}
                    </section>
                    <section className='temp'>
                        {data.main ? <h1>{data.main.temp.toFixed()}°c</h1> : null}
                    </section>
                    <section className='description'>
                        {data.weather ? <h3>{data.weather[0].main}</h3> : null}
                    </section>
                </header>

                {data.name !== undefined &&
                    <footer className='bottom'>
                        <section className='feels'>
                            {data.main ? <h3 className='bold'>{data.main.feels_like.toFixed()}°c</h3> : null}
                            <h4>Feels like</h4>
                        </section>
                        <section className='humidity'>
                            {data.main ? <h3 className='bold'>{data.main.humidity}%</h3> : null}
                            <h4>Humidity</h4>
                        </section>
                        <section className='wind'>
                            {data.wind ? <h3 className='bold'>{data.wind.speed}Km/h</h3> : null}
                            <h4>Winds</h4>
                        </section>
                    </footer>
                }

            </main>
        </div>
    )
}

export default WeatherApp
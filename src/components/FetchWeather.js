import React, {useState, useEffect} from "react";
import keys from '../keys'

const WeatherFetch = () => {
    const [city, setCity] = useState('Innsbruck')
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('http://openweathermap.org/img/wn/04n@2x.png');

    useEffect(() => {
        fetch(`${keys.BASE_URL}weather?q=${city}&appid=${keys.API_KEY}&units=metric`
        ).then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFeelsLike(data.main.feels_like);
                setMainTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setIconID(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            }).catch(() => {
            alert('City name not Found')
        });
    }, [city])

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            setCity(e.target.value)
        }
    }

    return (
        <div className='app'>
            <input type="text" onKeyPress={handleSubmit}/>
            <h1>{city.charAt(0).toUpperCase() + city.slice(1)} </h1>
            <img src={iconID}/>
            <h1> Temperature: {mainTemp} &#x2103; </h1>
            <h2> Feels {feels_like} &#x2103;</h2>
            <h3> Looks {main}</h3>
            <h4> Description: {description.charAt(0).toUpperCase() + description.slice(1)}</h4>
        </div>
    )
}

export default WeatherFetch;

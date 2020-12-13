import React, {useState, useEffect} from "react";
import keys from '../keys'

function WeatherFetch() {
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [iconID, setIconID] = useState('');

    useEffect(() => {
        fetch(`${keys.BASE_URL}weather?q=Innsbruck&appid=${keys.API_KEY}&units=metric`
        ).then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFeelsLike(~~data.main.feels_like);
                setMainTemp(~~data.main.temp);
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setIconID(data.weather[0].icon);
            })
    }, [])

    return (
        <>
            <img src='http://openweathermap.org/img/wn/10d@2x.png'/>
            <h1> Temperature: {mainTemp} &#x2103; </h1>
            <h2> Feels {feels_like} &#x2103;</h2>
            <h3> Looks {main}</h3>
            <h4> Description: {description}</h4>
        </>
    )
}

export default WeatherFetch;

import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = 'b15b01f3757bc247bef7dd5c47e6ff4d';
    const BASE_URL= 'https://api.openweathermap.org/data/2.5/';

    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');

    useEffect(()=> {
        fetch(`${BASE_URL}weather?q=Karachi&appid=${key}`
        ).then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFeelsLike(data.main.feels_like);
                setMainTemp(data.main.temp);
                setDescription(data.weather[0].description);
                setMain(data.weather[0].main);
                setIconID(data.weather[0].icon);
            })
    },[])

    return (
        <>
            <img src='http://openweathermap.org/img/wn/10d@2x.png' />
            <h1> Temperature: {mainTemp} </h1>
            <h2> Feels {feels_like} </h2>
            <h3> Looks {main}</h3>
            <h4> Description: {description}</h4>
        </>
    )
}
export default WeatherFetch;

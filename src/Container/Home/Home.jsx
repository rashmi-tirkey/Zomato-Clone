import axios from "axios";
import React, { useEffect, useState } from "react";

//JSON
import getCity from '../../Constant/getCity.json'

//component
import Header from "../../Component/Header/Header";

//Container
import Features from "../Features/Features"
import Collection from "../../Container/Collection/Collection";
import PopulateCity from "../../Container/PopulateCity/PopulateCity"

const API_Endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_Key = `24e9113cf486b5a009b8c32ae1193491`

const Home = () => {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [cityName, setCityName] = useState('');
    const [areaName, setAreaName] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })

        let API_Endpoint_Details = `${API_Endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_Key}`

        axios.get(API_Endpoint_Details).then((response) => {
            setCityName(response.data.name);
        })
    }, [latitude, longitude])

    const handleChange = event => {
        const { value } = event.target;
        const selectedCityName = getCity.find(item => (item?.cityname === value))
        const relatedAreaName = selectedCityName.areaName.map((ar) => ar.name)
        setAreaName(relatedAreaName);
        setCityName(selectedCityName.cityname);
    }

    return (
        <div className="home-container">
            <Header handleChange={handleChange} cityName={cityName} />
            <Features />
            <Collection cityName={cityName} />
            <PopulateCity
                areaName={areaName}
                cityName={cityName}
            />
            {/* <span style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                <select onChange={handleChange} selected>
                    <option>{cityName}</option>
                    {getCity.map(option => (
                        <option value={option.cityname}>{option.cityname}</option>
                    ))}
                    <option >Recent Locations</option>
                    <option>{cityName}</option>
                </select>
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </span> */}
        </div>
    )
}

export default Home;

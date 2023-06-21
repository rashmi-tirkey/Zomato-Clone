import React from "react";

//JSON
import getCity from '../../Constant/getCity.json'

//CSS
import "./Header.scss";

const Header = ({ handleChange, cityName }) => {
    return (
        <header className="header-component">
            <div className="nav">
                <div>
                    <h4>Get the App</h4>
                </div>
                <ul className="nav-bar">

                    <li className="nav-bar-list">Add Restuarant</li>
                    <li className="nav-bar-list">Log in</li>
                    <li className="nav-bar-list">Sign up</li>

                </ul>
            </div>
            <div className="head">
                <img className="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" />
                <h3>Discover the best foods and drinks in Ranchi</h3>
                <div className="search">
                    <i className="fa fa-map-marker marker-icon" aria-hidden="true"></i>
                    {/* <p className="search-location">Hatia HEC Admin! Ranchi</p> */}
                    <select className="search-location" onChange={handleChange} selected>
                        <option>{cityName}</option>
                        {getCity.map(option => (
                            <option value={option.cityname}>{option.cityname}</option>
                        ))}
                    </select>
                    {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                    <i className="fa fa-search search-icon" aria-hidden="true"></i>
                    <input className="search-input" type="text" placeholder="Search for restaurant cuisine or a dish" />
                </div>
            </div>
            <div className="hero-section">
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />
            </div>
        </header>
    )
}

export default Header;
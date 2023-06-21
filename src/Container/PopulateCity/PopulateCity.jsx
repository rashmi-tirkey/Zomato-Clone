import React from "react";

//JSON
import getRestuarant from "../../Constant/getRestuarant.json"
//CSS
import "./PopulateCity.scss"

const PopulateCity = ({ areaName, cityName }) => {

    const lengthOfRestarant = getRestuarant.menu.restaurantList.length;
    // const aa = getRestuarant.menu.restaurantList.map((item) => item.area);

    console.log(lengthOfRestarant, "restaurantName");
    return (
        <div className="populate-container">
            <h1>
                Popular localities in and around <span>{cityName}</span>
            </h1>
            <div className="cityContainer">
                {areaName === "" ?
                    <div className="city">
                        <div className="cityLeft">
                            <h3>Hatia</h3>
                            <span>0 Places</span>
                        </div>
                        <div className="icon">
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                    : areaName.map((name) =>
                        <div className="city">
                            <div className="cityLeft">
                                <h3>{name}</h3>
                                <span>
                                    {lengthOfRestarant} Places</span>
                            </div>
                            <div className="icon">
                                <i className="fa fa-chevron-right"></i>
                            </div>
                        </div>
                    )}

                {/* <div className="city">
                    <div className="cityLeft">
                        <h3>Lalpur</h3>
                        <span>5 Places</span>
                    </div>
                    <div className="icon">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Jamshedpur</h3>
                        <span>10 Places</span>
                    </div>
                    <div className="icon">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div>

                <div className="city">
                    <div className="cityLeft">
                        <h3>Gaya</h3>
                        <span>12 Places</span>
                    </div>
                    <div className="icon">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PopulateCity;
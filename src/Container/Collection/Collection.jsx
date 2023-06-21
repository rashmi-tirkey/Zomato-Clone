import React from "react";

//CSS
import "./Collection.scss"

const Collection = ({ cityName }) => {
    return (
        <section className="collection-container">
            <div className="sec-2">
                <h2 className="heading">Collections</h2>
                <div className="collections-detail">
                    <h6 className="sub-heading">Explore curated lists of top restaurants, cafes, pubs, and bars in Ranchi, based on trends</h6>
                    <span className="right-text">All collections in {cityName} &nbsp; <i className="fa fa-caret-right"></i></span>
                </div>
            </div>
            <div className="sec-3">
                <div className="box">
                    <div className="white">
                        <p className="title">9 Unique Dining Experiences</p>
                        <span className="title">9 Places &nbsp; <i className="fa fa-caret-right"></i></span>
                    </div>
                    <img className="section-img" src="https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp" />
                </div>

                <div className="box">
                    <div className="white">
                        <p className="title">22 Best Insta-worthy Places</p>
                        <span className="title">22 Places &nbsp; <i className="fa fa-caret-right"></i></span>
                    </div>
                    <img className="section-img" src="https://b.zmtcdn.com/data/collections/16e3a8b363d4592a72b2c4f486c63fb8_1678096853.jpg?output-format=webp" />
                </div>
                <div className="box">
                    <div className="white">
                        <p className="title">26 Serene Rooftop Places</p>
                        <span className="title">26 Places &nbsp; <i className="fa fa-caret-right"></i></span>
                    </div>
                    <img className="section-img" src="https://b.zmtcdn.com/data/collections/16e3a8b363d4592a72b2c4f486c63fb8_1678096853.jpg?output-format=webp" />
                </div>
                <div className="box">
                    <div className="white">
                        <p className="title">21 Romantic Dining Places</p>
                        <span className="title">21 Places &nbsp; <i className="fa fa-caret-right"></i></span>
                    </div>
                    <img className="section-img" src="https://b.zmtcdn.com/data/collections/8dd5adbf91d78c8d11796c6b230539ef_1674568824.jpg?output-format=webp" />
                </div>
            </div>
        </section>
    )
}

export default Collection;
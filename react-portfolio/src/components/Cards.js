import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Here are a few projects I've worked on</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/Screen Shot 2020-12-05 at 7.32.00 PM.png"
                        text="Pokemon Team Builder"
                        label="Pokemon"
                        path="https://danielrezz.github.io/pokemon_teambuilder/" 
                        />
                        <CardItem 
                        src="images/Screen Shot 2020-12-05 at 7.32.38 PM.png"
                        text="Weather Dashboard"
                        label="Weather"
                        path="https://danielrezz.github.io/weather_dashboard/"
                        />
                        <CardItem 
                        src="images/screenshot.PNG"
                        text="QuizNode"
                        label="QuizNode"
                        path="https://calm-journey-11508.herokuapp.com/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

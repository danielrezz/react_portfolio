import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out some of these projects</h1>
            <div className="cards__container">
                <div class="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem 
                        src="images/Screen Shot 2020-12-05 at 7.32.00 PM.png"
                        text="Pokemon Team Builder"
                        label="Pokemon"
                        target="_blank"
                        href="https://danielrezz.github.io/weather_dashboard/" 
                        />
                        <CardItem 
                        src="images/Screen Shot 2020-12-05 at 7.32.38 PM.png"
                        text="Weather Dashboard"
                        label="Weather"
                        target="_blank"
                        href="https://danielrezz.github.io/weather_dashboard/"
                        />
                        <CardItem 
                        src="images/screenshot.PNG"
                        text="QuizNode"
                        label="QuizNode"
                        path="/work"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

import React from 'react';
import { Button } from './Button';
import './Hero.css';
import '../App.css';


function Hero() {
    return (
        <div className='hero-container'>
            <h1>Hi there</h1>
            <p>Welcome to my portfolio site!</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large' to='/work'>
                    Work
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Contact <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Hero

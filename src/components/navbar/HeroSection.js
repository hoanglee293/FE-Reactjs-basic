import React from 'react'
import { Button } from './button';
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/video-1.mp4" autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you watting for?</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle='btn--outline' buttonSize="btn-large">GET STARTED</Button>
             <Button className="btns" buttonStyle='btn--primary' buttonSize="btn-large">WATCH TRAILER </Button>
        </div>
    </div>
  )
}

export default HeroSection
import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark arrow.jpg'  

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure beter services for a beter world</h1>
            <p>In the previous example with Joe the Newbie Trader, his maximum risk would have
been $9000. His position would be automatically closed out once his losses hit
$9000</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

        </div>
      
    </div>
  )
}

export default Hero

import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play icon.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="about-left">
            <h3>ABOUT OUR WORK</h3>
            <h2>Nurturing Better And Quality Products</h2>
            <p>To develop a robust system that allows users to apply an additional layer of authentication (password, pattern, PIN, or biometric) to individual applications or groups of applications on a single device, separate from the device's primary screen lock. </p>
            <p>This enables enhanced privacy and security, particularly in scenarios where the device's main unlock mechanism might be compromised or intentionally shared.</p>
        </div>
      
    </div>
  )
}

export default About

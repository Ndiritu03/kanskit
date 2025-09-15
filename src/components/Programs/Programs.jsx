import React from 'react'
import './programs.css'
import program_1 from '../../assets/Programs-1.jpg'
import program_2 from '../../assets/Programs-2.jpg'
import program_3 from '../../assets/Programs-3.jpg'
import program_icon_1 from '../../assets/program icon 1.jpg'
import program_icon_2 from '../../assets/program icon 2.jpg'
import program_icon_3 from '../../assets/program icon 3.jpg'
const programs = () => {
  return (
    <div className='programs'>
      <div className="header">
        {/* <h1>rrrrrrrrrrr</h1> */}
      </div>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Screens and Soundsystems</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Master your POWER</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>ALL repairs for you</p>
        </div>
      </div>
    </div>
  )
}

export default programs

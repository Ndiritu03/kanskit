import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.jpg'
import back_icon from '../../assets/back-icon.jpg'
import usser_1 from '../../assets/usser-1.png'
import usser_2 from '../../assets/usser-2.jpg'
import usser_3 from '../../assets/usser-3.jpg'
import usser_4 from '../../assets/usser-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="usser-info">
                        <img src={usser_1} alt="" />
                        <div>
                            <h3>wiliam samuel</h3>
                            <span>Nakuru, Kenya</span>
                        </div>
                    </div>
                    <p>Choosing to buy Now I’m not a professional lawyer, but I’m pretty sure that it takes more than one
                    book to become one. More likely, lawyers have read and studied a wide range of
                    books, journals and case studies in order to fine-tune their practice. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="usser-info">
                        <img src={usser_2} alt="" />
                        <div>
                            <h3>wiliam samuel</h3>
                            <span>Nakuru, Kenya</span>
                        </div>
                    </div>
                    <p>Choosing to buy Now I’m not a professional lawyer, but I’m pretty sure that it takes more than one
                    book to become one. More likely, lawyers have read and studied a wide range of
                    books, journals and case studies in order to fine-tune their practice. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="usser-info">
                        <img src={usser_3} alt="" />
                        <div>
                            <h3>wiliam samuel</h3>
                            <span>Nakuru, Kenya</span>
                        </div>
                    </div>
                    <p>Choosing to buy Now I’m not a professional lawyer, but I’m pretty sure that it takes more than one
                    book to become one. More likely, lawyers have read and studied a wide range of
                    books, journals and case studies in order to fine-tune their practice. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="usser-info">
                        <img src={usser_4} alt="" />
                        <div>
                            <h3>wiliam samuel</h3>
                            <span>Nakuru, Kenya</span>
                        </div>
                    </div>
                    <p>Choosing to buy Now I’m not a professional lawyer, but I’m pretty sure that it takes more than one
                    book to become one. More likely, lawyers have read and studied a wide range of
                    books, journals and case studies in order to fine-tune their practice. </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials

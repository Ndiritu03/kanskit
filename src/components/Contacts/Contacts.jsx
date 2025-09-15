import React from 'react'
import './Contacts.css'
import msg_icon from '../../assets/msg-icon.jpg'
import mail_icon from '../../assets/mail-icon.jpg'
import phone_icon from '../../assets/phone-icon.jpg'
import location_icon from '../../assets/location-icon.jpg'
import white_arrow from '../../assets/white arrow.jpg'
const Contacts = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from our field or find our contact infomation below, Your feedback , question  and suggestions are importance to us as we provide services</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@Kanskits.com</li>
            <li><img src={phone_icon} alt="" />+254792390919</li>
            <li><img src={location_icon} alt="" />10129 Karatina University <br />SM 10129, Nairobi Kenya</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile  Number' required />
            <label>Write your message here</label>
            {/* <textarea name="" id=""></textarea> */}
            {/* <textarea name="" id=""></textarea> */}
            <textarea name="message"  rows="6"placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contacts

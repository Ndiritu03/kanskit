
import React, { useEffect, useState }  from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`} >
    <img src={logo} alt=""className='logo' />
    <ul>
        <li>Home</li>
        <li>program</li>
        <li>Goods</li>
        <li>Access</li>
        <li><button className='btn'>contact us</button></li>
    </ul>
    </nav>
  )
}

export default Navbar

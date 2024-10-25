import './Header.css'

import React from 'react'
import { FaSearch , FaShoppingCart,FaUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
        <div className="header-top">
          <ul className="header-top-ul">
            <li><a  href="https://t.me/Ivanynaaa">Група TG</a></li>
            <li><a  href="https://www.instagram.com/ivanyna_5/">Наш Instagram <span className="header-link-item">|</span></a></li>
            <li><a  href="#">Viber +380987654321 <span className="header-link-item">|</span></a></li>
            <li><a  href="mailto:ivanyna.bohdan@student.uzhnu.edu.ua">ivanyna.bohdan@student.uzhnu.edu.ua <span className="header-link-item">|</span></a></li>
          </ul>
        </div>
        <div className="header-main">
            <span ><Link className='logo' to='/Mainmenu'>Console Rent</Link></span>
            <span>
            <input className="search" type="text" placeholder="Пошук" />
            <button type="submit" className="search-button"><FaSearch /></button>
            </span>
            <ul className='nav'>
                <li><Link className='nav-item' to='/profile'><FaUser /></Link></li>
                <li className='nav-item'><FaShoppingCart /></li>
            </ul>
        </div>
        
    </header>       
  )
}

export default Header;
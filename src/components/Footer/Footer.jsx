import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className='footer-items'>
            <div className='footer-info'>
              <h3>Інформація:</h3>
              <p><Link className='links' to='/contacts'>Контаки</Link></p>
              <p><Link className='links' to='/aboutus'>Про нас</Link></p>
              <p><Link className='links' to='/rules'>Правила</Link></p>
            </div>
            
            <div className='footer-info'>
              <h3>Політика:</h3>
              <p><Link className='links' to='/delivery'>Доставка</Link></p>
              <p><Link className='links' to='/payment'>Оплата</Link></p>
              <p><Link className='links' to='/refund'>Повернення коштів</Link></p>
            </div>

            <ul>
              <li>
                <img src="./img/mastercard.png" alt="mastercard.png" />
              </li>
              <li>
                <img src="./img/visa.png" alt="visa.png" />
            </li>
            </ul>
        </div>


        <div className='copyright'>
          Всі права захищені &copy;
        </div>
        
    </footer>
  )
}

export default Footer;
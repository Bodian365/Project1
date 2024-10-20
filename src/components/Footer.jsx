import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='footer-items'>
            <div className='footer-info'>
              <h3>Інформація:</h3>
              <p>Контакти</p>
              <p>Про нас</p>
              <p>Правила</p>
            </div>
            
            <div className='footer-info'>
              <h3>Політика:</h3>
              <p>Доставка</p>
              <p>Оплата</p>
              <p>Повернення коштів</p>
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
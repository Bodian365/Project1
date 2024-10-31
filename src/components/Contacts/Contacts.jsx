import './Contacts.css'

import React from 'react'

export default function Contacts() {
  return (
    <div>
      <h1>Контакти</h1>
      <div className='contacts-wrapper'>
        <p className='contacts-items'>Телефон: <br /> <a href='#'>+380987654321</a></p>
                      
        <p className='contacts-items'>Ел. адреса: <br/> <a href="mailto:ivanyna.bohdan@student.uzhnu.edu.ua">ivanyna.bohdan@student.uzhnu.edu.ua</a></p>

        <p className='contacts-items'>Режим роботи: <br /> пн-нд: 8:00-22:00</p>
        
        <p className='contacts-items'>Адрес: <br /> Пл. Шандора Петефі 17, Ужгород</p>
        
        <div className='map'></div>
        <br/>
        <a className='contacts-items' href='https://maps.app.goo.gl/PEaYvnycjaPBAPgE8'>Відкрити в Google Maps</a>
      </div>
    </div>
  )
}


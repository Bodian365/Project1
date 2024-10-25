import './Register.css'

import React from 'react'

export default function Register() {
  return (
    <div>
      <h1>Реєстрація</h1>
      <div className='register-wrapper'>
        
        <form action=''>
          <p>Ім&apos;я та прізвище<span className='register-items'>*</span></p>
          <div className='input-box'>
            <input className='register-input' type='text' required />
          </div>
          <p>Телефон<span className='register-items'>*</span></p>
          <div className='input-box'>
            <input className='register-input' type='text' required />
          </div>
          <p>Email<span className='register-items'>*</span></p>
          <div className='input-box'>
            <input className='register-input' type='text' required />
          </div>
          <p>Пароль<span className='register-items'>*</span></p>
          <div className='input-box'>
            <input className='register-input' type='text' required />
          </div>
          <div className="button-div">
            <button type='submit' className='button'>Зареєструватися</button>
          </div>
          
          </form>
        </div>
    </div>
  )
}

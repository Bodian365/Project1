import './Profile.css'

import React from 'react'
import { Link } from 'react-router-dom';



function Profile() {
  return (
    <div>
      <h1>Авторизація</h1>
      <div className='profile-wrapper'>
        
        <form action=''>
          <p>Телефон або email<span className='login-items'>*</span></p>
          <div className='input-box'>
            <input className='login-input' type='text' required />
          </div>
          <p>Пароль<span className='login-items'>*</span></p>
          <div className='input-box'>
            <input className='login-input' type='text' required />
          </div>
          <div className="forgot-password">
            <a href='#'>Забули пароль?</a>
          </div>
          <div className="button-div">
            <button type='submit' className='button'>Ввійти</button>
          </div>
          <div className="register">
            <p>Ще немає акаунта? <Link className='links' to='/register'>Зареєструватися</Link></p>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Profile;
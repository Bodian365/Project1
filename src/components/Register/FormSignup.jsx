/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FormSignup = ({ handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <p>
                Email<span className="login-items">*</span>
            </p>
            <div className="input-box">
                <input
                    className="register-input"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <p>
                Пароль<span className="login-items">*</span>
            </p>
            <div className="input-box">
                <input
                    className="register-input"
                    type="password"
                    value={pass}
                    onChange={(event) => setPass(event.target.value)}
                    required
                />
            </div>

            <div className="button-div">
                <button type="submit" onClick={() => handleClick(email, pass)} className="button">
                    Зареєструватися
                </button>
            </div>
        </div>
    );
};

export { FormSignup };

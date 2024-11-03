import './Register.css';

import React from 'react';

import { SignUp } from './SignUp';

export default function Register() {
    return (
        <div>
            <h1>Реєстрація</h1>
            <div className="register-wrapper">
                <SignUp />
            </div>
        </div>
    );
}

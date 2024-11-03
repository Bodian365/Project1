import './Profile.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { LogIn } from './LogIn';

function Profile() {
    return (
        <div>
            <h1>Авторизація</h1>
            <div className="profile-wrapper">
                <LogIn />
                <div className="register">
                    <p>
                        Ще немає акаунта?
                        <Link className="links" to="/register">
                            Зареєструватися
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;

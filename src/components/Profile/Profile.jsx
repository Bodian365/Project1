/* eslint-disable unicorn/no-null */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';

const Profile = () => {
    const { isAuth, email } = useAuth();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/loginpage');
        }
    }, [isAuth, navigate]);

    return isAuth ? (
        <div className="profile-div">
            <h6 className="profile-title">Вітаю!</h6>
            <p className="profile-p">Це ваша сторінка профілю</p>
            <div className="profile-img"></div>
            <button className="profile-button" onClick={() => dispatch(removeUser())}>
                Вийти з акаунта {email}
            </button>
        </div>
    ) : null;
};

export default Profile;

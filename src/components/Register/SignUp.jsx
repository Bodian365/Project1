/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../../store/slices/userSlice';
import { FormSignup } from './FormSignup';

const SignUp = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }),
                );
                navigate('/profile');
            })
            .catch(console.error);
    };

    return <FormSignup handleClick={handleRegister} />;
};

export { SignUp };

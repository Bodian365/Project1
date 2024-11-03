/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable no-unused-vars */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../../store/slices/userSlice';
import { FormLogIn } from './FormLogIn';

const LogIn = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
            .catch(() => alert('Обліковий запис не знайдено! Спробуйте ще раз або зареєструйтесь.'));
    };

    return <FormLogIn handleClick={handleLogin} />;
};

export { LogIn };

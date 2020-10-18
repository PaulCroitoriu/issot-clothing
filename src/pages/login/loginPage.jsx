import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '..//../components/signUp/signUp';

import './loginPage.scss';


const LoginPage = () => (
    <div className="login-page">
        <SignIn />
        <SignUp />
    </div>
)


export default LoginPage;
import React from 'react';
import LoginComponent from '../../src/components/DesignComponent';

const Login = props => {
  return (
    <LoginComponent
      data={{
        title: 'Login',
        desc: 'We are happy to see you again. Login to continue',
        inputTextMail: 'EMAIL ID',
        inputTextPassword: 'PASSWORD',
        btnText: 'Login',
        navpathforbtn: '',
        navText: 'Forgot Password?',
        navpathforText: 'ForgotPassword',
      }}
      {...props}
    />
  );
};

export default Login;

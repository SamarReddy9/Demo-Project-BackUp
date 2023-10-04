import React from 'react';
import LoginComponent from './DesignComponent';

export default function LoginScreen(props) {
  return (
    <>
      <LoginComponent
        data={{
          title: 'Login',
          desc: 'We are happy to see you again. Login to continue',
          firstInputText: 'EMAIL ID',
          secondInputText: 'PASSWORD',
          btnText: 'Login',
          navPath: '',
          bottomTagText: 'Forgot Password?',
          NavTagTwo: 'ForgotPasswordScreen',
        }}
        {...props}
      />
    </>
  );
}

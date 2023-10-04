import React from 'react';
import DesignComponent from './DesignComponent';

const ForgotPasswordScreen = props => {
  return (
    <>
      <DesignComponent
        data={{
          title: 'Forgot password?',
          desc: 'Dont worry! It Happens. Please enter the email address associated with your accoount',
          firstInputText: 'Email ID',
          btnText: 'Get OTP',
          navPath: 'EnterOTPScreen', 
          HidePasswordFild: true,
        }}
        {...props}
      />
    </>
  );
};

export default ForgotPasswordScreen;

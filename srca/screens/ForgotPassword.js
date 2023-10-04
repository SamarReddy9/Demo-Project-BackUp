import React from 'react';
import DesignComponent from '../../src/components/DesignComponent';

const ForgotPassword = props => {
  return (
    <DesignComponent
      data={{
        title: 'Forgot password?',
        desc: 'Dont worry! It Happens. Please enter the email address associated with your accoount',
        inputTextMail: 'Email ID',
        btnText: 'Get OTP',
        navPath: 'EnterOTPScreen',
        navpathforbtn: 'EnterOTP',
      }}
      {...props}
    />
  );
};

export default ForgotPassword;

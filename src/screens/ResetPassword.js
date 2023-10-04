import React from 'react';
import DesignComponent from '../../src/components/DesignComponent';

const ResetPassword = props => {
  return (
    <DesignComponent
      data={{
        title: 'Reset password',
        inputTextMail: 'NEW PASSWORD',
        inputTextPassword: 'CONFIRM PASSWORD',
        btnText: 'Confirm',
        navpathforbtn: 'Login',
      }}
      {...props}
    />
  );
};

export default ResetPassword;

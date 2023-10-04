import React from 'react';
import DesignComponent from '../../src/components/DesignComponent';

const SetNewPassword = props => {
  return (
    <DesignComponent
      data={{
        title: 'Set new password',
        desc: 'Set your own password to Login',
        inputTextMail: 'NEW PASSWORD',
        inputTextPassword: 'CONFIRM PASSWORD',
        btnText: 'Confirm',
        navpathforbtn: 'Login',
      }}
      {...props}
    />
  );
};

export default SetNewPassword;

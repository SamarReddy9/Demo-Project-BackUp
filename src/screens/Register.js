import React from 'react';
import DesignComponent from '../../src/components/DesignComponent';

const Register = props => {
  return (
    <>
      <DesignComponent
        data={{
          title: 'Register',
          desc: 'Register your account with User ID & Password provided by admin',
          inputTextMail: 'EMAIL ID',
          inputTextPassword: 'PASSWORD',
          btnText: 'Set new password',
          navpathforbtn: 'SetNewPassword',
        }}
        {...props}
      />
    </>
  );
};

export default Register;

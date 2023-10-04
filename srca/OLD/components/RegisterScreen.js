import React from 'react';
import DesignComponent from './DesignComponent';

const RegisterScreen = props => {
  return (
    <>
      <DesignComponent
        data={{
          title: 'Register',
          desc: 'Register your account with User ID & Password provided by admin',
          firstInputText: 'EMAIL ID',
          secondInputText: 'PASSWORD',
          btnText: 'Set new password',
          navPath: 'SetNewPasswordScreen',
        
        }}
        {...props}
      />
    </>
  );
};

export default RegisterScreen;

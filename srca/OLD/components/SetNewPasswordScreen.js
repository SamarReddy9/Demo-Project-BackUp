import React from 'react';
import DesignComponent from './DesignComponent';

const SetNewPasswordScreen = props => {
  return (
    <>
      <DesignComponent
        data={{
          title: 'Set new password',
          desc: 'Set your own password to Login',
          firstInputText: 'NEW PASSWORD',
          secondInputText: 'CONFIRM PASSWORD',
          btnText: 'Confirm',
          navPath: 'LoginScreen', 
          Star: true,
          EyeIcons: true,
        }}
        {...props}
      />
    </>
  );
};

export default SetNewPasswordScreen;

import React from 'react';
import DesignComponent from './DesignComponent';

const ResetPasswordScreen = props => {
  return (
    <>
      <DesignComponent
        data={{
          title: 'Reset password',
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

export default ResetPasswordScreen;

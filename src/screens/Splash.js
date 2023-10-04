import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import RegisterPicture from '../assets/svg/RegisterPicture.svg';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../config/Styles';

const Splash = ({navigation}) => {
  return (
    <TouchableOpacity
      style={Styles.designComponentContainer}
      onPress={() => navigation.navigate('Register')}>
      <RegisterPicture width={hp('20%')} height={hp('20%')} />
      <Text style={Styles.SplashBottomTitleText}>Leadman</Text>
    </TouchableOpacity>
  );
};

export default Splash;

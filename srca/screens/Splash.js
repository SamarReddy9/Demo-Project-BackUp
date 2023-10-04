import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import RegisterPicture from '../assets/svg/RegisterPicture.svg';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.splashContainer}
      onPress={() => navigation.navigate('Register')}>
      <RegisterPicture width={hp('25%')} height={hp('25%')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;

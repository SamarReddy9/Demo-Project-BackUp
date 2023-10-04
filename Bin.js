import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import SetNewPasswordImage from './SetNewPassword.svg';
import LogoUnderIcon from './LogoUnderIcon';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeLowVision} from '@fortawesome/free-solid-svg-icons';

const SetNewPasswordScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={Styles.Container}>
      <View style={Styles.ImageCss}>
        <SetNewPasswordImage />
      </View>
      <View style={Styles.StarImages}>
        <LogoUnderIcon style={Styles.svg} />
        <LogoUnderIcon style={Styles.svg} />
        <LogoUnderIcon style={Styles.svg} />
        <LogoUnderIcon style={Styles.svg} />
      </View>
      <View>
        <Text style={Styles.SetNewText}>Set new password</Text>
      </View>
      <View>
        <Text style={Styles.SetYourOwnText}>
          Set your own password to Login
        </Text>
      </View>

      <View style={Styles.PasswordContainer}>
        <View>
          <Text style={Styles.NewPasswordText}>NEW PASSWORD</Text>
        </View>
        <View style={Styles.ShowPasswordContainer}>
          <TextInput
            style={Styles.ShowPasswordInputOne}
            placeholder="**********"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeLowVision} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <Text style={Styles.ConformPasswordText}>CONFIRM PASSWORD</Text>
        </View>

        <View style={Styles.ShowPasswordContainer}>
          <TextInput
            style={Styles.ShowPasswordInputTwo}
            placeholder="**********"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeLowVision} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.OpacityGroup}>
        <TouchableOpacity
          style={Styles.ButtonTouchOpacityOuter}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={Styles.TouchOpacitySetNewPassword}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetNewPasswordScreen;

const Styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,
  },

  ImageCss: {
    paddingBottom: 5,
  },

  StarImages: {
    flexDirection: 'row',
    paddingLeft: 10,
  },

  SetNewText: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 'bold',
    color: '#00223E',
  },

  SetYourOwnText: {
    marginTop: 5,
    fontFamily: 'Plus Jakarta Sans',
    textAlign: 'center',
    fontSize: 12,
    width: 263,
    height: 15,
  },

  PasswordContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 55,
  },

  NewPasswordText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    color: '#00C7FE',
    paddingBottom: 5,
    paddingLeft: 3,
  },
  ShowPasswordContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  ShowPasswordInputOne: {
    width: 260,
    justifyContent: 'center',
    alignContent: 'center',
  },

  ConformPasswordText: {
    marginTop: 5,
    paddingRight: 260,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    color: '#00C7FE',
    paddingBottom: 5,
  },
  ShowPasswordInputTwo: {
    width: 260,
    justifyContent: 'center',
    alignContent: 'center',
  },

  OpacityGroup: {
    paddingRight: 10,
  },

  ButtonTouchOpacityOuter: {
    width: 300,
    height: 50,
    backgroundColor: '#00223E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TouchOpacitySetNewPassword: {
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
  },
});

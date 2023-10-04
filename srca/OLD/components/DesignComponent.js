import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeLowVision} from '@fortawesome/free-solid-svg-icons';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import RegisterImage from './RegisterImage.svg';
import SetNewPasswordImage from './SetNewPasswordImage.svg';
import SetNewPasswordStarImage from './SetNewPasswordStarImage.svg';
import ForgotPasswordImage from './ForgotPasswordImage.svg';

const DesignComponent = props => {
  const {navigation, data, route} = props;
  // console.log(route.name);
  const [showPassword, setShowPassword] = useState(true);
  const [conformPassword, setConformPassword] = useState(true);
  const [ShowImage, setShowImage] = useState(data.Star);
  const [ForgetPassword, setForgetPassword] = useState(data.HidePasswordFild);
  const [hideEyeIcons, sethideEyeIcons] = useState(data.EyeIcons);

  let ImageHandilar;

  switch (route.name) {
    case 'SetNewPasswordScreen':
      ImageHandilar = SetNewPasswordImage;
      break;
    case 'ResetPasswordScreen':
      ImageHandilar = SetNewPasswordImage;
      break;
    case 'ForgotPasswordScreen':
      ImageHandilar = ForgotPasswordImage;
      break;
    default:
      ImageHandilar = RegisterImage;
      break;
  }

  return (
    <View style={Styles.Container}>
      <View>
        <ImageHandilar />
      </View>
      <View style={Styles.StartSymbolMain}>
        {ShowImage ? (
          <>
            <SetNewPasswordStarImage style={Styles.Start} />
            <SetNewPasswordStarImage style={Styles.Start} />
            <SetNewPasswordStarImage style={Styles.Start} />
            <SetNewPasswordStarImage style={Styles.Start} />
          </>
        ) : null}
      </View>
      <View>
        <Text style={Styles.RegisterCss}>{data.title}</Text>
      </View>
      <View>
        <Text style={Styles.RegesterDetailsText} numberOfLines={2}>
          {data.desc}
        </Text>
      </View>

      <View style={Styles.RegisterGroup}>
        <View>
          <Text style={Styles.MailText}>{data.firstInputText}</Text>
        </View>
        <View style={Styles.ShowEmailMain}>
          <TextInput
            style={Styles.InputFildMail}
            secureTextEntry={conformPassword}
          />
          {hideEyeIcons ? (
            <TouchableOpacity
              onPress={() => setConformPassword(!conformPassword)}>
              {conformPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeLowVision} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
        <View>
          <Text style={Styles.PasswordText}>{data.secondInputText}</Text>
        </View>

        <View>
          {!ForgetPassword ? (
            <View style={Styles.ShowPasswordMain}>
              <TextInput
                style={Styles.ShowPasswordInput}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeLowVision} />
                )}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>

      <View style={Styles.OpacityGroup}>
        <TouchableOpacity
          style={Styles.ButtonTouchOpacity}
          onPress={() => {
            navigation.navigate(data.navPath);
          }}>
          <Text style={Styles.TouchOpacityInnerText}>{data.btnText}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(data.Nav);
          }}>
          <Text style={Styles.BottomTagStyle}>{data.bottomTagText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DesignComponent;

const Styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,
  },
  StartSymbolMain: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Start: {
    margin: 2,
  },

  RegisterCss: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: 'bold',
    color: '#00223e',
  },
  RegesterDetailsText: {
    marginTop: 5,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    width: 263,
    height: 30,
    textAlign: 'center',
  },

  RegisterGroup: {
    paddingTop: 25,
    paddingBottom: 30,
    paddingRight: 10,
  },

  MailText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    color: '#00C7FE',
    paddingBottom: 5,
  },
  ShowEmailMain: {
    borderWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
  },
  InputFildMail: {
    width: 270,
    paddingLeft: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  PasswordText: {
    marginTop: 10,
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    color: '#00C7FE',
    paddingBottom: 5,
  },
  ShowPasswordMain: {
    borderWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 10,
  },
  ShowPasswordInput: {
    width: 270,
    paddingLeft: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  OpacityGroup: {
    paddingRight: 10,
  },

  ButtonTouchOpacity: {
    width: 300,
    height: 50,
    backgroundColor: '#00223E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TouchOpacityInnerText: {
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
  },
  BottomTagStyle: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    color: '#00C7FE',
    paddingTop: 30,
  },
});

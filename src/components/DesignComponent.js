import React, {useState, memo} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import RegisterPicture from '../assets/svg/RegisterPicture.svg';
import SetNewPasswordPicture from '../assets/svg/SetNewPasswordPicture.svg';
import ForgotPasswordPicture from '../assets/svg/ForgotPasswordPicture.svg';
import Styles from '../config/Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import EyeHide from '../assets/svg/EyeHide.svg';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const DesignComponent = props => {
  const {route, navigation, data} = props;
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState(true);

  let Picture;
  let pictureHeight, pictureWidth;

  switch (route.name) {
    case 'Register':
      Picture = RegisterPicture;
      pictureHeight = hp('1%');
      pictureWidth = hp('1%');
      break;

    case 'SetNewPassword':
      Picture = SetNewPasswordPicture;
      break;

    case 'Login':
      Picture = RegisterPicture;
      break;

    case 'ForgotPassword':
      Picture = ForgotPasswordPicture;
      break;

    case 'ResetPassword':
      Picture = SetNewPasswordPicture;
      break;
  }
  return (
    <View style={Styles.designComponentContainer}>
      <Picture
        style={{
          height: pictureHeight,
          width: pictureWidth,
        }}
      />

      <Text style={Styles.designComponentTitleText}>{data.title}</Text>

      {route.name == 'Register' ? (
        <Text style={Styles.designComponentDescriptionText}>{data.desc}</Text>
      ) : null}
      {route.name == 'SetNewPassword' ? (
        <Text style={Styles.designComponentDescriptionText}>{data.desc}</Text>
      ) : null}
      {route.name == 'Login' || route.name == 'ForgotPassword' ? (
        <Text
          style={[Styles.designComponentDescriptionText, {width: wp('50%')}]}>
          {data.desc}
        </Text>
      ) : null}

      {route.name == 'ResetPassword' ? (
        <Text style={{marginBottom: hp('-1%')}}>{data.desc}</Text>
      ) : null}

      <View>
        <Text style={Styles.designComponentInputText}>
          {data.inputTextMail}
        </Text>

        {route.name == 'SetNewPassword' || route.name == 'ResetPassword' ? (
          <>
            <View style={Styles.designComponentInputFieldContainer}>
              <TextInput
                style={Styles.designComponentInputField}
                secureTextEntry={showPasswordIcon}
              />
              <TouchableOpacity
                onPress={() => setShowPasswordIcon(!showPasswordIcon)}>
                {showPasswordIcon ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <EyeHide width={hp('2.5%')} height={hp('3%')} />
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View style={Styles.designComponentInputFieldContainer}>
            <TextInput style={Styles.designComponentInputField} />
          </View>
        )}

        {route.name == 'ForgotPassword' ? (
          <Text>{data.inputTextPassword}</Text>
        ) : (
          <Text
            style={[Styles.designComponentInputText, {marginTop: hp('1.5%')}]}>
            {data.inputTextPassword}
          </Text>
        )}

        {route.name == 'ForgotPassword' ? null : (
          <View style={Styles.designComponentInputFieldContainer}>
            <TextInput
              style={Styles.designComponentInputField}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <EyeHide width={hp('2.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        {route.name == 'ForgotPassword' ? (
          <View style={{padding: hp('0.3%')}}>
            <TouchableOpacity
              style={Styles.designComponentNavBtn}
              onPress={() => navigation.navigate(data.navpathforbtn)}>
              <Text style={Styles.designComponentNavText}>{data.btnText}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{padding: hp('3.5%')}}>
            <TouchableOpacity
              style={Styles.designComponentNavBtn}
              onPress={() => navigation.navigate(data.navpathforbtn)}>
              <Text style={Styles.designComponentNavText}>{data.btnText}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(data.navpathforText)}>
        <Text style={Styles.designComponentForgetPasswordNavText}>
          {data.navText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(DesignComponent);

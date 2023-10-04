import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import EnterOTPPicture from '../assets/svg/EnterOTPPicture.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const EnterOTP = ({navigation}) => {
  return (
    <View style={Styles.designComponentContainer}>
      <EnterOTPPicture height={hp('12%')} width={wp('30%')} />
      <Text style={Styles.designComponentTitleText}>Enter OTP</Text>

      <Text
        style={[
          Styles.designComponentDescriptionText,
          {marginBottom: hp('0%'), width: wp('55%')},
        ]}>
        4 digit verification code has been sent on your registered email address
      </Text>
      <View style={Styles.OTPTextTimerAndInputFieldContainer}>
        <View style={Styles.OTPTimerContainer}>
          <TextInput style={Styles.OTPTimerInputText} value="01:16" />
        </View>

        <View style={Styles.EnterOTPInputFieldContainer}>
          <TextInput
            style={Styles.EnterOTPInput}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={Styles.EnterOTPInput}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={Styles.EnterOTPInput}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={Styles.EnterOTPInput}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[Styles.designComponentNavBtn, {marginTop: hp('2%')}]}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={Styles.designComponentNavText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={[
            Styles.designComponentForgetPasswordNavText,
            {marginTop: hp('3%')},
          ]}>
          Didn't receive otp? Resend again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterOTP;

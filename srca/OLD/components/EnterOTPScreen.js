import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import EnterOTPImage from './EnterOTPImage.svg';

const EnterOTPScreen = ({navigation}) => {
  return (
    <View style={Styles.Container}>
      <View>
        <EnterOTPImage />
      </View>
      <View>
        <Text style={Styles.RegisterCss}>Enter OTP </Text>
      </View>
      <View>
        <Text style={Styles.RegesterDetailsText} numberOfLines={2}>
          4 digit verification code has been sent on your registered email
          address
        </Text>
      </View>

      <View style={Styles.RegisterGroup}>
        <View>
          <Text style={Styles.MailText}> </Text>
        </View>
        <View style={Styles.TimerContainer}>
          <TextInput style={Styles.TimerInput} value="01:16" />
        </View>
        <View>
          <Text style={Styles.PasswordText}> </Text>
        </View>

        <View style={Styles.EnterOTPOuter}>
          <TextInput style={Styles.EnterOTPInner} />
          <TextInput style={Styles.EnterOTPInner} />
          <TextInput style={Styles.EnterOTPInner} />
          <TextInput style={Styles.EnterOTPInner} />
        </View>
      </View>

      <View style={Styles.OpacityGroup}>
        <TouchableOpacity
          style={Styles.ButtonTouchOpacity}
          onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={Styles.TouchOpacityInnerText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={Styles.BottomTagStyle}>
            Didn't receive otp? Resend again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterOTPScreen;

const Styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,
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
    paddingBottom: 30,
    paddingRight: 10,
  },

  TimerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  TimerInput: {
    width: 81,
    height: 71,
    fontSize: 30,
    color: '#00C7FE',
    textAlign: 'center',
  },

  PasswordText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    color: '#00C7FE',
  },
  EnterOTPOuter: {
    flexDirection: 'row',
    alignContent: 'center',
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EnterOTPInner: {
    width: 55,
    height: 55,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 20,
    borderRadius: 10,
    margin: 5,
    textAlign: 'center',
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

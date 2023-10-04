import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {memo} from 'react';

import MenuIcon from '../assets/svg/menu';
import SerachIcon from '../assets/svg/search';
import NotificationIcon from '../assets/svg/notification';
import BackArrow from '../assets/svg/BackArrow';
import Styles from '../config/Styles';
import Globles, {BASE_URL, COLOR, FONT, FONT_SIZE} from '../config/Globles';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Header = props => {
  const title = props.title;
  const handleGoback = () => {
    if (title != 'Leadman') props.navigation.goBack();
  };

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={'#00223E'}
        barStyle="light-content"></StatusBar>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => handleGoback()}
            style={Styles.headerIcons}>
            {title == 'Leadman' ? (
              <MenuIcon
                height={heightPercentageToDP('3%')}
                width={heightPercentageToDP('3%')}
              />
            ) : (
              <BackArrow />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: COLOR.TITLE_COLOR,
              fontSize:
                title === 'Leadman'
                  ? heightPercentageToDP('2.5%')
                  : FONT_SIZE.F_14,
              fontFamily:
                Platform.OS === 'ios' ? FONT.EXTRA_BOLD : 'SharpGroteskBook25',
            }}>
            {title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={Styles.headerIcons}>
            <SerachIcon
              height={heightPercentageToDP('3%')}
              width={heightPercentageToDP('3%')}></SerachIcon>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              //paddingTop: heightPercentageToDP('1%'),
              padding: heightPercentageToDP('0%'),
              paddingRight: heightPercentageToDP('2.5%'),
            }}>
            <NotificationIcon
              height={heightPercentageToDP('3%')}
              width={heightPercentageToDP('3%')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(Header);

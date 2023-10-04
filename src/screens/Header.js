import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import React, {memo} from 'react';

import MenuIcon from '../assets/svg/MenuIcon';
import SerachIcon from '../assets/svg/SerachIcon';
import NotificationIcon from '../assets/svg/NotificationIcon';
import BackArrow from '../assets/svg/BackArrow';

import Styles from '../config/Styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Globles, {BASE_URL, COLOR, FONT, FONT_SIZE} from '../config/Globles';

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
          backgroundColor: '#00223E',
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
              <BackArrow
                height={heightPercentageToDP('3%')}
                width={heightPercentageToDP('3%')}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: COLOR.TITLE_COLOR,
              fontSize:
                title === 'Leadman'
                  ? heightPercentageToDP('2.5%')
                  : FONT_SIZE.F_15,
              fontFamily:
                Platform.OS === 'ios' ? FONT.EXTRA_BOLD : 'SharpGroteskBook25',
            }}>
            {title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={[
              Styles.headerIcons,
              {paddingRight: heightPercentageToDP('2.5%')},
            ]}>
            <SerachIcon
              height={heightPercentageToDP('3%')}
              width={heightPercentageToDP('3%')}></SerachIcon>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
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

// import {
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Platform,
//   SafeAreaView,
// } from 'react-native';
// import React, {memo} from 'react';

// import MenuIcon from '../assets/svg/MenuIcon';
// import SerachIcon from '../assets/svg/SerachIcon';
// import NotificationIcon from '../assets/svg/NotificationIcon';
// import BackArrow from '../assets/svg/BackArrow';

// import Styles from '../config/Styles';
// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {COLOR, FONT, FONT_SIZE} from '../config/Globles';

// const Header = props => {
//   const title = props.title;
//   const handleGoback = () => {
//     if (title != 'Leadman') props.navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={{backgroundColor: COLOR.DARK_BLUE}}>
//       <StatusBar
//         backgroundColor={COLOR.DARK_BLUE}
//         barStyle="light-content"></StatusBar>

//       <View style={{flexDirection: 'row'}}>
//         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity
//             onPress={() => handleGoback()}
//             style={Styles.headerIcon}>
//             {title == 'Leadman' ? (
//               <MenuIcon height={hp('3%')} width={hp('3%')} />
//             ) : (
//               <BackArrow height={hp('2.5%')} width={hp('2.5%')} />
//             )}
//           </TouchableOpacity>

//           <Text
//             style={{
//               marginBottom: hp('0.5%'),

//               color: COLOR.TITLE_COLOR,
//               fontSize: title === 'Leadman' ? hp('2.5%') : FONT_SIZE.F_14,
//               fontFamily:
//                 Platform.OS === 'ios' ? FONT.EXTRA_BOLD : 'SharpGroteskBook25',
//             }}>
//             {title}
//           </Text>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity style={Styles.headerIcon}>
//             <SerachIcon height={hp('3%')} width={hp('3%')}></SerachIcon>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               paddingRight: hp('2.5%'),
//             }}>
//             <NotificationIcon height={hp('3%')} width={hp('3%')} />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default memo(Header);

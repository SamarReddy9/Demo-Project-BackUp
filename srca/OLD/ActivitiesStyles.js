import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLOR, FONT, FONT_SIZE} from './config/GloblesABC';

const ActivitiesStyles = StyleSheet.create({
  activityScreenContainer: {
    flex: 1,
    margin: hp('3.0%'),
  },

  createdByTextContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#8DB3D7',
    paddingLeft: hp('0.5%'),
    paddingRight: hp('0.5%'),
    borderTopEndRadius: hp('0.5%'),
    borderTopLeftRadius: hp('0.5%'),
  },

  createdByText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_14,
    padding: hp('0.4%'),
  },

  cardContainer: {
    backgroundColor: '#E4F5EE',
    padding: hp('2.5%'),
    borderTopLeftRadius: hp('1.0%'),
  },

  activityTypeText: {
    fontSize: FONT_SIZE.F_18,
    fontWeight: 'bold',
    color: COLOR.BLACK,
  },

  meetingAgenda: {
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.BOLD,
    marginBottom: hp('1.5%'),
    marginTop: hp('1.5%'),
  },

  readMoreText: {
    fontSize: FONT_SIZE.F_14,
    fontWeight: 'bold',
    color: COLOR.BLACK,
  },

  imageAndHostContentContainer: {
    flexDirection: 'row',
    paddingTop: hp('0.6%'),
    paddingBottom: hp('0.6%'),
  },

  profileImage: {
    width: wp('9.0%'),
    borderRadius: 30,
  },

  hostContainer: {
    paddingLeft: hp('0.5%'),
  },

  hostText: {
    fontSize: FONT_SIZE.F_13,
    paddingLeft: hp('0.5%'),
  },

  host: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.F_13,
    paddingBottom: hp('0.5%'),
    paddingRight: hp('0.5%'),
    color: COLOR.BLACK,
    paddingLeft: hp('0.5%'),
  },

  dateAndVinueContainer: {
    backgroundColor: '#37CF76',
    flexDirection: 'row',
    marginBottom: hp('2.5%'),
    borderBottomLeftRadius: hp('1.0%'),
    borderBottomRightRadius: hp('1.0%'),
    justifyContent: 'space-between',
    padding: hp('1.8%'),
  },

  clockIconAndItsData: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dataAndTimeIconContainer: {
    paddingTop: hp('1.3%'),
    paddingBottom: hp('1.3%'),
    marginLeft: hp('2.5%'),
    marginRight: hp('2.5%'),
  },

  dataAndTime: {
    fontSize: FONT_SIZE.F_14,
    fontWeight: 'bold',
    color: COLOR.BLACK,
    marginLeft: hp('0.7%'),
  },

  createActivityContainer: {
    alignItems: 'flex-end',
  },

  createActivityTop: {
    width: wp('40%'),
    height: hp('6.2%'),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#00223E',
    justifyContent: 'center',
    borderRadius: hp('1.0%'),
  },

  createActivityText: {
    fontSize: FONT_SIZE.F_14,
    color: 'white',
    marginLeft: hp('1.0%'),
  },

  //-----------------------------------------------------------------------------------------------

  screenTwoHeaderTitleText: {
    marginTop: hp('2.0%'),
    marginBottom: hp('0.5%'),
    paddingLeft: hp('0.3%'),
    fontSize: FONT_SIZE.F_13,
  },

  screenTwoBackNavBtnContainer: {
    height: hp('6.2%'),
    backgroundColor: COLOR.DARK_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: hp('2.0%'),
  },

  screenTwoAddActivityNavBtnText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_14,
    paddingRight: hp('2.0%'),
  },

  screenTwoContainer: {
    justifyContent: 'center',
    borderRadius: hp('2.0%'),
  },

  screenTwoFormContainer: {
    margin: hp('3.%'),
  },
  screenTwoMeetingAgendaContainer: {
    borderWidth: hp('0.2%'),
    height: hp('19.0%'),
    borderRadius: hp('1.0%'),
  },
  screenTwoMeetingAgenda: {
    paddingLeft: hp('2.0%'),
    fontSize: FONT_SIZE.F_14,
  },

  dropDownContainer: {
    borderWidth: hp('0.2%'),
    borderRadius: hp('1.0%'),
  },
  selectDropdown: {
    // height: 50,
    // width: 200,
  },

  screenTwoTextInput: {
    borderWidth: hp('0.2%'),
    borderRadius: hp('1.0%'),
    paddingLeft: hp('2.0%'),
    height: hp('6.0%'),
    fontSize: FONT_SIZE.F_14,
  },
  screenTwoTimeAndDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: hp('0.2%'),
    borderRadius: hp('1.0%'),
    width: hp('22.5%'),
    alignItems: 'center',
    padding: hp('0.5%'),
  },
  screenTwoDateAndTimeTextContainer: {
    flexDirection: 'row',
  },
  screenTwoDateAndTimeSubContainer: {
    marginRight: hp('1.0%'),
  },
  dateAndCalenderIcon: {
    marginRight: hp('1.5%'),
  },
  screenTwoDateAndTime: {
    width: hp('18.0%'),
    fontSize: FONT_SIZE.F_14,
  },

  screenTwoSubmitContainer: {
    width: wp('40%'),
    height: hp('6.2%'),
    backgroundColor: COLOR.DARK_BLUE,
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: hp('2.5%'),
  },

  submitNavBtnText: {
    alignItems: 'center',
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_14,
    marginLeft: hp('2.0%'),
  },
});

export default ActivitiesStyles;

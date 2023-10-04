import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

import Globles, {COLOR, FONT, FONT_SIZE} from './Globles';

const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.DARK_BLUE},
  headerIcons: {
    padding: hp('1.5%'),
    paddingLeft: hp('2.5%'),
    paddingRight: hp('1%'),
    //paddingTop: heightPercentageToDP('1%'),
  },
  cardView: {
    backgroundColor: COLOR.LIGHT_BLUE,
    paddingLeft: hp('2%'),
    paddingRight: hp('2%'),
    justifyContent: 'center',
    width: wp('43%'),
    height: hp('23%'),
    borderRadius: 20,
  },
  textWhiteSemi14: {
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_14,
  },
  textWhiteRegular10: {
    color: COLOR.WHITE,
    fontFamily: FONT.REGULAR,
    fontSize: FONT_SIZE.F_10,
    opacity: 0.5,
  },

  todayMainView: {
    marginTop: hp('3%'),
    //marginBottom: hp('2.5%'),
    flexDirection: 'row',
    borderRadius: hp('5%'),
    backgroundColor: COLOR.LIGHT_BLUE,
    height: hp('7%'),
    alignItems: 'center',
    paddingLeft: hp('2%'),
    paddingRight: hp('1.5%'),
    //justifyContent: 'space-between',
  },
  todayText: {
    color: COLOR.DARK_BLUE,
    fontSize: hp('2.5%'),
    fontFamily: FONT.BOLD,
    flex: 1,
  },
  textBlack12SemiBold: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.SEMI_BOLD,
  },
  homeCardParentView: {flexDirection: 'row', justifyContent: 'space-between'},
  todayChild: {
    height: hp('4%'),
    justifyContent: 'center',
    paddingLeft: hp('1.5%'),
    paddingRight: hp('1.5%'),
    borderRadius: hp('4%'),
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    flex: 1,
    marginRight: hp('1%'),
  },

  bottomContainer: {
    backgroundColor: COLOR.WHITE,
    flex: 1,
    borderTopLeftRadius: heightPercentageToDP('3%'),
    borderTopRightRadius: heightPercentageToDP('3%'),
  },
  bottomContainerChild: {padding: wp('5%')},
  bottomBarLael: {
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.BLACK,
  },

  table: {
    borderColor: '#00C7FE',
    borderWidth: 1,
    borderRadius: 10,
  },
  textTable: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_11,
    fontFamily: FONT.REGULAR,
    marginLeft: heightPercentageToDP('1%'),
  },
  columnView: {
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#00C7FE',
    flex: 1,
  },
  columnView1: {padding: 8, flex: 1},
  rowView: {
    borderBottomColor: '#00C7FE',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  bottomView: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: 5,
    fontWeight: FONT.SEMI_BOLD,
    padding: 18,
    paddingTop: 0,
    paddingBottom: 0,
  },
  filterIcon: {alignSelf: 'flex-end', padding: 10, paddingRight: 0},
  CampaigningsCard: {
    backgroundColor: '#D1EEFF',
    borderRadius: 10,
    marginBottom: 15,
  },
  CampaigningsCardTitle: {
    fontSize: FONT_SIZE.F_14,
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.SEMI_BOLD,
    flex: 1,
  },
  CampaigningsCardText: {
    color: '#757575',
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.MEDIUM,
  },
  CampaigningsCardTitleView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CampaigningsCardBlock: {
    padding: 5,
    alignItems: 'center',
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#D1EEFF',
  },
  CampaigningsCardWhite: {
    flexDirection: 'row',
    margin: 1.5,
    borderRadius: 10,
    backgroundColor: COLOR.WHITE,
  },
  CustomTabView: {
    borderRadius: heightPercentageToDP(1),
    backgroundColor: '#113D56',
    flexDirection: 'row',
  },
  CustomTabItem: {
    flex: 1,
    height: heightPercentageToDP(7),
    borderRadius: heightPercentageToDP(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  CustomTabWhiteText: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.F_18,
    fontFamily: FONT.NORMAL,
    fontWeight: '700',
  },
  customTabTitle: {
    color: '#00C7FE',
    fontFamily: FONT.NORMAL,
    fontSize: FONT_SIZE.F_12,
  },
  arrowTab: {
    backgroundColor: '#D1EEFF',
    padding: heightPercentageToDP(1),
    flexDirection: 'row',
    borderRadius: heightPercentageToDP(1),
    alignItems: 'center',
    marginTop: 17,
  },
  arrowTabText: {
    flex: 1,
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.REGULAR,
    fontWeight: '600',
  },

  customerDetailsGrayText: {
    color: COLOR.GRAY,
    fontSize: FONT_SIZE.F_10,
    fontWeight: '500',
    fontFamily: FONT.NORMAL,
    marginLeft: 5,
    marginRight: 10,
  },
  customerDetailsNameText: {
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_14,
    fontWeight: '700',
  },
  customerDetailsView: {
    backgroundColor: '#FFA61E',
    paddingLeft: 5,
    borderRadius: heightPercentageToDP(1),
    marginTop: 10,
  },
  customerDetailsInnerView: {
    backgroundColor: '#F6F6F6',
    borderBottomRightRadius: heightPercentageToDP(1),
    borderTopRightRadius: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    flexDirection: 'row',
  },
  customertStatusView: {
    backgroundColor: '#8DB3D7',
    marginLeft: 10,
    padding: heightPercentageToDP(0.5),
    borderRadius: heightPercentageToDP(0.4),
  },
  customerStatusText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_10,
    fontWeight: '500',
    fontFamily: FONT.NORMAL,
  },
  customerDetailsGrayView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  // SAMAR

  // ---------------------------------------------> Splash Screen

  SplashBottomTitleText: {
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_22,
  },

  // ---------------------------------------------> Design  Component

  designComponentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  designComponentTitleText: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.EXTRA_BOLD,
    fontFamily: FONT.BOLD,
    color: COLOR.DARK_BLUE,
    margin: hp('1%'),
  },

  designComponentDescriptionText: {
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.REGULAR,
    color: COLOR.DARK_BLUE,
    textAlign: 'center',
    width: wp('70%'),
    marginBottom: hp('3%'),
  },

  designComponentInputText: {
    fontSize: FONT_SIZE.F_12,
    color: COLOR.TITLE_COLOR,
    paddingBottom: hp('0.5%'),
    fontFamily: FONT.SEMI_BOLD,
  },

  designComponentInputField: {
    width: wp('67%'),
    paddingLeft: hp('1%'),
    fontSize: FONT_SIZE.F_15,
  },

  designComponentInputFieldContainer: {
    borderWidth: hp('0.1%'),
    flexDirection: 'row',
    width: wp('75%'),
    alignItems: 'center',
    borderRadius: hp('1%'),
    borderColor: COLOR.DARK_BLUE,
    height: hp('6.2%'),
  },

  designComponentNavBtn: {
    width: wp('75%'),
    height: hp('6.2%'),
    backgroundColor: COLOR.DARK_BLUE,
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  designComponentNavText: {
    alignItems: 'center',
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_14,
  },

  designComponentForgetPasswordNavText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_12,
    color: COLOR.TITLE_COLOR,
    paddingTop: hp('0.5%'),
  },

  // ---------------------------------------------> Enter OTP

  OTPRegisterOTPTextContainer: {
    paddingBottom: hp('0.3%'),
    paddingRight: hp('0.3%'),
  },

  OTPTimerContainer: {
    margin: hp('1.3%'),
  },

  OTPTimerInputText: {
    fontSize: FONT_SIZE.F_21,
    color: COLOR.TITLE_COLOR,
    textAlign: 'center',
  },

  EnterOTPInputFieldContainer: {
    flexDirection: 'row',
    marginBottom: hp('1.5%'),
  },

  EnterOTPInput: {
    width: hp('6.5%'),
    height: hp('6.5%'),
    borderWidth: hp('0.1%'),
    fontSize: FONT_SIZE.F_16,
    borderRadius: hp('1%'),
    margin: hp('0.5%'),
    textAlign: 'center',
  },

  // ---------------------------------------------> Activity

  activityScreenContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    borderTopRightRadius: hp('2.8%'),
    borderTopLeftRadius: hp('2.8%'),
    padding: hp('2.7%'),
  },

  activityCardsContainer: {
    paddingBottom: hp('1.5%'),
    marginTop: hp('2%'),
  },

  activityCreatedByTextContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#8DB3D7',
    paddingLeft: hp('0.5%'),
    paddingRight: hp('0.5%'),
    borderTopEndRadius: hp('0.5%'),
    borderTopLeftRadius: hp('0.5%'),
  },

  createdByText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.SEMI_BOLD,
    padding: hp('0.3%'),
  },

  activityCardContainer: {
    backgroundColor: '#E4F5EE',
    padding: hp('2.5%'),
    borderTopLeftRadius: hp('1.0%'),
  },

  activityTypeText: {
    fontSize: FONT_SIZE.F_18,
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.BOLD,
  },

  meetingAgenda: {
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.MEDIUM,
    paddingTop: hp('1.3%'),
    color: '#747B84',
  },

  activityReadMoreText: {
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },

  activityProfileAndHostContainer: {
    flexDirection: 'row',
    marginTop: hp('1.5%'),
  },

  profileImage: {
    width: hp('4.5%'),
    height: hp('4.5%'),
    borderRadius: hp('3%'),
    marginTop: hp('0.6%'),
  },

  activityHostAndPositionContainer: {
    paddingLeft: hp('0.5%'),
    marginTop: hp('0.2%'),
  },

  activityHostTitleText: {
    fontSize: FONT_SIZE.F_12,
    paddingLeft: hp('0.5%'),
    fontFamily: FONT.REGULAR,
    color: '#747B84',
  },

  hostNameAndPositionContainer: {
    flexDirection: 'row',
  },

  activityHostName: {
    fontSize: FONT_SIZE.F_14,
    paddingBottom: hp('0.5%'),
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.BOLD,
    paddingLeft: hp('0.5%'),
    marginTop: hp('-0.4%'),
  },

  activityHostPosition: {
    fontFamily: FONT.REGULAR,
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_13,
    marginTop: hp('-0.2%'),
    marginLeft: hp('0.4%'),
  },

  dateAndVinueContainer: {
    backgroundColor: '#b5e9ca',
    flexDirection: 'row',
    borderRadius: hp('1%'),
    justifyContent: 'space-between',
    paddingTop: hp('1.5%'),
    paddingBottom: hp('1.5%'),
    padding: hp('2%'),
  },

  clockAndMapSvg: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dataAndTimeText: {
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
    marginBottom: hp('0.3%'),
    paddingLeft: hp('0.5%'),
  },

  createActivityContainer: {
    alignItems: 'flex-end',
    paddingBottom: hp('3%'),
  },

  createActivityTextContainer: {
    width: wp('37%'),
    height: hp('5.8%'),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#00223E',
    justifyContent: 'center',
    borderRadius: hp('1.0%'),
  },

  createActivityText: {
    fontSize: FONT_SIZE.F_15,
    color: 'white',
    marginLeft: hp('0.5%'),
  },

  // ---------------------------------------------> Add Activity (Modal)
  moduleActivityListContainer: {
    flex: 1,
    padding: hp('2.6%'),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalActivityContainer: {
    borderRadius: hp('2.0%'),
    backgroundColor: COLOR.WHITE,
    borderWidth: hp('0.1%'),
    borderColor: COLOR.WHITE,
  },

  modalActivityDropDownListContainer: {
    backgroundColor: COLOR.DARK_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: hp('2.0%'),
    borderTopLeftRadius: hp('2.0%'),
  },

  modalAddActivityTitleText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.BOLD,
    marginLeft: hp('12.5%'),
  },

  modalActivityListTitleText: {
    paddingLeft: hp('0.3%'),
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.REGULAR,
    marginTop: hp('1%'),
    marginBottom: hp('0.5%'),
  },

  modalFormContainer: {
    paddingTop: hp('1%'),
    marginLeft: hp('2.1%'),
    marginRight: hp('2.1%'),
    marginBottom: hp('2.1%'),
    height: hp('81%'),
  },
  modalMeetingAgendaContainer: {
    borderWidth: hp('0.2%'),
    height: hp('16.5%'),
    borderRadius: hp('1.0%'),
  },
  modalMeetingAgendaInputField: {
    paddingLeft: hp('1.5%'),
    fontSize: FONT_SIZE.F_15,
    color: COLOR.DARK_BLUE,
  },

  modalDropDownDefaultTitleContainer: {
    borderWidth: hp('0.2%'),
    borderRadius: hp('1.0%'),
  },
  modalDropDownTextAndIconCantaier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedOption: {
    fontSize: FONT_SIZE.F_13,
    padding: hp('1.7%'),
    paddingLeft: hp('2.0%'),
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.BLACK,
  },

  modalDropDownArrowRightIcon: {
    marginRight: hp('0.5%'),
    marginTop: hp('0.5%'),
    alignSelf: 'center',
  },

  modalDropDownArrowDownIcon: {
    marginRight: hp('1.5%'),
  },

  modalDropDownOptions: {
    padding: hp('1.8%'),
    marginTop: hp('0.5%'),
    paddingLeft: hp('2.0%'),
    borderRadius: hp('1%'),
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalDropDownOptionText: {
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },

  modalActivityListTextInput: {
    borderWidth: hp('0.2%'),
    borderRadius: hp('1.0%'),
    paddingLeft: hp('2.0%'),
    height: hp('6.3%'),
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },

  modalDateAndTimeContainer: {
    flexDirection: 'row',
  },

  modalDateAndTimeInputFieldsContainer: {
    flexDirection: 'row',
    borderWidth: hp('0.2%'),
    borderRadius: hp('1.0%'),
    alignItems: 'center',
    padding: hp('0.1%'),
    marginRight: hp('0.7%'),
  },

  modalTimeAndDateValue: {
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
    width: hp('16%'),
    marginLeft: hp('0.5%'),
    height: hp('5.4%'),
  },

  modalSubmitContainer: {
    width: hp('20%'),
    height: hp('6.2%'),
    backgroundColor: COLOR.DARK_BLUE,
    borderRadius: hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp('2.5%'),
    marginBottom: hp('2%'),
  },

  modalsubmitText: {
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_14,
    marginLeft: hp('2.0%'),
  },

  // ---------------------------------------------> Reports

  reportcontainer: {flex: 1},

  reportsScreenContainer: {
    flex: 1,
    padding: hp('3%'),
    backgroundColor: COLOR.WHITE,
    borderWidth: 1,
    borderTopLeftRadius: hp('3%'),
    borderTopRightRadius: hp('3%'),
  },
  reportsTextContainer: {
    padding: hp('4.5%'),
    paddingLeft: hp('3%'),
    paddingRight: hp('3%'),
    borderRadius: hp('1%'),
    marginBottom: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reportTitleText: {
    fontSize: FONT_SIZE.F_18,
    fontFamily: FONT.BOLD,
    color: COLOR.BLACK,
    height: hp('4.3%'),
  },

  reportDescriptionText: {
    color: '#747B84',
    fontSize: FONT_SIZE.F_12,
  },

  // ---------------------------------------------> Performance Report

  perRepDropDownContainer: {
    borderWidth: 1,
    borderColor: 'red',
  },
  perRepDropDownTouchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  perRepDropDownTextInput: {
    fontSize: FONT_SIZE.F_12,
    padding: hp('1%'),
    backgroundColor: 'red',
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
  },

  perRepDropDownList: {
    padding: hp('1.8%'),
    marginTop: hp('0.5%'),
    paddingLeft: hp('2.0%'),
    borderRadius: hp('1%'),
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  perRepDropDownListText: {
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },

  // ---------------------------------------------> PerformanceReports
  performanceReportsContainer: {
    flex: 1,
    padding: hp('3%'),
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: hp('3%'),
    borderTopRightRadius: hp('3%'),
  },
  perRepTitleAndDropDownContainer: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropDownTitleText: {
    fontSize: FONT_SIZE.F_15,
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.BOLD,
  },

  perRepDropDownDefaultDataIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: hp('18.0%'),
    paddingLeft: hp('0.2%'),
    backgroundColor: COLOR.WHITE,
    borderWidth: hp('0.2%'),
    borderRadius: hp('0.5%'),
  },

  perRepDropDownTextInput: {
    padding: hp('0.8%'),
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
  },

  perRepDropDownList: {
    padding: hp('1%'),
    width: hp('17.6%'),
  },
  perRepDropDownListText: {
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.MEDIUM,
    color: COLOR.DARK_BLUE,
  },

  //Pie Charts
  leadsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F7F8FB',
    borderRadius: hp('1%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    padding: hp('2%'),
    paddingBottom: hp('0.5%'),
  },

  perRepDropDownListTextContainer: {
    position: 'absolute',
    top: hp('3.9%'),
    borderTopWidth: hp('0%'),
    borderWidth: hp('0.2%'),
    borderBottomRightRadius: hp('0.5%'),
    borderBottomLeftRadius: hp('0.5%'),
    backgroundColor: COLOR.WHITE,
  },

  convertedLeadsContainer: {
    flexDirection: 'row',
    margin: hp('0.1%'),
    marginLeft: hp('2.5%'),
    paddingBottom: hp('1.5%'),
  },

  convertedLeadsTextContainer: {
    marginLeft: hp('1.5%'),
    justifyContent: 'center',
  },

  convertedLeadsTitle: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_12,
    color: '#747B84',
  },

  convertedLeadsValue: {
    fontFamily: FONT.DARK_BLUE,
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.BOLD,
  },

  bookingValueUnitsContainer: {
    flexDirection: 'row',
    height: hp('10%'),
    backgroundColor: '#F7F8FB',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    borderRadius: hp('1.5%'),
    justifyContent: 'space-around',
  },
  bookingValueUnitsSvgContainer: {
    flexDirection: 'row',
    paddingRight: hp('3.5%'),
  },

  typologyBudgetCategoriesContainer: {
    marginHorizontal: hp('0.1%'),
  },

  TypologyBudgetItem: {
    flexDirection: 'row',
    paddingBottom: hp('1.5%'),
    paddingLeft: hp('4.3%'),
  },
  TypologyBudgetColor: {
    width: hp('2.5%'),
    height: hp('2.5%'),
    borderRadius: hp('1.5%'),
    marginRight: hp('1%'),
  },
  TypologyBudgetText: {
    fontSize: FONT_SIZE.F_14,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },

  // TableDropDown
  TableDropDownContainer: {
    paddingBottom: hp('8%'),
    paddingTop: hp('0.5%'),
  },
  PerformanceReportTableContainer: {
    padding: hp('0.5%'),
    marginTop: hp('1.5%'),
    backgroundColor: '#E4F5EE',
    borderRadius: hp('1.0%'),
  },
  PerformanceReportsTableHeadContainer: {
    padding: hp('1.0%'),
  },

  PerformanceReportTableHeadText: {
    paddingLeft: hp('1.2%'),
    alignSelf: 'center',
  },

  tableHeaderTopLayerText: {
    fontSize: FONT_SIZE.F_11,
    fontFamily: FONT.MEDIUM,
    color: '#747B84',
  },
  bhkTableTitle: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_13,
    color: COLOR.DARK_BLUE,
  },
  tableHeadSVG: {
    alignSelf: 'center',
    marginRight: hp('-1%'),
  },
  bookingCountValue: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_13,
    color: COLOR.DARK_BLUE,
  },

  tableListContainer: {
    backgroundColor: 'white',
    borderRadius: hp('1%'),
  },

  tableListItemsContainer: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
  tableSubTitleContainer: {
    color: '#747B84',
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: hp('2%'),
  },
  performanceReportsTableSubTitles: {
    width: hp('9.5%'),
    height: hp('2.5%'),
    color: '#747B84',
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.MEDIUM,
    paddingLeft: hp('1.5%'),
  },
  performanceReportsTableRow: {
    flexDirection: 'row',
    paddingVertical: hp('0.8%'),
    color: 'red',
  },
  performanceReportsTableCell: {
    flex: 1,
    marginLeft: hp('2.5%'),
    color: '#747B84',
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.LIGHT,
  },

  // ------------------------------------->   Lead Reports Screen
  leadCategoryReportBarCharContainer: {
    backgroundColor: '#F7F8FB',
    borderRadius: hp('1%'),
    marginTop: hp('2%'),
    marginBottom: hp('1.3%'),
    padding: hp('1%'),
    paddingBottom: hp('2%'),
  },
  bookLostReportBarTopLabel: {
    fontSize: hp('1.8%'),
    marginBottom: hp('0.1%'),
    color: '#747B84',
    fontSize: hp('1.5%'),
  },
  bookedLostIconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: hp('0.8%'),
  },
  bookedLostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: hp('24.5%'),
  },
  bookedLostBookedTextContainer: {
    height: hp('1.8%'),
    width: hp('1.8%'),
    borderRadius: hp('1%'),
    backgroundColor: '#37CF76',
    marginRight: hp('0.8%'),
  },
  bookedLostBookedText: {
    height: hp('1.6%'),
    marginTop: hp('-0.5%'),
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_12,
  },

  leadLostReasonReportPieChartContainer: {
    flexDirection: 'row',
    backgroundColor: '#F7F8FB',
    borderRadius: hp('1%'),
    marginTop: hp('2%'),
    alignItems: 'center',
    padding: hp('2.2%'),
    marginBottom: hp('5%'),
  },
  typologyBudgetCategoriesPieChartContainer: {
    flexDirection: 'row',
    margin: hp('0.4%'),
    marginLeft: hp('-1%'),
  },
  typologyBudgetCategoriesPieChart: {
    width: hp('1.8%'),
    height: hp('1.8%'),
    borderRadius: hp('1.5%'),
    marginRight: hp('0.5%'),
    marginTop: hp('0.5%'),
  },
  typologyBudgetCategoriesPieChartText: {
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.DARK_BLUE,
  },
  // ProductivityReport
  callingReportGraphSvgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: hp('0.5%'),
    paddingBottom: hp('1.5%'),
  },
  callingReportGraphSvgAndTextContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: COLOR.WHITE,
    padding: hp('0.6%'),
    borderRadius: hp('0.4%'),
    margin: hp('0.8%'),
    marginLeft: hp('0%'),
  },
  callingReportGraphTextContainer: {
    paddingLeft: hp('1.2%'),
    paddingRight: hp('2.2%'),
  },
  callingReportGraphTitleText: {
    color: '#747B84',
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_10,
  },
  callingReportGraphTextValues: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_12,
  },

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
    paddingBottom: hp('5.5%'),
  },
  inboundCallsAndOutboundCallsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
    height: hp('8%'),
  },
  inboundCallsAndOutboundCallsImageContainer: {
    flexDirection: 'row',
    width: hp('22%'),
    backgroundColor: '#F7F8FB',
    alignItems: 'center',
    paddingLeft: hp('1%'),
    borderRadius: hp('1%'),
  },
  inboundCallsAndOutboundTextContainer: {
    margin: hp('1.5%'),
  },
  inboundCallsAndOutboundTitleText: {
    fontFamily: FONT.MEDIUM,
    color: '#747B84',
    fontSize: FONT_SIZE.F_10,
  },

  // Campaigns
  campaignsTopTableContainer: {
    marginTop: hp('1%'),
    marginBottom: hp('2.5%'),
    marginLeft: hp('3%'),
    marginRight: hp('3%'),
  },
  campaignsTopTableRow: {
    flexDirection: 'row',
  },
  campaignsTopTableCell: {
    flex: 1,
    padding: hp('0.8%'),
    paddingLeft: hp('2%'),
    color: COLOR.WHITE,
    borderWidth: hp('0.1%'),
    borderColor: '#00C7FE',
    fontSize: FONT_SIZE.F_12,
    fontFamily: FONT.REGULAR,
  },

  campaignsFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: hp('1%'),
  },

  campaignsFilterCardContainer: {
    flexDirection: 'row',
    backgroundColor: '#CCF4FF',
    paddingLeft: hp('2%'),
    paddingRight: hp('0.3%'),
    borderRadius: hp('2%'),
    alignItems: 'center',
    marginRight: hp('0.5%'),
  },
  campaignsFilterCardText: {
    fontSize: FONT_SIZE.F_12,
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.REGULAR,
    marginBottom: hp('0.4%'),
  },

  campaignsTableCardContainer: {
    padding: hp('0.5%'),
    paddingTop: hp('0%'),
    marginBottom: hp('1%'),
    marginTop: hp('0.7%'),
    backgroundColor: '#D1EEFF',
    borderRadius: hp('1.5%'),
  },
  campaignsCardTitleContainer: {
    flexDirection: 'row',
    margin: hp('1%'),
  },
  campaignsCardTitleHeadTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  campaignsCardTitleText: {
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_14,
    color: COLOR.DARK_BLUE,
  },
  campaignsCardTitleTextTotal: {
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_12,
    marginTop: hp('0.4%'),
    fontFamily: FONT.REGULAR,
  },

  campaignstableInnertableRow: {
    flexDirection: 'row',
  },
  campaignstableInnerCardContainer: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: hp('0.2%'),
    borderColor: '#D1EEFF',
    paddingTop: hp('0.3'),
    paddingBottom: hp('1%'),
  },
  campaignstableCellValues: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_15,
  },
  campaignstableCell: {
    color: '#757575',
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_12,
  },

  //Campaigns Modal
  campaignsModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: hp('90%'),
  },
  campaignsModalOpacity: {
    borderRadius: hp('2.0%'),
    backgroundColor: 'white',
    borderWidth: hp('0.1%'),
    height: hp('18%'),
    borderColor: 'white',
  },
  campaignsModalTextContainer: {
    margin: hp('1.7%'),
    marginLeft: hp('5%'),
    padding: hp('1%'),
    flexDirection: 'row',
  },
  iconContainer: {
    width: hp('2.8%'),
    height: hp('2.2%'),
  },
  campaignsModalText: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_14,
    marginLeft: hp('0.6%'),
    marginRight: hp('1.3%'),
  },

  // --------------------------------------------> CampaignDetailsNew

  campaignDetailsNewCardContainer: {
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
  campaignDetailsNewCardTitleContainer: {
    backgroundColor: COLOR.LIGHT_BLUE,
    justifyContent: 'space-between',
    padding: hp('1%'),
    flexDirection: 'row',
    borderRadius: hp('1%'),
  },
  campaignDetailsNewCardTitleText: {
    color: COLOR.DARK_BLUE,
    fontSize: FONT_SIZE.F_13,
    fontFamily: FONT.SEMI_BOLD,
    marginLeft: hp('0.7%'),
  },

  listItemsContainer: {
    backgroundColor: '#F6F6F6',
    marginTop: hp('1%'),
    flexDirection: 'row',
    borderRadius: hp('1.5%'),
    alignItems: 'center',
  },
  listItemDesign: {
    width: hp('1%'),
    height: hp('8%'),
    backgroundColor: '#B6B6B6',
    borderBottomLeftRadius: hp('1%'),
    borderTopLeftRadius: hp('1%'),
  },

  listItemGroupTextContainer: {
    flexDirection: 'row',
    paddingLeft: hp('1.5%'),
    justifyContent: 'space-between',
    flex: 1,
  },
  imageStyle: {
    marginTop: hp('0.5%'),
    marginRight: hp('1.3%'),
  },
  svgImageTitleText: {
    position: 'absolute',
    marginTop: hp('8.3%'),
    color: COLOR.DARK_BLUE,
    marginLeft: hp('0.5%'),
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
  },
  campaignDetailsNewCardInnerContainer: {
    flexDirection: 'row',
    paddingLeft: hp('1.5%'),
  },

  listBlueLineDesign: {
    width: hp('1.5%'),
    height: hp('8%'),
    borderTopLeftRadius: hp('1%'),
    borderBottomLeftRadius: hp('1%'),
    backgroundColor: '#B6B6B6',
  },
  nameAndStatusContainer: {
    flexDirection: 'row',
    margin: hp('0.3%'),
  },
  listName: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_14,
    paddingBottom: hp('0.5%'),
    marginTop: hp('-0.2%'),
  },
  listStatusContainer: {
    backgroundColor: '#8DB3D7',
    padding: hp('0.1%'),
    paddingLeft: hp('0.5%'),
    paddingRight: hp('0.5%'),
    paddingBottom: hp('0.3%'),
    marginLeft: hp('1%'),
    borderRadius: hp('0.5%'),
    margin: hp('0.2%'),
    height: hp('2.3%'),
  },
  listStatus: {
    color: COLOR.WHITE,
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_11,
    marginTop: hp('-0.2%'),
  },

  listIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: hp('0.3%'),
    marginLeft: hp('1%'),
  },
  listLocation: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_11,
  },
  //------------------------------------------> CampaignDetailsNew Modal
  campaignDetailsNewContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: hp('85%'),
  },
  campaignsModalTextValueContainer: {
    backgroundColor: '#D1EEFF',
    borderRadius: hp('1%'),
    marginLeft: hp('0.5%'),
    paddingLeft: hp('0.8%'),
    width: hp('2.5%'),
    height: hp('2.5%'),
  },
  campaignsModalTextValues: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.F_12,
  },

  // followUp
  followUpTextContainer: {
    flexDirection: 'row',
    // backgroundColor: '#37CF76',
    backgroundColor: '#D1EEFF',
    marginTop: hp('1%'),
    borderRadius: hp('0.5%'),
    padding: hp(' 0.7%'),
  },
  followUpText: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.SEMI_BOLD,
    fontSize: FONT_SIZE.F_11,
    marginTop: hp('-0.2%'),
    marginLeft: hp('0.2%'),
    marginRight: hp('0.5%'),
  },

  //Booking
  campaignsBookedFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  campaignsBookedTitleTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  campaignsBookedTitleText: {
    color: COLOR.DARK_BLUE,
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.F_13,
  },
});

export default Styles;

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Globles, {COLOR, FONT, FONT_SIZE} from './GloblesABC';


const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.DARK_BLUE},
  headerIcons: {
    padding: hp('1.5%'),
    paddingLeft: hp('2.5%'),
    paddingRight: hp('2.5%'),
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







  // Samara
//   Container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     // paddingTop: 250,
//   },
//   StartSymbolMain: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   Start: {
//     margin: 2,
//   },

//   RegisterCss: {
//     marginTop: 5,
//     fontSize: 20,
//     fontFamily: FONT.BOLD,
//     fontWeight: 'bold',
//     color:COLOR.DARK_BLUE,
//   },

//   RegesterDetailsText: {
//     marginTop: 5,
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 12,
//     width: 263,
//     height: 30,
//     textAlign: 'center',
//   },

//   RegisterGroup: {
//     paddingTop: 25,
//     paddingBottom: 30,
//     paddingRight: 10,
//   },

//   MailText: {
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 12,
//     color: '#00C7FE',
//     paddingBottom: 5,
//   },
//   ShowEmailMain: {
//     borderWidth: 1,
//     flexDirection: 'row',
//     alignContent: 'center',
//     alignItems: 'center',
//     width: 300,
//     height: 50,
//     borderRadius: 10,
//   },
//   InputFildMail: {
//     width: 270,
//     paddingLeft: 10,
//     justifyContent: 'center',
//     alignContent: 'center',
//   },

//   PasswordText: {
//     marginTop: 10,
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 12,
//     color: '#00C7FE',
//     paddingBottom: 5,
//   },
//   ShowPasswordMain: {
//     borderWidth: 1,
//     flexDirection: 'row',
//     alignContent: 'center',
//     alignItems: 'center',
//     width: 300,
//     height: 50,
//     borderRadius: 10,
//   },
//   ShowPasswordInput: {
//     width: 270,
//     paddingLeft: 10,
//     justifyContent: 'center',
//     alignContent: 'center',
//   },

//   OpacityGroup: {
//     paddingRight: 10,
//   },

//   ButtonTouchOpacity: {
//     width: 300,
//     height: 50,
//     backgroundColor: '#00223E',
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   TouchOpacityInnerText: {
//     alignItems: 'center',
//     color: 'white',
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 14,
//   },
//   BottomTagStyle: {
//     fontFamily: 'Plus Jakarta Sans',
//     fontSize: 12,
//     color: '#00C7FE',
//     paddingTop: 30,
//   },
// });

// export default Styles;

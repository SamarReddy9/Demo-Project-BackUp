import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './Header';
import Styles from '../config/Styles';
import {FONT_SIZE} from '../config/Globles';
import DangerCircle from '../assets/svg/CampaignsDangerCircle.svg';
import CampaignsFilter from '../assets/svg/CampaignsFilter.svg';
import BoldArrowRight from '../assets/svg/BoldArrowRight.svg';
import BoldArrowDown from '../assets/svg/BoldArrowDown.svg';
import Booked from '../assets/svg/Booked.svg';
import LocationPin from '../assets/svg/LocationPin.svg';
import CalendarMini from '../assets/svg/CalendarMini.svg';
import Building from '../assets/svg/Building.svg';

const CampaignDetailsBooking = ({props}) => {
  const [todayShown, setTodayShown] = useState(false);

  const TodayClick = () => {
    setTodayShown(!todayShown);
  };

  const [lastWeekShown, setLastWeekShown] = useState(false);

  const campaignLastWeekClick = () => {
    setLastWeekShown(!lastWeekShown);
  };

  const [lastMonthShown, setLastMonthShown] = useState(false);

  const lastMonthClick = () => {
    setLastMonthShown(!lastMonthShown);
  };

  // modal data
  const [modalVisible, setModalVisible] = useState(false);
  const [optionOne, setOptionOne] = useState(true);
  const [optionTwo, setOptionTwo] = useState(true);
  const [optionThree, setOptionThree] = useState(true);
  const [optionFour, setOptionFour] = useState(true);

  const ModalCards = props => {
    const {title, value, one, two, three, four} = props;

    const handleHotClick = () => {
      setOptionOne(one);
      setOptionTwo(two);
      setOptionThree(three);
      setOptionFour(four);
      setModalVisible(false);
    };

    const memoizedCard = useMemo(
      () => (
        <View
          style={[
            Styles.campaignsModalTextContainer,
            {marginBottom: 0, paddingBottom: 0},
          ]}>
          <TouchableOpacity onPress={handleHotClick}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  Styles.campaignsModalText,
                  {marginLeft: hp('0.1%')},
                  {marginTop: -3},
                ]}>
                {title}
              </Text>
              <View style={Styles.campaignsModalTextValueContainer}>
                <Text style={Styles.campaignsModalTextValues}>{value} </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ),
      [title, value],
    );

    return memoizedCard;
  };

  return (
    <View style={Styles.container}>
      <Header {...props} title="Facebook Marketing (31)" />

      <View style={{flex: 2}}>
        <View
          showsVerticalScrollIndicator={true}
          style={[Styles.reportsScreenContainer, {paddingTop: hp('2%')}]}>
          <View style={Styles.campaignsBookedFilterContainer}>
            <View style={Styles.campaignsBookedTitleTextContainer}>
              <Text style={Styles.campaignsBookedTitleText}>
                Total Booking Value : &nbsp;
              </Text>
              <Text
                style={[Styles.campaignsBookedTitleText, {color: '#37CF76'}]}>
                13.14 CR
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              {!optionOne && (
                <View
                  style={[
                    Styles.campaignsFilterCardContainer,
                    {paddingLeft: hp('0.5%')},
                  ]}>
                  <Text
                    style={[
                      Styles.campaignsFilterCardText,
                      {marginLeft: hp('0.7%')},
                    ]}>
                    0 to 50 Lac
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOptionOne(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!optionTwo && (
                <View
                  style={[
                    Styles.campaignsFilterCardContainer,
                    {paddingLeft: hp('0.5%')},
                  ]}>
                  <Text
                    style={[
                      Styles.campaignsFilterCardText,
                      {marginLeft: hp('0.7%')},
                    ]}>
                    50 Lac to 1 Cr
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOptionTwo(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!optionThree && (
                <View
                  style={[
                    Styles.campaignsFilterCardContainer,
                    {paddingLeft: hp('0.5%')},
                  ]}>
                  <Text
                    style={[
                      Styles.campaignsFilterCardText,
                      {marginLeft: hp('0.8%')},
                    ]}>
                    1 Cr to 3 Cr
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOptionThree(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}
              {!optionFour && (
                <View
                  style={[
                    Styles.campaignsFilterCardContainer,
                    {paddingLeft: hp('0.5%')},
                  ]}>
                  <Text
                    style={[
                      Styles.campaignsFilterCardText,
                      {marginLeft: hp('0.7%')},
                    ]}>
                    3 Cr Above
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOptionFour(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <CampaignsFilter width={hp('4%')} height={hp('4%')} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Today */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={TodayClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Today (1)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {todayShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {todayShown && (
                <FlatList
                  data={todayData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <View style={Styles.listItemDesignContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('13.5%')},
                          {backgroundColor: '#37CF76'},
                        ]}
                      />

                      <TouchableOpacity
                        style={Styles.listItemContainer}
                        onPress={() => handleListItemClick(item.id)}>
                        <View
                          style={Styles.campaignDetailsNewCardInnerContainer}>
                          <View>
                            <View
                              style={
                                Styles.campaignDetailsNewCardGroupDataContainer
                              }>
                              <View style={Styles.nameAndStatusContainer}>
                                <Text style={Styles.listName}>{item.name}</Text>
                                <View style={Styles.listStatusContainer}>
                                  <Text style={Styles.listStatus}>
                                    {item.status}
                                  </Text>
                                </View>
                              </View>

                              <View style={{flexDirection: 'row'}}>
                                <View
                                  style={[
                                    Styles.listIconsContainer,
                                    {
                                      marginLeft: hp('0.5%'),
                                      marginLeft: hp('-0.3%'),
                                    },
                                  ]}>
                                  <LocationPin
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />

                                  <Text style={Styles.listLocation}>
                                    {item.location}
                                  </Text>
                                </View>

                                <View style={Styles.listIconsContainer}>
                                  <Building
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />

                                  <Text style={Styles.listLocation}>
                                    {item.flatType}
                                  </Text>
                                </View>

                                <View style={Styles.listIconsContainer}>
                                  <CalendarMini
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />
                                  <Text style={Styles.listLocation}>
                                    {item.calender}
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View
                              style={[
                                Styles.listIconsContainer,
                                {
                                  marginLeft: hp('0.5%'),
                                  marginLeft: hp('-0.3%'),
                                },
                              ]}>
                              <View style={Styles.followUpTextContainer}>
                                <Text
                                  style={[
                                    Styles.followUpText,
                                    {fontSize: FONT_SIZE.F_12},
                                  ]}>
                                  Booking value : {item.bookingValue}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <View>
                            <Booked
                              width={hp('5.5%')}
                              height={hp('4.8%')}
                              style={[
                                Styles.imageStyle,
                                {marginTop: hp('3.8%')},
                              ]}
                            />
                            <Text style={Styles.svgImageTitleText}>Booked</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>

            {/* Last Week  */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={campaignLastWeekClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Last Week (3)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {lastWeekShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {lastWeekShown && (
                <FlatList
                  data={lastWeekData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <View style={Styles.listItemDesignContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('13.5%')},
                          {backgroundColor: '#37CF76'},
                        ]}
                      />

                      <TouchableOpacity
                        style={Styles.listItemContainer}
                        onPress={() => handleListItemClick(item.id)}>
                        <View
                          style={Styles.campaignDetailsNewCardInnerContainer}>
                          <View>
                            <View
                              style={
                                Styles.campaignDetailsNewCardGroupDataContainer
                              }>
                              <View style={Styles.nameAndStatusContainer}>
                                <Text style={Styles.listName}>{item.name}</Text>
                                <View style={[Styles.listStatusContainer, {}]}>
                                  <Text style={Styles.listStatus}>
                                    {item.status}
                                  </Text>
                                </View>
                              </View>

                              <View style={{flexDirection: 'row'}}>
                                <View
                                  style={[
                                    Styles.listIconsContainer,
                                    {
                                      marginLeft: hp('0.5%'),
                                      marginLeft: hp('-0.3%'),
                                    },
                                  ]}>
                                  <LocationPin
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />

                                  <Text style={Styles.listLocation}>
                                    {item.location}
                                  </Text>
                                </View>

                                <View style={Styles.listIconsContainer}>
                                  <Building
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />

                                  <Text style={Styles.listLocation}>
                                    {item.flatType}
                                  </Text>
                                </View>
                                <View style={Styles.listIconsContainer}>
                                  <CalendarMini
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />
                                  <Text style={Styles.listLocation}>
                                    {item.calender}
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View
                              style={[
                                Styles.listIconsContainer,
                                {
                                  marginLeft: hp('0.5%'),
                                  marginLeft: hp('-0.3%'),
                                },
                              ]}>
                              <View style={Styles.followUpTextContainer}>
                                <Text style={Styles.followUpText}>
                                  Booking value : {item.bookingValue}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <View>
                            <Booked
                              width={hp('5.5%')}
                              height={hp('4.8%')}
                              style={[
                                Styles.imageStyle,
                                {marginTop: hp('3.8%')},
                              ]}
                            />
                            <Text style={Styles.svgImageTitleText}>Booked</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>

            {/* Last Month  */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={lastMonthClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Last Month (4)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {lastMonthShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {lastMonthShown && (
                <FlatList
                  data={lastMonthData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <View style={Styles.listItemDesignContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('13.5%')},
                          {backgroundColor: '#37CF76'},
                        ]}
                      />

                      <TouchableOpacity
                        style={Styles.listItemContainer}
                        onPress={() => handleListItemClick(item.id)}>
                        <View
                          style={Styles.campaignDetailsNewCardInnerContainer}>
                          <View>
                            <View
                              style={
                                Styles.campaignDetailsNewCardGroupDataContainer
                              }>
                              <View style={Styles.nameAndStatusContainer}>
                                <Text style={Styles.listName}>{item.name}</Text>
                                <View style={Styles.listStatusContainer}>
                                  <Text style={Styles.listStatus}>
                                    {item.status}
                                  </Text>
                                </View>
                              </View>

                              <View style={{flexDirection: 'row'}}>
                                <View
                                  style={[
                                    Styles.listIconsContainer,
                                    {
                                      marginLeft: hp('0.5%'),
                                      marginLeft: hp('-0.3%'),
                                    },
                                  ]}>
                                  <LocationPin
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />

                                  <Text style={Styles.listLocation}>
                                    {item.location}
                                  </Text>
                                </View>

                                <View style={Styles.listIconsContainer}>
                                  <Building
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />

                                  <Text style={Styles.listLocation}>
                                    {item.flatType}
                                  </Text>
                                </View>
                                <View style={Styles.listIconsContainer}>
                                  <CalendarMini
                                    width={hp('2.5%')}
                                    height={hp('2%')}
                                  />
                                  <Text style={Styles.listLocation}>
                                    {item.calender}
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View
                              style={[
                                Styles.listIconsContainer,
                                {
                                  marginLeft: hp('0.5%'),
                                  marginLeft: hp('-0.3%'),
                                },
                              ]}>
                              <View style={Styles.followUpTextContainer}>
                                <Text style={Styles.followUpText}>
                                  Booking value : {item.bookingValue}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <View>
                            <Booked
                              width={hp('5.5%')}
                              height={hp('4.8%')}
                              style={[
                                Styles.imageStyle,
                                {marginTop: hp('3.8%')},
                              ]}
                            />
                            <Text style={Styles.svgImageTitleText}>Booked</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}>
          <View
            style={[
              Styles.campaignDetailsNewContainer,
              {paddingTop: hp('80%')},
            ]}>
            <View style={[Styles.campaignsModalOpacity, {height: hp('25%')}]}>
              <ModalCards
                title={'0 to 50 Lac '}
                value={1}
                two={true}
                three={true}
                four={true}
                one={false}
              />
              <ModalCards
                title={'50 Lac to 1 Cr'}
                value={2}
                one={true}
                three={true}
                four={true}
                two={false}
              />
              <ModalCards
                title={'1 Cr to 3 Cr '}
                value={3}
                one={true}
                two={true}
                four={true}
                three={false}
              />
              <ModalCards
                title={'3 Cr Above'}
                value={2}
                one={true}
                two={true}
                three={true}
                four={false}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

//  REPLACE WITH API
const todayData = [
  {
    id: 1,
    name: 'Reva Ambilkar',
    status: 'Booked',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: '85 Lac',
  },
];

const lastWeekData = [
  {
    id: 1,
    name: 'Chetan Padiyar',
    status: 'Booking amount submitted',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: '3.51 Cr',
  },
  {
    id: 2,
    name: 'Dinesh Vyas',
    status: 'Booked',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: ' 1.53 Cr',
  },
  {
    id: 3,
    name: 'Jagdish Surywanshi',
    status: 'Booked',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: '85 Lac',
  },
];

const lastMonthData = [
  {
    id: 1,
    name: 'Kartik Menon',
    status: 'PDC Submitted',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: '3.51 Cr',
  },
  {
    id: 2,
    name: 'Dinesh Vyas',
    status: 'Booked',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: ' 1.53 Cr',
  },
  {
    id: 3,
    name: 'Jagdish Surywanshi',
    status: 'PDC Submitted',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: '85 Lac',
  },
  {
    id: 4,
    name: 'Varsha Mhatre',
    status: 'PDC Submitted',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
    bookingValue: '85 Lac',
  },
];

export default CampaignDetailsBooking;

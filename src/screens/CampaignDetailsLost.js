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
import DangerCircle from '../assets/svg/CampaignsDangerCircle.svg';
import CampaignsFilter from '../assets/svg/CampaignsFilter.svg';
import BoldArrowRight from '../assets/svg/BoldArrowRight.svg';
import BoldArrowDown from '../assets/svg/BoldArrowDown.svg';
import Lost from '../assets/svg/Lost.svg';
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

  const [lostToCompetition, setLostToCompetition] = useState(true);
  const [paymentPlanIssue, setPaymentPlanIssue] = useState(true);
  const [possessionTimelineIssue, setPossessionTimelineIssue] = useState(true);
  const [invetoryAvailabilityIssue, setInvetoryAvailabilityIssue] =
    useState(true);
  const [designSizeIssue, setDesignSizeIssue] = useState(true);

  const [budgetFinanceIssue, setBudgetFinanceIssue] = useState(true);
  const [pricing, setPricing] = useState(true);
  const [otherChargesIssue, setOtherChargesIssue] = useState(true);
  const [specificationsIssue, setSpecificationsIssue] = useState(true);
  const [locationNeighbourhoodIssue, setLocationNeighbourhoodIssue] =
    useState(true);
  const [notContactable, setNotContactable] = useState(true);

  const ModalCards = props => {
    const {
      title,
      value,
      lostToCompetition,
      paymentPlanIssue,
      possessionTimelineIssue,
      invetoryAvailabilityIssue,
      designSizeIssue,
      budgetFinanceIssue,
      pricing,
      otherChargesIssue,
      specificationsIssue,
      locationNeighbourhoodIssue,
      notContactable,
    } = props;

    const handleHotClick = () => {
      setLostToCompetition(lostToCompetition);
      setPaymentPlanIssue(paymentPlanIssue);
      setPossessionTimelineIssue(possessionTimelineIssue);
      setInvetoryAvailabilityIssue(invetoryAvailabilityIssue);
      setDesignSizeIssue(designSizeIssue);
      setBudgetFinanceIssue(budgetFinanceIssue);
      setPricing(pricing);
      setOtherChargesIssue(otherChargesIssue);
      setSpecificationsIssue(specificationsIssue);
      setLocationNeighbourhoodIssue(locationNeighbourhoodIssue);
      setNotContactable(notContactable);

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

              {value == null ? null : (
                <View style={Styles.campaignsModalTextValueContainer}>
                  <Text style={Styles.campaignsModalTextValues}>{value} </Text>
                </View>
              )}
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
          <View
            style={[
              Styles.campaignsBookedFilterContainer,
              {marginBottom: hp('0.7%')},
            ]}>
            <View style={{flexDirection: 'row'}}>
              {!lostToCompetition && (
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
                    Lost to competition
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setLostToCompetition(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!paymentPlanIssue && (
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
                    Payment plan issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setPaymentPlanIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!possessionTimelineIssue && (
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
                    Possession timeline issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setPossessionTimelineIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}
              {!invetoryAvailabilityIssue && (
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
                    Invetory availability issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setInvetoryAvailabilityIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!designSizeIssue && (
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
                    Design/size Issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setDesignSizeIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!budgetFinanceIssue && (
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
                    Budget/finance issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setBudgetFinanceIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!pricing && (
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
                    Pricing
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setPricing(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!otherChargesIssue && (
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
                    Other charges issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOtherChargesIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!specificationsIssue && (
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
                    Specifications issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSpecificationsIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!locationNeighbourhoodIssue && (
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
                    Location/Neighbourhood issue
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setLocationNeighbourhoodIssue(true);
                    }}>
                    <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                  </TouchableOpacity>
                </View>
              )}

              {!notContactable && (
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
                    Not contactable
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setNotContactable(true);
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
            <View
              style={[
                Styles.campaignDetailsNewCardContainer,
                {marginTop: hp('1.5%')},
              ]}>
              <TouchableOpacity
                onPress={TodayClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Today (3)
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
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('9%')},
                          {backgroundColor: '#131313'},
                        ]}
                      />

                      <View style={Styles.listItemGroupTextContainer}>
                        <View>
                          <View>
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
                        </View>

                        <View>
                          <Lost
                            width={hp('5.5%')}
                            height={hp('3.5%')}
                            style={[
                              Styles.imageStyle,
                              {marginTop: hp('0.7%'), marginLeft: hp('2.3%')},
                            ]}
                          />
                          <Text
                            style={[
                              Styles.svgImageTitleText,
                              {marginTop: hp('4%'), marginLeft: hp('3.5%')},
                            ]}>
                            Lost
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
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
                  Last Week (2)
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
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('9%')},
                          {backgroundColor: '#131313'},
                        ]}
                      />

                      <View style={Styles.listItemGroupTextContainer}>
                        <View>
                          <View>
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
                        </View>

                        <View>
                          <Lost
                            width={hp('5.5%')}
                            height={hp('3.5%')}
                            style={[
                              Styles.imageStyle,
                              {marginTop: hp('0.7%'), marginLeft: hp('2.3%')},
                            ]}
                          />
                          <Text
                            style={[
                              Styles.svgImageTitleText,
                              {marginTop: hp('4%'), marginLeft: hp('3.5%')},
                            ]}>
                            Lost
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
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
                  Last Month (5)
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
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('9%')},
                          {backgroundColor: '#131313'},
                        ]}
                      />

                      <View style={Styles.listItemGroupTextContainer}>
                        <View>
                          <View>
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
                        </View>

                        <View>
                          <Lost
                            width={hp('5.5%')}
                            height={hp('3.5%')}
                            style={[
                              Styles.imageStyle,
                              {marginTop: hp('0.7%'), marginLeft: hp('2.3%')},
                            ]}
                          />
                          <Text
                            style={[
                              Styles.svgImageTitleText,
                              {marginTop: hp('4%'), marginLeft: hp('3.5%')},
                            ]}>
                            Lost
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
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
              {paddingTop: hp('44.8%')},
            ]}>
            <View style={[Styles.campaignsModalOpacity, {height: hp('80%')}]}>
              <ModalCards
                title={'Lost to competition'}
                value={2}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                lostToCompetition={false}
              />
              <ModalCards
                title={'Payment plan issue'}
                value={1}
                lostToCompetition={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                paymentPlanIssue={false}
              />
              <ModalCards
                title={'Possession timeline issue'}
                value={1}
                lostToCompetition={true}
                paymentPlanIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                possessionTimelineIssue={false}
              />
              <ModalCards
                title={'Invetory availability issue'}
                value={0}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                invetoryAvailabilityIssue={false}
              />
              <ModalCards
                title={'Design/size Issue'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                designSizeIssue={false}
              />

              <ModalCards
                title={'Budget/finance issue'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                budgetFinanceIssue={false}
              />
              <ModalCards
                title={'Pricing'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                pricing={false}
              />
              <ModalCards
                title={'Other charges issue'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                otherChargesIssue={false}
              />
              <ModalCards
                title={'Specifications issue'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={true}
                specificationsIssue={false}
              />
              <ModalCards
                title={'Location/Neighbourhood issue'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                notContactable={true}
                locationNeighbourhoodIssue={false}
              />
              <ModalCards
                title={'Not contactable'}
                value={null}
                lostToCompetition={true}
                paymentPlanIssue={true}
                possessionTimelineIssue={true}
                invetoryAvailabilityIssue={true}
                designSizeIssue={true}
                budgetFinanceIssue={true}
                pricing={true}
                otherChargesIssue={true}
                specificationsIssue={true}
                locationNeighbourhoodIssue={true}
                notContactable={false}
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
    name: 'Madhav Koparkar',
    status: 'Budget / finance issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: '5 Sep 2022',
  },
  {
    id: 2,
    name: 'Urvashi Gupta',
    status: 'Budget / finance issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
  {
    id: 3,
    name: 'Shashikant Kelsha',
    status: 'Inventory availability issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
];

const lastWeekData = [
  {
    id: 1,
    name: 'Shrikant Tiwari',
    status: 'Payment plan issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
  {
    id: 2,
    name: 'Tushar More',
    status: 'Lost to Compitition',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
];

const lastMonthData = [
  {
    id: 1,
    name: 'Harshal Todkar',
    status: 'Possession timeline issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
  {
    id: 2,
    name: 'Satyajeet Shitole',
    status: 'Payment plan issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
  {
    id: 3,
    name: 'Kaushik K',
    status: 'Design/size issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
  {
    id: 4,
    name: 'Rupail Tandale',
    status: 'Specifications issue',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
  {
    id: 5,
    name: 'Eknath Shinde',
    status: 'Not contactable',
    location: 'Morya Heights',
    flatType: '2 BHK',
    calender: 'Today',
  },
];

export default CampaignDetailsBooking;

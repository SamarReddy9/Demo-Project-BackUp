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
import Hot from '../assets/svg/Hot.svg';
import WarmSVG from '../assets/svg/Warm.svg';
import Cold from '../assets/svg/Cold.svg';
import DangerCircle from '../assets/svg/CampaignsDangerCircle.svg';
import CampaignsFilter from '../assets/svg/CampaignsFilter.svg';
import BoldArrowRight from '../assets/svg/BoldArrowRight.svg';
import BoldArrowDown from '../assets/svg/BoldArrowDown.svg';
import Call from '../assets/svg/Call.svg';
import LocationPin from '../assets/svg/LocationPin.svg';
import Building from '../assets/svg/Building.svg';
import CalendarMini from '../assets/svg/CalendarMini.svg';

const CampaignDetailsNew = ({props, navigation}) => {
  const [isListTodayShown, setIsListTodayShown] = useState(false);

  const CampaignDetailsNewTodayClick = () => {
    setIsListTodayShown(!isListTodayShown);
  };

  const [isListYesterdayShown, setIsListYesterdayShown] = useState(false);

  const campaignDetailsNewYesterdayClick = () => {
    setIsListYesterdayShown(!isListYesterdayShown);
  };

  const [isListSeptemberShown, setIsListSeptemberShown] = useState(false);

  const campaignDetailsNewSeptemberClick = () => {
    setIsListSeptemberShown(!isListSeptemberShown);
  };

  // modal data
  const [modalVisible, setModalVisible] = useState(false);
  const [hot, setHot] = useState(true);
  const [Warm, setWarm] = useState(true);
  const [cold, setCold] = useState(true);

  const ModalCards = props => {
    const {icon, title, value, warm, cold, hot} = props;

    const handleHotClick = () => {
      setWarm(warm);
      setCold(cold);
      setHot(hot);
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
              <View style={Styles.iconContainer}>{icon}</View>

              <Text style={[Styles.campaignsModalText, {marginTop: -3}]}>
                {title}
              </Text>
              <View style={Styles.campaignsModalTextValueContainer}>
                <Text style={Styles.campaignsModalTextValues}>{value} </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ),
      [icon, title, value],
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
          {/* Delete this at end of the project as like jagadesh sir told */}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CampaignDetailsNew');
              }}>
              <Text style={{color: 'blue'}}>New &nbsp;</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CampaignDetailsFollowup');
              }}>
              <Text>Follow-Ups &nbsp;</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CampaignDetailsBooked');
              }}>
              <Text>Booked &nbsp;</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CampaignDetailsLost');
              }}>
              <Text>Lost &nbsp;</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.campaignsFilterContainer}>
            {hot ? (
              <></>
            ) : (
              <View
                style={[
                  Styles.campaignsFilterCardContainer,
                  {paddingLeft: hp('0.2%')},
                ]}>
                <Hot width={hp('4%')} height={hp('2.1%')} />
                <Text style={Styles.campaignsFilterCardText}>Hot</Text>
                <TouchableOpacity
                  onPress={() => {
                    setHot(true);
                  }}>
                  <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                </TouchableOpacity>
              </View>
            )}

            {Warm ? (
              <></>
            ) : (
              <View
                style={[
                  Styles.campaignsFilterCardContainer,
                  {paddingLeft: hp('0.2%')},
                ]}>
                <WarmSVG width={hp('4%')} height={hp('2.1%')} />
                <Text style={Styles.campaignsFilterCardText}>Warm</Text>
                <TouchableOpacity
                  onPress={() => {
                    setWarm(true);
                  }}>
                  <DangerCircle width={hp('4%')} height={hp('2.5%')} />
                </TouchableOpacity>
              </View>
            )}

            {cold ? (
              <></>
            ) : (
              <View
                style={[
                  Styles.campaignsFilterCardContainer,
                  {paddingLeft: hp('0.2%')},
                ]}>
                <Cold width={hp('4%')} height={hp('2.1%')} />
                <Text style={Styles.campaignsFilterCardText}>Cold</Text>
                <TouchableOpacity
                  onPress={() => {
                    setCold(true);
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

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Today */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={CampaignDetailsNewTodayClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Today (4)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {isListTodayShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {isListTodayShown && (
                <FlatList
                  data={campaignDetailsNewListTodayData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View style={Styles.listItemDesign} />

                      <View style={Styles.listItemGroupTextContainer}>
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
                              <Building width={hp('2.5%')} height={hp('2%')} />

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
                        <View>
                          <Call
                            width={hp('5.5%')}
                            height={hp('5.5%')}
                            style={Styles.imageStyle}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>

            {/* Yesterday  */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={campaignDetailsNewYesterdayClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Yesterday (3)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {isListYesterdayShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {isListYesterdayShown && (
                <FlatList
                  data={campaignDetailsNewListYesterdayData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View style={Styles.listItemDesign} />

                      <View style={Styles.listItemGroupTextContainer}>
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
                              <Building width={hp('2.5%')} height={hp('2%')} />

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
                        <View>
                          <Call
                            width={hp('5.5%')}
                            height={hp('5.5%')}
                            style={Styles.imageStyle}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>

            {/* September */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={campaignDetailsNewSeptemberClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  5 September (1)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {isListSeptemberShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {isListSeptemberShown && (
                <FlatList
                  data={campaignDetailsNewListSeptemberData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View style={Styles.listItemDesign} />

                      <View style={Styles.listItemGroupTextContainer}>
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
                              <Building width={hp('2.5%')} height={hp('2%')} />

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
                        <View>
                          <Call
                            width={hp('5.5%')}
                            height={hp('5.5%')}
                            style={Styles.imageStyle}
                          />
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
        <View style={Styles.campaignDetailsNewContainer}>
          <View style={Styles.campaignsModalOpacity}>
            <ModalCards
              icon={<Hot />}
              title={'Hot'}
              value={0}
              warm={true}
              cold={true}
              hot={false}
            />
            <ModalCards
              icon={<WarmSVG />}
              title={'Warm'}
              value={0}
              cold={true}
              hot={true}
              warm={false}
            />
            <ModalCards
              icon={<Cold />}
              title={'Cold'}
              value={2}
              hot={true}
              warm={true}
              cold={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

//  REPLACE WITH API
const campaignDetailsNewListTodayData = [
  {
    id: 1,
    name: 'Ranjan Jadhav',
    status: 'Brochure downloaded',
    location: 'Morya Heights + 2',
    flatType: '2 BHK',
    calender: 'Today',
    details: 'About Ranjan Jadhav',
  },
  {
    id: 2,
    name: 'Sanjana Shetty',
    status: 'Callback requested',
    location: 'Morya Heights + 2',
    flatType: '2 BHK',
    calender: '1 Day ago',
    details: 'About Sanjana Shetty',
  },
  {
    id: 3,
    name: 'Arjun Malhotra',
    status: 'Brochure downloaded',
    location: 'Green Avenue',
    flatType: '4 BHK',
    calender: 'Today',
    details: 'About Arjun Malhotra',
  },
  {
    id: 4,
    name: 'Binod Sharma',
    status: 'Interest shown',
    location: 'Spandan Park',
    flatType: '4 BHK',
    calender: '2 Day ago',
    details: 'About Binod Sharma',
  },
];

const campaignDetailsNewListYesterdayData = [
  {
    id: 1,
    name: 'Gaurav Indani',
    status: 'Brochure downloaded',
    location: 'Green Avenue',
    flatType: '4 BHK',
    calender: '1 day ago',
    details: 'About Ranjan Jadhav',
  },
  {
    id: 2,
    name: 'Pooja Makane',
    status: 'Brochure downloaded',
    location: 'Morya Heights + 2',
    flatType: '2 BHK',
    calender: '1 Day ago',
    details: 'About Sanjana Shetty',
  },
  {
    id: 3,
    name: 'Siddhi Patnagar',
    status: 'Brochure downloaded',
    location: 'Spandan Park + 1',
    flatType: '3 BHK',
    calender: '2 day ago',
    details: 'About Arjun Malhotra',
  },
];

const campaignDetailsNewListSeptemberData = [
  {
    id: 1,
    name: 'Meenal Diwan',
    status: 'Interest shown',
    location: 'Lake Township',
    flatType: '2 BHK',
    calender: '3 Sep 2022',
    details: 'About Ranjan Jadhav',
  },
];

export default CampaignDetailsNew;

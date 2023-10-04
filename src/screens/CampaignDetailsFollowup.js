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
import Watch from '../assets/svg/Watch.svg';
import Building from '../assets/svg/Building.svg';

const CampaignDetailsFollowup = ({props}) => {
  const [isOverdueShown, setOverdueShown] = useState(false);

  const CampaignOverdueClick = () => {
    setOverdueShown(!isOverdueShown);
  };

  const [isTodayShown, setTodayShown] = useState(false);

  const campaignTodayClick = () => {
    setTodayShown(!isTodayShown);
  };

  const [isUpcomingShown, setUpcomingShown] = useState(false);

  const campaignUpcomingClick = () => {
    setUpcomingShown(!isUpcomingShown);
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

            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <CampaignsFilter width={hp('4%')} height={hp('4%')} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Overdue */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={CampaignOverdueClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Overdue (1)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {isOverdueShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {isOverdueShown && (
                <FlatList
                  data={campaignOverdueData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('13.5%')},
                          {backgroundColor: '#FFA61E'},
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
                              <Watch width={hp('2.5%')} height={hp('2%')} />

                              <Text style={Styles.followUpText}>
                                Follow-Up : {item.followUp}
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View>
                          <Call
                            width={hp('5.5%')}
                            height={hp('5.5%')}
                            style={[Styles.imageStyle, {marginTop: hp('5.%')}]}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>

            {/* Today  */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={campaignTodayClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Today (3)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {isTodayShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {isTodayShown && (
                <FlatList
                  data={campaignTodayData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('13.5%')},
                          {backgroundColor: '#FFA61E'},
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
                              <Watch width={hp('2.5%')} height={hp('2%')} />

                              <Text style={Styles.followUpText}>
                                Follow-Up : {item.followUp}
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View>
                          <Call
                            width={hp('5.5%')}
                            height={hp('5.5%')}
                            style={[Styles.imageStyle, {marginTop: hp('5.%')}]}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>

            {/* Upcoming   */}
            <View style={Styles.campaignDetailsNewCardContainer}>
              <TouchableOpacity
                onPress={campaignUpcomingClick}
                style={Styles.campaignDetailsNewCardTitleContainer}>
                <Text style={Styles.campaignDetailsNewCardTitleText}>
                  Upcoming (1)
                </Text>
                <View style={Styles.campaignDetailsNewCardArrowRight}>
                  {isUpcomingShown ? (
                    <BoldArrowDown width={hp('3.5%')} height={hp('3%')} />
                  ) : (
                    <BoldArrowRight width={hp('3.5%')} height={hp('3%')} />
                  )}
                </View>
              </TouchableOpacity>

              {isUpcomingShown && (
                <FlatList
                  data={campaignUpcomingData}
                  scrollEnabled={false}
                  renderItem={({item}) => (
                    <TouchableOpacity style={Styles.listItemsContainer}>
                      <View
                        style={[
                          Styles.listItemDesign,
                          {height: hp('13.5%')},
                          {backgroundColor: '#FFA61E'},
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
                              <Watch width={hp('2.5%')} height={hp('2%')} />

                              <Text style={Styles.followUpText}>
                                Follow-Up : {item.followUp}
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View>
                          <Call
                            width={hp('5.5%')}
                            height={hp('5.5%')}
                            style={[Styles.imageStyle, {marginTop: hp('5.%')}]}
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
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}>
          <View style={Styles.campaignDetailsNewContainer}>
            <View style={[Styles.campaignsModalOpacity, {height: hp('20%')}]}>
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
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

//  REPLACE WITH API
const campaignOverdueData = [
  {
    id: 1,
    name: 'Samiksha Magdum',
    status: 'Under negotiation',
    location: 'Morya Heights',
    flatType: '2 BHK',
    followUp: 'Yesterday 12:00 PM',
  },
];

const campaignTodayData = [
  {
    id: 1,
    name: 'Suraj Kadam',
    status: 'Callback requested',
    location: 'Morya Heights',
    flatType: '2 BHK',
    followUp: 'Yesterday 12:00 PM',
  },
  {
    id: 2,
    name: 'Arman Malik',
    status: 'Interested',
    location: 'Morya Heights',
    flatType: '2 BHK',
    followUp: 'Today 02:00 PM',
  },
  {
    id: 3,
    name: 'Sukesha Shinde',
    status: 'Site visit requested',
    location: 'Morya Heights',
    flatType: '2 BHK',
    followUp: 'Today 04:00 PM',
  },
];

const campaignUpcomingData = [
  {
    id: 1,
    name: 'Aditya Pancholi',
    status: 'Quotation sent',
    location: 'Morya Heights',
    flatType: '2 BHK',
    followUp: 'Tomorrow 10:00 AM',
  },
];

export default CampaignDetailsFollowup;

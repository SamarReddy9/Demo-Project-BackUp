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
                    <View style={Styles.listItemDesignContainer}>
                      <View style={Styles.listItemDesign}></View>

                      <TouchableOpacity
                        style={Styles.listItemContainer}
                        onPress={() => handleListItemClick(item.id)}>
                        <View
                          style={Styles.campaignDetailsNewCardInnerContainer}>
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
                          <View>
                            <Call
                              width={hp('5.5%')}
                              height={hp('5.5%')}
                              style={Styles.imageStyle}
                            />
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

          <View
            style={{
              backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // height: 50,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text>ONE</Text>
              <Text>TWO</Text>
            </View>
            <View Styles={{marginRight: -50}}>
              <Call
                // width={hp('5.5%')}
                // height={hp('5.5%')}
                style={Styles.image}
              />
            </View>
          </View>
        </View>
      </View>
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
];

export default CampaignDetailsNew;

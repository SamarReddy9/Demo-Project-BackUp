import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Header from './Header';
import Styles from '../config/Styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DangerCircle from '../assets/svg/CampaignsDangerCircle.svg';
import CampaignsFilter from '../assets/svg/CampaignsFilter.svg';

const Campaigns = props => {
  //Cards
  const campaignsTable = [
    {
      Total: 31,
      facebookList: [{New: '08', FollowUps: '05', Booked: '08', Lost: '10'}],

      emailTotal: 35,
      emailList: [{New: '12', FollowUps: '07', Booked: '05', Lost: '11'}],

      walkInTotal: 58,
      walkInList: [{New: '24', FollowUps: '12', Booked: '18', Lost: '05'}],

      bulkSMSTotal: 60,
      bulkSMSList: [{New: '17', FollowUps: '10', Booked: '13', Lost: '20'}],

      newspaperAdsTotal: 94,
      newspaperAdsList: [
        {New: '32', FollowUps: '21', Booked: '25', Lost: '16'},
      ],
    },
  ];

  return (
    <View style={Styles.container}>
      <Header {...props} title="Campaigns" />

      <View style={Styles.campaignsTopTableContainer}>
        <View style={Styles.campaignsTopTableRow}>
          <Text
            style={[
              Styles.campaignsTopTableCell,
              {borderTopLeftRadius: hp('1%')},
            ]}>
            Total Campaigns : 5
          </Text>
          <Text
            style={[
              Styles.campaignsTopTableCell,
              {borderLeftWidth: hp('0%'), borderTopRightRadius: hp('1%')},
            ]}>
            Total Leads : 472
          </Text>
        </View>
        <View style={Styles.campaignsTopTableRow}>
          <Text
            style={[
              Styles.campaignsTopTableCell,
              {borderTopWidth: hp('0%'), borderBottomWidth: hp('0%')},
            ]}>
            Total New : 48
          </Text>
          <Text
            style={[
              Styles.campaignsTopTableCell,
              {
                borderTopWidth: hp('0%'),
                borderBottomWidth: hp('0%'),
                borderLeftWidth: hp('0%'),
              },
            ]}>
            Total Follow-Ups : 262
          </Text>
        </View>
        <View style={Styles.campaignsTopTableRow}>
          <Text
            style={[
              Styles.campaignsTopTableCell,
              {borderBottomLeftRadius: hp('1%')},
            ]}>
            Total Booked : 69
          </Text>
          <Text
            style={[
              Styles.campaignsTopTableCell,
              {borderLeftWidth: hp('0%'), borderBottomRightRadius: hp('1%')},
            ]}>
            Total Lost : 93
          </Text>
        </View>
      </View>

      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={[Styles.reportsScreenContainer, {paddingTop: hp('2%')}]}>
          <View style={Styles.campaignsFilterContainer}>
            <View style={Styles.campaignsFilterCardContainer}>
              <Text style={Styles.campaignsFilterCardText}>Newest First</Text>
              <DangerCircle width={hp('4%')} height={hp('2.5%')} />
            </View>
            <View>
              <CampaignsFilter width={hp('4%')} height={hp('4%')} />
            </View>
          </View>

          <View style={Styles.TableDropDownContainer}>
            <FlatList
              data={campaignsTable}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <>
                  <View style={Styles.campaignsTableCardContainer}>
                    <View style={Styles.campaignsCardTitleContainer}>
                      <View style={Styles.campaignsCardTitleHeadTextContainer}>
                        <Text style={Styles.campaignsCardTitleText}>
                          Facebook Marketing
                        </Text>
                        <Text style={Styles.campaignsCardTitleTextTotal}>
                          Total : {item.facebookTotal}
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.tableListContainer}>
                      <FlatList
                        data={item.facebookList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                          <View style={Styles.campaignstableInnertableRow}>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.New}
                              </Text>
                              <Text style={Styles.campaignstableCell}>New</Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.FollowUps}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Follow-Ups
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Booked}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Booked
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Lost}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Lost
                              </Text>
                            </View>
                          </View>
                        )}
                      />
                    </View>
                  </View>

                  <View style={Styles.campaignsTableCardContainer}>
                    <View style={Styles.campaignsCardTitleContainer}>
                      <View style={Styles.campaignsCardTitleHeadTextContainer}>
                        <Text style={Styles.campaignsCardTitleText}>
                          Email Marketing
                        </Text>
                        <Text style={Styles.campaignsCardTitleTextTotal}>
                          Total : {item.emailTotal}
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.tableListContainer}>
                      <FlatList
                        data={item.emailList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                          <View style={Styles.campaignstableInnertableRow}>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.New}
                              </Text>
                              <Text style={Styles.campaignstableCell}>New</Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.FollowUps}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Follow-Ups
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Booked}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Booked
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Lost}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Lost
                              </Text>
                            </View>
                          </View>
                        )}
                      />
                    </View>
                  </View>

                  <View style={Styles.campaignsTableCardContainer}>
                    <View style={Styles.campaignsCardTitleContainer}>
                      <View style={Styles.campaignsCardTitleHeadTextContainer}>
                        <Text style={Styles.campaignsCardTitleText}>
                          Walk In
                        </Text>
                        <Text style={Styles.campaignsCardTitleTextTotal}>
                          Total : {item.walkInTotal}
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.tableListContainer}>
                      <FlatList
                        data={item.walkInList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                          <View style={Styles.campaignstableInnertableRow}>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.New}
                              </Text>
                              <Text style={Styles.campaignstableCell}>New</Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.FollowUps}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Follow-Ups
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Booked}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Booked
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Lost}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Lost
                              </Text>
                            </View>
                          </View>
                        )}
                      />
                    </View>
                  </View>

                  <View style={Styles.campaignsTableCardContainer}>
                    <View style={Styles.campaignsCardTitleContainer}>
                      <View style={Styles.campaignsCardTitleHeadTextContainer}>
                        <Text style={Styles.campaignsCardTitleText}>
                          Bulk SMS
                        </Text>
                        <Text style={Styles.campaignsCardTitleTextTotal}>
                          Total : {item.bulkSMSTotal}
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.tableListContainer}>
                      <FlatList
                        data={item.bulkSMSList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                          <View style={Styles.campaignstableInnertableRow}>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.New}
                              </Text>
                              <Text style={Styles.campaignstableCell}>New</Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.FollowUps}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Follow-Ups
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Booked}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Booked
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Lost}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Lost
                              </Text>
                            </View>
                          </View>
                        )}
                      />
                    </View>
                  </View>

                  <View style={Styles.campaignsTableCardContainer}>
                    <View style={Styles.campaignsCardTitleContainer}>
                      <View style={Styles.campaignsCardTitleHeadTextContainer}>
                        <Text style={Styles.campaignsCardTitleText}>
                          Newspaper Ads
                        </Text>
                        <Text style={Styles.campaignsCardTitleTextTotal}>
                          Total : {item.newspaperAdsTotal}
                        </Text>
                      </View>
                    </View>

                    <View style={Styles.tableListContainer}>
                      <FlatList
                        data={item.newspaperAdsList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                          <View style={Styles.campaignstableInnertableRow}>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.New}
                              </Text>
                              <Text style={Styles.campaignstableCell}>New</Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.FollowUps}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Follow-Ups
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Booked}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Booked
                              </Text>
                            </View>
                            <View
                              style={Styles.campaignstableInnerCardContainer}>
                              <Text style={Styles.campaignstableCellValues}>
                                {item.Lost}
                              </Text>
                              <Text style={Styles.campaignstableCell}>
                                Lost
                              </Text>
                            </View>
                          </View>
                        )}
                      />
                    </View>
                  </View>
                </>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Campaigns;

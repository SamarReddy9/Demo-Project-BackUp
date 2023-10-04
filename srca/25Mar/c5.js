import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import Header from './Header';
import Styles from '../config/Styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DangerCircle from '../assets/svg/CampaignsDangerCircle.svg';
import CampaignsFilter from '../assets/svg/CampaignsFilter.svg';

const Campaigns = props => {
  const campaignsCards = [
    {id: 1, title: 'Facebook Marketing', number: 31},
    {id: 2, title: 'Email Marketing', number: 35},
    {id: 3, title: 'Walk In', number: 58},
    {id: 4, title: 'Bulk SMS', number: 60},
    {id: 5, title: 'Newspaper Ads', number: 94},
  ];

  const [ascendingOrder, setAscendingOrder] = useState(false);

  const toggleOrder = () => {
    setAscendingOrder(!ascendingOrder);
  };

  const renderCards = () => {
    const sortedCards = ascendingOrder
      ? campaignsCards.slice().sort((a, b) => b.number - a.number)
      : campaignsCards.slice().sort((a, b) => a.number - b.number);

    return sortedCards.map(card => (
      <View key={card.id} style={styles.card}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.number}>{card.number}</Text>
      </View>
    ));
  };

  //Cards
  const campaignsTable = [
    {
      title: 'Facebook Marketing',
      total: 31,
      list: [{New: '08', FollowUps: '05', Booked: '08', Lost: '10'}],
    },

    {
      title: 'Email Marketing',
      total: 35,
      list: [{New: '12', FollowUps: '07', Booked: '05', Lost: '11'}],
    },
    {
      title: 'Walk In',
      total: 58,
      list: [{New: '24', FollowUps: '12', Booked: '18', Lost: '05'}],
    },
    {
      title: 'Bulk SMS',
      total: 60,
      list: [{New: '17', FollowUps: '10', Booked: '13', Lost: '20'}],
    },
    {
      title: 'Newspaper Ads',
      total: 94,
      list: [{New: '32', FollowUps: '21', Booked: '25', Lost: '16'}],
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
                <View style={Styles.campaignsTableCardContainer}>
                  <View style={Styles.campaignsCardTitleContainer}>
                    <View style={Styles.campaignsCardTitleHeadTextContainer}>
                      <Text style={Styles.campaignsCardTitleText}>
                        {item.title}
                      </Text>
                      <Text style={Styles.campaignsCardTitleTextTotal}>
                        Total : {item.total}
                      </Text>
                    </View>
                  </View>

                  <View style={Styles.tableListContainer}>
                    <FlatList
                      data={item.list}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => (
                        <View style={Styles.campaignstableInnertableRow}>
                          <View style={Styles.campaignstableInnerCardContainer}>
                            <Text style={Styles.campaignstableCellValues}>
                              {item.New}
                            </Text>
                            <Text style={Styles.campaignstableCell}>New</Text>
                          </View>
                          <View style={Styles.campaignstableInnerCardContainer}>
                            <Text style={Styles.campaignstableCellValues}>
                              {item.FollowUps}
                            </Text>
                            <Text style={Styles.campaignstableCell}>
                              Follow-Ups
                            </Text>
                          </View>
                          <View style={Styles.campaignstableInnerCardContainer}>
                            <Text style={Styles.campaignstableCellValues}>
                              {item.Booked}
                            </Text>
                            <Text style={Styles.campaignstableCell}>
                              Booked
                            </Text>
                          </View>
                          <View style={Styles.campaignstableInnerCardContainer}>
                            <Text style={Styles.campaignstableCellValues}>
                              {item.Lost}
                            </Text>
                            <Text style={Styles.campaignstableCell}>Lost</Text>
                          </View>
                        </View>
                      )}
                    />
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Campaigns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  number: {
    fontSize: 16,
  },
});

// <View>
// <View style={styles.container}>
//   <View style={styles.header}>
//     <TouchableOpacity onPress={toggleOrder} style={styles.button}>
//       <Text style={styles.buttonText}>
//         {ascendingOrder
//           ? 'Sort from Highest to Lowest Number'
//           : 'Sort from Lowest to Highest Number'}
//       </Text>
//     </TouchableOpacity>
//   </View>
//   <View style={styles.cardContainer}>{renderCards()}</View>
// </View>
// </View>

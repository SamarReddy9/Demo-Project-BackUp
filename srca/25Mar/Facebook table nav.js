import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {FONT_SIZE, COLOR, FONT} from '../config/Globles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BoldArrowRight from '../assets/svg/BoldArrowRight.svg';
import BoldArrowDown from '../assets/svg/BoldArrowDown.svg';
import Call from '../assets/svg/Call.svg';
import LocationPin from '../assets/svg/LocationPin.svg';
import Building from '../assets/svg/Building.svg';
import CalendarMini from '../assets/svg/CalendarMini.svg';
import Styles from '../config/Styles';

const CampaignDetailsNew = ({navigation}) => {
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
      status: 'Brochure downloaded',
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

  const [isListTodayShown, setIsListTodayShown] = useState(false);

  const CampaignDetailsNewTodayClick = () => {
    setIsListTodayShown(!isListTodayShown);
  };

  const [isListYesterdayShown, setIsListYesterdayShown] = useState(false);

  const CampaignDetailsNewYesterdayClick = () => {
    setIsListYesterdayShown(!isListYesterdayShown);
  };

  const handleListItemClick = itemId => {
    const selectedItem = campaignDetailsNewListTodayData.find(
      item => item.id === itemId,
    );
    navigation.navigate('Demo2', {item: selectedItem});
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={Styles.campaignDetailsNewCardContainer}>
        <TouchableOpacity
          onPress={CampaignDetailsNewTodayClick}
          style={Styles.campaignDetailsNewCardTitleContainer}>
          <Text style={Styles.campaignDetailsNewCardTitleText}>Today (4)</Text>
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
            renderItem={({item}) => (
              <View style={Styles.listItemDesignContainer}>
                <View style={Styles.listItemDesign}></View>

                <TouchableOpacity
                  style={Styles.listItemContainer}
                  onPress={() => handleListItemClick(item.id)}>
                  <View style={Styles.campaignDetailsNewCardInnerContainer}>
                    <View
                      style={Styles.campaignDetailsNewCardGroupDataContainer}>
                      <View style={Styles.nameAndStatusContainer}>
                        <Text style={Styles.listName}>{item.name}</Text>
                        <View style={Styles.listStatusContainer}>
                          <Text style={Styles.listStatus}>{item.status}</Text>
                        </View>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={[
                            Styles.listIconsContainer,
                            {marginLeft: hp('0.5%'), marginLeft: hp('-0.3%')},
                          ]}>
                          <LocationPin width={hp('2.5%')} height={hp('2%')} />

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
                          <CalendarMini width={hp('2.5%')} height={hp('2%')} />
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
    </View>
  );
};

// ---------------------------------------------------------------

const Demo2 = ({route}) => {
  const {item} = route.params;

  return (
    <View style={Styles.CampaignDetailsNewCardContainer}>
      <Text style={Styles.itemText}>{item.text}</Text>
      <Text style={Styles.detailsText}>{item.details}</Text>
    </View>
  );
};

const App = () => {
  const [routeName, setRouteName] = useState('Demo1');
  const [params, setParams] = useState(null);

  const navigate = (name, params) => {
    setRouteName(name);
    setParams(params);
  };

  const renderScreen = () => {
    switch (routeName) {
      case 'Demo1':
        return <CampaignDetailsNew navigation={{navigate}} />;
      case 'Demo2':
        return <Demo2 route={{params}} />;
      default:
        return null;
    }
  };

  return renderScreen();
};

export default App;

// -----------------------------------------------------

// --------------------------------------------------------------
// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// const newListData = [
//   {id: 1, text: 'List Item 1', details: 'aaaaaaaaaa'},
//   {id: 2, text: 'List Item 2', details: 'bbbbbbbbbb'},
//   {id: 3, text: 'List Item 3', details: 'cccccccccc'},
// ];

// const Demo = () => {
//   const [isListShown, setIsListShown] = useState(false);

//   const handleShyamClick = () => {
//     setIsListShown(!isListShown);
//   };

//   const handleListItemClick = itemId => {
//     // navigate to the screen for item details
//     // code here...
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleShyamClick}>
//           <Text style={styles.headerText}>Shyam</Text>
//         </TouchableOpacity>
//       </View>
//       {isListShown && (
//         <View style={styles.listContainer}>
//           {newListData.map(item => (
//             <TouchableOpacity
//               key={item.id}
//               style={styles.listItem}
//               onPress={() => handleListItemClick(item.id)}>
//               <Text style={styles.listItemText}>{item.text}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const Demo2 = () => {
//   // screen for item details
//   // code here...
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   header: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'gray',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     fontSize: 20,
//     color: 'white',
//   },
//   listContainer: {
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   listItem: {
//     width: '80%',
//     height: 50,
//     backgroundColor: 'lightgray',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   listItemText: {
//     fontSize: 16,
//     color: 'black',
//   },
// });

// export default Demo;

// -----------------------------------------------------------------------
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import React, {useState, useRef} from 'react';

// const Campaigns = () => {
//   const [listData, setListData] = useState([]);
//   const [scrollDirection, setScrollDirection] = useState('down');
//   const scrollViewRef = useRef();

//   const handleHeaderClick = () => {
//     const newListData = [
//       {id: 1, text: 'List Item 1' , details: 'aaaaaaaaaa'},
//       {id: 2, text: 'List Item 2' , details: 'bbbbbbbbbb'},
//       {id: 3, text: 'List Item 3' , details: 'cccccccccc'},
//     ];
//     navigate.navigation('Demo2')
//     setListData(newListData);

//     if (scrollDirection === 'down') {
//       scrollViewRef.current.scrollToEnd({animated: true});
//       setScrollDirection('up');
//     } else {
//       scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
//       setScrollDirection('down');
//     }
//   };

//   const handleRowClick = item => {
//     navigation.navigate('Details', {itemId: item.id});
//   };

//   return (
//     <ScrollView ref={scrollViewRef} scrollEnabled={true}>
//       <View>
//         <View style={styles.table}>
//           <View style={styles.headerRow}>
//             <Text style={styles.headerText} onPress={handleHeaderClick}>
//               Header Text
//             </Text>
//           </View>
//           <View style={styles.body}>
//             {listData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => handleRowClick(item)}>
//                 <Text style={styles.rowText}>{item.text}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Campaigns;

// const styles = StyleSheet.create({
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   headerRow: {
//     backgroundColor: '#eee',
//     padding: 10,
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   body: {
//     padding: 10,
//   },
//   rowText: {
//     fontSize: 14,
//     marginBottom: 10,
//   },
// });
// --------------------------------------------------------------------------
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   Modal,
//   TouchableOpacity,
// } from 'react-native';
// import Header from './Header';
// import Styles from '../config/Styles';
// import Hot from '../assets/svg/Hot.svg';
// import WarmSVG from '../assets/svg/Warm.svg';
// import Cold from '../assets/svg/Cold.svg';

// import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import DangerCircle from '../assets/svg/CampaignsDangerCircle.svg';
// import CampaignsFilter from '../assets/svg/CampaignsFilter.svg';

// const CampaignDetailsNew = ({props}) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [hot, setHot] = useState(true);
//   const [Warm, setWarm] = useState(true);
//   const [cold, setCold] = useState(true);
//   return (
//     <View style={Styles.container}>
//       <Header {...props} title="Facebook Marketing (31)" />

//       <View style={{flex: 1}}>
//         <View
//           showsVerticalScrollIndicator={true}
//           style={[Styles.reportsScreenContainer, {paddingTop: hp('2%')}]}>
//           <View style={Styles.campaignsFilterContainer}>
//             {hot ? (
//               <></>
//             ) : (
//               <View
//                 style={[
//                   Styles.campaignsFilterCardContainer,
//                   {paddingLeft: hp('0.5%')},
//                 ]}>
//                 <Hot width={hp('4%')} height={hp('2.2%')} />
//                 <Text style={Styles.campaignsFilterCardText}>Hot</Text>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setHot(true);
//                   }}>
//                   <DangerCircle width={hp('4%')} height={hp('2.5%')} />
//                 </TouchableOpacity>
//               </View>
//             )}

//             {Warm ? (
//               <></>
//             ) : (
//               <View
//                 style={[
//                   Styles.campaignsFilterCardContainer,
//                   {paddingLeft: hp('0.5%')},
//                 ]}>
//                 <WarmSVG width={hp('4%')} height={hp('2.2%')} />
//                 <Text style={Styles.campaignsFilterCardText}>Warm</Text>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setWarm(true);
//                   }}>
//                   <DangerCircle width={hp('4%')} height={hp('2.5%')} />
//                 </TouchableOpacity>
//               </View>
//             )}

//             {cold ? (
//               <></>
//             ) : (
//               <View
//                 style={[
//                   Styles.campaignsFilterCardContainer,
//                   {paddingLeft: hp('0.5%')},
//                 ]}>
//                 <Cold width={hp('4%')} height={hp('2.2%')} />
//                 <Text style={Styles.campaignsFilterCardText}>Cold</Text>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setCold(true);
//                   }}>
//                   <DangerCircle width={hp('4%')} height={hp('2.5%')} />
//                 </TouchableOpacity>
//               </View>
//             )}

//             <View>
//               <TouchableOpacity
//                 onPress={() => {
//                   setModalVisible(true);
//                 }}>
//                 <CampaignsFilter width={hp('4%')} height={hp('4%')} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <ScrollView showsVerticalScrollIndicator={false}>

//           </ScrollView>
//         </View>
//       </View>

//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={Styles.campaignDetailsNewContainer}>
//           <View style={Styles.campaignsModalOpacity}>
//             <View
//               style={[
//                 Styles.campaignsModalTextContainer,
//                 {marginBottom: 0, paddingBottom: 0},
//               ]}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setWarm(true);
//                   setCold(true);
//                   setHot(false);
//                   setModalVisible(false);
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Hot width={hp('4%')} height={hp('2.2%')} />
//                   <Text style={[Styles.campaignsModalText, {marginTop: -3}]}>
//                     Hot
//                   </Text>
//                   <View style={Styles.campaignsModalTextValueContainer}>
//                     <Text style={Styles.campaignsModalTextValues}>0</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <View
//               style={[
//                 Styles.campaignsModalTextContainer,
//                 {marginTop: hp('1.5%'), marginBottom: 0, paddingBottom: 0},
//               ]}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setHot(true);
//                   setCold(true);
//                   setWarm(false);
//                   setModalVisible(false);
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <WarmSVG width={hp('4%')} height={hp('2.2%')} />
//                   <Text style={[Styles.campaignsModalText, {marginTop: -3}]}>
//                     Warm
//                   </Text>
//                   <View style={Styles.campaignsModalTextValueContainer}>
//                     <Text style={Styles.campaignsModalTextValues}>0</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <View
//               style={[
//                 Styles.campaignsModalTextContainer,
//                 {marginTop: hp('1.5%')},
//               ]}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setHot(true);
//                   setWarm(true);
//                   setCold(false);
//                   setModalVisible(false);
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Cold width={hp('4%')} height={hp('2.2%')} />
//                   <Text style={[Styles.campaignsModalText, {marginTop: -3}]}>
//                     Cold
//                   </Text>
//                   <View style={Styles.campaignsModalTextValueContainer}>
//                     <Text style={Styles.campaignsModalTextValues}>2</Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default CampaignDetailsNew;

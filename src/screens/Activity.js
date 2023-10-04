import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView as ScrollView,
  text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Styles from '../config/Styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ClockIcon from '../assets/svg/Clock.svg';
import MapIcon from '../assets/svg/Map.svg';
import PlusIcon from '../assets/svg/Plus.svg';
import ArrowLeft from '../assets/svg/ArrowLeft.svg';
import YesTickIcon from '../assets/svg/YesTickIcon.svg';
import Calendar from '../assets/svg/Calendar.svg';
import TimeCircle from '../assets/svg/TimeCircle.svg';
import ArrowRight from '../assets/svg/ArrowRight.svg';
import ArrowDown from '../assets/svg/ArrowDown.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from './Header';

const ActivityList = props => {
  //Date and Time
  const [dateElement, setDateElement] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateElement;
    setShow(false);
    setDateElement(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  //Read More
  const [showMore, setShowMore] = useState(false);
  const [showMoreId, setShowMoreId] = useState();

  const showMoreHandilar = id => {
    setShowMore(!showMore);
    setShowMoreId(id);
  };

  //Modal
  const [modalVisible, setModalVisible] = useState(false);

  const [showDropdown, setshowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Internal Meeting');
  const DropDownOptions = [
    'Daily Standup Meeting',
    'Training Session',
    'Other',
  ];

  const handleOptionChange = value => {
    setSelectedOption(value);
    setshowDropdown(false);
  };

  const backNav = () => {
    setSelectedOption('Internal Meeting');
    setModalVisible(false);
  };

  //Form Data
  const [invitee, setInvitee] = useState('');
  const [meetingAgenda, setMeetingAgenda] = useState('');
  const [hostName, setHostName] = useState('');
  const [venue, setVenue] = useState('');

  const handilSubmit = () => {
    setActivityformData([
      ...activityformData,
      {
        invitee: invitee,
        activityType: selectedOption,
        meetingAgenda: meetingAgenda,
        hostImage:
          'https://c.ndtvimg.com/2022-03/6r4tpe2o_ys-jagan-mohan-reddyani_625x300_24_March_22.jpg',
        hostName: hostName,
        hostPosition: 'Team Leader',
        date: dateElement.toLocaleDateString(),
        time: dateElement.toLocaleTimeString(),
        venue: venue,
      },
    ]);

    setInvitee('');
    setMeetingAgenda('');
    setHostName('');
    setVenue('');
    setSelectedOption('Internal Meeting');
    setModalVisible(false);
  };

  const [activityformData, setActivityformData] = useState([
    {
      id: 1,
      invitee: 'Santosh Joshi',
      activityType: 'Internal meeting',
      meetingAgenda:
        'The color rose sits between red and magenta and is one  of the main colors associated with love and romance  The color rose sits between red and magenta and is one  of the main colors associated with love and romance.',
      hostName: 'Sumit Desai',
      hostPosition: 'Team Leader',
      hostImage:
        'https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg',
      date: 'Today at ',
      time: '04.00 pm',
      venue: 5,
    },
    {
      id: 2,
      invitee: 'You',
      activityType: 'Daily standup meeting',
      meetingAgenda:
        'Team hurdle lorem ipsum dolor sit amet.consectetu adipiscing elit.The color rose sits between red and magenta and is one  of the main colors associated with love  The color rose sits between red and magenta  ',
      hostImage:
        'https://c.ndtvimg.com/2022-03/6r4tpe2o_ys-jagan-mohan-reddyani_625x300_24_March_22.jpg',
      hostName: 'Pradeep Kumar',
      hostPosition: 'Project Head',
      date: 'Everyday at ',
      time: '11.00 Am',
      venue: 1,
    },
  ]);

  return (
    <View style={Styles.container}>
      <Header {...props} title="Activities" />

      <View style={Styles.activityScreenContainer}>
        <FlatList
          data={activityformData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={Styles.activityCardsContainer}>
              <View>
                <View style={Styles.activityCreatedByTextContainer}>
                  <Text style={Styles.createdByText}>
                    Created by: {item.invitee}
                  </Text>
                </View>

                <View style={Styles.activityCardContainer}>
                  <Text style={Styles.activityTypeText}>
                    {item.activityType}
                  </Text>

                  <View>
                    <Text
                      numberOfLines={
                        showMore ? (showMoreId === item.id ? undefined : 2) : 2
                      }
                      style={Styles.meetingAgenda}>
                      {item.meetingAgenda}
                    </Text>

                    {item.meetingAgenda.length > 100 ? (
                      <TouchableWithoutFeedback
                        onPress={() => showMoreHandilar(item.id)}>
                        <Text style={Styles.activityReadMoreText}>
                          {showMore
                            ? showMoreId === item.id
                              ? 'Show less'
                              : 'Read more'
                            : 'Read more'}
                        </Text>
                      </TouchableWithoutFeedback>
                    ) : null}
                  </View>

                  <View style={Styles.activityProfileAndHostContainer}>
                    <Image
                      source={{
                        uri: item.hostImage,
                      }}
                      style={Styles.profileImage}
                    />

                    <View style={Styles.activityHostAndPositionContainer}>
                      <Text style={Styles.activityHostTitleText}>Host</Text>
                      <View style={Styles.hostNameAndPositionContainer}>
                        {item.hostName.length > 1 ? (
                          <Text style={Styles.activityHostName}>
                            {item.hostName}
                          </Text>
                        ) : null}

                        <Text style={Styles.activityHostPosition}>
                          {item.hostPosition}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{backgroundColor: '#E4F5EE'}}>
                  <View style={Styles.dateAndVinueContainer}>
                    <View style={Styles.clockAndMapSvg}>
                      <ClockIcon width={hp('2.5%')} height={hp('1.8%')} />
                      <Text style={Styles.dataAndTimeText}>
                        {item.date} &nbsp;
                        {item.time}
                      </Text>
                    </View>

                    <View style={Styles.clockAndMapSvg}>
                      <MapIcon width={hp('2.5%')} height={hp('1.8%')} />
                      <Text
                        style={[
                          Styles.dataAndTimeText,
                          {marginRight: hp('0.3%')},
                        ]}>
                        Meeting room no. {item.venue}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />

        <View style={Styles.createActivityContainer}>
          <TouchableOpacity
            style={Styles.createActivityTextContainer}
            onPress={() => setModalVisible(true)}>
            <PlusIcon />
            <Text style={Styles.createActivityText}>Create Activity</Text>
          </TouchableOpacity>
        </View>

        {/* ------------------------------------- Add Activity Modal ---------------------------------------- */}

        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={[
              Styles.moduleActivityListContainer,
              {paddingTop: hp('5.8%')},
            ]}>
            <View style={Styles.modalActivityContainer}>
              <View style={Styles.modalActivityDropDownListContainer}>
                <TouchableOpacity
                  onPress={() => backNav()}
                  style={{padding: hp('1.7%')}}>
                  <ArrowLeft width={hp('3%')} height={hp('3%')} />
                </TouchableOpacity>
                <Text style={Styles.modalAddActivityTitleText}>
                  Add Activity
                </Text>
              </View>

              <ScrollView
                style={Styles.modalFormContainer}
                showsVerticalScrollIndicator={false}>
                <Text
                  style={[
                    Styles.modalActivityListTitleText,
                    {marginTop: hp('0%')},
                  ]}>
                  Activity Type
                </Text>

                <View style={Styles.modalDropDownDefaultTitleContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedOption('Internal Meeting');
                      setshowDropdown(!showDropdown);
                    }}
                    style={Styles.modalDropDownTextAndIconCantaier}>
                    <Text style={Styles.selectedOption}>{selectedOption}</Text>

                    {showDropdown ? (
                      <ArrowRight
                        style={Styles.modalDropDownArrowRightIcon}
                        width={hp('4%')}
                        height={hp('4.5%')}
                      />
                    ) : (
                      <ArrowDown
                        style={Styles.modalDropDownArrowDownIcon}
                        width={hp('2%')}
                        height={hp('4.5%')}
                      />
                    )}
                  </TouchableOpacity>

                  {showDropdown && (
                    <View>
                      {DropDownOptions.map(option => (
                        <TouchableOpacity
                          key={option}
                          onPress={() => handleOptionChange(option)}
                          style={Styles.modalDropDownOptions}>
                          <Text style={Styles.modalDropDownOptionText}>
                            {option}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>

                <Text style={Styles.modalActivityListTitleText}>Host</Text>
                <TextInput
                  style={Styles.modalActivityListTextInput}
                  placeholder="Select Host"
                  placeholderTextColor="black"
                  value={text}
                  onChangeText={value => setHostName(value)}
                />

                <Text style={Styles.modalActivityListTitleText}>Invitee</Text>
                <TextInput
                  style={Styles.modalActivityListTextInput}
                  placeholder="Select Invitees"
                  placeholderTextColor="black"
                  value={text}
                  onChangeText={value => setInvitee(value)}
                />

                <Text style={Styles.modalActivityListTitleText}>Venue</Text>
                <TextInput
                  style={Styles.modalActivityListTextInput}
                  placeholder="Select Venue"
                  placeholderTextColor="black"
                  value={text}
                  onChangeText={value => setVenue(value)}
                />

                <View style={Styles.modalDateAndTimeContainer}>
                  <View>
                    <Text style={Styles.modalActivityListTitleText}>Date</Text>

                    <View style={Styles.modalDateAndTimeInputFieldsContainer}>
                      <TextInput
                        style={Styles.modalTimeAndDateValue}
                        value={dateElement.toLocaleDateString()}
                        onChangeText={value => {
                          setDate(value);
                        }}
                      />
                      <TouchableOpacity onPress={showDatepicker}>
                        <Calendar style={{margin: hp('0.6%')}} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View>
                    <Text style={Styles.modalActivityListTitleText}>Time</Text>
                    <View style={Styles.modalDateAndTimeInputFieldsContainer}>
                      <TextInput
                        style={Styles.modalTimeAndDateValue}
                        value={dateElement.toLocaleTimeString()}
                        onChangeText={value => {
                          setTime(value);
                        }}
                      />

                      <TouchableOpacity onPress={showTimepicker}>
                        <TimeCircle style={{margin: hp('0.6%')}} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {show && (
                    <View>
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={dateElement}
                        mode={mode}
                        minimumDate={new Date()}
                        is24Hour={false}
                        display="default"
                        onChange={onChange}
                        style={{borderRadius: 30}}
                      />
                    </View>
                  )}
                </View>

                <Text style={Styles.modalActivityListTitleText}>
                  Meeting Agenda
                </Text>

                <ScrollView
                  style={Styles.modalMeetingAgendaContainer}
                  showsVerticalScrollIndicator={false}>
                  <TextInput
                    style={Styles.modalMeetingAgendaInputField}
                    placeholder="Write something about meeting"
                    multiline={true}
                    value={text}
                    onChangeText={value => setMeetingAgenda(value)}
                  />
                </ScrollView>

                <TouchableOpacity
                  onPress={handilSubmit}
                  style={{alignItems: 'center'}}>
                  <View style={Styles.modalSubmitContainer}>
                    <YesTickIcon />
                    <Text style={Styles.modalsubmitText}>Submit</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default ActivityList;

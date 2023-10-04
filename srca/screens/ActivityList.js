import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView as ScrollViewBase,
  text,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../config/Styles';

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
  const [form, setForm] = useState([
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
      time: '9.15 Am',
      venue: 5,
    },
    {
      id: 2,
      invitee: 'You',
      activityType: 'Daily standup meeting',
      meetingAgenda:
        'Team hurdle lorem ipsum dolor sit amet.consectetu adipiscing elit. ',
      hostImage:
        'https://c.ndtvimg.com/2022-03/6r4tpe2o_ys-jagan-mohan-reddyani_625x300_24_March_22.jpg',
      hostName: 'Pradeep Kumar',
      hostPosition: 'Project Head',
      date: 'Everyday at ',
      time: '4.15 Pm',
      venue: 1,
    },
  ]);

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

  //Second Screen
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
    setForm([
      ...form,
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

  return (
    <View style={styles.container}>
      <Header {...props} title="Activities" />

      <View style={styles.activityScreenContainer}>
        <FlatList
          data={form}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.flatListCardsContainer}>
              <View style={styles.containerpadding}>
                <View style={styles.createdByTextContainer}>
                  <Text style={styles.createdByText}>
                    Created by: {item.invitee}
                  </Text>
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.activityTypeText}>
                    {item.activityType}
                  </Text>

                  <View>
                    <Text
                      numberOfLines={
                        showMore ? (showMoreId === item.id ? undefined : 2) : 2
                      }
                      style={styles.meetingAgenda}>
                      {item.meetingAgenda}
                    </Text>

                    {item.meetingAgenda.length > 104 ? (
                      <TouchableWithoutFeedback
                        onPress={() => showMoreHandilar(item.id)}>
                        <Text style={styles.readMoreText}>
                          {showMore
                            ? showMoreId === item.id
                              ? 'Show less'
                              : 'Read more'
                            : 'Read more'}
                        </Text>
                      </TouchableWithoutFeedback>
                    ) : null}
                  </View>

                  <View style={styles.imageAndHostContentContainer}>
                    <Image
                      source={{
                        uri: item.hostImage,
                      }}
                      style={styles.profileImage}
                    />

                    <View style={styles.hostContainer}>
                      <Text style={styles.hostText}>Host</Text>
                      <Text style={styles.host}>
                        {item.hostName}
                        &nbsp;&nbsp;
                        <Text style={styles.hostPosition}>
                          {item.hostPosition}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{backgroundColor: '#E4F5EE'}}>
                  <View style={styles.dateAndVinueContainer}>
                    <View style={styles.clockIconAndItsData}>
                      <ClockIcon width={hp('2.5%')} height={hp('1.8%')} />
                      <Text style={styles.dataAndTime}>
                        {item.date} &nbsp;
                        {item.time}
                      </Text>
                    </View>

                    <View style={styles.clockIconAndItsData}>
                      <MapIcon width={hp('2.5%')} height={hp('1.8%')} />
                      <Text
                        style={[styles.dataAndTime, {marginRight: hp('0.3%')}]}>
                        Meeting room no. {item.venue}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />

        <View style={styles.createActivityContainer}>
          <TouchableOpacity
            style={styles.createActivityTop}
            onPress={() => setModalVisible(true)}>
            <PlusIcon />
            <Text style={styles.createActivityText}>Create Activity</Text>
          </TouchableOpacity>
        </View>

        {/* ------------------------------------------------------------------------------- */}

        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View
            style={[
              styles.moduleActivityListContainer,
              {paddingTop: hp('5.2%')},
            ]}>
            <View style={styles.moduleActivityContainer}>
              <View style={styles.moduleActivityListNavBtnContainer}>
                <TouchableOpacity
                  onPress={() => backNav()}
                  style={{padding: hp('1.7%')}}>
                  <ArrowLeft width={hp('3%')} height={hp('3%')} />
                </TouchableOpacity>
                <Text style={styles.AddActivityNavBtnText}>Add Activity</Text>
              </View>

              <ScrollViewBase
                style={styles.formContainer}
                showsVerticalScrollIndicator={false}>
                <Text
                  style={[
                    styles.moduleActivityListTitleText,
                    {marginTop: hp('0%')},
                  ]}>
                  Activity Type
                </Text>

                <View style={styles.dropDownDefaultItemContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedOption('Internal Meeting');
                      setshowDropdown(!showDropdown);
                    }}
                    style={styles.dropDownTextAndIconCantaier}>
                    <Text style={styles.selectedOption}>{selectedOption}</Text>

                    {showDropdown ? (
                      <ArrowRight style={styles.dropDownArrowRightIcon} />
                    ) : (
                      <ArrowDown style={styles.dropDownArrowDownIcon} />
                    )}
                  </TouchableOpacity>

                  {showDropdown && (
                    <View>
                      {DropDownOptions.map(option => (
                        <TouchableOpacity
                          key={option}
                          onPress={() => handleOptionChange(option)}
                          style={styles.dropDownOptionStyling}>
                          <Text style={styles.dropDownOptionText}>
                            {option}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>

                <Text style={styles.moduleActivityListTitleText}>Host</Text>
                <TextInput
                  style={styles.moduleActivityListTextInput}
                  placeholder="Select Host"
                  placeholderTextColor="black"
                  value={text}
                  onChangeText={value => setHostName(value)}
                />

                <Text style={styles.moduleActivityListTitleText}>Invitee</Text>
                <TextInput
                  style={styles.moduleActivityListTextInput}
                  placeholder="Select Invitees"
                  placeholderTextColor="black"
                  value={text}
                  onChangeText={value => setInvitee(value)}
                />

                <Text style={styles.moduleActivityListTitleText}>Venue</Text>
                <TextInput
                  style={styles.moduleActivityListTextInput}
                  placeholder="Select Venue"
                  placeholderTextColor="black"
                  value={text}
                  onChangeText={value => setVenue(value)}
                />

                <View style={styles.dateAndTimeContainer}>
                  <View>
                    <Text style={styles.moduleActivityListTitleText}>Date</Text>

                    <View style={styles.dateAndTimeInputFieldsContainer}>
                      <TextInput
                        style={styles.timeAndDateValue}
                        value={dateElement.toLocaleDateString()}
                        onChangeText={value => {
                          setDate(value);
                        }}
                      />
                      <TouchableOpacity onPress={showDatepicker}>
                        <Calendar style={{margin: 5}} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.moduleActivityListTitleText}>Time</Text>
                    <View style={styles.dateAndTimeInputFieldsContainer}>
                      <TextInput
                        style={styles.timeAndDateValue}
                        value={dateElement.toLocaleTimeString()}
                        onChangeText={value => {
                          setTime(value);
                        }}
                      />

                      <TouchableOpacity onPress={showTimepicker}>
                        <TimeCircle style={{margin: 5}} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={dateElement}
                      mode={mode}
                      minimumDate={new Date()}
                      is24Hour={false}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                </View>

                <Text style={styles.moduleActivityListTitleText}>
                  Meeting Agenda
                </Text>

                <ScrollViewBase
                  style={styles.meetingAgendaContainer}
                  showsVerticalScrollIndicator={false}>
                  <TextInput
                    style={styles.listMeetingAgenda}
                    placeholder="Write something about meeting"
                    multiline={true}
                    value={text}
                    onChangeText={value => setMeetingAgenda(value)}
                  />
                </ScrollViewBase>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.screenTwoSubmitContainer}
                    onPress={handilSubmit}>
                    <YesTickIcon />
                    <Text style={styles.submitNavBtnText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </ScrollViewBase>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default ActivityList;

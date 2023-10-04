import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useMemo} from 'react';
import Header from './Header';
import Styles from '../config/Styles';
import BlueArrowDown from '../assets/svg/BlueArrowDown';
import BlueArrowUp from '../assets/svg/BlueArrowDown';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BarChart} from 'react-native-gifted-charts';
import {FONT_SIZE, COLOR, FONT} from '../config/Globles';
import Calls from '../assets/svg/Calls.svg';
import Time from '../assets/svg/Time.svg';
import Sale from '../assets/svg/Sale.svg';
import InboundCalls from '../assets/svg/InboundCalls.svg';
import OutboundCalls from '../assets/svg/OutboundCalls.svg';
import Whatsapps from '../assets/svg/Whatsapps.svg';
import Emails from '../assets/svg/Emails.svg';
import SMS from '../assets/svg/SMS.svg';
import OfficeVisits from '../assets/svg/OfficeVisits.svg';
import Sitevisits from '../assets/svg/Sitevisits.svg';
import Meetings from '../assets/svg/Meetings.svg';

const ProductivityReport = props => {
  const [callingReportDropdown, setCallingReportDropdown] = useState(false);
  const [callingReportSelectedOption, setCallingReportSelectedOption] =
    useState('FY 2022 - 23');
  const callingReportDropDownOptions = [
    'Last month',
    'Current month',
    'This week',
    'Today',
  ];

  const callingReportHandleOptionChange = value => {
    setCallingReportSelectedOption(value);
    setCallingReportDropdown(false);
  };

  const callingReportsGraphInternalCards = [
    {
      value: 2800,
      label: '18-19',
      frontColor: '#00C7FE',
      topLabelComponent: () => (
        <Text
          style={{
            fontSize: FONT_SIZE.F_10,
            marginBottom: hp('0.3%'),
          }}>
          2800
        </Text>
      ),
    },
    {
      value: 1450,
      label: '19-20',
      frontColor: '#00C7FE',
      topLabelComponent: () => (
        <Text style={{fontSize: FONT_SIZE.F_10, marginBottom: hp('0.3%')}}>
          1450
        </Text>
      ),
    },
    {
      value: 2100,
      label: '20-21',
      frontColor: '#00C7FE',
      topLabelComponent: () => (
        <Text style={{fontSize: FONT_SIZE.F_10, marginBottom: hp('0.3%')}}>
          2100
        </Text>
      ),
    },
    {
      value: 2350,
      label: '21-22',
      frontColor: '#00C7FE',
      topLabelComponent: () => (
        <Text style={{fontSize: FONT_SIZE.F_10, marginBottom: hp('0.3%')}}>
          2350
        </Text>
      ),
    },
  ];

  const CallingReportGraphCards = props => {
    const {icon, title, value} = props;

    const memoizedCard = useMemo(
      () => (
        <View style={Styles.callingReportGraphSvgContainer}>
          <View style={Styles.callingReportGraphSvgAndTextContainer}>
            {icon}
            <View style={Styles.callingReportGraphTextContainer}>
              <Text style={Styles.callingReportGraphTitleText}>{title}</Text>
              <Text style={Styles.callingReportGraphTextValues}>{value}</Text>
            </View>
          </View>
        </View>
      ),
      [icon, title, value],
    );

    return memoizedCard;
  };

  const ProductivityReportCards = props => {
    const {icon, title, value} = props;

    const productivityReport = useMemo(
      () => (
        <View style={Styles.inboundCallsAndOutboundCallsContainer}>
          <View style={Styles.inboundCallsAndOutboundCallsImageContainer}>
            {icon}
            <View style={Styles.inboundCallsAndOutboundTextContainer}>
              <Text style={Styles.inboundCallsAndOutboundTitleText}>
                {title}
              </Text>
              <Text
                style={[
                  Styles.callingReportGraphTextValues,
                  {fontSize: FONT_SIZE.F_14},
                ]}>
                {value}
              </Text>
            </View>
          </View>
        </View>
      ),
      [icon, title, value],
    );
    return productivityReport;
  };

  return (
    <View style={Styles.container}>
      <Header {...props} title="Productivity report" />
      <ScrollView
        style={Styles.performanceReportsContainer}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.perRepTitleAndDropDownContainer}>
          <Text style={Styles.dropDownTitleText}>Calling report</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                setCallingReportSelectedOption('FY 2022 - 23');
                setCallingReportDropdown(!callingReportDropdown);
              }}
              style={Styles.perRepDropDownDefaultDataIconContainer}>
              <Text style={Styles.perRepDropDownTextInput}>
                {callingReportSelectedOption}
              </Text>

              {callingReportDropdown ? (
                <BlueArrowUp width={hp('3.5%')} height={hp('3%')} />
              ) : (
                <BlueArrowDown width={hp('3.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>

            {callingReportDropdown && (
              <View style={Styles.perRepDropDownListTextContainer}>
                {callingReportDropDownOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => callingReportHandleOptionChange(option)}
                    style={Styles.perRepDropDownList}>
                    <Text style={Styles.perRepDropDownListText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={[Styles.leadCategoryReportBarCharContainer]}>
          <View style={{flexDirection: 'row'}}>
            <CallingReportGraphCards
              icon={<Calls />}
              title={'Calls'}
              value={'4460'}
            />
            <CallingReportGraphCards
              icon={<Time />}
              title={'Time'}
              value={'180 Hrs'}
            />
            <CallingReportGraphCards
              icon={<Sale />}
              title={'Sale'}
              value={'5.35 Cr'}
            />
          </View>
          <BarChart
            noOfSections={5}
            data={callingReportsGraphInternalCards}
            height={170}
            barWidth={40}
            initialSpacing={23}
            spacing={31}
            hideRules
            yAxisThickness={0}
            xAxisThickness={0}
            barBorderRadius={2.5}
            yAxisLabelTexts={['500', '1000', '1500', '2000', '2500', '3000']}
            yAxisTextStyle={{
              fontSize: FONT_SIZE.F_13,
              height: hp('5.5%'),
            }}
            xAxisLabelTextStyle={{
              color: COLOR.DARK_BLUE,
              textAlign: 'center',
              marginRight: hp('0.9%'),
              fontSize: FONT_SIZE.F_13,
              fontFamily: FONT.MEDIUM,
            }}
          />
        </View>
        <View style={Styles.listOfinboundCallsAndMoreItemsContainer}>
          <View style={Styles.cardsContainer}>
            <ProductivityReportCards
              icon={<InboundCalls />}
              title={'InboundCalls'}
              value={'860'}
            />
            <ProductivityReportCards
              icon={<OutboundCalls />}
              title={'OutboundCalls'}
              value={'3600'}
            />
            <ProductivityReportCards
              icon={<Whatsapps />}
              title={'Whatsapps'}
              value={'1239'}
            />
            <ProductivityReportCards
              icon={<Emails />}
              title={'Emails'}
              value={'613'}
            />
            <ProductivityReportCards
              icon={<SMS />}
              title={'SMS'}
              value={'613'}
            />
            <ProductivityReportCards
              icon={<OfficeVisits />}
              title={'OfficeVisits'}
              value={'96'}
            />
            <ProductivityReportCards
              icon={<Sitevisits />}
              title={'Sitevisits'}
              value={'387'}
            />
            <ProductivityReportCards
              icon={<Meetings />}
              title={'Meetings'}
              value={'2301'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductivityReport;

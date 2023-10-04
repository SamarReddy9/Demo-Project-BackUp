import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import Styles from '../config/Styles';
import {FONT_SIZE, COLOR, FONT} from '../config/Globles';
import Header from './Header';
import BlueArrowDown from '../assets/svg/BlueArrowDown.svg';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BlueArrowUp from '../assets/svg/BlueArrowUp.svg';
import {BarChart} from 'react-native-gifted-charts';
import {PieChart} from 'react-native-gifted-charts';

const LeadReport = props => {
  //LeadCategoryReport-DropDown
  const [leadCategoryReportDropdown, setLeadCategoryReportDropdown] =
    useState(false);
  const [
    leadCategoryReportSelectedOption,
    setLeadCategoryReportSelectedOption,
  ] = useState('FY 2022 - 23');
  const leadCategoryReportDropDownOptions = [
    'Last month',
    'Current month',
    'This week',
    'Today',
  ];

  const leadCategoryReportHandleOptionChange = useCallback(value => {
    setLeadCategoryReportSelectedOption(value);
    setLeadCategoryReportDropdown(false);
  }, []);

  //BookLostReport-DropDown
  const [bookLostReportDropdown, setBookLostReportDropdown] = useState(false);
  const [bookLostReportSelectedOption, setBookLostReportSelectedOption] =
    useState('FY 2022 - 23');
  const bookLostReportDropDownOptions = [
    'Last month',
    'Current month',
    'This week',
    'Today',
  ];

  const bookLostReportHandleOptionChange = useCallback(value => {
    setBookLostReportSelectedOption(value);
    setBookLostReportDropdown(false);
  }, []);

  // LeadLostReasonReport
  const [leadLostReasonReportDropdown, setLeadLostReasonReportDropdown] =
    useState(false);
  const [
    leadLostReasonReportSelectedOption,
    setLeadLostReasonReportSelectedOption,
  ] = useState('FY 2022 - 23');
  const leadLostReasonReportDropDownOptions = [
    'Last month',
    'Current month',
    'This week',
    'Today',
  ];

  const leadLostReasonReportHandleOptionChange = useCallback(value => {
    setLeadLostReasonReportSelectedOption(value);
    setLeadLostReasonReportDropdown(false);
  }, []);

  // Lead Category Report - Graph
  const leadReportData = [
    {
      value: 52,
      label: 'Hot',
      frontColor: '#FF5238',
      topLabelComponent: () => (
        <Text
          style={{
            fontSize: hp('1.8%'),
            marginBottom: hp('0.6%'),
            fontFamily: FONT.REGULAR,
          }}>
          52
        </Text>
      ),
    },
    {
      value: 30,
      label: 'Warm',
      frontColor: '#FFA61E',
      topLabelComponent: () => (
        <Text
          style={{
            fontSize: hp('1.8%'),
            marginBottom: hp('0.6%'),
            fontFamily: FONT.REGULAR,
          }}>
          30
        </Text>
      ),
    },
    {
      value: 42,
      label: 'Cold',
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text
          style={{
            fontSize: hp('1.8%'),
            marginBottom: hp('0.6%'),
            fontFamily: FONT.REGULAR,
          }}>
          42
        </Text>
      ),
    },
  ];

  // bookLostReportBarData Graph
  const bookLostReportBarData = [
    {
      value: 20,
      label: 'Jan',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', left: 15},
      frontColor: '#37CF76',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>20</Text>
      ),
    },
    {
      value: 38,
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>38</Text>
      ),
    },
    {
      value: 30,
      label: 'Feb',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', left: 15},
      frontColor: '#37CF76',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>30</Text>
      ),
    },
    {
      value: 42,
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>42</Text>
      ),
    },
    {
      value: 28,
      label: 'Mar',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', left: 15},
      frontColor: '#37CF76',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>28</Text>
      ),
    },
    {
      value: 30,
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>30</Text>
      ),
    },
    {
      value: 40,
      label: 'Apr',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', left: 15},
      frontColor: '#37CF76',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>40</Text>
      ),
    },
    {
      value: 30,
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>30</Text>
      ),
    },
    {
      value: 10,
      label: 'May',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', left: 15},
      frontColor: '#37CF76',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>10</Text>
      ),
    },
    {
      value: 25,
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>25</Text>
      ),
    },
    {
      value: 15,
      label: 'Jun',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: 'gray', left: 15},
      frontColor: '#37CF76',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>15</Text>
      ),
    },
    {
      value: 50,
      frontColor: '#0057FF',
      topLabelComponent: () => (
        <Text style={Styles.bookLostReportBarTopLabel}>50</Text>
      ),
    },
  ];

  // leadLostReasonReportPieChart
  const leadLostReasonReportPieChart = [
    {value: 10, color: '#E45621', text: '10%'},
    {value: 12, color: '#FBAD56', text: '12%'},
    {value: 20, color: '#559E38', text: '20%'},
    {value: 8, color: '#C2C54F', text: '8%'},
    {value: 18, color: '#8C71D7', text: '18%'},
    {value: 25, color: '#73B0D7', text: '25%'},
    {value: 7, color: '#3359BA', text: '7%'},
  ];

  const leadLostReasonReportColors = [
    '#E45621',
    '#FBAD56',
    '#559E38',
    '#C2C54F',
    '#8C71D7',
    '#73B0D7',
    '#3359BA',
  ];
  const leadLostReasonReportCategories = [
    'Lost to competition',
    'Payment plan issue',
    'Possession timeline issue',
    'Design/size issue',
    'Budget/finance issue',
    'Pricing issue',
    'Specification issue',
  ];

  const bookedLostIcons = () => {
    return (
      <View style={Styles.bookedLostIconsContainer}>
        <View style={Styles.bookedLostContainer}>
          <View style={Styles.bookedLostBookedTextContainer} />
          <Text style={Styles.bookedLostBookedText}>Booked</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              Styles.bookedLostBookedTextContainer,
              {backgroundColor: '#0057FF'},
            ]}
          />
          <Text style={Styles.bookedLostBookedText}>Lost</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={Styles.container}>
      <Header {...props} title="Lead report" />
      <ScrollView
        style={Styles.performanceReportsContainer}
        showsVerticalScrollIndicator={false}>
        {/* LeadCategoryReport-DropDown */}
        <View style={Styles.perRepTitleAndDropDownContainer}>
          <Text style={Styles.dropDownTitleText}>Lead category report</Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                setLeadCategoryReportSelectedOption('FY 2022 - 23');
                setLeadCategoryReportDropdown(!leadCategoryReportDropdown);
              }}
              style={Styles.perRepDropDownDefaultDataIconContainer}>
              <Text style={Styles.perRepDropDownTextInput}>
                {leadCategoryReportSelectedOption}
              </Text>

              {leadCategoryReportDropdown ? (
                <BlueArrowUp width={hp('3.5%')} height={hp('3%')} />
              ) : (
                <BlueArrowDown width={hp('3.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>

            {leadCategoryReportDropdown && (
              <View style={Styles.perRepDropDownListTextContainer}>
                {leadCategoryReportDropDownOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => leadCategoryReportHandleOptionChange(option)}
                    style={Styles.perRepDropDownList}>
                    <Text style={Styles.perRepDropDownListText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={Styles.leadCategoryReportBarCharContainer}>
          <BarChart
            noOfSections={6}
            height={170}
            width={300}
            data={leadReportData}
            initialSpacing={38}
            spacing={38}
            barWidth={48}
            hideRules
            yAxisThickness={0}
            barBorderRadius={2.5}
            yAxisLabelTexts={['0', '10', '20', '30', '40', '50', '60']}
            xAxisThickness={1}
            yAxisTextStyle={{
              fontSize: FONT_SIZE.F_13,
            }}
            xAxisLabelTextStyle={{
              color: COLOR.DARK_BLUE,
              textAlign: 'center',
              marginRight: hp('1%'),
            }}
          />
        </View>

        {/* BookLostReport-DropDown */}
        <View style={Styles.perRepTitleAndDropDownContainer}>
          <Text style={Styles.dropDownTitleText}>Book-Lost report</Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                setBookLostReportSelectedOption('FY 2022 - 23');
                setBookLostReportDropdown(!bookLostReportDropdown);
              }}
              style={Styles.perRepDropDownDefaultDataIconContainer}>
              <Text style={Styles.perRepDropDownTextInput}>
                {bookLostReportSelectedOption}
              </Text>

              {bookLostReportDropdown ? (
                <BlueArrowUp width={hp('3.5%')} height={hp('3%')} />
              ) : (
                <BlueArrowDown width={hp('3.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>

            {bookLostReportDropdown && (
              <View style={Styles.perRepDropDownListTextContainer}>
                {bookLostReportDropDownOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => bookLostReportHandleOptionChange(option)}
                    style={Styles.perRepDropDownList}>
                    <Text style={Styles.perRepDropDownListText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View>
          <View
            style={[
              Styles.leadCategoryReportBarCharContainer,
              {paddingLeft: hp('1%'), paddingTop: hp('1%')},
            ]}>
            {bookedLostIcons()}
            <BarChart
              data={bookLostReportBarData}
              height={170}
              barWidth={19}
              initialSpacing={8}
              spacing={10.5}
              barBorderRadius={1.3}
              hideRules
              yAxisThickness={0}
              yAxisTextStyle={{color: '#747B84'}}
              noOfSections={6}
              yAxisLabelTexts={['0', '10', '20', '30', '40', '50', '60']}
              xAxisLabelTextStyle={{
                color: COLOR.DARK_BLUE,
                textAlign: 'center',
                marginRight: hp('1%'),
              }}
            />
          </View>
        </View>
        {/* LeadLostReasonReport */}
        <View style={Styles.perRepTitleAndDropDownContainer}>
          <Text style={Styles.dropDownTitleText}>Lead lost reason report</Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                setLeadLostReasonReportSelectedOption('FY 2022 - 23');
                setLeadLostReasonReportDropdown(!leadLostReasonReportDropdown);
              }}
              style={Styles.perRepDropDownDefaultDataIconContainer}>
              <Text style={Styles.perRepDropDownTextInput}>
                {leadLostReasonReportSelectedOption}
              </Text>

              {leadLostReasonReportDropdown ? (
                <BlueArrowUp width={hp('3.5%')} height={hp('3%')} />
              ) : (
                <BlueArrowDown width={hp('3.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>

            {leadLostReasonReportDropdown && (
              <View style={Styles.perRepDropDownListTextContainer}>
                {leadLostReasonReportDropDownOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() =>
                      leadLostReasonReportHandleOptionChange(option)
                    }
                    style={Styles.perRepDropDownList}>
                    <Text style={Styles.perRepDropDownListText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={Styles.leadLostReasonReportPieChartContainer}>
          <View style={{paddingTop: hp('2.0%')}}>
            <PieChart
              data={leadLostReasonReportPieChart}
              radius={73}
              showText
              textColor="white"
              textSize={10}
            />
          </View>

          <View style={Styles.typologyBudgetCategoriesContainer}>
            {leadLostReasonReportColors.map((color, index) => (
              <View
                key={index}
                style={Styles.typologyBudgetCategoriesPieChartContainer}>
                <View
                  style={[
                    Styles.typologyBudgetCategoriesPieChart,
                    {backgroundColor: color},
                  ]}
                />
                <Text style={Styles.typologyBudgetCategoriesPieChartText}>
                  {leadLostReasonReportCategories[index]}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LeadReport;

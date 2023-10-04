import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import BlueArrowDown from '../assets/svg/BlueArrowDown.svg';
import BlueArrowUp from '../assets/svg/BlueArrowUp';
import Styles from '../config/Styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from './Header';
import {PieChart} from 'react-native-gifted-charts';
import ConvertedLeads from '../assets/svg/ConvertedLeads.svg';
import TotalLeads from '../assets/svg/TotalLeads.svg';
import BookingValueSvg from '../assets/svg/BookingValue.svg';
import UnitsSvg from '../assets/svg/Units.svg';
import BoldArrowUp from '../assets/svg/BoldArrowUp.svg';
import BoldArrowDown from '../assets/svg/BoldArrowDown.svg';
import {FONT_SIZE} from '../config/Globles';

const PerformanceReports = props => {
  const [ratioShowDropdown, setratioShowDropdown] = useState(false);
  const [ratioSelectedOption, setRatioSelectedOption] =
    useState('FY 2022 - 23');

  const RatioDropDownOptions = [
    'Last month',
    'Current month',
    'This week',
    'Today',
  ];

  const ratioHandleOptionChange = value => {
    setRatioSelectedOption(value);
    setratioShowDropdown(false);
  };

  const [budgetShowDropdown, setbudgetShowDropdown] = useState(false);
  const [budgetSelectedOption, setbudgetSelectedOption] =
    useState('FY 2022 - 23');
  const budgetDropDownOptions = [
    'Last month',
    'Current month',
    'This week',
    'Today',
  ];

  const budgetHandleOptionChange = value => {
    setbudgetSelectedOption(value);
    setbudgetShowDropdown(false);
  };

  //Pie Chart - 1
  const saleConversionRatioPieChart = [
    {value: 35, color: '#37CF76', text: '35%'},
    {value: 65, color: '#0057FF', text: '65%'},
  ];

  const ConvertedLeadsCount = 38;
  const TotalLeadsCount = 536;

  //Pie Chart - 2
  const typologyAndBudgetPieChart = [
    {value: 35, color: '#EBCB38', text: '35%'},
    {value: 40, color: '#F36F13', text: '40%'},
    {value: 25, color: '#25AED6', text: '25%'},
  ];

  const BookingValuePrice = 86.56;
  const BookingUnits = 86.56;

  const BHKColors = ['#EBCB38', '#F36F13', '#25AED6'];
  const BHKCategories = ['1 BHK (21)', '2 BHK (13)', '3 BHK (4)'];

  //DropDown Tables
  const dropDownTable = [
    {
      title: '1 BHK',
      bookingCountValue: '6.86 Cr',
      bookingUnitValue: '21',
      bookingPercentageValue: '35',
      list: [
        {budget: '15 - 25', bookingValue: '50 L', units: 3, percentage: '0.8'},
        {budget: '25 - 35', bookingValue: '60 L', units: 2, percentage: '1'},
        {budget: '35 - 45', bookingValue: '3.6 Cr', units: 12, percentage: '3'},
        {budget: '45 - 55', bookingValue: '45 L', units: 1, percentage: '0.2'},
        {budget: '55 - 65', bookingValue: '1 Cr', units: 2, percentage: '0.4'},
        {budget: '65 - 75', bookingValue: '71 Lc', units: 1, percentage: '0.2'},
      ],
    },
    {
      title: '2 BHK',
      bookingCountValue: '14.31 Cr',
      bookingUnitValue: '13',
      bookingPercentageValue: '40',
      list: [
        {budget: '15 - 25', bookingValue: '50 L', units: 3, percentage: '0.8'},
        {budget: '25 - 35', bookingValue: '60 L', units: 2, percentage: '1'},
        {budget: '35 - 45', bookingValue: '3.6 Cr', units: 12, percentage: '3'},
        {budget: '45 - 55', bookingValue: '45 L', units: 1, percentage: '0.2'},
        {budget: '55 - 65', bookingValue: '1 Cr', units: 2, percentage: '0.4'},
        {budget: '65 - 75', bookingValue: '71 Lc', units: 1, percentage: '0.2'},
      ],
    },
    {
      title: '3 BHK',
      bookingCountValue: '8.67 Cr',
      bookingUnitValue: '4',
      bookingPercentageValue: '25',
      list: [
        {budget: '15 - 25', bookingValue: '50 L', units: 3, percentage: '0.8'},
        {budget: '25 - 35', bookingValue: '60 L', units: 2, percentage: '1'},
        {budget: '35 - 45', bookingValue: '3.6 Cr', units: 12, percentage: '3'},
        {budget: '45 - 55', bookingValue: '45 L', units: 1, percentage: '0.2'},
        {budget: '55 - 65', bookingValue: '1 Cr', units: 2, percentage: '0.4'},
        {budget: '65 - 75', bookingValue: '71 Lc', units: 1, percentage: '0.2'},
      ],
    },
  ];

  const [showTable, setShowTable] = useState(false);
  const toggleTable = index => {
    setShowTable({...showTable, [index]: !showTable[index]});
  };

  return (
    <View style={Styles.container}>
      <Header {...props} title="Performance reports" />
      <ScrollView
        style={Styles.performanceReportsContainer}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.perRepTitleAndDropDownContainer}>
          <Text style={Styles.dropDownTitleText}>
            Sale conversion ratio &nbsp;
            <Text style={[Styles.dropDownTitleText, {color: '#9747FF'}]}>
              35%
            </Text>
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                setRatioSelectedOption('FY 2022 - 23');
                setratioShowDropdown(!ratioShowDropdown);
              }}
              style={Styles.perRepDropDownDefaultDataIconContainer}>
              <Text style={Styles.perRepDropDownTextInput}>
                {ratioSelectedOption}
              </Text>

              {ratioShowDropdown ? (
                <BlueArrowUp width={hp('3.5%')} height={hp('3%')} />
              ) : (
                <BlueArrowDown width={hp('3.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>

            {ratioShowDropdown && (
              <View style={Styles.perRepDropDownListTextContainer}>
                {RatioDropDownOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => ratioHandleOptionChange(option)}
                    style={Styles.perRepDropDownList}>
                    <Text style={Styles.perRepDropDownListText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={Styles.leadsContainer}>
          <PieChart
            key={saleConversionRatioPieChart.value}
            showText
            textColor="white"
            radius={65}
            textSize={15}
            data={saleConversionRatioPieChart}
          />
          <View>
            <View style={Styles.convertedLeadsContainer}>
              <ConvertedLeads width={hp('6%')} height={hp('6%')} />
              <View style={Styles.convertedLeadsTextContainer}>
                <Text style={Styles.convertedLeadsTitle}>Converted leads</Text>
                <Text style={Styles.convertedLeadsValue}>
                  {ConvertedLeadsCount}
                </Text>
              </View>
            </View>
            <View style={Styles.convertedLeadsContainer}>
              <TotalLeads width={hp('6%')} height={hp('6%')} />
              <View style={Styles.convertedLeadsTextContainer}>
                <Text style={Styles.convertedLeadsTitle}> Total leads</Text>
                <Text style={Styles.convertedLeadsValue}>
                  {TotalLeadsCount}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.bookingValueUnitsContainer}>
          <View style={Styles.bookingValueUnitsSvgContainer}>
            <BookingValueSvg width={hp('6%')} height={hp('6%')} />
            <View style={Styles.convertedLeadsTextContainer}>
              <Text
                style={[
                  Styles.convertedLeadsTitle,
                  {fontSize: FONT_SIZE.F_10},
                ]}>
                Booking value
              </Text>
              <Text style={Styles.convertedLeadsValue}>
                {BookingValuePrice} Lac
              </Text>
            </View>
          </View>
          <View
            style={[
              Styles.bookingValueUnitsSvgContainer,
              {paddingRight: hp('5%')},
            ]}>
            <UnitsSvg width={hp('6%')} height={hp('6%')} />
            <View style={Styles.convertedLeadsTextContainer}>
              <Text
                style={[
                  Styles.convertedLeadsTitle,
                  {fontSize: FONT_SIZE.F_10},
                ]}>
                Units
              </Text>
              <Text style={Styles.convertedLeadsValue}>{BookingUnits}</Text>
            </View>
          </View>
        </View>

        <View style={Styles.perRepTitleAndDropDownContainer}>
          <Text style={Styles.dropDownTitleText}>Typology & Budget</Text>

          <View>
            <TouchableOpacity
              onPress={() => {
                setbudgetSelectedOption('FY 2022 - 23');
                setbudgetShowDropdown(!budgetShowDropdown);
              }}
              style={Styles.perRepDropDownDefaultDataIconContainer}>
              <Text style={Styles.perRepDropDownTextInput}>
                {budgetSelectedOption}
              </Text>

              {budgetShowDropdown ? (
                <BlueArrowUp width={hp('3.5%')} height={hp('3%')} />
              ) : (
                <BlueArrowDown width={hp('3.5%')} height={hp('3%')} />
              )}
            </TouchableOpacity>
            {budgetShowDropdown && (
              <View style={Styles.perRepDropDownListTextContainer}>
                {budgetDropDownOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => budgetHandleOptionChange(option)}
                    style={Styles.perRepDropDownList}>
                    <Text style={Styles.perRepDropDownListText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={Styles.leadsContainer}>
            <PieChart
              data={typologyAndBudgetPieChart}
              radius={65}
              showText
              textColor="white"
              textSize={13}
            />

            <View style={Styles.typologyBudgetCategoriesContainer}>
              {BHKColors.map((color, index) => (
                <View key={index} style={Styles.TypologyBudgetItem}>
                  <View
                    style={[
                      Styles.TypologyBudgetColor,
                      {backgroundColor: color},
                    ]}
                  />
                  <Text style={Styles.TypologyBudgetText}>
                    {BHKCategories[index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={Styles.TableDropDownContainer}>
          <FlatList
            data={dropDownTable}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({item, index}) => (
              <View style={{flex: 1}}>
                <View style={Styles.tableContainer}>
                  <TouchableOpacity
                    onPress={() => toggleTable(index)}
                    style={Styles.tableHeadContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={Styles.tableHeadText}>
                        <Text
                          style={[
                            Styles.bhkTableTitle,
                            {fontSize: FONT_SIZE.F_14},
                          ]}>
                          {item.title}
                        </Text>
                      </View>
                      <View
                        style={[Styles.tableHeadText, {marginLeft: hp('2%')}]}>
                        <Text style={Styles.tableHeaderTopLayerText}>
                          Booking value
                        </Text>
                        <Text
                          style={[
                            Styles.bhkTableTitle,
                            {marginLeft: hp('0.9%')},
                          ]}>
                          {item.bookingCountValue}
                        </Text>
                      </View>

                      <View
                        style={[Styles.tableHeadText, {marginLeft: hp('1%')}]}>
                        <Text style={Styles.tableHeaderTopLayerText}>
                          Units
                        </Text>
                        <Text
                          style={[
                            Styles.bhkTableTitle,
                            {marginLeft: hp('0.5%')},
                          ]}>
                          {item.bookingUnitValue}
                        </Text>
                      </View>
                      <View
                        style={[Styles.tableHeadText, {marginLeft: hp('3%')}]}>
                        <Text style={Styles.tableHeaderTopLayerText}>
                          Percentage
                        </Text>
                        <Text
                          style={[
                            Styles.bhkTableTitle,
                            {marginLeft: hp('2%')},
                          ]}>
                          {item.bookingPercentageValue} %
                        </Text>
                      </View>
                      <View style={Styles.tableHeadSVG}>
                        {showTable[index] ? (
                          <BoldArrowUp width={hp('4.5%')} height={hp('3%')} />
                        ) : (
                          <BoldArrowDown width={hp('4.5%')} height={hp('3%')} />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>

                  <View style={Styles.tableListContainer}>
                    {showTable[index] && (
                      <View
                        style={[
                          {display: showTable ? 'flex' : 'none'},
                          Styles.tableListItemsContainer,
                        ]}>
                        <View style={Styles.tableSubTitleContainer}>
                          <Text
                            style={[
                              Styles.tableSubTitleContainer,
                              {paddingLeft: hp('2.5%')},
                            ]}>
                            Budget
                          </Text>
                          <Text style={Styles.performanceReportsTableSubTitles}>
                            Booking Value
                          </Text>
                          <Text style={Styles.performanceReportsTableSubTitles}>
                            Units
                          </Text>
                          <Text>Percentage</Text>
                          <Text></Text>
                        </View>

                        <FlatList
                          data={item.list}
                          keyExtractor={(item, index) => index.toString()}
                          showsVerticalScrollIndicator={false}
                          renderItem={({item}) => (
                            <View style={Styles.performanceReportsTableRow}>
                              <Text style={Styles.performanceReportsTableCell}>
                                {item.budget}
                              </Text>
                              <Text style={Styles.performanceReportsTableCell}>
                                {item.bookingValue}
                              </Text>
                              <Text style={Styles.performanceReportsTableCell}>
                                {item.units}
                              </Text>
                              <Text style={Styles.performanceReportsTableCell}>
                                {item.percentage}
                              </Text>
                            </View>
                          )}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PerformanceReports;

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Styles from '../config/Styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ReportArrowRightIcon from '../assets/svg/ReportArrowRightIcon.svg';

const Reports = ({props, navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={{flex: 1}}>
        <Header {...props} title="Reports" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[Styles.reportsScreenContainer, {paddingTop: hp('5.5%')}]}>
          <View>
            <TouchableOpacity
              style={[
                Styles.reportsTextContainer,
                {
                  backgroundColor: '#E4F5EE',
                },
              ]}
              onPress={() => navigation.navigate('PerformanceReports')}>
              <View>
                <Text style={Styles.reportTitleText}>Performance report</Text>
                <Text style={Styles.reportDescriptionText}>
                  sales conversion ratio, Typology & budget
                </Text>
              </View>
              <ReportArrowRightIcon width={hp('1.5%')} height={hp('1.5%')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.reportsTextContainer,
                {
                  backgroundColor: 'rgba(146, 14,227,0.1)',
                },
              ]}
              onPress={() => navigation.navigate('LeadReport')}>
              <View>
                <Text style={Styles.reportTitleText}>Lead report</Text>
                <Text style={Styles.reportDescriptionText}>
                  Lead category, book-lost report, lead lost reason
                </Text>
              </View>
              <ReportArrowRightIcon width={hp('1.5%')} height={hp('1.5%')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.reportsTextContainer,
                {
                  backgroundColor: '#E6FAFF',
                },
              ]}
              onPress={() => navigation.navigate('ProductivityReport')}>
              <View>
                <Text style={Styles.reportTitleText}>Productivity report</Text>
                <Text style={Styles.reportDescriptionText}>
                  Calling and other action report
                </Text>
              </View>
              <ReportArrowRightIcon width={hp('1.5%')} height={hp('1.5%')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Reports;

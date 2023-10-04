import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

const Footer = ({navigation}) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerMultyTextContainer}>
        <TouchableOpacity
          style={styles.footerTextContainer}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.alertText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTextContainer}>
          <Text style={styles.alertText}>My Leads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTextContainer}>
          <Text style={styles.alertText}>Add Leads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTextContainer}>
          <Text style={styles.alertText}>Follow-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0,
  },
  footerMultyTextContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%',
    backgroundColor: '#e5e5e5',
  },
  footerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '22%',
  },
  alertText: {
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Footer;

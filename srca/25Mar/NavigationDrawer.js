import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const NavigationDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer}>
        <View style={styles.hamburger}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </View>
      </TouchableOpacity>
      {drawerOpen && (
        <View style={styles.drawer}>
          <Text style={styles.link}>Link 1</Text>
          <Text style={styles.link}>Link 2</Text>
          <Text style={styles.link}>Link 3</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    height: 60,
    padding: 10,
    width: '100%',
  },
  hamburger: {
    width: 25,
    height: 20,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 3,
    backgroundColor: '#333',
    borderRadius: 3,
  },
  drawer: {
    backgroundColor: '#fff',
    padding: 20,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  link: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default NavigationDrawer;

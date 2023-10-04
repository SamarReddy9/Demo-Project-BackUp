import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Splash from './Splash';
import LeadReport from './LeadReport';
import Register from './Register';
import HomeIcon from '../assets/svg/Call.svg';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Register"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <HomeIcon width={size} height={size} fill={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Splash" component={Splash} />
      <Tab.Screen name="LeadReport" component={LeadReport} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
};

export default Footer;

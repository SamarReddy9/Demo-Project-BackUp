import React from 'react';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import SetNewPassword from './src/screens/SetNewPassword';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import EnterOTP from './src/components/EnterOTP';
import ResetPassword from './src/screens/ResetPassword';
import Activity from './src/screens/Activity';
import Reports from './src/screens/Reports';
import PerformanceReports from './src/screens/PerformanceReports';
import LeadReport from './src/screens/LeadReport';
import ProductivityReport from './src/screens/ProductivityReport';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Campaigns from './src/screens/Campaigns';
import CampaignDetailsNew from './src/screens/CampaignDetailsNew';
import CampaignDetailsFollowup from './src/screens/CampaignDetailsFollowup';
import CampaignDetailsBooked from './src/screens/CampaignDetailsBooked';
import CampaignDetailsLost from './src/screens/CampaignDetailsLost';

import Demo from './src/screens/Demo';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ActivityList" component={Activity} />
        <Stack.Screen name="Report" component={Reports} />
        <Stack.Screen
          name="PerformanceReports"
          component={PerformanceReports}
        />
        <Stack.Screen name="LeadReport" component={LeadReport} />
        <Stack.Screen
          name="ProductivityReport"
          component={ProductivityReport}
        />
        <Stack.Screen name="Campaigns" component={Campaigns} />
        <Stack.Screen
          name="CampaignDetailsNew"
          component={CampaignDetailsNew}
        />
        <Stack.Screen
          name="CampaignDetailsFollowup"
          component={CampaignDetailsFollowup}
        />
        <Stack.Screen
          name="CampaignDetailsBooked"
          component={CampaignDetailsBooked}
        />
        <Stack.Screen
          name="CampaignDetailsLost"
          component={CampaignDetailsLost}
        />

        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

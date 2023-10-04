import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigation(navigation) {
  return (
    <>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Activity" component={ActivityList} />
        <Drawer.Screen name="Report" component={Reports} />
        <Drawer.Screen name="Campaigns" component={Campaigns} />
        <Drawer.Screen name="Register" component={Home} />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigation;

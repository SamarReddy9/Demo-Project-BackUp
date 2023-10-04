import {View, Button} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{margin: 20}}>
        <Button
          title="Register Screens"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
      <View style={{margin: 20}}>
        <Button
          title="Activity List"
          onPress={() => navigation.navigate('ActivityList')}
        />
      </View>
      <View style={{margin: 20}}>
        <Button title="Report" onPress={() => navigation.navigate('Report')} />
      </View>
      <View style={{margin: 20}}>
        <Button
          title="Campaigns"
          onPress={() => navigation.navigate('Campaigns')}
        />
      </View>
      <View style={{margin: 20}}>
        <Button title="Demo" onPress={() => navigation.navigate('Demo')} />
      </View>
    </View>
  );
};

export default Home;

import {View, Button} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{width: hp('20%')}}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
      <View style={{marginTop: hp('2.5%'), width: hp('20%')}}>
        <Button
          title="Activity"
          onPress={() => navigation.navigate('ActivityList')}
        />
      </View>
      <View style={{marginTop: hp('2.5%'), width: hp('20%')}}>
        <Button title="Report" onPress={() => navigation.navigate('Report')} />
      </View>
      <View style={{marginTop: hp('2.5%'), width: hp('20%')}}>
        <Button
          title="Campaigns"
          onPress={() => navigation.navigate('Campaigns')}
        />
      </View>
      <View style={{marginTop: hp('2.5%'), width: hp('20%')}}>
        <Button title="Demo" onPress={() => navigation.navigate('Demo')} />
      </View>
    </View>
  );
};

export default Home;

import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Picture from './pic/Picture.svg';
const Demo = () => {
  const country = [
    {key: 1, name: 'Shyam', rank: '101'},
    {key: 2, name: 'One', rank: '132'},
    {key: 3, name: 'Shyam', rank: '121'},
    {key: 4, name: 'Cat', rank: '441'},
    {key: 5, name: 'Shyam', rank: '976'},
  ];
  return (
    <View>
      <Text>Country Information : </Text>
      <View>
        <FlatList
          data={country}
          numColumns={3}
          renderItem={({item}) => (
            <Text>
              {item.key}. {item.name} 
            </Text>
          )}
        />
      </View>
      <View>
        <Picture />
      </View>
    </View>
  );
};

export default Demo;

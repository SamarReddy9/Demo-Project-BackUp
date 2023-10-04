import React, {useState} from 'react';
import {View, TextInput, Button, Text, FlatList} from 'react-native';
import {postData} from '../store/apiStore';
import {useSelector, useDispatch} from 'react-redux';

const Demo = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const apiData = useSelector(state => state.apiData);

  const incHandilar = () => {
    dispatch({type: 'INC'});
  };
  const decHandilar = () => {
    dispatch({type: 'DEC'});
  };
  const resHandilar = () => {
    dispatch({type: 'RES'});
  };
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handlePost = () => {
    dispatch(postData(title, body));
    setTitle('');
    setBody('');
  };

  return (
    <View>
      <Text>count : {count}</Text>
      <Button title="Increse" onPress={incHandilar} />
      <Button title="Decrese" onPress={decHandilar} />
      <Button title="Reset" onPress={resHandilar} />
      <FlatList
        data={apiData}
        renderItem={({item}) => (
          <View key={item.id} style={{flexDirection: 'row'}}>
            <Text>{item.id}&nbsp;&nbsp;</Text>
            <Text>{item.title}&nbsp;&nbsp;</Text>
            <Text style={{color: 'red'}}> --&gt; {item.body} </Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text>Loading...</Text>}
      />

      <View>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          style={{padding: 10}}
        />
        <TextInput
          value={body}
          onChangeText={setBody}
          placeholder="Body"
          style={{padding: 10}}
        />
        <Button title="Post" onPress={handlePost} />
      </View>
    </View>
  );
};

export default Demo;

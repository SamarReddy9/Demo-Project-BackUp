//POST AND GET
import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, FlatList, Text} from 'react-native';
import axios from 'axios';

const Demo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    axios
      .post('https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts', {
        title,
        content,
      })
      .then(response => {
        setData([...data, response.data]);
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Title"
      />
      <TextInput
        onChangeText={text => setContent(text)}
        value={content}
        placeholder="Content"
      />
      <Button onPress={handleSubmit} title="Submit" />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text>{item.id} . &nbsp;</Text>
              <Text>{item.title} &nbsp;&nbsp;</Text>
              <Text style={{fontWeight: 'bold'}}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Demo;
// ------------------------------------------------------------------------------------------------
//GET ASYNC

// import {View, Text, FlatList} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// const Demo = () => {
//   //post data

//   const [apiData, setApiData] = useState(null);

// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   const response = await axios
//     .get('https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts')
//     .catch(error => console.log(error));
//   setApiData(response.data);
// };

//   return (
//     <View>
//       {apiData == null ? (
//         <Text
//           style={{
//             fontSize: 50,
//             alignSelf: 'center',
//             justifyContent: 'center',
//             color: 'black',
//           }}>
//           Loading...
//         </Text>
//       ) : (
//         <Text
//           style={{
//             margin: 15,
//           }}>
//           <FlatList
//             data={apiData}
//             showsVerticalScrollIndicator={false}
//             renderItem={({item}) => (
//               <Text>
//                 <Text>{item.id} . </Text> <Text>{item.title}</Text>
//               </Text>
//             )}
//           />
//         </Text>
//       )}
//     </View>
//   );
// };

// export default Demo;

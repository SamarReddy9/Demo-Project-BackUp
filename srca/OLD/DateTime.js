import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <Text>Selected date and time: {date.toLocaleString()}</Text>
      <Button title="Show DatePicker" onPress={showDatepicker} />
      <Button title="Show TimePicker" onPress={showTimepicker} />
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTime;

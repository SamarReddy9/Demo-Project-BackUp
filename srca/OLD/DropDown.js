import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLOR} from '../config/Globles';

const DateTime = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedOption, setSelectedOption] = useState('Option 1');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionChange = value => {
    console.log(`Selected option: ${value}`);
    setSelectedOption(value);
    setShowDropdown(false);
  };

  return (
    <View>
      {/* style={styles.container} */}
      <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
        <Text>{selectedOption}</Text>
        {/* style={styles.selectedOption} */}
      </TouchableOpacity>

      {showDropdown && (
        <View>
          {/* style={styles.dropdown} */}

          {options.map(option => (
            <TouchableOpacity
              key={option}
              // style={styles.option}
              onPress={() => handleOptionChange(option)}>
              <Text>{option}</Text>
              {/* style={styles.optionText} */}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  dropdown: {
    width: '80%',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top: 50,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: 'red',
    marginBottom: 5,
  },
  optionText: {
    fontSize: 18,
  },
});

export default DateTime;

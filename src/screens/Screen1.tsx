import React from 'react';
import { Text, View } from 'react-native';

interface IProps {}

const Screen1 = ({}: IProps) => {
  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <Text>Screen1</Text>
    </View>
  );
};

export default Screen1;

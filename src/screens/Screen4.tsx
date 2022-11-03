import React from 'react';
import { Text, View } from 'react-native';
import ManualTouches from '../components/gestureHandlerLib/manualGestures/ManualTouches';

interface IProps {}

const Screen4 = ({}: IProps) => {
  return (
    <View style={{ flex: 1 }}>
      <ManualTouches />
    </View>
  );
};

export default Screen4;

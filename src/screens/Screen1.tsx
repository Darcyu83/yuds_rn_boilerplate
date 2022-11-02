import React from 'react';
import { Text, View } from 'react-native';
import DraggableBall from '../components/gesturePan/DraggableBall';
import DraggableBall2 from '../components/gesturePan/DraggableBall2';
import DraggableBall3 from '../components/gesturePan/DraggableBall3';
interface IProps {}

const Screen1 = ({}: IProps) => {
  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <Text>Draggable Balls Screen 1</Text>
      <DraggableBall />
      <DraggableBall2 />
      <DraggableBall3 />
    </View>
  );
};

export default Screen1;

import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

interface IProps {}

const BottomSheet = ({}: IProps) => {
  const gesture = Gesture.Pan()
    .onBegin((e) => {})
    .onUpdate((e) => {})
    .onEnd((e) => {})
    .onFinalize((e) => {});

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <GestureDetector gesture={gesture}>
        <Animated.View style={{}}>
          <Text>BottomSheet</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default BottomSheet;

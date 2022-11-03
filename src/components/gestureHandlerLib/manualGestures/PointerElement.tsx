import React from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { CmnStyle } from '../../../styles/CommonStyle';
import { Pointer } from './types';

interface IProps {
  pointer: Animated.SharedValue<Pointer>;
  active: Animated.SharedValue<boolean>;
}

const PointerElement = ({ pointer, active }: IProps) => {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: pointer.value.x },
      { translateY: pointer.value.y },
      { scale: (pointer.value.visible ? 1 : 0) * (active.value ? 1.3 : 1) },
    ],
    backgroundColor: active.value ? 'red' : 'blue',
  }));

  return (
    <Animated.View style={[CmnStyle.pointer, animatedStyles]}>
      <Text>PointerElement</Text>
    </Animated.View>
  );
};

export default PointerElement;

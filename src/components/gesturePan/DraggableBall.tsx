import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { CmnStyle } from '../../styles/CommonStyle';

interface IProps {}

const DraggableBall = ({}: IProps) => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: isPressed.value ? 1.2 : 1 },
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  const getsture = Gesture.Pan()
    .onBegin(() => {
      console.log('%c hi', 'color: white; background-color:red;');
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={getsture}>
      <Animated.View style={[CmnStyle.ball, animatedStyles]}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Pure</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default DraggableBall;

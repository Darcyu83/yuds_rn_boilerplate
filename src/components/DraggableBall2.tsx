import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { CmnStyle } from '../styles/CommonStyle';

interface IProps {}

const DraggableBall2 = ({}: IProps) => {
  const isPressed = useSharedValue(false);
  // 이동한 좌표
  const offset = useSharedValue({ x: 0, y: 0 });

  // 시작 위치 좌표
  const startXY = useSharedValue({ x: 0, y: 0 });

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: isPressed.value ? 'dodgerblue' : 'yellow',
    transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
  }));
  // 제스쳐 핸들러
  const gesture = Gesture.Pan()
    .onBegin((e) => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + startXY.value.x,
        y: e.translationY + startXY.value.y,
      };
    })
    .onEnd((e) => {
      startXY.value = { x: offset.value.x, y: offset.value.y };
    })
    .onFinalize((e) => {
      isPressed.value = false;
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[CmnStyle.ball, animatedStyle]} />
    </GestureDetector>
  );
};

export default DraggableBall2;

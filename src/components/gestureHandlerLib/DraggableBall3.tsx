import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { CmnStyle } from '../../styles/CommonStyle';

interface IProps {}

const DraggableBall3 = ({}: IProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isPressed = useSharedValue(false);

  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: isPressed.value ? 'red' : 'blue',
    transform: [
      { translateX: withSpring(translateX.value) },
      { translateY: withSpring(translateY.value) },
    ],
  }));

  const gesture = Gesture.Pan()
    .onBegin((e) => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      translateX.value = startX.value + e.translationX;
      translateY.value = startY.value + e.translationY;
    })
    .onEnd((e) => {
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onFinalize((e) => {
      isPressed.value = false;
    });

  const isFouced = useIsFocused();

  useEffect(() => {
    if (isFouced) {
      translateX.value = 0;
      translateY.value = 0;
    }
  }, [isFouced]);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[CmnStyle.ball, reanimatedStyle]}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Spring</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default DraggableBall3;

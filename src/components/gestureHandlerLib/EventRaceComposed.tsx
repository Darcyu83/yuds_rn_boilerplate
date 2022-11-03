import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CmnStyle } from '../../styles/CommonStyle';

interface IProps {}

const EventRaceComposed = ({}: IProps) => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const origin = useSharedValue({ x: 0, y: 0 });
  const popupXY = useSharedValue({ x: 0, y: 0 });
  const popupOpacity = useSharedValue(0);

  const popupAnimatedSttyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: popupXY.value.x },
      { translateY: popupXY.value.y },
    ],
    opacity: popupOpacity.value,
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value.x }, { translateY: offset.value.y }],
  }));
  const dragGesture = Gesture.Pan()
    .onBegin(() => {})
    .onStart((e) => {
      popupOpacity.value = withTiming(0);
    })
    .onUpdate((e) => {
      offset.value = {
        x: origin.value.x + e.translationX,
        y: origin.value.y + e.translationY,
      };
    })
    .onEnd(() => {
      origin.value = { x: offset.value.x, y: offset.value.y };
    })
    .onFinalize(() => {});

  const longPressGesture = Gesture.LongPress().onStart((e) => {
    console.log('LongPress onStart', offset);
    popupXY.value = { x: offset.value.x, y: offset.value.y };
    popupOpacity.value = withTiming(1);
  });

  const composedGesture = Gesture.Race(dragGesture, longPressGesture);
  return (
    <View>
      <Animated.View
        style={[
          { width: '30%', height: '30%', backgroundColor: 'dodgerblue' },
          ,
          popupAnimatedSttyle,
        ]}>
        <Text>
          lets say that you have a component that you want to make draggable but
          you also want to show additional options on long press. Presumably you
          would not want the component to move after the long press activates.
          You can accomplish this using Race
        </Text>
      </Animated.View>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[CmnStyle.ball, animatedStyle]}>
          <Text style={{ textAlign: 'center', color: 'white' }}>
            Drag or LongPress
          </Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default EventRaceComposed;

import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

interface IProps {}

const EventExclusive = ({}: IProps) => {
  const singleTap = Gesture.Tap().onEnd((e, isSuccess) => {
    if (isSuccess) {
      console.log('Single Tap ');
    }
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((e, isSuccess) => {
      if (isSuccess) {
        console.log('Double Tap ');
      }
    });

  const taps = Gesture.Exclusive(doubleTap, singleTap);
  return (
    <GestureDetector gesture={taps}>
      <Text>Simultaneous DoubleTap or single Tap</Text>
    </GestureDetector>
  );
};

export default EventExclusive;

import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue } from 'react-native-reanimated';
import PointerElement from './PointerElement';
import { Pointer } from './types';

interface IProps {}

const ManualTouches = ({}: IProps) => {
  const trackedPointers: Animated.SharedValue<Pointer>[] = [];

  for (let i = 0; i < 12; i++) {
    trackedPointers[i] = useSharedValue({ visible: false, x: 0, y: 0 });
  }

  const active = useSharedValue(false);

  const gesture = Gesture.Manual()
    .onTouchesDown((e, manager) => {
      console.log('onTouchesDown event', e);

      for (const touch of e.changedTouches) {
        trackedPointers[touch.id].value = {
          visible: true,
          x: touch.x,
          y: touch.y,
        };
      }
      if (e.numberOfTouches > 2) {
        manager.activate();
      }
    })
    .onTouchesMove((e, _manager) => {
      for (const touch of e.changedTouches) {
        trackedPointers[touch.id].value = {
          visible: true,
          x: touch.x,
          y: touch.y,
        };
      }
    })
    .onTouchesUp((e, manager) => {
      for (const touch of e.changedTouches) {
        trackedPointers[touch.id].value = {
          visible: false,
          x: touch.x,
          y: touch.y,
        };
      }

      if (e.numberOfTouches === 0) {
        manager.end();
      }
    })
    .onStart(() => {
      active.value = true;
    })
    .onEnd(() => {
      active.value = false;
    });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={{ flex: 1 }}>
        {trackedPointers.map((pointer, index) => (
          <PointerElement key={index} active={active} pointer={pointer} />
        ))}
      </Animated.View>
    </GestureDetector>
  );
};

export default ManualTouches;

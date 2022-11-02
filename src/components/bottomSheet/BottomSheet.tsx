import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { tempText } from '../resizableReani/ToggleHieghtView';
import { useHeaderHeight } from '@react-navigation/elements';

interface IProps {}

const HEADER_HEIGHT = 50;
const WINDOW_HEIGHT = Dimensions.get('screen').height;
const BottomSheet = ({}: IProps) => {
  const THREADHOLD = 0.4;

  const NAV_HEADER_HEIGHT = useHeaderHeight();

  const startY = useSharedValue(0);
  // (WINDOW_HEIGHT - NAV_HEADER_HEIGHT - HEADER_HEIGHT) * 0.8
  const translateY = useSharedValue(0);
  // (WINDOW_HEIGHT - NAV_HEADER_HEIGHT - HEADER_HEIGHT) * 0.8

  const tranStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value === 0 ? 0 : translateY.value }],
  }));

  const gesture = Gesture.Pan()
    .onBegin((e) => {})
    .onUpdate((e) => {
      translateY.value = startY.value + e.translationY;
    })
    .onEnd((e) => {})
    .onFinalize((e) => {
      startY.value = translateY.value;
    });

  return (
    <View style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        {/* Header */}
        <Animated.View
          style={[
            {
              margin: 10,
              borderColor: 'blue',
              borderWidth: 1,
            },
            tranStyle,
          ]}>
          <Text style={[styles.header]}>Header (Draggable)</Text>
          <Text style={{ color: 'blue', textAlign: 'center' }}>{tempText}</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
  },
});

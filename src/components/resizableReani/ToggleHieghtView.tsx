import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextLayoutEventData,
  View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  text?: string;
}

const _text = `In our previous example, the useAnimatedStyle Hook creates a worklet that links the Shared Value boxHeight with a component that uses boxHeight.value in its style properties. When giving React components properties, we must use the component version that we can animate. hen setting styles for the component, be sure to pass the styles as an array. The first element is an object containing all of the styles you would typically use, including height. The second element is the worklet that was defined earlier. Now, let’s combine all of the Reanimated tools that we’ve covered to create a simple grey box that expands and contracts when we press a button:`;

const ToggleHieghtView = ({ text }: IProps) => {
  const padding = 5;
  const [textHeight, setTextHeight] = useState(0);
  const height = useSharedValue(0);

  const onTogglehieght = () => {
    height.value = height.value === 0 ? textHeight + padding * 2 : 0;
  };

  const reanimatedTxtBoxStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value, { duration: 250 }),
  }));

  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      console.log(
        '%c onTextLayout h === 0000 ',
        'background-color: orange',
        e.nativeEvent
      );
      setTextHeight(e.nativeEvent.lines[0].height * e.nativeEvent.lines.length);
    },
    []
  );

  return (
    <View
      style={{
        backgroundColor: 'slategray',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
      }}>
      <Text
        onLayout={(e) => {
          console.log(
            '%c title h ===',
            'background-color: red',
            e.nativeEvent.layout.height
          );
        }}
        style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
        ExpandingTextBox
      </Text>
      <Animated.View
        style={[
          {
            justifyContent: 'flex-start',
            padding: 5,
          },
          reanimatedTxtBoxStyle,
        ]}>
        <Text
          onTextLayout={(e) => {
            console.log(
              '%c onTextLayout h ===1',
              'background-color: orange',
              e.nativeEvent
            );
            onTextLayout(e);
          }}
          onPress={onTogglehieght}
          style={[
            {
              color: 'white',
            },
          ]}>
          {text ? text : _text}
        </Text>
      </Animated.View>

      <Text
        style={{ height: 25, color: 'white', backgroundColor: 'dodgerblue' }}
        onLayout={(e) => {
          console.log(
            '%c btn h ===',
            'background-color: blue',
            e.nativeEvent.layout.height
          );
        }}
        onPress={onTogglehieght}>
        Click for More
      </Text>
    </View>
  );
};

export default ToggleHieghtView;

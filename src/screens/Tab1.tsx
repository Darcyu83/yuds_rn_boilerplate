import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

import useAppNavigation from '../hooks/useAppNavigation';

interface IProps {}

const Tab1 = ({}: IProps) => {
  const navigation = useAppNavigation();
  return (
    <View style={{}}>
      <Button
        title="Draggable Balls Screen 1"
        onPress={() => {
          navigation.navigate('Screen1');
        }}
      />
      <Button
        title="Expanding TextBox Screen 2"
        color="tomato"
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
      <Button
        title="Dragging TextBox Screen 3"
        onPress={() => {
          navigation.navigate('Screen3');
        }}
      />
      <Button
        title="Manual Gesture Screen 4"
        onPress={() => {
          navigation.navigate('Screen4');
        }}
      />
      <Button
        title="Click to show View As Modal"
        color="teal"
        onPress={() => {
          navigation.navigate('ViewAsModal');
        }}
      />
      <Button
        title="  Not Found"
        onPress={() => {
          navigation.navigate('NotFound');
        }}
      />
    </View>
  );
};

export default Tab1;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import DraggableBall from '../components/DraggableBall';
import useAppNavigation from '../hooks/useAppNavigation';

interface IProps {}

const Tab1 = ({}: IProps) => {
  const navigation = useAppNavigation();
  return (
    <View style={{}}>
      <Text
        onPress={() => {
          navigation.navigate('Screen1');
        }}>
        Click to show Screen 1
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('ViewAsModal');
        }}>
        Click to show View As Modal
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('NotFound');
        }}>
        Not Found
      </Text>

      <DraggableBall />
    </View>
  );
};

export default Tab1;

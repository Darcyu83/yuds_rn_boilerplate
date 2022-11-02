import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import BottomSheet from '../components/bottomSheet/BottomSheet';

interface IProps {}

const Screen3 = ({}: IProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Screen3</Text>

      <BottomSheet />
    </SafeAreaView>
  );
};

export default Screen3;

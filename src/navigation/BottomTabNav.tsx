import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import Tab1 from '../screens/Tab1';
import Tab2 from '../screens/Tab2';
import {TBtmTabNavParams} from './types';

interface IProps {}
const Tab = createBottomTabNavigator<TBtmTabNavParams>();
const BottomTabNav = ({}: IProps) => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;

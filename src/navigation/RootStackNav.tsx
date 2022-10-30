import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import NotFound from '../screens/NotFound';
import ViewAsModal from '../screens/ViewAsModal';
import Modal from '../screens/ViewAsModal';
import BottomTabNav from './BottomTabNav';
import renderUserStackGrp from './group/renderUserStackGrp';
import {TRootStackNavParams} from './types';

interface IProps {}

export const RootStack = createNativeStackNavigator<TRootStackNavParams>();
const RootStackNav = ({}: IProps) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Root"
        component={BottomTabNav}
        options={{headerShown: false}}
      />

      {renderUserStackGrp()}

      <RootStack.Screen
        name="NotFound"
        component={NotFound}
        options={{title: 'Oops!'}}
      />
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="ViewAsModal" component={ViewAsModal} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNav;

import React from 'react';
import {Text, View} from 'react-native';
import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';
import {RootStack} from '../RootStackNav';

const renderUserStackGrp = () => {
  return (
    <RootStack.Group>
      <RootStack.Screen name="Screen1" component={Screen1} />
      <RootStack.Screen name="Screen2" component={Screen2} />
    </RootStack.Group>
  );
};

export default renderUserStackGrp;
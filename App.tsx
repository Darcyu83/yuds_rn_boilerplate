import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import RootStackNav from './src/navigation/RootStackNav';

interface IProps {}

const App = ({}: IProps) => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return;
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

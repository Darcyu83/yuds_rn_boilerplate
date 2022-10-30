import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import RootStackNav from './src/navigation/RootStackNav';

interface IProps {}

const App = ({}: IProps) => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return;
  return (
    <SafeAreaProvider style={{}}>
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

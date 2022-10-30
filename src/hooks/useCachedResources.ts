import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const useCachedResources = () => {
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        //
      } catch (error) {
      } finally {
        setIsLoadingDone(true);
        // hide splash screen
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  return isLoadingDone;
};

export default useCachedResources;

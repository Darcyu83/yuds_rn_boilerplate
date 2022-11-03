import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import DraggableBall from '../components/gestureHandlerLib/DraggableBall';
import DraggableBall2 from '../components/gestureHandlerLib/DraggableBall2';
import DraggableBall3 from '../components/gestureHandlerLib/DraggableBall3';
import EventExclusive from '../components/gestureHandlerLib/EventExclusive';
import EventRaceComposed from '../components/gestureHandlerLib/EventRaceComposed';
import EventSimultaneous from '../components/gestureHandlerLib/EventSimultaneous';
interface IProps {}

const Screen1 = ({}: IProps) => {
  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <Text>Draggable with getsture handler library</Text>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <DraggableBall />
        <DraggableBall2 />
        <DraggableBall3 />
        <EventRaceComposed />
        <EventSimultaneous />
        <EventExclusive />
      </View>
    </View>
  );
};

export default Screen1;

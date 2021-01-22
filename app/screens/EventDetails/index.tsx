import React, { useState, useEffect} from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import * as eventActions from 'app/store/actions/eventActions';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from 'app/navigation/NavigationStack';
import {RouteProp} from '@react-navigation/native';
import { EventsList } from 'app/assets/eventsData';
import { IEvents } from 'app/models/data/events';
import { ITrackEvents } from 'app/models/reducers/events';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'EventDetail'>;
  route: RouteProp<RootStackParamList, 'EventDetail'>;
}

interface IState {
  eventReducer: ITrackEvents;
}

const EventDetail = ({ route, navigation }: Props) => {
  const { eventId } = route.params;
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState<IEvents>();
  const trackingEvents = useSelector((state: IState) => state.eventReducer.eventIds);

  useEffect(() => {
    const eventIndex = EventsList.findIndex((row) => row.id === eventId);
    if (eventIndex >= 0) {
      setEventData(EventsList[eventIndex]);
    } else {
      navigation.goBack();
    }
  }, [eventId]);

  useEffect(() => { 
    console.log(trackingEvents);
  }, [trackingEvents])

  const trackEvent = () => { 
    console.log(eventId)
    dispatch(eventActions.startTrackingEvent(eventId))
  }

  return (
    <View style={styles.container}>
      <Image style={styles.eventImage} source={{ uri: eventData?.image }} />
      <View style={styles.eventView}>
        <Text style={styles.eventName}>{eventData?.name}</Text>
        <Text style={styles.eventLocation}> At {eventData?.location}</Text>
      </View>
      
      <Text style={styles.eventLocation}>Entry Type: {eventData?.entryType}</Text>
      <Text style={styles.eventLocation}>Entry Fee: {eventData?.fees} /-</Text>

      <Button
        mode="outlined"
        style={styles.trackEvent}
        labelStyle={styles.labelStyle}
        onPress={() => trackEvent()}>
          Track Event
        </Button>

    </View>
  );
};

export default EventDetail;

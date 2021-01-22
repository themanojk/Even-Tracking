import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { IEvents } from '../models/data/events';
import AppStyles from '../config/styles';
import NavigationService from 'app/navigation/NavigationService';

const EventGrid: React.FC<IEvents> = ({id,name,fees,entryType,location,image }) => {

  const goToEventDetail = () => NavigationService.navigate('EventDetail', { eventId: id });
  
  return (
    <TouchableOpacity style={styles.container} onPress={goToEventDetail}>
      <Image style={styles.eventImage} source={{ uri: image }} />
      <Text style={styles.eventName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: AppStyles.color.COLOR_WHITE,
    shadowColor: AppStyles.color.COLOR_GREY,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10 * 3,
  },
  eventImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover'
  },
  eventName: {
    fontSize: 18,
    marginTop: 4,
    color: AppStyles.color.COLOR_PRIMARY
  },

});

export default EventGrid;

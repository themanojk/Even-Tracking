import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { IEvents } from '../models/data/events';
import AppStyles from '../config/styles';
import NavigationService from 'app/navigation/NavigationService';


const EventRow: React.FC<IEvents> = ({id,name,fees,entryType,location,image }) => {

  const goToEventDetail = () => NavigationService.navigate('EventDetail', {eventId: id});

  return (
    <TouchableOpacity style={styles.container} onPress={goToEventDetail}>
      <Image style={styles.eventImage} source={{ uri: image }} />
      <View style={styles.eventData}>
        <View>
        <Text style={styles.eventName}>{name}</Text>
        <Text style={styles.eventLocation}>{location}</Text>
        </View>
        
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}>
          Entry Type: {entryType}
        </Button>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
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
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },
  eventData: {
    height: 100,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  eventName: {
    fontSize: 18,
    color: AppStyles.color.COLOR_PRIMARY
  },
  eventLocation: {
    fontSize: 16,
    marginTop:4,
    color: AppStyles.color.COLOR_SECONDARY
  },
  forgot: {
    marginTop: 4,
    marginLeft: -15,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default EventRow;

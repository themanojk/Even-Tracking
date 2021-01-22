import React, { useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity, Animated } from 'react-native';
import { Button,Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { EventsList, getEventNameById } from '../../assets/eventsData';
import {EventRow, EventGrid} from '../../components';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { ITrackEvents } from 'app/models/reducers/events';
import NavigationService from 'app/navigation/NavigationService';
import * as eventActions from 'app/store/actions/eventActions';
import SortableList from 'react-native-sortable-list';

interface IState {
  eventReducer: ITrackEvents;
}

const drawerWidth = 280;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [columns, setColumns] = useState(0);
  const [data, setData] = useState<number[]>([]);
  const trackingEvents = useSelector((state: IState) => state.eventReducer.eventIds);
  
  useEffect(() => { 
    setData(trackingEvents);
  }, [trackingEvents])

  const removeTrackedEvent = (eventId: number) => {
    dispatch(eventActions.stopTrackingEvent(eventId))
  }

  const renderItem = (item: any) => {
    return (
      <Animated.View style={styles.trackedEvents}>
        <Text>{getEventNameById(item.data)}</Text>
        <View style={styles.eventActions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => NavigationService.navigate('EventDetail', {eventId: item})}>
            <Text style={styles.viewActionText}>View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => removeTrackedEvent(item)}>
            <Text style={styles.deleteActionText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemSeparator} />
      </Animated.View>
    );
  };

  const onOrderChange = (order: any) => { 
    let newArray: number[] = [];
    order.map((item: number) => { 
      newArray.push(data[item])
    })

    dispatch(eventActions.changeTrackingOrder(newArray));
  }

  const renderDrawer = () => {
    return (
      <View>
        <Button>Tracked Events</Button>
        <SortableList
          onChangeOrder={onOrderChange}
          data={data}
          renderRow={renderItem}
          alwaysBounceVertical={false}
          bounces={false}/>

      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerLayout
          drawerWidth={drawerWidth}
          drawerType="front"
          drawerBackgroundColor="#fff"
          renderNavigationView={renderDrawer}
      
      >
          <View style={styles.container}>
        <Button icon="logout" mode="outlined" onPress={() => columns ? setColumns(0) : setColumns(2)}>
          Change View
        </Button>

        {columns ? <FlatList
          key={'_'}
          numColumns={columns}
          data={EventsList}
          renderItem={({ item }) => (
            <EventGrid
              id={item.id}
              name={item.name}
              fees={item.fees}
              entryType={item.entryType}
              location={item.location}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          alwaysBounceVertical={false}
          bounces={false}
        /> : <FlatList
        key={'#'}
        numColumns={columns}
        data={EventsList}
        renderItem={({ item }) => (
          <EventRow
            id={item.id}
            name={item.name}
            fees={item.fees}
            entryType={item.entryType}
            location={item.location}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id.toString() + '_'}
        alwaysBounceVertical={false}
        bounces={false}
      />}
        
      </View>
        </DrawerLayout>
    </View>

  );
};

export default Home;

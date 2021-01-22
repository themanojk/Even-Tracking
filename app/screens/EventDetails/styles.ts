import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  eventView: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  eventData: {
    height: 100,
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  eventName: {
    marginTop: 10,
    fontSize: 26,
    color: AppStyles.color.COLOR_PRIMARY
  },
  eventLocation: {
    fontSize: 16,
    marginTop:4,
    color: AppStyles.color.COLOR_SECONDARY
  },
  trackEvent: {
    marginTop: 10,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default styles;

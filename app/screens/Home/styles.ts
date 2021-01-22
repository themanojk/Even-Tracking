import { StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trackedEvents: {
    height: 40,
    paddingHorizontal: 10,
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  list: {
    margin: 10
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: AppStyles.color.COLOR_GREY,
    marginBottom: 5
  },
  eventActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  actionButton: {
    padding: 5
  },
  viewActionText: {
    fontSize: 12
  },
  deleteActionText: {
    fontSize: 12,
    color: AppStyles.color.COLOR_RED
  }
});

export default styles;

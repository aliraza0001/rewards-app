import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 150,
    justifyContent: 'center',
  },
  textContainer: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  pointsText: {
    fontSize: 14,
    color: '#777',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  collectButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default styles;

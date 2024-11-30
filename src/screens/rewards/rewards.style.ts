import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  flatListContainer: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },

  listItemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textContainer: {
    width: '60%',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  pointsText: {
    fontSize: 14,
    color: '#777',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '40%',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 8,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  collectButton: {
    backgroundColor: '#4CAF50', // Green button color
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  collectButtonText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

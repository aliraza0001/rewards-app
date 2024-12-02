import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LoadingComponent from '../Loading';

interface EmptyListComponentProps {
  title?: string | 'No Data Found';
  loading?: boolean;
  length?: number;
}

const EmptyListComponent: React.FC<EmptyListComponentProps> = ({
  title,
  loading,
  length,
}) => {
  const isLoadingVisable = loading && !length;
  return (
    <View style={styles.emptyListContainer}>
      {!loading && !length && <Text style={styles.emptyListText}>{title}</Text>}
      {isLoadingVisable && <LoadingComponent loading={isLoadingVisable} />}
    </View>
  );
};

export default EmptyListComponent;

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  emptyListText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import {ActivityIndicator, View} from 'react-native';
import React from 'react';

type LoadingComponentProps = {
  loading: boolean;
};

const loadingContainerStyles = {paddingVertical: 20};

const LoadingComponent: React.FC<LoadingComponentProps> = ({loading}) => {
  if (!loading) {
    return null;
  }
  return (
    <View style={loadingContainerStyles}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingComponent;

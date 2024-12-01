import {NavigationContainer} from '@react-navigation/native';
import RewardStack from '@app/navigation/stack-navigation/reward-stack';
import ErrorBoundary from 'react-native-error-boundary';
import Toast from 'react-native-toast-message';
import ReduxProvider from '@app/redux/ReduxProvider';
import ErrorFallback from '@app/components/common/ErrorFallBack';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReduxProvider>
        <NavigationContainer>
          <RewardStack />
          <Toast />
        </NavigationContainer>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

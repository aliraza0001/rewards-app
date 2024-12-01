import {NavigationContainer} from '@react-navigation/native';
import RewardStack from '@app/navigation/stack-navigation/reward-stack';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import ErrorBoundary from 'react-native-error-boundary';
import Toast from 'react-native-toast-message';
import ReduxProvider from '@app/redux/ReduxProvider';
import ErrorFallback from '@app/components/common/ErrorFallBack';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReduxProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <RewardStack />
            <Toast topOffset={60} />
          </NavigationContainer>
        </SafeAreaProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

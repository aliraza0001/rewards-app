import {NavigationContainer} from '@react-navigation/native';
import RewardStack from '@app/navigation/stack-navigation/reward-stack';
import ReduxProvider from '@app/redux/ReduxProvider';

export default function App() {
  return (
    <ReduxProvider>
      <NavigationContainer>
        <RewardStack />
      </NavigationContainer>
    </ReduxProvider>
  );
}

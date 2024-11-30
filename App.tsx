import {NavigationContainer} from '@react-navigation/native';
import RewardStack from '@app/navigation/stack-navigation/reward-stack';

export default function App() {
  return (
    <NavigationContainer>
      <RewardStack />
    </NavigationContainer>
  );
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CollectedRewardScreen,
  InitialScreen,
  RewardsScreen,
} from '@app/screens';

import {
  COLLECTED_REWARD_SCREEN,
  INITIAL_SCREEN,
  REWARDS_SCREEN,
} from '@app/constants/routes';

import {RewardStackParamList} from '@app/types/navigation';

const RootStack = createNativeStackNavigator<RewardStackParamList>();

const RewardStack = () => {
  return (
    <RootStack.Navigator
      initialRouteName={INITIAL_SCREEN}
      screenOptions={{headerTitleAlign: 'center'}}>
      <RootStack.Screen name={INITIAL_SCREEN} component={InitialScreen} />
      <RootStack.Screen name={REWARDS_SCREEN} component={RewardsScreen} />
      <RootStack.Screen
        name={COLLECTED_REWARD_SCREEN}
        component={CollectedRewardScreen}
        options={{title: 'Collected Rewards'}}
      />
    </RootStack.Navigator>
  );
};

export default RewardStack;

import {View, Text, Button} from 'react-native';
import {InitialScreenProps} from '@app/types/navigation';
import {COLLECTED_REWARD_SCREEN, REWARDS_SCREEN} from '@app/constants/routes';

const InitialScreen: React.FC<InitialScreenProps> = ({navigation}) => {
  const goToRewards = () => {
    const randomId = Math.floor(Math.random() * 1000);
    navigation.navigate(REWARDS_SCREEN, {
      rewardId: randomId.toString(),
    });
  };

  const goToCollectedRewards = () => {
    navigation.navigate(COLLECTED_REWARD_SCREEN);
  };

  return (
    <View>
      <Text>Initial Screen</Text>
      <Button title="Go to Rewards" onPress={goToRewards} />
      <Button title="Go to Collected Rewards" onPress={goToCollectedRewards} />
    </View>
  );
};

export default InitialScreen;

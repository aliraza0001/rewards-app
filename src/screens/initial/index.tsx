import {View, Text, Button} from 'react-native';
import {InitialScreenProps} from '@app/types/navigation';
import {REWARDS_SCREEN} from '@app/constants/routes';

const InitialScreen: React.FC<InitialScreenProps> = ({navigation}) => {
  const goToRewards = () => {
    const randomId = Math.floor(Math.random() * 1000);
    navigation.navigate(REWARDS_SCREEN, {
      rewardId: randomId.toString(),
    });
  };

  return (
    <View>
      <Text>Initial Screen</Text>
      <Button title="Go to Rewards" onPress={goToRewards} />
    </View>
  );
};

export default InitialScreen;

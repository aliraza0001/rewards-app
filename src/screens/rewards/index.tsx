import {RewardsScreenProps} from '@app/types/navigation';
import {View, Text} from 'react-native';

const RewardsScreen: React.FC<RewardsScreenProps> = ({navigation,route}) => {
  
  return (
    <View>
      <Text>Rewards Screen {route.params.rewardId}</Text>
    </View>
  );
};

export default RewardsScreen;

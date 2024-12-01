import {View, StyleSheet} from 'react-native';
import {InitialScreenProps} from '@app/types/navigation';
import {COLLECTED_REWARD_SCREEN, REWARDS_SCREEN} from '@app/constants/routes';
import CustomButton from '@app/components/common/Button';
import {Colors, Layout, Spacing} from '@app/theme';
import SafeAreaViewWrapper from '@app/components/common/SafeAreaViewWrapper';

const InitialScreen: React.FC<InitialScreenProps> = ({navigation}) => {
  const navigateToRewardsScreen = () => {
    navigation.navigate(REWARDS_SCREEN);
  };

  const navigateToCollectedRewardScreen = () => {
    navigation.navigate(COLLECTED_REWARD_SCREEN);
  };

  return (
    <SafeAreaViewWrapper>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <CustomButton
            buttonStyle={styles.buttonStyle}
            onPress={navigateToRewardsScreen}
            title="Rewards List"
          />
          <CustomButton
            buttonStyle={styles.buttonStyle}
            onPress={navigateToCollectedRewardScreen}
            title="Collected Rewards"
          />
        </View>
      </View>
    </SafeAreaViewWrapper>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: Layout.flex.full,
    justifyContent: Layout.justifyContent.center,
    alignItems: Layout.justifyContent.center,
  },
  buttonContainer: {
    flex: Layout.flex.third,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: Layout.justifyContent.center,
  },
  buttonStyle: {
    backgroundColor: '#3498db',
    padding: Spacing.md,
    borderRadius: 5,
    width: 200,
    justifyContent: Layout.justifyContent.center,
    alignItems: Layout.justifyContent.center,
  },
  textStyle: {
    color: Colors.white,
    fontSize: 16,
  },
});

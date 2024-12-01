import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  COLLECTED_REWARD_SCREEN,
  INITIAL_SCREEN,
  REWARDS_SCREEN,
} from '@app/constants/routes';

type RewardStackParamList = {
  [INITIAL_SCREEN]: undefined;
  [REWARDS_SCREEN]: undefined;
  // [REWARDS_SCREEN]: {rewardId?: string}; For passing params
  [COLLECTED_REWARD_SCREEN]: undefined;
};

type InitialScreenProps = NativeStackScreenProps<
  RewardStackParamList,
  typeof INITIAL_SCREEN
>;
type RewardsScreenProps = NativeStackScreenProps<
  RewardStackParamList,
  typeof REWARDS_SCREEN
>;
type CollectedRewardsScreenProps = NativeStackScreenProps<
  RewardStackParamList,
  typeof COLLECTED_REWARD_SCREEN
>;

export type {
  RewardStackParamList,
  InitialScreenProps,
  RewardsScreenProps,
  CollectedRewardsScreenProps,
};

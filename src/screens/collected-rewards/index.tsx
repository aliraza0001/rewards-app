import {useCallback, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {useAppSelector} from '@app/redux/hooks';
import RewardCard from '@app/components/reward-card';
import {RewardData} from '@app/types/data/rewards';
import styles from './collected-rewards.style';
import EmptyListComponent from '@app/components/common/EmptyListComponent';
import {CollectedRewardsScreenProps} from '@app/types/navigation';
import SafeAreaViewWrapper from '@app/components/common/SafeAreaViewWrapper';

const CollectedRewardsScreen: React.FC<CollectedRewardsScreenProps> = ({
  navigation,
  route,
}) => {
  const loadedRewards = useAppSelector(state => state.rewards.loaded_rewards);
  const collected_reward_ids = useAppSelector(
    state => state.rewards.collected_reward_ids,
  );

  const renderItemComponent = useCallback(
    ({item}: {item: RewardData}) => {
      return <RewardCard item={item} isCollected />;
    },
    [loadedRewards],
  );

  const filteredRewards = useMemo(() => {
    return loadedRewards.filter(item => collected_reward_ids.includes(item.id));
  }, [loadedRewards]);

  return (
    <SafeAreaViewWrapper>
      <View style={styles.container}>
        <FlatList
          data={filteredRewards}
          renderItem={renderItemComponent}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          ListEmptyComponent={
            <EmptyListComponent
              title="No Data Found"
              loading={false}
              length={filteredRewards.length}
            />
          }
        />
      </View>
    </SafeAreaViewWrapper>
  );
};

export default CollectedRewardsScreen;

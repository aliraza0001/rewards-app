import {useCallback, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {useAppSelector} from '@app/redux/hooks';
import RewardItem from '@app/components/reward-item';
import {RewardData} from '@app/types/data/rewards';
import styles from './collected-rewards.style';
import EmptyListComponent from '@app/components/common/EmptyListComponent';
import {CollectedRewardsScreenProps} from '@app/types/navigation';

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
      return <RewardItem item={item} isCollected />;
    },
    [loadedRewards],
  );

  const filteredRewards = useMemo(() => {
    return loadedRewards.filter(item => collected_reward_ids.includes(item.id));
  }, [loadedRewards]);

  console.log(filteredRewards, 'filteredRewards');
  return (
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
            length={loadedRewards.length}
          />
        }
      />
    </View>
  );
};

export default CollectedRewardsScreen;

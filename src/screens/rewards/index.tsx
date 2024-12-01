import {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {RewardsScreenProps} from '@app/types/navigation';
import RewardCard from '@app/components/reward-card';
import {RewardData} from '@app/types/data/rewards';
import styles from './rewards.style';
import EmptyListComponent from '@app/components/common/EmptyListComponent';
import LoadingComponent from '@app/components/common/Loading';
import useReward from './hook/useReward';
// import {useGetRewardsQuery} from '@app/redux/actions/rewards';

const RewardsScreen: React.FC<RewardsScreenProps> = ({navigation, route}) => {
  // using redux query
  // const {data: rewards, isLoading} = useGetRewardsQuery({page: 1});
  const {
    isLoadinStateValid,
    onCollectHandler,
    debouncedLoadMoreRewards,
    fetchRewardsHandler,
    collected_reward_ids,
    loadedRewards,
    loading,
  } = useReward();

  // For Testing Error Boundary
  // throw new Error('Testing Error Boundary');

  const renderItemComponent = useCallback(
    ({item}: {item: RewardData}) => {
      const isCollected = collected_reward_ids.includes(item.id);
      return (
        <RewardCard
          item={item}
          isCollected={isCollected}
          onCollect={onCollectHandler}
        />
      );
    },
    [collected_reward_ids, onCollectHandler],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={loadedRewards}
        refreshing={isLoadinStateValid}
        renderItem={renderItemComponent}
        onRefresh={fetchRewardsHandler}
        keyExtractor={item => item.id.toString()}
        onEndReached={debouncedLoadMoreRewards}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyListComponent
            title="No Data Found"
            loading={loading}
            length={loadedRewards.length}
          />
        }
        ListFooterComponent={<LoadingComponent loading={isLoadinStateValid} />}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
    </View>
  );
};

export default RewardsScreen;

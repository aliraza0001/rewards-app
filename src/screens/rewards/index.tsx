import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {RewardsScreenProps} from '@app/types/navigation';
import {RewardData} from '@app/types/data/rewards';
import styles from './rewards.style';
import EmptyListComponent from '@app/components/common/EmptyListComponent';
import LoadingComponent from '@app/components/common/Loading';
import useReward from './hook/useReward';
import SafeAreaViewWrapper from '@app/components/common/SafeAreaViewWrapper';
import RewardCard from '@app/components/reward-card';

const RewardsScreen: React.FC<RewardsScreenProps> = () => {
  const {
    isLoadinStateValid,
    onCollectHandler,
    debouncedLoadMoreRewards,
    fetchRewardsHandler,
    collected_reward_ids,
    loadedRewards,
    loading,
  } = useReward();

  const renderItem: ListRenderItem<RewardData> = useCallback(
    ({item}) => {
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

  const keyExtractor = useCallback(
    (item: RewardData) => item.id.toString(),
    [],
  );

  const memoizedEmptyComponent = useMemo(
    () => (
      <EmptyListComponent
        title="No Data Found"
        loading={loading}
        length={loadedRewards.length}
      />
    ),
    [loading, loadedRewards.length],
  );

  return (
    <SafeAreaViewWrapper>
      <View style={styles.container}>
        <FlashList
          data={loadedRewards}
          refreshing={isLoadinStateValid}
          renderItem={renderItem}
          onRefresh={fetchRewardsHandler}
          keyExtractor={keyExtractor}
          onEndReached={debouncedLoadMoreRewards}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={150}
          ListEmptyComponent={memoizedEmptyComponent}
          extraData={collected_reward_ids.length}
        />
      </View>
    </SafeAreaViewWrapper>
  );
};

export default RewardsScreen;

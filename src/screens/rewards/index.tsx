import {useCallback, useEffect, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import {
  clearState,
  fetchRewards,
  loadMoreRewards,
} from '@app/redux/slice/rewards';
import {RewardsScreenProps} from '@app/types/navigation';
import RewardItem from '@app/components/reward-item';
import {RewardData} from '@app/types/data/rewards';
import styles from './rewards.style';
import EmptyListComponent from '@app/components/common/EmptyListComponent';
import LoadingComponent from '@app/components/common/Loading';

const RewardsScreen: React.FC<RewardsScreenProps> = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.rewards.loading);
  const loadedRewards = useAppSelector(state => state.rewards.loaded_rewards);
  // const currentPage = useAppSelector(state => state.rewards.current_page);

  useEffect(() => {
    dispatch(fetchRewards(1));
    return () => {
      dispatch(clearState());
    };
  }, []);

  const loadMoreRewardsHandler = () => {
    dispatch(loadMoreRewards());
  };

  const onCollectHandler = useCallback(
    (id: string) => {
      console.log('Collect reward with id:', id);
    },
    [loadedRewards],
  );

  const renderItemComponent = useCallback(
    ({item}: {item: RewardData}) => (
      <RewardItem item={item} onCollect={onCollectHandler} />
    ),
    [loadedRewards],
  );

  const isLoadinStateValid = useMemo(() => {
    return Boolean(loading && loadedRewards.length);
  }, [loading, loadedRewards]);

  return (
    <View style={styles.container}>
      <FlatList
        data={loadedRewards}
        refreshing={isLoadinStateValid}
        renderItem={renderItemComponent}
        onRefresh={() => dispatch(fetchRewards(1))}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreRewardsHandler}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.flatListContainer}
        ListEmptyComponent={
          <EmptyListComponent
            title="No Data Found"
            loading={loading}
            length={loadedRewards.length}
          />
        }
        ListFooterComponent={<LoadingComponent loading={isLoadinStateValid} />}
      />
    </View>
  );
};

export default RewardsScreen;

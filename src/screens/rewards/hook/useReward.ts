import {useCallback, useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '@app/redux/hooks';
import {clearState, collectReward} from '@app/redux/slice/rewards';
import {dummyLoadMore, fetchRewards} from '@app/redux/actions/rewards';
import {debounce} from '@app/utils/helper';

const useReward = () => {
  const dispatch = useAppDispatch();
  const current_page = useAppSelector(state => state.rewards.current_page);
  const totalPages = useAppSelector(state => state.rewards.totalPages);
  const loading = useAppSelector(state => state.rewards.loading);

  const loadedRewards = useAppSelector(state => state.rewards.loaded_rewards);

  const collected_reward_ids = useAppSelector(
    state => state.rewards.collected_reward_ids,
  );

  const debouncedLoadMoreRewards = useCallback(
    debounce(() => {
      if (current_page >= totalPages) return;
      dispatch(dummyLoadMore());
    }, 500),
    [dispatch, current_page, totalPages],
  );

  const onCollectHandler = (id: string) => {
    dispatch(collectReward(id));
  };

  const isLoadinStateValid = useMemo(() => {
    return Boolean(loading && loadedRewards.length);
  }, [loading, loadedRewards]);

  const fetchRewardsHandler = () => {
    dispatch(fetchRewards(1));
  };

  useEffect(() => {
    fetchRewardsHandler();
    return () => {
      dispatch(clearState());
    };
  }, []);

  return {
    loading,
    loadedRewards,
    collected_reward_ids,
    debouncedLoadMoreRewards,
    fetchRewardsHandler,
    onCollectHandler,
    isLoadinStateValid,
  };
};

export default useReward;

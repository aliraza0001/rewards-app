import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiResponse} from 'apisauce';
import {getRewards} from '@app/services/rewards';
import {RewardData} from '@app/types/data/rewards';
import {delay} from '@app/utils/helper';
// import {api} from '@app/config/api';
// import {RewardData} from '@app/types/data/rewards';

// export const rewards_api = api.injectEndpoints({
//   endpoints: builder => ({
//     getRewards: builder.query<RewardData[], {page: number}>({
//       providesTags: ['rewards'],
//       query: ({page}) => `bounties?page=${page}`,
//       transformResponse: (response: RewardData[]): RewardData[] =>
//         response.filter(reward => reward.pictures.length),
//     }),
//     collectReward: builder.mutation<void, {rewardId: string}>({
//       invalidatesTags: ['collect_reward'],
//       query: ({rewardId}) => ({
//         url: `collectReward/${rewardId}`,
//         method: 'POST',
//       }),
//     }),
//   }),
//   overrideExisting: false,
// });

// export const {useGetRewardsQuery, useCollectRewardMutation} = rewards_api;

export const fetchRewards = createAsyncThunk(
  'reward/fetchRewards',
  async (page: number, {rejectWithValue}) => {
    try {
      const response: ApiResponse<RewardData[]> = await getRewards(page);
      if (!response.ok) {
        throw new Error('Failed to fetch rewards');
      }
      const rewards: RewardData[] = response.data || [];
      return {rewards};
    } catch (error: Error | any) {
      return rejectWithValue(error.message);
    }
  },
);

export const dummyLoadMore = createAsyncThunk(
  'xyz/dummyLoadMore',
  async (_, {rejectWithValue}) => {
    try {
      await delay(1000);
      return true;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

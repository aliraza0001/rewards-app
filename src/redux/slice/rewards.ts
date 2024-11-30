import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RewardData} from '@app/types/data/rewards';
import {
  ITEM_PER_PAGE,
  TOTAL_PAGES,
  CURRENT_PAGE,
} from '@app/constants/static-params';

interface RewardState {
  all_rewards: RewardData[];
  loaded_rewards: RewardData[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  current_page: number;
  collected_reward_ids: string[];
}

const initialState: RewardState = {
  all_rewards: [],
  loaded_rewards: [],
  loading: false,
  error: null,
  totalPages: TOTAL_PAGES,
  current_page: CURRENT_PAGE,
  collected_reward_ids: [],
};

// Async thunk to fetch rewards data
export const fetchRewards = createAsyncThunk(
  'reward/fetchRewards',
  async (page: number, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `https://staging.helloagain.at/api/v1/clients/5189/bounties`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch rewards');
      }
      const data: RewardData[] = await response.json();
      return {rewards: data || []};
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    loadMoreRewards: state => {
      if (state.current_page >= state.totalPages) return;

      state.loading = true;
      const nextRewards = state.all_rewards.slice(
        state.loaded_rewards.length,
        state.loaded_rewards.length + ITEM_PER_PAGE,
      );
      state.current_page += 1;
      state.loaded_rewards = [...state.loaded_rewards, ...nextRewards];
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    collectReward: (state, action: PayloadAction<string>) => {
      state.collected_reward_ids.push(action.payload);
    },
    clearState: state => {
      const updatedState = {
        ...initialState,
        loaded_rewards: state.loaded_rewards,
        collected_reward_ids: state.collected_reward_ids,
      };
      return updatedState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRewards.pending, state => {
        state.loading = true;
        state.error = null;
        state.current_page = 1;
        state.totalPages = TOTAL_PAGES;
      })
      .addCase(fetchRewards.fulfilled, (state, action) => {
        const filteredRewards = action.payload.rewards.filter(
          (reward: RewardData) => reward.pictures.length,
        );
        state.all_rewards = filteredRewards;

        const totalPages = Math.ceil(filteredRewards.length / ITEM_PER_PAGE);
        state.totalPages = totalPages;

        state.loaded_rewards = filteredRewards.slice(0, ITEM_PER_PAGE);

        state.loading = false;
      })
      .addCase(fetchRewards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  loadMoreRewards,
  setLoading,
  setError,
  clearState,
  collectReward,
} = rewardSlice.actions;

export default rewardSlice.reducer;

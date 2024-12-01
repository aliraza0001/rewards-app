import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RewardData} from '@app/types/data/rewards';
import {
  ITEM_PER_PAGE,
  TOTAL_PAGES,
  CURRENT_PAGE,
} from '@app/constants/static-params';
import {dummyLoadMore, fetchRewards} from '../actions/rewards';
import {showErrorToast, showToast} from '@app/utils/toast';
import {
  REWARD_COLLECTED_SUCCESSFULLY,
  SOMETHIN_WENT_WRONG,
} from '@app/constants/messages';

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

const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      showErrorToast(action.payload?.toString() || SOMETHIN_WENT_WRONG);
    },
    collectReward: (state, action: PayloadAction<string>) => {
      if (state.collected_reward_ids.includes(action.payload)) return;
      state.collected_reward_ids.push(action.payload);
      showToast(REWARD_COLLECTED_SUCCESSFULLY);
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
      })
      .addCase(dummyLoadMore.pending, state => {
        state.loading = true;
      })
      .addCase(dummyLoadMore.fulfilled, state => {
        if (state.current_page >= state.totalPages) return;
        const nextRewards = state.all_rewards.slice(
          state.loaded_rewards.length,
          state.loaded_rewards.length + ITEM_PER_PAGE,
        );
        state.current_page += 1;
        state.loaded_rewards = [...state.loaded_rewards, ...nextRewards];
        state.loading = false;
      })
      .addCase(dummyLoadMore.rejected, state => {
        state.loading = false;
      });
  },
});

export const {setLoading, setError, clearState, collectReward} =
  rewardSlice.actions;

export default rewardSlice.reducer;

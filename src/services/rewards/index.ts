import {API} from '@app/config/api/apiClient';
import {RewardData} from '@app/types/data/rewards';

export const getRewards = (page: number) =>
  API.get<RewardData[]>(`clients/5189/bounties?page=${page}`);

import {create, ApisauceInstance} from 'apisauce';

// For React Query API Config
// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const api = createApi({
//   reducerPath: 'base_rewards_api',
//   baseQuery: fetchBaseQuery({baseUrl: 'https://staging.helloagain.at/api/v1/clients/5189/bounties/'}),
//   endpoints: () => ({}),
//   tagTypes: ['rewards', 'collect_reward'],
//   refetchOnReconnect: true,
// });

// API SAUCE AXIOS WRAPPER
const API: ApisauceInstance = create({
  baseURL: 'https://staging.helloagain.at/api/v1/',
  headers: {Accept: 'application/json'},
  timeout: 10000,
});

async function apiRequest<T>(
  request: Promise<ApiResponse<T>>,
): Promise<ApiResponse<T>> {
  const response = await request;
  if (!response.ok) {
    console.error('API Error:', response.problem);
  }
  return response;
}

export {API, apiRequest};

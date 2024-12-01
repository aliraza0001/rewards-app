import {create, ApisauceInstance} from 'apisauce';
// Need to change this using env variable later
const baseURL = 'https://staging.helloagain.at/api/v1/';

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
  baseURL: baseURL,
  headers: {Accept: 'application/json'},
  timeout: 5000,
});

export {API};

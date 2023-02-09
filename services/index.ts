import axios from 'axios';
export const BASE_URL = 'https://staging.melonnetwork.io/api/v1';

export const Melon_Wallet_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios, { AxiosRequestConfig } from 'axios';

export function configureAxiosInstance() {
  const baseURL = process.env.REACT_APP_API_URL;

  const headers: any = {
    'Access-Control-Allow-Origin': '*',
  };

  const config: AxiosRequestConfig = {
    baseURL,
    timeout: 30000,
    headers,
  };

  return axios.create(config);
}

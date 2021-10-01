import axios from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    pureHeaders: boolean;
  }
}

axios.interceptors.request.use((config) => {
  config.timeout = 10000;
  config.timeoutErrorMessage = 'O servidor não está respondendo.';

  if (!config.pureHeaders) {
    const headers = config.headers ?? {};
    config.headers = headers;
  }

  return config;
});

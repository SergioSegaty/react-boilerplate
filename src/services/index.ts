import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';

const getErrorMessage = (error: AxiosError) => {
  if (error.response?.data) {
    return error.response.data;
  }

  return error.message;
};

export const requestService = async (
  url: string,
  body: Record<string, string>,
  headers: Record<string, string>,
  method: Method = 'POST',
  pureHeaders = false
) => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      data: body,
      headers,
      pureHeaders,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      error.message = getErrorMessage(error);
      throw error;
    }

    throw error;
  }
};

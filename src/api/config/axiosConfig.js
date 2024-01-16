import axios from "axios";

axios.defaults.timeout = 3000;

const setHeaders = (config) => {
  const token = "Raccoon token";
  if (token) {
    config.headers["Authorization"] = `*/*`;
  }
  return config;
};

const handleRequestError = (error) => {
  return Promise.reject(error);
};

const handleResponseError = (error) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(setHeaders, handleRequestError);
api.interceptors.response.use(undefined, handleResponseError);
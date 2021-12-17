/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";

import { apiUrl } from "@/utils/env";

export const client = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const Create = (url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) => {
  return client.post(url, data, config);
};

export const Update = (url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) => {
  return client.patch(url, data, config);
};

export const Delete = (url: string, config?: AxiosRequestConfig<any> | undefined) => {
  return client.delete(url, config);
};

import axios from "axios";

type RequestMethodType = 'get' | 'post' | 'put' | 'delete';

const request = async (method: RequestMethodType, url: string, data?: FormData) => {
  try {
    const headers: Record<string, string> = {};

    if (data instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data";
      console.log('FormData: ', Object.fromEntries(data.entries()));
    }

    const config = {
      method,
      url,
      headers,
      data
    };

    const response = await axios(config);
    console.log("Response:", response.data);
    return response.data;
  } catch (err) {
    showErrorInConsole(err);
    return null;
  }
};

export const getDataFromRequest = async (url: string) => {
  return await request('get', url);
};

export const addDataByRequest = async (url: string, data: FormData) => {
  return await request('post', url, data);
};

export const updateDataByRequest = async (url: string, data: FormData) => {
  return await request('put', url, data);
};

export const deleteDataByRequest = async (url: string) => {
  return await request('delete', url);
};

const showErrorInConsole = (err: unknown) => console.error('Error:', err);
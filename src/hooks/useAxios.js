import axios from "axios";
import { Cookies } from "react-cookie";

const BASE_URL = "https://api.revite.uz/api/v1";

export const useAxios = () => {
//   const cookie = new Cookies();
//   const accessToken = cookie.get("access_token");

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
  });

  return {
    get: axiosInstance.get,
    post: axiosInstance.post,
    put: axiosInstance.put,
    patch: axiosInstance.patch,
    del: axiosInstance.delete,
  };
};
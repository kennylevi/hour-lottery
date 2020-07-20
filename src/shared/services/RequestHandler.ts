import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL+'api/';

export default {
  /**
   * post
   * @param path
   * @param data
   * @returns Observable
   */
  post: (path: string, data?: any) => {
    const url = `${BASE_URL}${path}`;
    console.log(url);
    return axios.post(url, data || {});
  },

  /**
   *
   * @param {string} path
   * @returns {Observable<any>}
   */
  get: (path: string) => {
    const url = `${BASE_URL}${path}`;
    return axios.get(url);
  },

  /**
   *
   * @param {string} path
   * @param data
   * @returns {Observable<any>}
   */
  put: (path: string, data: any) => {
    const url = `${BASE_URL}${path}`;
    return axios.put(url, data);
  },

  /**
   *
   * @param path
   * @param data
   */
  delete: (path: string) => {
    const url = `${BASE_URL}${path}`;
    return axios.delete(url);
  }
};

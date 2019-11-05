import axios from 'axios'
import {hostname} from "../config";
import Cookie from 'js-cookie'
export const configAxios = {
  baseURL: hostname,
  headers: {
    'Content-Type': 'application/json',

  },
  timeout: 15000,
  //transformRequest: [(data = {}) => JSON.stringify(data)],
};

const instance = axios.create(configAxios);
instance.defaults.headers.common['Authorization'] = 'Bearer ' + Cookie.get('token');

  const api = {
  signIn: (email, password) => instance.post(`/users/signIn`, {email, password}),
  signUp: (email, userName, password) => instance.post(`/users/signUp`, {email, userName, password}),
  getTable: () => instance.get(`/users/table`),
  createLinkAuth: (url) => instance.post(`/users/link`,{url}),
  removeLink: (link_id) => instance.delete(`/users/link?link_id=${link_id}`),
  getUser: ()=> instance.get(`/users/getUser`),
  createLink: (url) => instance.post(`/links/link`, {url})
};
export default api
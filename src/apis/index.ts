import qs from 'query-string';
import store from '@/store';
import axios from 'axios';
import { Role } from '@/apis/api/Role';
import { User } from '@/apis/api/User';
import { Client } from '@/apis/api/Client';
import { Setup } from '@/apis/api/Setup';
import { USER_LOGOUT, USER_TOKEN_KEY } from '@/store/action';
import { Permission } from '@/apis/api/Permission';
import { HttpClient } from '@/apis/api/http-client';

const dispatch = store.dispatch;

class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  public permission = new Permission();
  public role = new Role();
  public user = new User();
  public client = new Client();
  public setup = new Setup();
}

const api = new Api({
  paramsSerializer: (params) => qs.stringify(params, {}),
  timeout: 300000,
  headers: {
    Authorization: localStorage.getItem(USER_TOKEN_KEY) || '',
  },
});

axios.interceptors.response.use(
  (res) => {
    if (
      res.request.responseType === 'blob' ||
      res.request.responseType === 'arraybuffer'
    ) {
      return res;
    }
    const { code, msg } = res.data;
    if (code === 403) {
      dispatch({ type: USER_LOGOUT });
      window.location.pathname = '/login';
      return Promise.reject(new Error(msg || '未知错误，请联系管理员'));
    } else {
      return res;
    }
  },
  (error) => {
    const { message: msg } = error;
    if (msg === 'Network Error') {
      return Promise.reject('接口请求异常');
    } else if (msg.includes('timeout')) {
      return Promise.reject('接口请求超时');
    } else if (msg.includes('Request failed with status code')) {
      const statusCode = +msg.substring(msg.length - 3);
      if (statusCode === 401) {
        dispatch({ type: 'userLogout' });
        window.location.pathname = '/login';
      } else if (statusCode === 403) {
        dispatch({ type: 'userLogout' });
        window.location.pathname = '/login';
      }
      return Promise.reject('请求异常：' + msg);
    } else {
      return Promise.reject('未知错误：' + msg);
    }
  }
);

export default api;

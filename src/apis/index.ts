import qs from 'query-string';
import { User } from '@/apis/api/User';
import { USER_LOGOUT, USER_TOKEN_KEY } from '@/store/action';
import store from '@/store';
import { Setup } from '@/apis/api/Setup';
import { Permission } from '@/apis/api/Permission';
import { Role } from '@/apis/api/Role';
import { Client } from '@/apis/api/Client';
import { Dict } from '@/apis/api/Dict';
import { Device } from '@/apis/api/Device';
import { Structure } from '@/apis/api/Structure';
import { OeeRule } from '@/apis/api/OeeRule';
import { OeeHistory } from '@/apis/api/OeeHistory';
import { AlarmRule } from '@/apis/api/AlarmRule';
import { AlarmHistory } from '@/apis/api/AlarmHistory';

const axiosConfig = {
  paramsSerializer: (params: object) => qs.stringify(params, {}),
  timeout: 30000,
};

const onRequest = (config: { headers: { Authorization: string } }) => {
  const token = localStorage.getItem(USER_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const onResponseSuccess = (res) => {
  if (
    res.request.responseType === 'blob' ||
    res.request.responseType === 'arraybuffer'
  ) {
    return res;
  }
  const { code, msg } = res.data;
  if (code === 403) {
    store.dispatch({ type: USER_LOGOUT });
    window.location.pathname = '/login';
    return Promise.reject(new Error(msg || '未知错误，请联系管理员'));
  } else {
    return res;
  }
};

const onResponseFailure = (error: { message }) => {
  const { message: msg } = error;
  if (msg === 'Network Error') {
    return Promise.reject('接口请求异常');
  } else if (msg.includes('timeout')) {
    return Promise.reject('接口请求超时');
  } else if (msg.includes('Request failed with status code')) {
    const statusCode = +msg.substring(msg.length - 3);
    if (statusCode === 401) {
      store.dispatch({ type: 'userLogout' });
      window.location.pathname = '/login';
    } else if (statusCode === 403) {
      store.dispatch({ type: 'userLogout' });
      window.location.pathname = '/login';
    }
    return Promise.reject('请求异常：' + msg);
  } else {
    return Promise.reject('未知错误：' + msg);
  }
};
const permission = new Permission(axiosConfig);
const role = new Role(axiosConfig);
const user = new User(axiosConfig);
const client = new Client(axiosConfig);
const dict = new Dict(axiosConfig);
const device = new Device(axiosConfig);
const structure = new Structure(axiosConfig);
const oeeRule = new OeeRule(axiosConfig);
const oeeHistory = new OeeHistory(axiosConfig);
const alarmRule = new AlarmRule(axiosConfig);
const alarmHistory = new AlarmHistory(axiosConfig);
const setup = new Setup(axiosConfig);

permission.instance.interceptors.request.use(onRequest);
permission.instance.interceptors.response.use(
  onResponseSuccess,
  onResponseFailure
);
role.instance.interceptors.request.use(onRequest);
role.instance.interceptors.response.use(onResponseSuccess, onResponseFailure);
user.instance.interceptors.request.use(onRequest);
user.instance.interceptors.response.use(onResponseSuccess, onResponseFailure);
client.instance.interceptors.request.use(onRequest);
client.instance.interceptors.response.use(onResponseSuccess, onResponseFailure);
dict.instance.interceptors.request.use(onRequest);
dict.instance.interceptors.response.use(onResponseSuccess, onResponseFailure);
device.instance.interceptors.request.use(onRequest);
device.instance.interceptors.response.use(onResponseSuccess, onResponseFailure);
structure.instance.interceptors.request.use(onRequest);
structure.instance.interceptors.response.use(
  onResponseSuccess,
  onResponseFailure
);
oeeRule.instance.interceptors.request.use(onRequest);
oeeRule.instance.interceptors.response.use(
  onResponseSuccess,
  onResponseFailure
);
oeeHistory.instance.interceptors.request.use(onRequest);
oeeHistory.instance.interceptors.response.use(
  onResponseSuccess,
  onResponseFailure
);
alarmRule.instance.interceptors.request.use(onRequest);
alarmRule.instance.interceptors.response.use(
  onResponseSuccess,
  onResponseFailure
);
alarmRule.instance.interceptors.request.use(onRequest);
alarmHistory.instance.interceptors.response.use(
  onResponseSuccess,
  onResponseFailure
);
setup.instance.interceptors.request.use(onRequest);
setup.instance.interceptors.response.use(onResponseSuccess, onResponseFailure);

export {
  permission,
  role,
  user,
  client,
  dict,
  device,
  structure,
  oeeRule,
  oeeHistory,
  alarmRule,
  alarmHistory,
  setup,
};

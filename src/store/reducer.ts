import {
  LOADING_START,
  LOADING_STOP,
  UPDATE_USERINFO,
  USER_LOGIN,
  USER_LOGOUT,
  USER_TOKEN_KEY,
} from '@/store/action';
import { initialState } from '@/store/state';

export const reducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, loading: true };
    }
    case LOADING_STOP: {
      return { ...state, loading: false };
    }
    case USER_LOGIN: {
      localStorage.setItem(USER_TOKEN_KEY, action.payload);
      setTimeout(() => {
        window.location.href = '/';
      }, 100);
      return { ...state };
    }
    case USER_LOGOUT: {
      localStorage.removeItem(USER_TOKEN_KEY);
      setTimeout(() => {
        window.location.href = '/login';
      }, 100);
      return { ...state, userInfo: {} };
    }
    case UPDATE_USERINFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

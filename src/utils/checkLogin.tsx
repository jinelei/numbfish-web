import { USER_TOKEN_KEY } from '@/store/action';

export default function checkLogin() {
  return !!localStorage.getItem(USER_TOKEN_KEY);
}

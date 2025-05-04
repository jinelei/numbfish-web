import { UserInfoResponse } from '@/apis/api/data-contracts';

export interface RootState {
  settings?: {
    colorWeek: boolean;
    navbar: boolean;
    menu: boolean;
    footer: boolean;
    themeColor: string;
    menuWidth: number | string;
  };
  loading: boolean;
  userInfo?: Partial<UserInfoResponse>;
}

export const initialState: RootState = {
  settings: {
    colorWeek: false,
    navbar: true,
    menu: true,
    footer: true,
    themeColor: '#165DFF',
    menuWidth: 220,
  },
  loading: false,
  userInfo: {},
};

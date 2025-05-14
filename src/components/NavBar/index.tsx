import React, { useContext, useEffect, useMemo } from 'react';
import {
  Tooltip,
  Input,
  Avatar,
  Select,
  Dropdown,
  Menu,
  Divider,
  Message,
  Button,
} from '@arco-design/web-react';
import {
  IconLanguage,
  IconNotification,
  IconSunFill,
  IconMoonFill,
  IconSettings,
  IconPoweroff,
  IconExperiment,
  IconDashboard,
} from '@arco-design/web-react/icon';
import { useSelector, useDispatch } from 'react-redux';
import store, { RootState } from '@/store';
import { GlobalContext } from '@/context';
import useLocale from '@/utils/useLocale';
import Logo from '@/assets/logo.svg';
import UserIcon from '@/assets/face-smile-fill.svg';
import MessageBox from '@/components/MessageBox';
import IconButton from './IconButton';
import Settings from '../Settings';
import styles from './style/index.module.less';
import defaultLocale from '@/locale';
import useStorage from '@/utils/useStorage';
import { user } from '@/apis';
import { USER_LOGOUT } from '@/store/action';
import NProgress from 'nprogress';
import { useHistory } from 'react-router';

function Navbar({ show }: { show: boolean }) {
  const t = useLocale();
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state: RootState) => {
    return !!state.userInfo && Object.keys(state.userInfo).length !== 0;
  });

  const { setLang, lang, theme, setTheme } = useContext(GlobalContext);

  function logout() {
    user.logout({}).then((res) => {
      if (res.data.code === 200) {
        store.dispatch({ type: USER_LOGOUT });
      } else {
        Message.error(res.data.message);
      }
    });
  }

  function onMenuItemClick(key) {
    if (key === 'logout') {
      logout();
    } else if (key === 'setting') {
      NProgress.start();
      history.push('/setting');
      NProgress.done();
    } else {
      Message.info(`You clicked ${key}`);
    }
  }

  if (!show) {
    return (
      <div className={styles['fixed-settings']}>
        <Settings
          trigger={
            <Button icon={<IconSettings />} type="primary" size="large" />
          }
        />
      </div>
    );
  }

  const droplist = (
    <Menu onClickMenuItem={onMenuItemClick}>
      <Menu.Item key="setting">
        <IconSettings className={styles['dropdown-icon']} />
        {t['menu.user.setting']}
      </Menu.Item>
      <Menu.SubMenu
        key="more"
        title={
          <div style={{ width: 80 }}>
            <IconExperiment className={styles['dropdown-icon']} />
            {t['message.seeMore']}
          </div>
        }
      >
        <Menu.Item key="workplace">
          <IconDashboard className={styles['dropdown-icon']} />
          {t['menu.dashboard.workplace']}
        </Menu.Item>
      </Menu.SubMenu>

      <Divider style={{ margin: '4px 0' }} />
      {isLogin ? (
        <Menu.Item key="logout">
          <IconPoweroff className={styles['dropdown-icon']} />
          {t['navbar.logout']}
        </Menu.Item>
      ) : (
        <Menu.Item key="login">
          <IconPoweroff className={styles['dropdown-icon']} />
          {t['navbar.login']}
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles['logo-name']}>Numbfish</div>
        </div>
      </div>
      <ul className={styles.right}>
        <li>
          <Input.Search
            className={styles.round}
            placeholder={t['navbar.search.placeholder']}
          />
        </li>
        <li>
          <Select
            triggerElement={<IconButton icon={<IconLanguage />} />}
            options={[
              { label: '中文', value: 'zh-CN' },
              { label: 'English', value: 'en-US' },
            ]}
            value={lang}
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: 'br',
            }}
            trigger="hover"
            onChange={(value) => {
              setLang(value);
              const nextLang = defaultLocale[value];
              Message.info(`${nextLang['message.lang.tips']}${value}`);
            }}
          />
        </li>
        <li>
          <MessageBox>
            <IconButton icon={<IconNotification />} />
          </MessageBox>
        </li>
        <li>
          <Tooltip
            content={
              theme === 'light'
                ? t['settings.navbar.theme.toDark']
                : t['settings.navbar.theme.toLight']
            }
          >
            <IconButton
              icon={theme !== 'dark' ? <IconMoonFill /> : <IconSunFill />}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </Tooltip>
        </li>
        <Settings />
        <li>
          {isLogin ? (
            <Dropdown droplist={droplist} position="br">
              <Avatar size={32} style={{ cursor: 'pointer' }}>
                {!!userInfo?.avatar ? (
                  <img alt="avatar" src={userInfo.avatar} />
                ) : (
                  <UserIcon />
                )}
              </Avatar>
            </Dropdown>
          ) : (
            <Avatar
              size={32}
              style={{ cursor: 'pointer' }}
              onClick={() => (window.location.pathname = '/login')}
            >
              {!!userInfo?.avatar ? (
                <img alt="avatar" src={userInfo.avatar} />
              ) : (
                <UserIcon />
              )}
            </Avatar>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

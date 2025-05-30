import './style/global.less';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { user } from '@/apis';
import store from './store';
import PageLayout from './layout';
import { GlobalContext } from './context';
import Login from './pages/login';
import changeTheme from './utils/changeTheme';
import useStorage from './utils/useStorage';
import {
  LOADING_START,
  LOADING_STOP,
  UPDATE_USERINFO,
  USER_TOKEN_KEY,
} from '@/store/action';
import Setup from '@/pages/setup';

function Index() {
  const [lang, setLang] = useStorage('arco-lang', 'en-US');
  const [theme, setTheme] = useStorage('arco-theme', 'light');

  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  useEffect(() => {
    if (!!localStorage.getItem(USER_TOKEN_KEY)) {
      store.dispatch({ type: LOADING_START });
      user
        .info({})
        .then((res) => {
          store.dispatch({
            type: UPDATE_USERINFO,
            payload: res?.data?.data || {},
          });
        })
        .finally(() => {
          store.dispatch({ type: LOADING_STOP });
        });
    }
    // if (window.location.pathname.replace(/\//g, '') !== 'login') {
    //   window.location.pathname = '/login';
    // } else if (window.location.pathname.replace(/\//g, '') !== 'setup') {
    //   window.location.pathname = '/setup';
    // } else if (checkLogin()) {
    //   fetchUserInfo();
    // }
  });

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const contextValue = {
    lang,
    setLang,
    theme,
    setTheme,
  };

  return (
    <BrowserRouter>
      <ConfigProvider
        locale={getArcoLocale()}
        componentConfig={{
          Card: {
            bordered: false,
          },
          List: {
            bordered: false,
          },
          Table: {
            border: false,
          },
        }}
      >
        <Provider store={store}>
          <GlobalContext.Provider value={contextValue}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/setup" component={Setup} />
              <Route path="/" component={PageLayout} />
            </Switch>
          </GlobalContext.Provider>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

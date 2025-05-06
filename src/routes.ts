import auth, { AuthParams } from '@/utils/authentication';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import lazyload from './utils/lazyload';

export type IRoute = AuthParams & {
  name: string;
  key: string;
  // 当前页是否展示面包屑
  breadcrumb?: boolean;
  children?: IRoute[];
  // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
  ignore?: boolean;
};

export const routes: IRoute[] = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      {
        name: 'menu.dashboard.workplace',
        key: 'dashboard/workplace',
      },
    ],
  },
  {
    name: 'menu.userinfo',
    key: 'userinfo',
  },
  {
    name: 'menu.setting',
    key: 'setting',
  },
  {
    name: 'Example',
    key: 'example',
  },
];

export const getName = (path: string, routes) => {
  return routes.find((item) => {
    const itemPath = `/${item.key}`;
    if (path === itemPath) {
      return item.name;
    } else if (item.children) {
      return getName(path, item.children);
    }
  });
};

export const generatePermission = (role: string) => {
  const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        result[child.name] = actions;
      });
    }
  });
  return result;
};

const useRoute = (userPermission): [IRoute[], string] => {
  const filterRoute = (routes: IRoute[], arr = []): IRoute[] => {
    if (!routes.length) {
      return [];
    }
    for (const route of routes) {
      const { requiredPermissions, oneOfPerm } = route;
      let visible = true;
      if (requiredPermissions) {
        visible = auth({ requiredPermissions, oneOfPerm }, userPermission);
      }

      if (!visible) {
        continue;
      }
      if (route.children && route.children.length) {
        const newRoute = { ...route, children: [] };
        filterRoute(route.children, newRoute.children);
        if (newRoute.children.length) {
          arr.push(newRoute);
        }
      } else {
        arr.push({ ...route });
      }
    }

    return arr;
  };

  const [permissionRoute, setPermissionRoute] = useState(routes);

  useEffect(() => {
    const newRoutes = filterRoute(routes);
    setPermissionRoute(newRoutes);
  }, [JSON.stringify(userPermission)]);

  const defaultRoute = useMemo(() => {
    const first = permissionRoute[0];
    if (first) {
      const firstRoute = first?.children?.[0]?.key || first.key;
      return firstRoute;
    }
    return '';
  }, [permissionRoute]);

  return [permissionRoute, defaultRoute];
};

export default useRoute;

export const permissions = [
  {
    id: 143450355309697,
    name: '系统管理',
    code: 'SYSTEM_MANAGE',
    type: 'DIRECTORY',
    children: [
      {
        id: 143450355309696,
        name: '角色管理',
        code: 'ROLE_MANAGE',
        type: 'MENU',
        path: 'example',
        children: [
          {
            id: 143450355310592,
            name: '创建角色',
            code: 'ROLE_CREATE',
            type: 'ACTION',
          },
          {
            id: 143450355310656,
            name: '删除角色',
            code: 'ROLE_DELETE',
            type: 'ACTION',
          },
          {
            id: 143450355310848,
            name: '查看角色概要',
            code: 'ROLE_SUMMARY',
            type: 'ACTION',
          },
          {
            id: 143450355311360,
            name: '查看角色详情',
            code: 'ROLE_DETAIL',
            type: 'ACTION',
          },
          {
            id: 143450355310464,
            name: '更新客户端',
            code: 'CLIENT_UPDATE',
            type: 'ACTION',
          },
          {
            id: 143450355310528,
            name: '查看客户端概要',
            code: 'CLIENT_SUMMARY',
            type: 'ACTION',
          },
        ],
      },
      {
        id: 143450355309632,
        name: '用户管理',
        code: 'USER_MANAGE',
        type: 'MENU',
        path: 'setting',
        children: [
          {
            id: 143450355309760,
            name: '创建用户',
            code: 'USER_CREATE',
            type: 'ACTION',
            children: [
              {
                id: 143450355311424,
                name: '更新权限',
                code: 'PERMISSION_UPDATE',
                type: 'ACTION',
              },
              {
                id: 143450355311488,
                name: '查看权限概要',
                code: 'PERMISSION_SUMMARY',
                type: 'ACTION',
              },
              {
                id: 143450355311552,
                name: '查看权限详情',
                code: 'PERMISSION_DETAIL',
                type: 'ACTION',
              },
            ],
          },
          {
            id: 143450355309824,
            name: '删除用户',
            code: 'USER_DELETE',
            type: 'ACTION',
          },
          {
            id: 143450355309888,
            name: '查看用户概要',
            code: 'USER_SUMMARY',
            type: 'ACTION',
          },
          {
            id: 143450355310400,
            name: '查看用户详情',
            code: 'USER_DETAIL',
            type: 'ACTION',
          },
        ],
      },
    ],
  },
];

const mod = import.meta.glob('./pages/**/[a-z[]*.tsx');

export const renderRoutes = (permission) => {
  const routes = [];
  const { type, children } = permission;
  if (type === 'DIRECTORY') {
    (children || [])
      .map((c) => renderRoutes(c))
      .forEach((c) => routes.push(...c));
  } else if (type === 'MENU') {
    // 加载组件
    if (!!permission.path) {
      permission.component = lazyload(
        mod[`./pages/${permission.path}/index.tsx`]
      );
    }
    routes.push(permission);
  } else if (type === 'ACTION') {
    // 这里不处理
  }
  return routes;
};

export const renderMenus = (permission) => {
  const { type, children } = permission;
  if (type === 'DIRECTORY') {
    return {
      ...permission,
      key: permission.code,
      children: (children || []).map((c) => renderMenus(c)).filter((c) => !!c),
    };
  } else if (type === 'MENU') {
    return {
      ...permission,
      key: permission.code,
      children: (children || [])
        .filter((c) => renderMenus(c))
        .filter((c) => !!c),
    };
  } else if (type === 'ACTION') {
    return null;
  }
};

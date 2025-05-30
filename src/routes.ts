import {
  determinePermissionAuthorized,
  PermissionDeclare,
} from '@/utils/authentication';
import { useEffect, useMemo, useState } from 'react';
import lazyload from './utils/lazyload';

export type IRoute = PermissionDeclare & {
  name: string;
  key: string;
  // 当前页是否展示面包屑
  breadcrumb?: boolean;
  component?: React.ReactNode;
  children?: IRoute[];
  // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
  ignore?: boolean;
};

export const routes: IRoute[] = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    requiredPermissions: ['DASHBOARD'],
  },
  {
    name: 'menu.userinfo',
    key: 'userinfo',
    requiredPermissions: ['ROLE_MANAGE'],
  },
  {
    name: 'menu.setting',
    key: 'setting',
    requiredPermissions: [
      'PERMISSION_MANAGE',
      'ROLE_MANAGE',
      'USER_MANAGE',
      'CLIENT_MANAGE',
    ],
    oneOfPermissions: true,
    children: [
      {
        name: 'menu.setting.permission',
        key: 'setting/permission',
        requiredPermissions: ['PERMISSION_MANAGE'],
      },
      {
        name: 'menu.setting.role',
        key: 'setting/role',
        requiredPermissions: ['ROLE_MANAGE'],
      },
      {
        name: 'menu.setting.user',
        key: 'setting/user',
        requiredPermissions: ['USER_MANAGE'],
      },
    ],
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
  // const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  // routes.forEach((item) => {
  //   if (item.children) {
  //     item.children.forEach((child) => {
  //       result[child.name] = actions;
  //     });
  //   }
  // });
  return result;
};

const useRoute = (userPermission): [IRoute[], string] => {
  const filterRoute = (routes: IRoute[], arr = []): IRoute[] => {
    if (!routes.length) {
      return [];
    }
    for (const route of routes) {
      const { requiredPermissions, oneOfPermissions } = route;
      let visible = true;
      if (requiredPermissions) {
        visible = determinePermissionAuthorized(
          { requiredPermissions, oneOfPermissions },
          userPermission
        );
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

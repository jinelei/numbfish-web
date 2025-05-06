import React, { useEffect, useState } from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import {
  determinePermissionAuthorized,
  PermissionDeclare,
} from '@/utils/authentication';

type PermissionWrapperProps = PermissionDeclare & {
  backup?: React.ReactNode;
};

const PermissionWrapper = (
  props: React.PropsWithChildren<PermissionWrapperProps>
) => {
  const { backup, requiredPermissions, oneOfPermissions } = props;
  const [hasPermission, setHasPermission] = useState(false);
  const userInfo = useSelector((state: RootState) => state.userInfo);

  useEffect(() => {
    const hasPermission = determinePermissionAuthorized(
      { requiredPermissions, oneOfPermissions },
      (userInfo?.permissions || []).map((item) => item.code)
    );
    setHasPermission(hasPermission);
  }, [requiredPermissions, oneOfPermissions, userInfo.permissions]);

  if (hasPermission) {
    return <>{convertReactElement(props.children)}</>;
  }
  if (backup) {
    return <>{convertReactElement(backup)}</>;
  }
  return null;
};

function convertReactElement(node: React.ReactNode): React.ReactElement {
  if (!React.isValidElement(node)) {
    return <>{node}</>;
  }
  return node;
}

export default PermissionWrapper;

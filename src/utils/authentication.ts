export interface PermissionDeclare {
  requiredPermissions?: Array<string | RegExp>;
  oneOfPermissions?: boolean;
}

export const determinePermissionAuthorized = (
  params: PermissionDeclare,
  userPermission: string[]
) => {
  const { requiredPermissions, oneOfPermissions } = params;
  if (Array.isArray(requiredPermissions) && requiredPermissions.length) {
    let count = 0;
    for (const resource of requiredPermissions) {
      if (resource instanceof RegExp) {
        if ((userPermission || []).some((item) => item.match(resource))) {
          count++;
        }
      } else {
        if ((userPermission || []).some((item) => item === resource)) {
          count++;
        }
      }
    }
    return oneOfPermissions ? count > 0 : count === requiredPermissions.length;
  }
  return true;
};

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 用户修改请求对象 */
export interface UserUpdateRequest {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 用户名称 */
  username: string;
  /** 密码 */
  password?: string;
  /** 用户头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 手机号 */
  phone?: string;
  /** 用户备注 */
  remark?: string;
  /** 角色列表 */
  roleIds: number[];
}

/** 基础视图对象 */
export interface BaseViewVoid {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: object;
}

/** 用户更新密码请求对象 */
export interface UserUpdatePasswordRequest {
  /** 用户名称 */
  username: string;
  /** 密码 */
  password?: string;
}

/** 基础视图对象 */
export interface BaseViewString {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: string;
}

/** 分页请求对象 */
export interface PageRequestUserQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 用户查询请求对象 */
  params?: UserQueryRequest;
}

/** 用户查询请求对象 */
export interface UserQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
  /** 用户名称 */
  username?: string;
  /** 邮箱 */
  email?: string;
  /** 手机号 */
  phone?: string;
  /** 用户备注 */
  remark?: string;
  /** 角色列表 */
  roleIds?: number[];
}

/** 分页视图对象 */
export interface PageViewUserResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: UserResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 权限响应对象 */
export interface PermissionResponse {
  /**
   * 权限实体的唯一标识
   * @format int64
   */
  id?: number;
  /** 权限名称 */
  name?: string;
  /** 权限代码 */
  code?: string;
  /** 权限类型 */
  type?: 'DIRECTORY' | 'MENU' | 'ACTION';
  /**
   * 权限排序值
   * @format int32
   */
  sortValue?: number;
  /**
   * 父权限 ID
   * @format int64
   */
  parentId?: number;
  /** 权限备注信息 */
  remark?: string;
  /** 是否启用，0 表示启用，1 表示禁用 */
  deleted?: boolean;
  /** 创建人用户 ID */
  createdUserId?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /** 更新人用户 ID */
  updatedUserId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /** 删除人用户 ID */
  deletedUserId?: string;
  /**
   * 删除时间
   * @format date-time
   */
  deletedTime?: string;
  /** 子级 */
  children?: PermissionResponse[];
}

/** 角色响应对象 */
export interface RoleResponse {
  /**
   * 角色实体的唯一标识
   * @format int64
   */
  id?: number;
  /** 角色名称 */
  name?: string;
  /** 角色代码 */
  code?: string;
  /** 角色类型 */
  type?: 'NORMAL' | 'ADMIN';
  /**
   * 角色排序值
   * @format int32
   */
  sortValue?: number;
  /**
   * 父角色 ID
   * @format int64
   */
  parentId?: number;
  /** 角色备注信息 */
  remark?: string;
  /** 是否启用，0 表示启用，1 表示禁用 */
  deleted?: boolean;
  /** 创建人用户 ID */
  createdUserId?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /** 更新人用户 ID */
  updatedUserId?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /** 删除人用户 ID */
  deletedUserId?: string;
  /**
   * 删除时间
   * @format date-time
   */
  deletedTime?: string;
  /** 子级 */
  children?: RoleResponse[];
  /** 白名单权限列表 */
  whitePermissionIds?: number[];
  /** 白名单权限实体列表 */
  whitePermissions?: PermissionResponse[];
  /** 黑名单权限列表 */
  blackPermissionIds?: number[];
  /** 黑名单权限列表 */
  blackPermissions?: PermissionResponse[];
}

/** 用户响应对象 */
export interface UserResponse {
  /**
   * 用户实体的唯一标识
   * @format int64
   */
  id?: number;
  /** 用户名称 */
  username?: string;
  /** 邮箱 */
  email?: string;
  /** 手机号 */
  phone?: string;
  /** 用户备注 */
  remark?: string;
  /** 角色列表 */
  roleIds?: number[];
  /** 角色实体列表 */
  roles?: RoleResponse[];
  /** 权限列表 */
  permissions?: PermissionResponse[];
}

/** 用户登陆请求对象 */
export interface UserLoginRequest {
  /** 用户名称 */
  username: string;
  /** 密码 */
  password: string;
}

/** 列表视图对象 */
export interface ListViewUserResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: UserResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewUserInfoResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 用户信息响应对象 */
  data?: UserInfoResponse;
}

/** 用户信息响应对象 */
export interface UserInfoResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 用户名 */
  username?: string;
  /** 手机号 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 备注 */
  remark?: string;
  /** 权限列表 */
  permissions?: PermissionResponse[];
  /** 角色列表 */
  roles?: RoleResponse[];
}

/** 基础视图对象 */
export interface BaseViewUserResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 用户响应对象 */
  data?: UserResponse;
}

/** 用户删除请求对象 */
export interface UserDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 用户创建请求对象 */
export interface UserCreateRequest {
  /** 用户名称 */
  username: string;
  /** 密码 */
  password?: string;
  /** 用户头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 手机号 */
  phone?: string;
  /** 用户备注 */
  remark?: string;
  /** 角色列表 */
  roleIds: number[];
}

/** 用户权限初始化请求对象 */
export interface SetupRequest {
  /** 用户名称 */
  username?: string;
  /** 密码 */
  password?: string;
  /** 用户头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 手机号 */
  phone?: string;
  /** 用户备注 */
  remark?: string;
}

/** 基础视图对象 */
export interface BaseViewBoolean {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: boolean;
}

/** 角色修改请求对象 */
export interface RoleUpdateRequest {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 角色名称 */
  name: string;
  /** 角色编码 */
  code: string;
  /** 角色类型 */
  type: 'NORMAL' | 'ADMIN';
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
  /**
   * 上级角色编码
   * @format int64
   */
  parentId?: number;
  /** 角色备注 */
  remark?: string;
  /** 白名单权限列表 */
  whitePermissionIds: number[];
  /** 黑名单权限列表 */
  blackPermissionIds: number[];
}

/** 角色查询请求对象 */
export interface RoleQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
  /** 角色名称 */
  name?: string;
  /** 角色编码 */
  code?: string;
  /** 角色类型 */
  type?: 'NORMAL' | 'ADMIN';
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
  /** 上级角色编码 */
  parentId?: string;
  /** 角色备注 */
  remark?: string;
  /** 树构建模式 */
  mode?:
    | 'ALL'
    | 'PARENT'
    | 'PARENT_AND_CURRENT'
    | 'CHILD'
    | 'CHILD_AND_CURRENT';
}

/** 基础视图对象 */
export interface BaseViewListRoleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: RoleResponse[];
}

/** 权限声明对象 */
export interface PermissionDeclarationObject {
  /** 权限名称 */
  name?: string;
  /** 父级权限 */
  parent?: object;
  /** 权限类型 */
  type?: 'DIRECTORY' | 'MENU' | 'ACTION';
  /** 权限编码 */
  code?: string;
  /** 权限描述 */
  remark?: string;
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
}

/** 角色声明对象 */
export interface RoleDeclarationObject {
  /** 角色名称 */
  name?: string;
  /** 父级角色 */
  parent?: object;
  /** 关联权限 */
  permissions?: PermissionDeclarationObject[];
  /** 角色类型 */
  type?: 'NORMAL' | 'ADMIN';
  /** 角色编码 */
  code?: string;
  /** 角色描述 */
  remark?: string;
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
}

/** 分页请求对象 */
export interface PageRequestRoleQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 角色查询请求对象 */
  params?: RoleQueryRequest;
}

/** 分页视图对象 */
export interface PageViewRoleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: RoleResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewRoleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: RoleResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewRoleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 角色响应对象 */
  data?: RoleResponse;
}

/** 角色删除请求对象 */
export interface RoleDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
  /**
   * 上级角色编码
   * @format int64
   */
  parentId?: number;
}

/** 角色创建请求对象 */
export interface RoleCreateRequest {
  /** 角色名称 */
  name: string;
  /** 角色编码 */
  code: string;
  /** 角色类型 */
  type: 'NORMAL' | 'ADMIN';
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
  /**
   * 上级角色编码
   * @format int64
   */
  parentId?: number;
  /** 角色备注 */
  remark?: string;
  /** 白名单权限列表 */
  whitePermissionIds: number[];
  /** 黑名单权限列表 */
  blackPermissionIds: number[];
}

/** 权限修改请求对象 */
export interface PermissionUpdateRequest {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 权限名称 */
  name: string;
  /** 权限编码 */
  code: string;
  /** 权限类型 */
  type: 'DIRECTORY' | 'MENU' | 'ACTION';
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
  /**
   * 上级权限编码
   * @format int64
   */
  parentId?: number;
  /** 权限备注 */
  remark?: string;
}

/** 权限查询请求对象 */
export interface PermissionQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
  /** 权限名称 */
  name?: string;
  /** 权限编码 */
  code?: string;
  /** 权限类型 */
  type?: 'DIRECTORY' | 'MENU' | 'ACTION';
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
  /** 上级权限编码 */
  parentId?: string;
  /** 权限备注 */
  remark?: string;
  /** 树构建模式 */
  mode?:
    | 'ALL'
    | 'PARENT'
    | 'PARENT_AND_CURRENT'
    | 'CHILD'
    | 'CHILD_AND_CURRENT';
}

/** 基础视图对象 */
export interface BaseViewListPermissionResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: PermissionResponse[];
}

/** 分页请求对象 */
export interface PageRequestPermissionQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 权限查询请求对象 */
  params?: PermissionQueryRequest;
}

/** 分页视图对象 */
export interface PageViewPermissionResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: PermissionResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewPermissionResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: PermissionResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewPermissionResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 权限响应对象 */
  data?: PermissionResponse;
}

/** 权限删除请求对象 */
export interface PermissionDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
  /**
   * 上级权限编码
   * @format int64
   */
  parentId?: number;
}

/** 权限创建请求对象 */
export interface PermissionCreateRequest {
  /** 权限名称 */
  name: string;
  /** 权限编码 */
  code: string;
  /** 权限类型 */
  type: 'DIRECTORY' | 'MENU' | 'ACTION';
  /**
   * 排序值
   * @format int32
   */
  sortValue?: number;
  /**
   * 上级权限编码
   * @format int64
   */
  parentId?: number;
  /** 权限备注 */
  remark?: string;
}

/** 客户端修改请求对象 */
export interface ClientUpdateRequest {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 访问主键 */
  accessKey?: string;
  /** 访问密钥 */
  secretKey?: string;
  /**
   * 过期时间
   * @format date-time
   */
  expiredAt?: string;
  /** 备注 */
  remark?: string;
  /** 权限Id列表 */
  permissionIds?: number[];
}

/** 客户端查询请求对象 */
export interface ClientQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 访问主键 */
  accessKey?: string;
  /** 访问密钥 */
  secretKey?: string;
  /**
   * 过期时间
   * @format date-time
   */
  expiredAt?: string;
  /** 备注 */
  remark?: string;
}

/** 分页请求对象 */
export interface PageRequestClientQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 客户端查询请求对象 */
  params?: ClientQueryRequest;
}

/** 客户端响应对象 */
export interface ClientResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 访问主键 */
  accessKey?: string;
  /** 访问密钥 */
  secretKey?: string;
  /**
   * 过期时间
   * @format date-time
   */
  expiredAt?: string;
  /** 备注 */
  remark?: string;
  /** 权限列表 */
  permissions?: PermissionResponse[];
}

/** 分页视图对象 */
export interface PageViewClientResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: ClientResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewClientResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: ClientResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewClientResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 客户端响应对象 */
  data?: ClientResponse;
}

/** 客户端删除请求对象 */
export interface ClientDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 客户端创建请求对象 */
export interface ClientCreateRequest {
  /** 访问主键 */
  accessKey: string;
  /** 访问密钥 */
  secretKey: string;
  /**
   * 过期时间
   * @format date-time
   */
  expiredAt: string;
  /** 备注 */
  remark?: string;
  /** 权限Id列表 */
  permissionIds?: number[];
}

/** 结构更新请求对象 */
export interface StructureUpdateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 结构编码 */
  code?: string;
  /** 结构名称 */
  name?: string;
  /** 结构类型 */
  type?: 'DEFAULT' | 'FACTORY' | 'WORKSHOP' | 'LINE' | 'STATION' | 'EQUIPMENT';
  /**
   * 上级结构id
   * @format int64
   */
  parentId?: number;
  /** 结构描述 */
  remark?: string;
}

/** 分页请求对象 */
export interface PageRequestStructureQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 结构查询请求对象 */
  params?: StructureQueryRequest;
}

/** 结构查询请求对象 */
export interface StructureQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 结构编码 */
  code?: string;
  /** 结构名称 */
  name?: string;
  /** 结构类型 */
  type?: 'DEFAULT' | 'FACTORY' | 'WORKSHOP' | 'LINE' | 'STATION' | 'EQUIPMENT';
  /**
   * 上级结构id
   * @format int64
   */
  parentId?: number;
  /** 结构描述 */
  remark?: string;
}

/** 分页视图对象 */
export interface PageViewStructureResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: StructureResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 结构响应对象 */
export interface StructureResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 结构编码 */
  code?: string;
  /** 结构名称 */
  name?: string;
  /** 结构类型 */
  type?: 'DEFAULT' | 'FACTORY' | 'WORKSHOP' | 'LINE' | 'STATION' | 'EQUIPMENT';
  /**
   * 上级结构id
   * @format int64
   */
  parentId?: number;
  /** 结构描述 */
  remark?: string;
}

/** 列表视图对象 */
export interface ListViewStructureResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: StructureResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewStructureResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 结构响应对象 */
  data?: StructureResponse;
}

/** 结构删除请求对象 */
export interface StructureDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 结构创建请求对象 */
export interface StructureCreateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 结构编码 */
  code?: string;
  /** 结构名称 */
  name?: string;
  /** 结构类型 */
  type?: 'DEFAULT' | 'FACTORY' | 'WORKSHOP' | 'LINE' | 'STATION' | 'EQUIPMENT';
  /**
   * 上级结构id
   * @format int64
   */
  parentId?: number;
  /** 结构描述 */
  remark?: string;
}

/** Oee规则更新请求对象 */
export interface OeeRuleUpdateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** Oee启用 */
  enabled?: boolean;
  /** Oee规则 */
  oeeRule?: string;
  /** Oee规则-渲染 */
  oeeRuleRender?: string;
  /** Oee规则-编辑 */
  oeeRuleEdit?: string;
  /** 可用性规则 */
  availabilityRule?: string;
  /** 可用性规则-渲染 */
  availabilityRuleRender?: string;
  /** 可用性规则-编辑 */
  availabilityRuleEdit?: string;
  /** 性能规则 */
  performanceRule?: string;
  /** 性能规则-渲染 */
  performanceRuleRender?: string;
  /** 性能规则-编辑 */
  performanceRuleEdit?: string;
  /** 质量规则 */
  qualityRule?: string;
  /** 质量规则-渲染 */
  qualityRuleRender?: string;
  /** 质量规则-编辑 */
  qualityRuleEdit?: string;
}

/** Oee规则查询请求对象 */
export interface OeeRuleQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** Oee启用 */
  enabled?: boolean;
  /** Oee规则 */
  oeeRule?: string;
  /** Oee规则-渲染 */
  oeeRuleRender?: string;
  /** Oee规则-编辑 */
  oeeRuleEdit?: string;
  /** 可用性规则 */
  availabilityRule?: string;
  /** 可用性规则-渲染 */
  availabilityRuleRender?: string;
  /** 可用性规则-编辑 */
  availabilityRuleEdit?: string;
  /** 性能规则 */
  performanceRule?: string;
  /** 性能规则-渲染 */
  performanceRuleRender?: string;
  /** 性能规则-编辑 */
  performanceRuleEdit?: string;
  /** 质量规则 */
  qualityRule?: string;
  /** 质量规则-渲染 */
  qualityRuleRender?: string;
  /** 质量规则-编辑 */
  qualityRuleEdit?: string;
}

/** 分页请求对象 */
export interface PageRequestOeeRuleQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** Oee规则查询请求对象 */
  params?: OeeRuleQueryRequest;
}

/** Oee规则响应对象 */
export interface OeeRuleResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** Oee启用 */
  enabled?: boolean;
  /** Oee规则 */
  oeeRule?: string;
  /** Oee规则-渲染 */
  oeeRuleRender?: string;
  /** Oee规则-编辑 */
  oeeRuleEdit?: string;
  /** 可用性规则 */
  availabilityRule?: string;
  /** 可用性规则-渲染 */
  availabilityRuleRender?: string;
  /** 可用性规则-编辑 */
  availabilityRuleEdit?: string;
  /** 性能规则 */
  performanceRule?: string;
  /** 性能规则-渲染 */
  performanceRuleRender?: string;
  /** 性能规则-编辑 */
  performanceRuleEdit?: string;
  /** 质量规则 */
  qualityRule?: string;
  /** 质量规则-渲染 */
  qualityRuleRender?: string;
  /** 质量规则-编辑 */
  qualityRuleEdit?: string;
}

/** 分页视图对象 */
export interface PageViewOeeRuleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: OeeRuleResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewOeeRuleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: OeeRuleResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewOeeRuleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** Oee规则响应对象 */
  data?: OeeRuleResponse;
}

/** Oee规则删除请求对象 */
export interface OeeRuleDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** Oee规则创建请求对象 */
export interface OeeRuleCreateRequest {
  /** Oee启用 */
  enabled?: boolean;
  /** Oee规则 */
  oeeRule?: string;
  /** Oee规则-渲染 */
  oeeRuleRender?: string;
  /** Oee规则-编辑 */
  oeeRuleEdit?: string;
  /** 可用性规则 */
  availabilityRule?: string;
  /** 可用性规则-渲染 */
  availabilityRuleRender?: string;
  /** 可用性规则-编辑 */
  availabilityRuleEdit?: string;
  /** 性能规则 */
  performanceRule?: string;
  /** 性能规则-渲染 */
  performanceRuleRender?: string;
  /** 性能规则-编辑 */
  performanceRuleEdit?: string;
  /** 质量规则 */
  qualityRule?: string;
  /** 质量规则-渲染 */
  qualityRuleRender?: string;
  /** 质量规则-编辑 */
  qualityRuleEdit?: string;
}

/** Oee历史查询请求对象 */
export interface OeeHistoryQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /**
   * Oee规则id
   * @format int64
   */
  oeeRuleId?: number;
  /**
   * 设备id
   * @format int64
   */
  deviceId?: number;
  /**
   * Oee历史开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * Oee历史结束时间
   * @format date-time
   */
  endTime?: string;
}

/** 分页请求对象 */
export interface PageRequestOeeHistoryQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** Oee历史查询请求对象 */
  params?: OeeHistoryQueryRequest;
}

/** 报警历史查询请求对象 */
export interface OeeHistoryResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 设备id
   * @format int64
   */
  deviceId?: number;
  /**
   * oee规则id
   * @format int64
   */
  oeeRuleId?: number;
  /**
   * 记录日期
   * @format date
   */
  recordDate?: string;
  /**
   * oee
   * @format double
   */
  oee?: number;
  /**
   * 可用性
   * @format double
   */
  availability?: number;
  /**
   * 性能
   * @format double
   */
  performance?: number;
  /**
   * 质量
   * @format double
   */
  quality?: number;
  /** 跟踪数据 */
  traceData?: string;
}

/** 分页视图对象 */
export interface PageViewOeeHistoryResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: OeeHistoryResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewOeeHistoryResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: OeeHistoryResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewOeeHistoryResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 报警历史查询请求对象 */
  data?: OeeHistoryResponse;
}

/** Oee历史删除请求对象 */
export interface OeeHistoryDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 字典查询更新对象 */
export interface DictUpdateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 字典编码 */
  code?: string;
  /** 字典名称 */
  name?: string;
  /** 字典值 */
  value?: string;
  /**
   * 上级字典id
   * @format int64
   */
  parentId?: number;
  /** 字典描述 */
  remark?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
}

/** 字典查询请求对象 */
export interface DictQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 字典编码 */
  code?: string;
  /** 字典名称 */
  name?: string;
  /** 字典值 */
  value?: string;
  /**
   * 上级字典id
   * @format int64
   */
  parentId?: number;
  /** 字典描述 */
  remark?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
}

/** 分页请求对象 */
export interface PageRequestDictQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 字典查询请求对象 */
  params?: DictQueryRequest;
}

/** 字典响应对象 */
export interface DictResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 字典编码 */
  code?: string;
  /** 字典名称 */
  name?: string;
  /** 字典值 */
  value?: string;
  /**
   * 上级字典id
   * @format int64
   */
  parentId?: number;
  /** 字典描述 */
  remark?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
}

/** 分页视图对象 */
export interface PageViewDictResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: DictResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewDictResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: DictResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewDictResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 字典响应对象 */
  data?: DictResponse;
}

/** 字典删除请求对象 */
export interface DictDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 字典创建请求对象 */
export interface DictCreateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 字典编码 */
  code?: string;
  /** 字典名称 */
  name?: string;
  /** 字典值 */
  value?: string;
  /**
   * 上级字典id
   * @format int64
   */
  parentId?: number;
  /** 字典描述 */
  remark?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
}

/** 设备更新请求对象 */
export interface DeviceUpdateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 设备编码 */
  code?: string;
  /** 设备名称 */
  name?: string;
  /** 设备类型 */
  deviceType?:
    | 'METER'
    | 'SWITCH'
    | 'SENSOR'
    | 'CONTROLLER'
    | 'MONITOR'
    | 'CAMERA'
    | 'SERVER'
    | 'ROUTER'
    | 'SWITCHBOARD'
    | 'UPS'
    | 'GENERATOR';
  /** 设备描述 */
  remark?: string;
}

export interface DeviceRunningStateUpdateRequest {
  deviceCode?: string;
  runningState?: 'ALL' | 'STOP' | 'RUN' | 'IDLE' | 'OFFLINE' | 'DEBUG';
  /** @format date-time */
  timestamp?: string;
}

export interface DeviceActivateStateUpdateRequest {
  deviceCode?: string;
  /** @format date-time */
  timestamp?: string;
}

/** 设备查询请求对象 */
export interface DeviceQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 设备编码 */
  code?: string;
  /** 设备名称 */
  name?: string;
  /** 设备类型 */
  deviceType?:
    | 'METER'
    | 'SWITCH'
    | 'SENSOR'
    | 'CONTROLLER'
    | 'MONITOR'
    | 'CAMERA'
    | 'SERVER'
    | 'ROUTER'
    | 'SWITCHBOARD'
    | 'UPS'
    | 'GENERATOR';
  /** 设备状态 */
  runningState?: 'ALL' | 'STOP' | 'RUN' | 'IDLE' | 'OFFLINE' | 'DEBUG';
  /** 设备描述 */
  remark?: string;
  deviceState?: 'ALL' | 'STOP' | 'RUN' | 'IDLE' | 'OFFLINE' | 'DEBUG';
}

/** 分页请求对象 */
export interface PageRequestDeviceQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 设备查询请求对象 */
  params?: DeviceQueryRequest;
}

/** 设备响应对象 */
export interface DeviceResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 设备编码 */
  code?: string;
  /** 设备名称 */
  name?: string;
  /** 设备类型 */
  deviceType?:
    | 'METER'
    | 'SWITCH'
    | 'SENSOR'
    | 'CONTROLLER'
    | 'MONITOR'
    | 'CAMERA'
    | 'SERVER'
    | 'ROUTER'
    | 'SWITCHBOARD'
    | 'UPS'
    | 'GENERATOR';
  /** 设备状态 */
  runningState?: 'ALL' | 'STOP' | 'RUN' | 'IDLE' | 'OFFLINE' | 'DEBUG';
  /** 设备描述 */
  remark?: string;
}

/** 分页视图对象 */
export interface PageViewDeviceResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: DeviceResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewDeviceResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: DeviceResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewDeviceResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 设备响应对象 */
  data?: DeviceResponse;
}

/** 设备删除请求对象 */
export interface DeviceDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 设备创建请求对象 */
export interface DeviceCreateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 设备编码 */
  code?: string;
  /** 设备名称 */
  name?: string;
  /** 设备类型 */
  deviceType?:
    | 'METER'
    | 'SWITCH'
    | 'SENSOR'
    | 'CONTROLLER'
    | 'MONITOR'
    | 'CAMERA'
    | 'SERVER'
    | 'ROUTER'
    | 'SWITCHBOARD'
    | 'UPS'
    | 'GENERATOR';
  /** 设备状态 */
  runningState?: 'ALL' | 'STOP' | 'RUN' | 'IDLE' | 'OFFLINE' | 'DEBUG';
  /** 设备描述 */
  remark?: string;
}

/** 报警规则修改请求对象 */
export interface AlarmRuleUpdateRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 报警规则编码 */
  code?: string;
  /** 报警规则名称 */
  name?: string;
  /** 报警规则 */
  alarmRule?: string;
  /** 报警规则-渲染 */
  alarmRuleRender?: string;
  /** 报警规则-编辑 */
  alarmRuleEdit?: string;
  /** 报警规则描述 */
  remark?: string;
  /** 报警启用 */
  enabled?: boolean;
  /** 报警级别 */
  level?: 'SEVERE' | 'URGENT' | 'ALARM' | 'NOTICE';
}

/** 报警规则查询请求对象 */
export interface AlarmRuleQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /** 报警规则编码 */
  code?: string;
  /** 报警规则名称 */
  name?: string;
  /** 报警规则 */
  alarmRule?: string;
  /** 报警规则-渲染 */
  alarmRuleRender?: string;
  /** 报警规则-编辑 */
  alarmRuleEdit?: string;
  /** 报警规则描述 */
  remark?: string;
  /** 报警启用 */
  enabled?: boolean;
  /** 报警级别 */
  level?: 'SEVERE' | 'URGENT' | 'ALARM' | 'NOTICE';
}

/** 分页请求对象 */
export interface PageRequestAlarmRuleQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 报警规则查询请求对象 */
  params?: AlarmRuleQueryRequest;
}

/** 报警规则响应 */
export interface AlarmRuleResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 报警规则编码 */
  code?: string;
  /** 报警规则名称 */
  name?: string;
  /** 报警规则 */
  alarmRule?: string;
  /** 报警规则-渲染 */
  alarmRuleRender?: string;
  /** 报警规则-编辑 */
  alarmRuleEdit?: string;
  /** 报警规则描述 */
  remark?: string;
  /** 报警启用 */
  enabled?: boolean;
  /** 报警级别 */
  level?: 'SEVERE' | 'URGENT' | 'ALARM' | 'NOTICE';
}

/** 分页视图对象 */
export interface PageViewAlarmRuleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: AlarmRuleResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewAlarmRuleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: AlarmRuleResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewAlarmRuleResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 报警规则响应 */
  data?: AlarmRuleResponse;
}

/** 报警规则删除请求对象 */
export interface AlarmRuleDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

/** 报警规则创建请求对象 */
export interface AlarmRuleCreateRequest {
  /** 报警规则编码 */
  code?: string;
  /** 报警规则名称 */
  name?: string;
  /** 报警规则 */
  alarmRule?: string;
  /** 报警规则-渲染 */
  alarmRuleRender?: string;
  /** 报警规则-编辑 */
  alarmRuleEdit?: string;
  /** 报警规则描述 */
  remark?: string;
  /** 报警启用 */
  enabled?: boolean;
  /** 报警级别 */
  level?: 'SEVERE' | 'URGENT' | 'ALARM' | 'NOTICE';
}

/** 报警历史查询请求对象 */
export interface AlarmHistoryQueryRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** ids */
  ids?: number[];
  /**
   * 报警规则id
   * @format int64
   */
  alarmRuleId?: number;
  /**
   * 设备id
   * @format int64
   */
  deviceId?: number;
  /**
   * 报警历史开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 报警历史结束时间
   * @format date-time
   */
  endTime?: string;
  /** 报警级别 */
  level?: 'SEVERE' | 'URGENT' | 'ALARM' | 'NOTICE';
  /** 报警结果 */
  result?: boolean;
}

/** 分页请求对象 */
export interface PageRequestAlarmHistoryQueryRequest {
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
  /** 报警历史查询请求对象 */
  params?: AlarmHistoryQueryRequest;
}

/** 报警历史查询请求对象 */
export interface AlarmHistoryResponse {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 设备id
   * @format int64
   */
  deviceId?: number;
  /**
   * 报警规则id
   * @format int64
   */
  alarmRuleId?: number;
  /**
   * 报警历史时间
   * @format date-time
   */
  recordDateTime?: string;
  /** 报警结果 */
  result?: boolean;
}

/** 分页视图对象 */
export interface PageViewAlarmHistoryResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: AlarmHistoryResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
  /**
   * 分页页码
   * @format int32
   */
  page?: number;
  /**
   * 分页大小
   * @format int32
   */
  size?: number;
}

/** 列表视图对象 */
export interface ListViewAlarmHistoryResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 数据 */
  data?: AlarmHistoryResponse[];
  /**
   * 记录总数
   * @format int32
   */
  total?: number;
}

/** 基础视图对象 */
export interface BaseViewAlarmHistoryResponse {
  /**
   * 错误码
   * @format int32
   */
  code?: number;
  /** 错误信息 */
  message?: string;
  /** 报警历史查询请求对象 */
  data?: AlarmHistoryResponse;
}

/** 报警历史删除请求对象 */
export interface AlarmHistoryDeleteRequest {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id列表 */
  ids?: number[];
}

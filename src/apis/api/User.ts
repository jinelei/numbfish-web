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

import {
  BaseViewString,
  BaseViewUserInfoResponse,
  BaseViewUserResponse,
  BaseViewVoid,
  ListViewUserResponse,
  PageRequestUserQueryRequest,
  PageViewUserResponse,
  UserCreateRequest,
  UserDeleteRequest,
  UserLoginRequest,
  UserQueryRequest,
  UserUpdatePasswordRequest,
  UserUpdateRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class User<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 用户管理
   * @name Update
   * @summary 更新用户
   * @request POST:/authorization/user/update
   */
  update = (data: UserUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/user/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name UpdatePassword
   * @summary 用户修改密码
   * @request POST:/authorization/user/updatePassword
   */
  updatePassword = (
    data: UserUpdatePasswordRequest,
    params: RequestParams = {}
  ) =>
    this.request<BaseViewString, any>({
      path: `/authorization/user/updatePassword`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Page
   * @summary 获取用户分页
   * @request POST:/authorization/user/page
   */
  page = (data: PageRequestUserQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewUserResponse, any>({
      path: `/authorization/user/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Logout
   * @summary 用户登出
   * @request POST:/authorization/user/logout
   */
  logout = (params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/user/logout`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Login
   * @summary 用户登陆
   * @request POST:/authorization/user/login
   */
  login = (data: UserLoginRequest, params: RequestParams = {}) =>
    this.request<BaseViewString, any>({
      path: `/authorization/user/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name List
   * @summary 获取用户列表
   * @request POST:/authorization/user/list
   */
  list = (data: UserQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewUserResponse, any>({
      path: `/authorization/user/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Info
   * @summary 用户信息
   * @request POST:/authorization/user/info
   */
  info = (params: RequestParams = {}) =>
    this.request<BaseViewUserInfoResponse, any>({
      path: `/authorization/user/info`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Get
   * @summary 获取用户
   * @request POST:/authorization/user/get
   */
  get = (data: UserQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewUserResponse, any>({
      path: `/authorization/user/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Delete
   * @summary 删除用户
   * @request POST:/authorization/user/delete
   */
  delete = (data: UserDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/user/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Create
   * @summary 创建用户
   * @request POST:/authorization/user/create
   */
  create = (data: UserCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/user/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

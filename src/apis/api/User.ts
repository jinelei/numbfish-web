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
   * @request POST:/user/update
   */
  update = (data: UserUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/user/update`,
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
   * @request POST:/user/updatePassword
   */
  updatePassword = (
    data: UserUpdatePasswordRequest,
    params: RequestParams = {}
  ) =>
    this.request<BaseViewString, any>({
      path: `/user/updatePassword`,
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
   * @request POST:/user/page
   */
  page = (data: PageRequestUserQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewUserResponse, any>({
      path: `/user/page`,
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
   * @request POST:/user/logout
   */
  logout = (params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/user/logout`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Login
   * @summary 用户登陆
   * @request POST:/user/login
   */
  login = (data: UserLoginRequest, params: RequestParams = {}) =>
    this.request<BaseViewString, any>({
      path: `/user/login`,
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
   * @request POST:/user/list
   */
  list = (data: UserQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewUserResponse, any>({
      path: `/user/list`,
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
   * @request POST:/user/info
   */
  info = (params: RequestParams = {}) =>
    this.request<BaseViewUserInfoResponse, any>({
      path: `/user/info`,
      method: 'POST',
      ...params,
    });
  /**
   * No description
   *
   * @tags 用户管理
   * @name Get
   * @summary 获取用户
   * @request POST:/user/get
   */
  get = (data: UserQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewUserResponse, any>({
      path: `/user/get`,
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
   * @request POST:/user/delete
   */
  delete = (data: UserDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/user/delete`,
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
   * @request POST:/user/create
   */
  create = (data: UserCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/user/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

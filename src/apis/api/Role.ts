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
  BaseViewRoleResponse,
  BaseViewVoid,
  ListViewRoleResponse,
  PageRequestRoleQueryRequest,
  PageViewRoleResponse,
  RoleCreateRequest,
  RoleDeleteRequest,
  RoleQueryRequest,
  RoleUpdateRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Role<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 角色管理
   * @name Update1
   * @summary 更新角色
   * @request POST:/authorization/role/update
   */
  update1 = (data: RoleUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/role/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 角色管理
   * @name Page1
   * @summary 获取角色分页
   * @request POST:/authorization/role/page
   */
  page1 = (data: PageRequestRoleQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewRoleResponse, any>({
      path: `/authorization/role/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 角色管理
   * @name List1
   * @summary 获取角色列表
   * @request POST:/authorization/role/list
   */
  list1 = (data: RoleQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewRoleResponse, any>({
      path: `/authorization/role/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 角色管理
   * @name Get1
   * @summary 获取角色
   * @request POST:/authorization/role/get
   */
  get1 = (data: RoleQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewRoleResponse, any>({
      path: `/authorization/role/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 角色管理
   * @name Delete1
   * @summary 删除角色
   * @request POST:/authorization/role/delete
   */
  delete1 = (data: RoleDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/role/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 角色管理
   * @name Create1
   * @summary 创建角色
   * @request POST:/authorization/role/create
   */
  create1 = (data: RoleCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/authorization/role/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

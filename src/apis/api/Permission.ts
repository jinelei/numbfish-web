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
  BaseViewBoolean,
  BaseViewListPermissionResponse,
  BaseViewPermissionResponse,
  BaseViewVoid,
  ListViewPermissionResponse,
  PageRequestPermissionQueryRequest,
  PageViewPermissionResponse,
  PermissionCreateRequest,
  PermissionDeclarationObject,
  PermissionDeleteRequest,
  PermissionQueryRequest,
  PermissionUpdateRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Permission<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 权限管理
   * @name Update2
   * @summary 更新权限
   * @request POST:/permission/update
   */
  update2 = (data: PermissionUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/permission/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name Tree1
   * @summary 获取权限树
   * @request POST:/permission/tree
   */
  tree1 = (data: PermissionQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewListPermissionResponse, any>({
      path: `/permission/tree`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name Regist1
   * @summary 注册权限
   * @request POST:/permission/regist
   */
  regist1 = (
    query: {
      permissions: PermissionDeclarationObject[];
    },
    params: RequestParams = {}
  ) =>
    this.request<BaseViewBoolean, any>({
      path: `/permission/regist`,
      method: 'POST',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name Page2
   * @summary 获取权限分页
   * @request POST:/permission/page
   */
  page2 = (
    data: PageRequestPermissionQueryRequest,
    params: RequestParams = {}
  ) =>
    this.request<PageViewPermissionResponse, any>({
      path: `/permission/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name List2
   * @summary 获取权限列表
   * @request POST:/permission/list
   */
  list2 = (data: PermissionQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewPermissionResponse, any>({
      path: `/permission/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name Get2
   * @summary 获取权限
   * @request POST:/permission/get
   */
  get2 = (data: PermissionQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewPermissionResponse, any>({
      path: `/permission/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name Delete2
   * @summary 删除权限
   * @request POST:/permission/delete
   */
  delete2 = (data: PermissionDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/permission/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 权限管理
   * @name Create2
   * @summary 创建权限
   * @request POST:/permission/create
   */
  create2 = (data: PermissionCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/permission/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

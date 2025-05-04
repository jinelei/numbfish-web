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
  BaseViewClientResponse,
  BaseViewVoid,
  ClientCreateRequest,
  ClientDeleteRequest,
  ClientQueryRequest,
  ClientUpdateRequest,
  ListViewClientResponse,
  PageRequestClientQueryRequest,
  PageViewClientResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Client<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 客户端管理
   * @name Update3
   * @summary 更新客户端
   * @request POST:/client/update
   */
  update3 = (data: ClientUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/client/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户端管理
   * @name Page3
   * @summary 获取客户端分页
   * @request POST:/client/page
   */
  page3 = (data: PageRequestClientQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewClientResponse, any>({
      path: `/client/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户端管理
   * @name List3
   * @summary 获取客户端列表
   * @request POST:/client/list
   */
  list3 = (data: ClientQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewClientResponse, any>({
      path: `/client/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户端管理
   * @name Get3
   * @summary 获取客户端
   * @request POST:/client/get
   */
  get3 = (data: ClientQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewClientResponse, any>({
      path: `/client/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户端管理
   * @name Delete3
   * @summary 删除客户端
   * @request POST:/client/delete
   */
  delete3 = (data: ClientDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/client/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 客户端管理
   * @name Create3
   * @summary 创建客户端
   * @request POST:/client/create
   */
  create3 = (data: ClientCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/client/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

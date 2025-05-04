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
  BaseViewDictResponse,
  BaseViewVoid,
  DictCreateRequest,
  DictDeleteRequest,
  DictQueryRequest,
  DictUpdateRequest,
  ListViewDictResponse,
  PageRequestDictQueryRequest,
  PageViewDictResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Dict<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 字典管理
   * @name Update21
   * @summary 更新字典
   * @request POST:/equipment/dict/update
   */
  update21 = (data: DictUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/dict/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 字典管理
   * @name Page31
   * @summary 获取字典分页列表
   * @request POST:/equipment/dict/page
   */
  page31 = (data: PageRequestDictQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewDictResponse, any>({
      path: `/equipment/dict/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 字典管理
   * @name List31
   * @summary 获取字典列表
   * @request POST:/equipment/dict/list
   */
  list31 = (data: DictQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewDictResponse, any>({
      path: `/equipment/dict/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 字典管理
   * @name Get31
   * @summary 获取字典
   * @request POST:/equipment/dict/get
   */
  get31 = (data: DictQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewDictResponse, any>({
      path: `/equipment/dict/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 字典管理
   * @name Delete31
   * @summary 删除字典
   * @request POST:/equipment/dict/delete
   */
  delete31 = (data: DictDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/dict/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 字典管理
   * @name Create21
   * @summary 创建字典
   * @request POST:/equipment/dict/create
   */
  create21 = (data: DictCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/dict/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

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
  BaseViewStructureResponse,
  BaseViewVoid,
  ListViewStructureResponse,
  PageRequestStructureQueryRequest,
  PageViewStructureResponse,
  StructureCreateRequest,
  StructureDeleteRequest,
  StructureQueryRequest,
  StructureUpdateRequest,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Structure<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 结构管理
   * @name Update1
   * @summary 更新结构
   * @request POST:/structure/update
   */
  update1 = (data: StructureUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/structure/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 结构管理
   * @name Page1
   * @summary 获取结构分页列表
   * @request POST:/structure/page
   */
  page1 = (
    data: PageRequestStructureQueryRequest,
    params: RequestParams = {}
  ) =>
    this.request<PageViewStructureResponse, any>({
      path: `/structure/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 结构管理
   * @name List1
   * @summary 获取结构列表
   * @request POST:/structure/list
   */
  list1 = (data: StructureQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewStructureResponse, any>({
      path: `/structure/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 结构管理
   * @name Get1
   * @summary 获取结构
   * @request POST:/structure/get
   */
  get1 = (data: StructureQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewStructureResponse, any>({
      path: `/structure/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 结构管理
   * @name Delete1
   * @summary 删除结构
   * @request POST:/structure/delete
   */
  delete1 = (data: StructureDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/structure/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 结构管理
   * @name Create1
   * @summary 创建结构
   * @request POST:/structure/create
   */
  create1 = (data: StructureCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/structure/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

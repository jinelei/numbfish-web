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
   * @request POST:/equipment/structure/update
   */
  update1 = (data: StructureUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/structure/update`,
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
   * @request POST:/equipment/structure/page
   */
  page1 = (
    data: PageRequestStructureQueryRequest,
    params: RequestParams = {}
  ) =>
    this.request<PageViewStructureResponse, any>({
      path: `/equipment/structure/page`,
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
   * @request POST:/equipment/structure/list
   */
  list1 = (data: StructureQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewStructureResponse, any>({
      path: `/equipment/structure/list`,
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
   * @request POST:/equipment/structure/get
   */
  get1 = (data: StructureQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewStructureResponse, any>({
      path: `/equipment/structure/get`,
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
   * @request POST:/equipment/structure/delete
   */
  delete1 = (data: StructureDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/structure/delete`,
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
   * @request POST:/equipment/structure/create
   */
  create1 = (data: StructureCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/structure/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

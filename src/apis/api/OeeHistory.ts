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
  BaseViewOeeHistoryResponse,
  BaseViewVoid,
  ListViewOeeHistoryResponse,
  OeeHistoryDeleteRequest,
  OeeHistoryQueryRequest,
  PageRequestOeeHistoryQueryRequest,
  PageViewOeeHistoryResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class OeeHistory<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Oee历史管理
   * @name Page21
   * @summary 获取Oee历史分页列表
   * @request POST:/oeeHistory/page
   */
  page21 = (
    data: PageRequestOeeHistoryQueryRequest,
    params: RequestParams = {}
  ) =>
    this.request<PageViewOeeHistoryResponse, any>({
      path: `/oeeHistory/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee历史管理
   * @name List21
   * @summary 获取Oee历史列表
   * @request POST:/oeeHistory/list
   */
  list21 = (data: OeeHistoryQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewOeeHistoryResponse, any>({
      path: `/oeeHistory/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee历史管理
   * @name Get21
   * @summary 获取Oee历史
   * @request POST:/oeeHistory/get
   */
  get21 = (data: OeeHistoryQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewOeeHistoryResponse, any>({
      path: `/oeeHistory/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee历史管理
   * @name Delete21
   * @summary 删除Oee历史
   * @request POST:/oeeHistory/delete
   */
  delete21 = (data: OeeHistoryDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/oeeHistory/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

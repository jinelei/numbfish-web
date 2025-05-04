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
  AlarmHistoryDeleteRequest,
  AlarmHistoryQueryRequest,
  BaseViewAlarmHistoryResponse,
  BaseViewVoid,
  ListViewAlarmHistoryResponse,
  PageRequestAlarmHistoryQueryRequest,
  PageViewAlarmHistoryResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class AlarmHistory<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 报警历史管理
   * @name Page6
   * @summary 获取报警历史分页列表
   * @request POST:/equipment/alarmHistory/page
   */
  page6 = (
    data: PageRequestAlarmHistoryQueryRequest,
    params: RequestParams = {}
  ) =>
    this.request<PageViewAlarmHistoryResponse, any>({
      path: `/equipment/alarmHistory/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警历史管理
   * @name List6
   * @summary 获取报警历史列表
   * @request POST:/equipment/alarmHistory/list
   */
  list6 = (data: AlarmHistoryQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewAlarmHistoryResponse, any>({
      path: `/equipment/alarmHistory/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警历史管理
   * @name Get6
   * @summary 获取报警历史
   * @request POST:/equipment/alarmHistory/get
   */
  get6 = (data: AlarmHistoryQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewAlarmHistoryResponse, any>({
      path: `/equipment/alarmHistory/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警历史管理
   * @name Delete6
   * @summary 删除报警历史
   * @request POST:/equipment/alarmHistory/delete
   */
  delete6 = (data: AlarmHistoryDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/alarmHistory/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

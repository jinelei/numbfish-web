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
  AlarmRuleCreateRequest,
  AlarmRuleDeleteRequest,
  AlarmRuleQueryRequest,
  AlarmRuleUpdateRequest,
  BaseViewAlarmRuleResponse,
  BaseViewVoid,
  ListViewAlarmRuleResponse,
  PageRequestAlarmRuleQueryRequest,
  PageViewAlarmRuleResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class AlarmRule<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 报警规则管理
   * @name Update4
   * @summary 更新报警规则
   * @request POST:/equipment/alarmRule/update
   */
  update4 = (data: AlarmRuleUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/alarmRule/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警规则管理
   * @name Page5
   * @summary 获取报警规则分页列表
   * @request POST:/equipment/alarmRule/page
   */
  page5 = (
    data: PageRequestAlarmRuleQueryRequest,
    params: RequestParams = {}
  ) =>
    this.request<PageViewAlarmRuleResponse, any>({
      path: `/equipment/alarmRule/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警规则管理
   * @name List5
   * @summary 获取报警规则列表
   * @request POST:/equipment/alarmRule/list
   */
  list5 = (data: AlarmRuleQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewAlarmRuleResponse, any>({
      path: `/equipment/alarmRule/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警规则管理
   * @name Get5
   * @summary 获取报警规则
   * @request POST:/equipment/alarmRule/get
   */
  get5 = (data: AlarmRuleQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewAlarmRuleResponse, any>({
      path: `/equipment/alarmRule/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警规则管理
   * @name Delete5
   * @summary 删除报警规则
   * @request POST:/equipment/alarmRule/delete
   */
  delete5 = (data: AlarmRuleDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/alarmRule/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 报警规则管理
   * @name Create4
   * @summary 创建报警规则
   * @request POST:/equipment/alarmRule/create
   */
  create4 = (data: AlarmRuleCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/equipment/alarmRule/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

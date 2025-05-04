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
  BaseViewOeeRuleResponse,
  BaseViewVoid,
  ListViewOeeRuleResponse,
  OeeRuleCreateRequest,
  OeeRuleDeleteRequest,
  OeeRuleQueryRequest,
  OeeRuleUpdateRequest,
  PageRequestOeeRuleQueryRequest,
  PageViewOeeRuleResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class OeeRule<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Oee规则管理
   * @name Update11
   * @summary 更新Oee规则
   * @request POST:/oeeRule/update
   */
  update11 = (data: OeeRuleUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/oeeRule/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee规则管理
   * @name Page11
   * @summary 获取Oee规则分页列表
   * @request POST:/oeeRule/page
   */
  page11 = (data: PageRequestOeeRuleQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewOeeRuleResponse, any>({
      path: `/oeeRule/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee规则管理
   * @name List11
   * @summary 获取Oee规则列表
   * @request POST:/oeeRule/list
   */
  list11 = (data: OeeRuleQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewOeeRuleResponse, any>({
      path: `/oeeRule/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee规则管理
   * @name Get11
   * @summary 获取Oee规则
   * @request POST:/oeeRule/get
   */
  get11 = (data: OeeRuleQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewOeeRuleResponse, any>({
      path: `/oeeRule/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee规则管理
   * @name Delete11
   * @summary 删除Oee规则
   * @request POST:/oeeRule/delete
   */
  delete11 = (data: OeeRuleDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/oeeRule/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Oee规则管理
   * @name Create11
   * @summary 创建Oee规则
   * @request POST:/oeeRule/create
   */
  create11 = (data: OeeRuleCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/oeeRule/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

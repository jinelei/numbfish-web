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

import { BaseViewBoolean, SetupRequest } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Setup<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 任务管理
   * @name Init
   * @request POST:/setup/init
   */
  init = (data: SetupRequest, params: RequestParams = {}) =>
    this.request<BaseViewBoolean, any>({
      path: `/setup/init`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 任务管理
   * @name CheckIsSetup
   * @request POST:/setup/check
   */
  checkIsSetup = (params: RequestParams = {}) =>
    this.request<BaseViewBoolean, any>({
      path: `/setup/check`,
      method: 'POST',
      ...params,
    });
}

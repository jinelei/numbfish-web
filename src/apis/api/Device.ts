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
  BaseViewDeviceResponse,
  BaseViewVoid,
  DeviceActivateStateUpdateRequest,
  DeviceCreateRequest,
  DeviceDeleteRequest,
  DeviceQueryRequest,
  DeviceRunningStateUpdateRequest,
  DeviceUpdateRequest,
  ListViewDeviceResponse,
  PageRequestDeviceQueryRequest,
  PageViewDeviceResponse,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Device<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 设备管理
   * @name Update31
   * @summary 更新设备
   * @request POST:/device/update
   */
  update31 = (data: DeviceUpdateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/device/update`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name UpdateRunningState
   * @summary 更新设备运行状态
   * @request POST:/device/update/runningState
   */
  updateRunningState = (
    data: DeviceRunningStateUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<BaseViewVoid, any>({
      path: `/device/update/runningState`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name UpdateActivateState
   * @summary 更新设备激活状态
   * @request POST:/device/update/activateState
   */
  updateActivateState = (
    data: DeviceActivateStateUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.request<BaseViewVoid, any>({
      path: `/device/update/activateState`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name Page4
   * @summary 获取设备分页列表
   * @request POST:/device/page
   */
  page4 = (data: PageRequestDeviceQueryRequest, params: RequestParams = {}) =>
    this.request<PageViewDeviceResponse, any>({
      path: `/device/page`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name List4
   * @summary 获取设备列表
   * @request POST:/device/list
   */
  list4 = (data: DeviceQueryRequest, params: RequestParams = {}) =>
    this.request<ListViewDeviceResponse, any>({
      path: `/device/list`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name Get4
   * @summary 获取设备
   * @request POST:/device/get
   */
  get4 = (data: DeviceQueryRequest, params: RequestParams = {}) =>
    this.request<BaseViewDeviceResponse, any>({
      path: `/device/get`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name Delete4
   * @summary 删除设备
   * @request POST:/device/delete
   */
  delete4 = (data: DeviceDeleteRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/device/delete`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 设备管理
   * @name Create31
   * @summary 创建设备
   * @request POST:/device/create
   */
  create31 = (data: DeviceCreateRequest, params: RequestParams = {}) =>
    this.request<BaseViewVoid, any>({
      path: `/device/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}

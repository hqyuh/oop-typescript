/* eslint-disable no-undef */
"use client";

import {
  FetchConfig,
  FetchInterceptor,
  FetchMiddleware,
  FetchResponse,
  HttpMethod,
  RequestConfig,
  RequestPartConfig,
} from "./interface";
import { formatURL, isSuccessHttpCode, withParams } from "./utils";

const writeMethods = [HttpMethod.POST, HttpMethod.PUT, HttpMethod.PATCH];

type BodyInit = Record<string, any>;

export class Fetch {
  middlewares: FetchMiddleware[] = [];
  interceptors: FetchInterceptor[] = [];
  baseURL = "";

  constructor(config?: FetchConfig) {
    this.baseURL = config?.baseURL ?? "";
  }

  private async applyMiddlewares(
    request: RequestInit,
    middlewares: FetchMiddleware[] = this.middlewares,
  ): Promise<RequestInit> {
    if (middlewares.length === 0) return request;

    const currentRequest = await middlewares[0](request);

    return await this.applyMiddlewares(currentRequest, middlewares.slice(1));
  }

  private async applyInterceptors(
    response: FetchResponse,
    interceptors: FetchInterceptor[] = this.interceptors,
  ): Promise<FetchResponse> {
    if (interceptors.length === 0) return response;

    const currentResponse = await interceptors[0](response);

    return await this.applyInterceptors(currentResponse, interceptors.slice(1));
  }

  setBodyHeader(data: unknown) {
    if (data instanceof FormData) {
      return { body: data };
    }

    return {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
  }

  async request<T extends BodyInit>(config: RequestConfig<T>) {
    const controller = new AbortController();

    let res: Response | undefined = undefined;

    try {
      const formattedURL = formatURL(this.baseURL, config.url);

      const request = {
        method: config.method,
        ...(writeMethods.includes(config.method) ? this.setBodyHeader(config.body) : {}),
        ...(config.headers ? { headers: config.headers } : {}),
      };

      // Applying middlewares
      const requestObject = await this.applyMiddlewares(request);

      res = await fetch(formattedURL, {
        ...requestObject,
        signal: controller.signal,
      });

      const data = await res[config.responseConfig ? config.responseConfig.responseType : "json"]();

      // Applying interceptors
      const isSuccessResponse = isSuccessHttpCode(res.status);
      const response = await this.applyInterceptors({
        data,
        isSuccess: isSuccessResponse,
      });

      if (isSuccessResponse) return { ...response, abort: controller.abort, response: res };
      throw { ...response, status: res.status, response: res };
    } catch (error: any) {
      const _res = await this.applyInterceptors({
        response: res,
        isSuccess: false,
      });

      throw { ..._res, isAborted: error.name === "AbortError" };
    }
  }

  addMiddleware(middleware: FetchMiddleware) {
    this.middlewares.push(middleware);
  }

  addInterceptor(interceptor: FetchInterceptor) {
    this.interceptors.push(interceptor);
  }

  clearMiddlewares() {
    this.middlewares = [];
  }

  clearInterceptors() {
    this.interceptors = [];
  }

  setHeaders(headers: Record<string, string>) {
    this.middlewares.push((request: any) => {
      return {
        ...request,
        headers: { ...(request.headers ?? {}), ...headers },
      };
    });
  }

  async get(url: string, config?: RequestPartConfig) {
    return await this.request({
      method: HttpMethod.GET,
      url: withParams(url, config?.params),
      headers: config?.headers,
      responseConfig: config?.responseConfig,
    });
  }

  async post<T extends BodyInit>(url: string, body?: T, config?: RequestPartConfig) {
    return await this.request({
      method: HttpMethod.POST,
      url: withParams(url, config?.params),
      headers: config?.headers,
      responseConfig: config?.responseConfig,
      body,
    });
  }

  async put<T extends BodyInit>(url: string, body?: T, config?: RequestPartConfig) {
    return await this.request({
      method: HttpMethod.PUT,
      url: withParams(url, config?.params),
      headers: config?.headers,
      responseConfig: config?.responseConfig,
      body,
    });
  }

  async patch<T extends BodyInit>(url: string, body?: T, config?: RequestPartConfig) {
    return await this.request({
      method: HttpMethod.PATCH,
      url: withParams(url, config?.params),
      headers: config?.headers,
      responseConfig: config?.responseConfig,
      body,
    });
  }

  async delete(url: string, config?: RequestPartConfig) {
    return await this.request({
      method: HttpMethod.DELETE,
      url: withParams(url, config?.params),
      headers: config?.headers,
      responseConfig: config?.responseConfig,
    });
  }
}

export const api = new Fetch();

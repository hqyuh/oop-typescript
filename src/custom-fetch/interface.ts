export interface FetchConfig {
  baseURL: string;
}

export interface RequestPartConfig {
  headers?: Headers | Record<string, string>;
  responseConfig?: ResponseConfig;
  params?: Record<string, string | number>;
}

export interface RequestConfig<T> extends RequestPartConfig {
  method: HttpMethod;
  url: string;
  body?: T;
}

// NOTE: RequestInit interface is defined in next/types
// eslint-disable-next-line no-undef
export interface FetchRequest extends RequestInit {}
export type FetchResponse = {
  data?: any;
  isSuccess: boolean;
  response?: Response;
};

export type FetchMiddleware = (request: FetchRequest) => FetchRequest | Promise<FetchRequest>;

export type FetchInterceptor = (response: FetchResponse) => FetchResponse | Promise<FetchResponse>;

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export type ResponseConfig = {
  responseType: ResponseType;
};
export type ResponseType = "text" | "json" | "blob";

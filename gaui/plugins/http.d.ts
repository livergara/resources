import { App } from 'vue';
export type GaHttpHeaders = {
    [key: string]: string;
};
export type GaHttpQuery = {
    [key: string]: string | number | boolean | null | Array<any>;
};
export type GaHttpMethod = 'get' | 'post' | 'delete' | 'patch' | 'put' | 'head' | 'options' | 'connect';
export type GaHttpBody = {
    [key: string]: any;
} | Array<any> | string | Blob | FormData | null;
export type GaHttpResponseBody = {
    [key: string]: any;
} | Array<any> | string | Blob | null;
export interface GaHttpResponse {
    raw: Response;
    data: GaHttpResponseBody | null;
    error: string | null;
}
export interface GaHttpRequestPrepared {
    url: string;
    options: RequestInit;
}
export type GaHttpMiddlewareRequest = (request: GaHttpRequestPrepared) => GaHttpRequestPrepared;
export type GaHttpMiddlewareResponse = (response: GaHttpResponse) => GaHttpResponse;
export type GaHttpMiddlewareQuery = (params: GaHttpQuery) => GaHttpQuery;
export interface GaHttpOptionsPart {
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    integrity?: any;
}
export interface GaHttpPluginInitOptions extends GaHttpOptionsPart {
    baseUrl: string;
    headers?: GaHttpHeaders;
    timeout?: number;
    middleware?: {
        request?: Array<GaHttpMiddlewareRequest>;
        response?: Array<GaHttpMiddlewareResponse>;
        query?: Array<GaHttpMiddlewareQuery>;
    };
}
export interface GaHttpPluginOptions extends GaHttpOptionsPart {
    baseUrl: string;
    headers: GaHttpHeaders;
    timeout?: number;
}
export interface GaHttpInitRequest extends GaHttpOptionsPart {
    baseUrl?: string | null;
    path?: string | null;
    query?: GaHttpQuery;
    method: GaHttpMethod;
    body?: GaHttpBody;
    headers?: GaHttpHeaders;
    timeout?: number;
    keepalive?: boolean;
    returnRaw?: boolean;
}
declare class GaHttp {
    private _options;
    private _middlewaresRequest;
    private get _hasMiddlewaresRequest();
    private _middlewaresResponse;
    private get _hasMiddlewaresResponse();
    private _abortControllers;
    private _middlewaresQuery;
    private get _hasMiddlewaresQuery();
    constructor(options?: GaHttpPluginInitOptions);
    setOptions(options: GaHttpPluginInitOptions): void;
    get(path: string, query?: GaHttpQuery): Promise<GaHttpResponseBody>;
    post(path: string, body?: GaHttpBody, query?: GaHttpQuery): Promise<GaHttpResponseBody>;
    put(path: string, body?: GaHttpBody, query?: GaHttpQuery): Promise<GaHttpResponseBody>;
    patch(path: string, body?: GaHttpBody, query?: GaHttpQuery): Promise<GaHttpResponseBody>;
    delete(path: string, body?: GaHttpBody, query?: GaHttpQuery): Promise<GaHttpResponseBody>;
    request(request: GaHttpInitRequest): Promise<GaHttpResponseBody | Response>;
    abort(promise: Promise<GaHttpResponse>): void;
    setHeader(name: string, value: string): void;
    removeHeader(name: string): void;
    private _fetch;
    private _prepareRequest;
    private _prepareResponse;
    private static _prepareBody;
    private _prepareUrl;
    private static _createAbortionController;
    private _convertQuery;
}
export declare const GaHttpPlugin: {
    install(app: App, options: GaHttpPluginInitOptions): void;
};
export declare function createGaHttp(options: GaHttpPluginInitOptions): GaHttp;
export declare function useGaHttp(): GaHttp;
export {};

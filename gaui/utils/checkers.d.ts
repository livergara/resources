/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isObject(value?: unknown): value is object;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isString(value?: unknown): value is string;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isNumber(value?: unknown): value is number;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isBoolean(value?: unknown): value is boolean;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function notEmptyString(value?: unknown): value is string;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isFunction(value?: unknown): value is Function;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isPromise<T>(value?: unknown): value is Promise<T>;

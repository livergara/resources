import type { MaybeRef } from '../utils';
export declare function unrefAny<TValue>(value?: MaybeRef<TValue | Record<string, unknown> | Record<string, unknown>[] | unknown> | null): TValue | Record<string, unknown> | unknown | null;

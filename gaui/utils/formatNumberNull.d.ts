import { ComputedRef, Ref } from 'vue';
/**
 * Приводит все значения к типам number | null
 * @param {Ref<*>} payload
 * @return {ComputedRef<number | null>}
 */
export declare function formatToNumberOrNull(payload: Ref<unknown>): ComputedRef<number | null>;

import type { MaybeRef } from '@vueuse/core';
import type { ComputedRef } from 'vue';
export type IGaValidateFunction<T> = (value: T | null, componentId: string) => string | null | Promise<string | null>;
export type IGaValidationMessages = {
    default: string;
    required: string;
    email: string;
    min: string;
    max: string;
    minLength: string;
    maxLength: string;
    requiredCheckbox: string;
};
export type TGaStandardValidatorsParams = {
    min?: MaybeRef<number | null>;
    max?: MaybeRef<number | null>;
    minLength?: MaybeRef<number | null>;
    maxLength?: MaybeRef<number | null>;
};
export type TGaStandardValidators = {
    min: IGaValidateFunction<number>;
    max: IGaValidateFunction<number>;
    minLength: IGaValidateFunction<string | Array<unknown>>;
    maxLength: IGaValidateFunction<string | Array<unknown>>;
    required: IGaValidateFunction<number | string | Array<unknown> | Record<string | number, unknown> | null>;
    email: IGaValidateFunction<string>;
};
export type IGaFormControlValidationState = {
    touched: boolean;
    dirty: boolean;
    valid: boolean;
    validated: boolean;
    loading: boolean;
    error: string | null;
};
export type IGaFormControlValidationContext = {
    setTouched: (value?: boolean) => void;
    errorMessage: ComputedRef<string | null>;
    resetState: () => void;
    state: ComputedRef<IGaFormControlValidationState>;
    setDirty: (value?: boolean) => void;
    validate: () => Promise<void>;
};
export type IGaFormChildValidationContext = {
    componentId: string;
    state: ComputedRef<IGaFormControlValidationState>;
    resetState: () => void;
    validate: () => Promise<void>;
};
export type IGaFormValidationProvider = {
    registerChild: (componentId: string, state: ComputedRef<IGaFormControlValidationState>, resetState: () => void, validate: () => Promise<void>) => void;
    unregisterChild: (componentId: string) => void;
};
export type IGaFormValidationContext = {
    validate: () => Promise<void>;
    resetState: () => void;
    childrenList: ComputedRef<IGaFormChildValidationContext[]>;
    isValid: ComputedRef<boolean>;
    isTouched: ComputedRef<boolean>;
    isDirty: ComputedRef<boolean>;
    errors: ComputedRef<{
        componentId: string;
        errorMessage: string | null;
    }[]>;
};

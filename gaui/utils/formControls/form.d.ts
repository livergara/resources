import type { ComputedRef, Ref } from 'vue';
import type { IGaFormControlValidationContext, IGaFormValidationContext, IGaValidateFunction } from '../../utils/formControls';
export declare function useGaFormControlValidation<T>(controlValue: Ref<T | null>, validators: ComputedRef<IGaValidateFunction<T>[]>, componentId: string, emit: (event: any, { componentId, value, valid, }: {
    componentId: string;
    value: T | null;
    valid: boolean;
}) => void): IGaFormControlValidationContext;
export declare function useGaFormValidation(): IGaFormValidationContext;

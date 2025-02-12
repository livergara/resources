import type { ComputedRef, Ref, Slots, VNode } from 'vue';
export declare function useGaFormControlIcon(icon: Ref<string | undefined>): {
    hasIcon: ComputedRef<boolean>;
};
export declare function useGaFormControlClearable<T>(clearable: Ref<boolean | undefined>, controlValue: Ref<T>, disabled: Ref<boolean | undefined>): {
    showClearIcon: ComputedRef<boolean>;
};
export declare function useGaFormControlLabel(componentId: string | null, slots: Slots, label: Ref<string | undefined>, tooltip: Ref<string | undefined>, required?: Ref<boolean | undefined>): {
    labelVisible: ComputedRef<boolean | import("vue").Slot<any>>;
    labelVNode: ComputedRef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
};
export declare function useGaFormControlErrors(errorMessage: ComputedRef<string | null>): {
    errorsVNode: ComputedRef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
};

import { PropType, VNode } from 'vue';
import { IGaValidateFunction } from '../../utils/formControls';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: PropType<string>;
        default: null;
    };
    checkedLabel: {
        type: StringConstructor;
        default: null;
    };
    uncheckedLabel: {
        type: StringConstructor;
        default: null;
    };
    mode: {
        type: PropType<"checkbox" | "radio">;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    validationRules: {
        type: PropType<IGaValidateFunction<boolean>[] | IGaValidateFunction<boolean> | null>;
        default: null;
    };
}>, {
    isChecked: import("vue").ComputedRef<boolean>;
    componentId: string;
    modelValueLocal: import("vue").Ref<boolean, boolean>;
    controlClasses: import("vue").ComputedRef<{
        disabled: boolean;
        checked: boolean;
        'have-error': boolean;
    }>;
    errorsVNode: import("vue").ComputedRef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    labelVNode: import("vue").ComputedRef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    onInput: (event: any) => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("validate" | "update:modelValue")[], "validate" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: PropType<string>;
        default: null;
    };
    checkedLabel: {
        type: StringConstructor;
        default: null;
    };
    uncheckedLabel: {
        type: StringConstructor;
        default: null;
    };
    mode: {
        type: PropType<"checkbox" | "radio">;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    validationRules: {
        type: PropType<IGaValidateFunction<boolean>[] | IGaValidateFunction<boolean> | null>;
        default: null;
    };
}>> & Readonly<{
    onValidate?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    required: boolean;
    name: string;
    disabled: boolean;
    label: string;
    mode: "checkbox" | "radio";
    modelValue: boolean;
    checkedLabel: string;
    uncheckedLabel: string;
    validationRules: IGaValidateFunction<boolean> | IGaValidateFunction<boolean>[] | null;
}, {}, {
    GaIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<string | import("../GaIcon/types.js").DefaultGaIconVariants>;
            required: true;
        };
        fill: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    }>, {
        iconUrl: import("vue").ComputedRef<string>;
        recursivelyChangeFill: (el: SVGElement) => SVGElement;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<string | import("../GaIcon/types.js").DefaultGaIconVariants>;
            required: true;
        };
        fill: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    }>> & Readonly<{}>, {
        fill: string;
        size: string | number;
    }, {}, {
        InlineSvg: import("vue").DefineComponent<import("vue-inline-svg").InlineSvgProps, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue-inline-svg").InlineSvgProps>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import type { PropType, Ref } from 'vue';
import type { IGaValidateFunction } from '../../utils/formControls';
import { IGaControlSelectOptionFormatted, IGaControlSelectValueBase, IGaControlSelectValueVariants, IGaSelectSearchFunction } from '../../components/GaSelect/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<IGaControlSelectValueBase | IGaControlSelectValueBase[] | null>;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    tooltip: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    options: {
        type: PropType<IGaControlSelectValueBase[]>;
        default: () => never[];
    };
    optionLabel: {
        type: StringConstructor;
        default: string;
    };
    optionIdentity: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchDebounce: {
        type: NumberConstructor;
        default: number;
    };
    searchMethod: {
        type: PropType<IGaSelectSearchFunction>;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    validationRules: {
        type: PropType<IGaValidateFunction<IGaControlSelectValueVariants>[] | IGaValidateFunction<IGaControlSelectValueVariants> | null>;
        default: null;
    };
    sortMethod: {
        type: PropType<(a: IGaControlSelectOptionFormatted, b: IGaControlSelectOptionFormatted) => number>;
        default: null;
    };
    showFullValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    componentId: string;
    hasValue: import("vue").ComputedRef<boolean>;
    valueList: import("vue").ComputedRef<IGaControlSelectOptionFormatted[]>;
    optionList: import("vue").ComputedRef<IGaControlSelectOptionFormatted[]>;
    controlClasses: import("vue").ComputedRef<{
        clearable: boolean;
        focused: boolean;
        disabled: boolean;
        readonly: boolean;
        'value-ellipsis': boolean;
        'with-icon': boolean;
        'have-error': boolean;
    }>;
    readonlyValue: import("vue").ComputedRef<string>;
    optionsVisible: Ref<boolean, boolean>;
    valueLabel: import("vue").ComputedRef<string | null>;
    searchInputRef: Ref<any, any>;
    selectPopupRef: Ref<any, any>;
    controlContentRef: Ref<any, any>;
    labelVisible: import("vue").ComputedRef<boolean | import("vue").Slot<any>>;
    labelVNode: import("vue").ComputedRef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    errorsVNode: import("vue").ComputedRef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null>;
    hasIcon: import("vue").ComputedRef<boolean>;
    showClearIcon: import("vue").ComputedRef<boolean>;
    hasOptionSlot: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    searchValue: Ref<string | null, string | null>;
    isLoading: Ref<boolean, boolean>;
    closeOptions: () => void;
    openOptions: () => Promise<void>;
    onOptionsPopupClose: () => void;
    onSearchInput: import("lodash").DebouncedFunc<(value: string | null) => Promise<void>>;
    onValueItemSelect: (option: IGaControlSelectOptionFormatted) => Promise<void>;
    onValueItemRemove: (option: IGaControlSelectOptionFormatted) => Promise<void>;
    onClear: () => Promise<void>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("validate" | "update:modelValue")[], "validate" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<IGaControlSelectValueBase | IGaControlSelectValueBase[] | null>;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    tooltip: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    options: {
        type: PropType<IGaControlSelectValueBase[]>;
        default: () => never[];
    };
    optionLabel: {
        type: StringConstructor;
        default: string;
    };
    optionIdentity: {
        type: StringConstructor;
        default: string;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchDebounce: {
        type: NumberConstructor;
        default: number;
    };
    searchMethod: {
        type: PropType<IGaSelectSearchFunction>;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    validationRules: {
        type: PropType<IGaValidateFunction<IGaControlSelectValueVariants>[] | IGaValidateFunction<IGaControlSelectValueVariants> | null>;
        default: null;
    };
    sortMethod: {
        type: PropType<(a: IGaControlSelectOptionFormatted, b: IGaControlSelectOptionFormatted) => number>;
        default: null;
    };
    showFullValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onValidate?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    icon: string;
    required: boolean;
    name: string;
    disabled: boolean;
    label: string;
    modelValue: IGaControlSelectValueBase | IGaControlSelectValueBase[] | null;
    validationRules: IGaValidateFunction<IGaControlSelectValueVariants> | IGaValidateFunction<IGaControlSelectValueVariants>[] | null;
    tooltip: string;
    readonly: boolean;
    placeholder: string;
    clearable: boolean;
    options: IGaControlSelectValueBase[];
    optionLabel: string;
    optionIdentity: string;
    multiple: boolean;
    searchable: boolean;
    searchDebounce: number;
    searchMethod: IGaSelectSearchFunction;
    sortMethod: (a: IGaControlSelectOptionFormatted, b: IGaControlSelectOptionFormatted) => number;
    showFullValue: boolean;
}, {}, {
    GaInput: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<string | null>;
            default: null;
        };
        name: {
            type: PropType<string>;
            default: null;
        };
        label: {
            type: StringConstructor;
            default: null;
        };
        tooltip: {
            type: StringConstructor;
            default: null;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: null;
        };
        icon: {
            type: StringConstructor;
            default: null;
        };
        clearable: {
            type: PropType<boolean>;
            default: boolean;
        };
        required: {
            type: PropType<boolean>;
            default: boolean;
        };
        minLength: {
            type: PropType<number | string | null>;
            default: null;
        };
        maxLength: {
            type: PropType<number | string | null>;
            default: null;
        };
        validationRules: {
            type: PropType<IGaValidateFunction<string>[] | IGaValidateFunction<string> | null>;
            default: null;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        debounceInput: {
            type: NumberConstructor;
            default: number;
        };
    }>, {
        componentId: string;
        controlClasses: import("vue").ComputedRef<{
            clearable: boolean;
            focused: boolean;
            disabled: boolean;
            readonly: boolean;
            'with-icon': boolean;
            'have-error': boolean;
        }>;
        readonlyValue: import("vue").ComputedRef<string>;
        labelVisible: import("vue").ComputedRef<boolean | import("vue").Slot<any>>;
        labelVNode: import("vue").ComputedRef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        errorsVNode: import("vue").ComputedRef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null>;
        hasIcon: import("vue").ComputedRef<boolean>;
        showClearIcon: import("vue").ComputedRef<boolean>;
        modelValueLocal: Ref<string | null, string | null>;
        inputRef: Ref<any, any>;
        handleChange: import("vue").ComputedRef<import("lodash").DebouncedFunc<(value: string | null) => Promise<void>>>;
        onInput: (event: any) => void;
        onBlur: (event: Event) => void;
        onFocus: (event: Event) => void;
        onClear: () => void;
        focus: () => void;
        blur: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "focus" | "validate" | "update:modelValue")[], "blur" | "focus" | "validate" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: PropType<string | null>;
            default: null;
        };
        name: {
            type: PropType<string>;
            default: null;
        };
        label: {
            type: StringConstructor;
            default: null;
        };
        tooltip: {
            type: StringConstructor;
            default: null;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: {
            type: StringConstructor;
            default: null;
        };
        icon: {
            type: StringConstructor;
            default: null;
        };
        clearable: {
            type: PropType<boolean>;
            default: boolean;
        };
        required: {
            type: PropType<boolean>;
            default: boolean;
        };
        minLength: {
            type: PropType<number | string | null>;
            default: null;
        };
        maxLength: {
            type: PropType<number | string | null>;
            default: null;
        };
        validationRules: {
            type: PropType<IGaValidateFunction<string>[] | IGaValidateFunction<string> | null>;
            default: null;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        debounceInput: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        onFocus?: ((...args: any[]) => any) | undefined;
        onBlur?: ((...args: any[]) => any) | undefined;
        onValidate?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        icon: string;
        required: boolean;
        type: string;
        name: string;
        disabled: boolean;
        label: string;
        minLength: string | number | null;
        maxLength: string | number | null;
        modelValue: string | null;
        validationRules: IGaValidateFunction<string> | IGaValidateFunction<string>[] | null;
        tooltip: string;
        readonly: boolean;
        placeholder: string;
        clearable: boolean;
        debounceInput: number;
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
    GaPopup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        target: {
            type: PropType<string | HTMLElement | Ref<HTMLElement>>;
            default: null;
        };
        name: {
            type: StringConstructor;
            default: null;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        showPointer: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: PropType<"top" | "right" | "bottom" | "left">;
            default: string;
        };
        valign: {
            type: PropType<"auto" | "top" | "middle" | "bottom">;
            default: string;
        };
        align: {
            type: PropType<"auto" | "left" | "middle" | "right">;
            default: string;
        };
        notHideOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        inheritWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
    }>, {
        componentId: string;
        popupEl: Ref<HTMLElement | null, HTMLElement | null>;
        popupPointerClasses: import("vue").ComputedRef<Record<string, boolean>>;
        visibleLocal: Ref<boolean, boolean>;
        popupStyles: import("vue").ComputedRef<{
            display: "block" | "none";
            opacity: 0 | 1;
            transitionDuration: string;
        }>;
        popupPointerStyles: import("vue").ComputedRef<{}>;
        teleportTarget: string;
        close: () => void;
        calculatePosition: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "click-outside")[], "close" | "update:visible" | "click-outside", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        target: {
            type: PropType<string | HTMLElement | Ref<HTMLElement>>;
            default: null;
        };
        name: {
            type: StringConstructor;
            default: null;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        showPointer: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: PropType<"top" | "right" | "bottom" | "left">;
            default: string;
        };
        valign: {
            type: PropType<"auto" | "top" | "middle" | "bottom">;
            default: string;
        };
        align: {
            type: PropType<"auto" | "left" | "middle" | "right">;
            default: string;
        };
        notHideOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        inheritWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        "onClick-outside"?: ((...args: any[]) => any) | undefined;
    }>, {
        name: string;
        visible: boolean;
        target: string | HTMLElement | Ref<HTMLElement, HTMLElement>;
        offset: number;
        showPointer: boolean;
        position: "top" | "right" | "bottom" | "left";
        valign: "top" | "bottom" | "auto" | "middle";
        align: "right" | "left" | "auto" | "middle";
        notHideOnClick: boolean;
        inheritWidth: boolean;
        closable: boolean;
        animationDuration: number;
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

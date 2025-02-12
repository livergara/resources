import type { PropType } from 'vue';
import type { IGaValidateFunction } from '../../utils/formControls';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Редактируемое значение, может быть строкой или null
     * Пустая строка ('') автоматически приводится к null
     */
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
    /**
     * Уникальное имя контрола, будет в атрибуте attr-autotest и в качестве id для input
     */
    name: {
        type: PropType<string>;
        default: null;
    };
    /**
     * Название контрола. Если передан слот label, то этот пропс игнорируется
     */
    label: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Подсказка контрола, отрисовывается сразу после названия в виде кружка с вопросом
     */
    tooltip: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Отключение контрола. Если передан true - ввод данных будет недоступен
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Режим чтения. Если передан true - будет отображаться только название контрола и его значение в текстовом виде.
     * Если значение отсутствует - используется переменная GaUiStorage.defaultValuePlaceholder
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Текст внутри контрола пока не указано значение
     */
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Иконка контрола, отрисовывается слева от ввода данных
     */
    icon: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Показывать иконку очистки если есть значение, по умолчанию включено
     */
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * Встроенная валидация значения - обязательное заполнение
     * Если передан true - рисует красную звёздочку после названия контрола
     */
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * Встроенная валидация значения - минимальная длина текста, длина текстового значения должна быть длинее или равна указанному
     */
    minLength: {
        type: PropType<number | string | null>;
        default: null;
    };
    /**
     * Встроенная валидация значения - максимальная длина текста, длина текстового значения должна быть меньше или равна указанному
     */
    maxLength: {
        type: PropType<number | string | null>;
        default: null;
    };
    /**
     * Функции валидации значения. Можно передать одну функцию, можно передать массив значений.
     * Функция должна быть ассинхронной (т.е. должна возвращать Promis), принимает в качестве аргумента значние контрола,
     * должна вернуть текст ошибки в случае ошибки или null
     */
    validationRules: {
        type: PropType<IGaValidateFunction<string>[] | IGaValidateFunction<string> | null>;
        default: null;
    };
    /**
     * Тип инпута в контролле, передается в атрибут type у input. По умолчанию - text
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Поскольку валидация запускается после ввода данных, сделана небольшая задержка с помощью функции debounce.
     * По умолчанию в качестве значения используется переменная GaUiStorage.defaultDebounceInput
     * Значение задержки передается в миллисекундах, т.е. если нужно задержка в 1 секунду - нужно передать 1000
     */
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
    modelValueLocal: import("vue").Ref<string | null, string | null>;
    inputRef: import("vue").Ref<any, any>;
    handleChange: import("vue").ComputedRef<import("lodash").DebouncedFunc<(value: string | null) => Promise<void>>>;
    onInput: (event: any) => void;
    onBlur: (event: Event) => void;
    onFocus: (event: Event) => void;
    onClear: () => void;
    focus: () => void;
    blur: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "focus" | "validate" | "update:modelValue")[], "blur" | "focus" | "validate" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Редактируемое значение, может быть строкой или null
     * Пустая строка ('') автоматически приводится к null
     */
    modelValue: {
        type: PropType<string | null>;
        default: null;
    };
    /**
     * Уникальное имя контрола, будет в атрибуте attr-autotest и в качестве id для input
     */
    name: {
        type: PropType<string>;
        default: null;
    };
    /**
     * Название контрола. Если передан слот label, то этот пропс игнорируется
     */
    label: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Подсказка контрола, отрисовывается сразу после названия в виде кружка с вопросом
     */
    tooltip: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Отключение контрола. Если передан true - ввод данных будет недоступен
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Режим чтения. Если передан true - будет отображаться только название контрола и его значение в текстовом виде.
     * Если значение отсутствует - используется переменная GaUiStorage.defaultValuePlaceholder
     */
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Текст внутри контрола пока не указано значение
     */
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Иконка контрола, отрисовывается слева от ввода данных
     */
    icon: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Показывать иконку очистки если есть значение, по умолчанию включено
     */
    clearable: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * Встроенная валидация значения - обязательное заполнение
     * Если передан true - рисует красную звёздочку после названия контрола
     */
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * Встроенная валидация значения - минимальная длина текста, длина текстового значения должна быть длинее или равна указанному
     */
    minLength: {
        type: PropType<number | string | null>;
        default: null;
    };
    /**
     * Встроенная валидация значения - максимальная длина текста, длина текстового значения должна быть меньше или равна указанному
     */
    maxLength: {
        type: PropType<number | string | null>;
        default: null;
    };
    /**
     * Функции валидации значения. Можно передать одну функцию, можно передать массив значений.
     * Функция должна быть ассинхронной (т.е. должна возвращать Promis), принимает в качестве аргумента значние контрола,
     * должна вернуть текст ошибки в случае ошибки или null
     */
    validationRules: {
        type: PropType<IGaValidateFunction<string>[] | IGaValidateFunction<string> | null>;
        default: null;
    };
    /**
     * Тип инпута в контролле, передается в атрибут type у input. По умолчанию - text
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Поскольку валидация запускается после ввода данных, сделана небольшая задержка с помощью функции debounce.
     * По умолчанию в качестве значения используется переменная GaUiStorage.defaultDebounceInput
     * Значение задержки передается в миллисекундах, т.е. если нужно задержка в 1 секунду - нужно передать 1000
     */
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
export default _default;

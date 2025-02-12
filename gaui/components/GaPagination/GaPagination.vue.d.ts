import { PropType } from 'vue';
import type { TPagination, TPaginationPage, TPaginationResultPage, TPaginationThemes } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    pagination: {
        type: PropType<TPagination>;
        default: null;
    };
    /** Уникальное имя, будет в атрибутах id и attr-autotest */
    name: {
        type: PropType<string>;
        default: null;
    };
    theme: {
        type: PropType<TPaginationThemes>;
        default: string;
    };
    interval: {
        type: NumberConstructor;
        default: number;
        validate: (v: any) => boolean;
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        pagination: {
            type: PropType<TPagination>;
            default: null;
        };
        /** Уникальное имя, будет в атрибутах id и attr-autotest */
        name: {
            type: PropType<string>;
            default: null;
        };
        theme: {
            type: PropType<TPaginationThemes>;
            default: string;
        };
        interval: {
            type: NumberConstructor;
            default: number;
            validate: (v: any) => boolean;
        };
    }>> & Readonly<{
        "onUpdate:pagination"?: ((...args: any[]) => any) | undefined;
    }> & {}>;
    emit: (event: "update:pagination", ...args: any[]) => void;
    page: import("vue").Ref<{
        current: number | null;
        next: number | null;
        previous: number | null;
        total: number | null;
    }, TPaginationPage | {
        current: number | null;
        next: number | null;
        previous: number | null;
        total: number | null;
    }>;
    componentId: string;
    previousDisabled: import("vue").ComputedRef<boolean>;
    nextDisabled: import("vue").ComputedRef<boolean>;
    currentInterval: import("vue").ComputedRef<string | 0>;
    pageButtons: import("vue").ComputedRef<TPaginationResultPage[]>;
    calculatePages: () => void;
    nextPage: () => void;
    previousPage: () => void;
    onPageSelect: (pageNumber: any) => void;
    calculatePagination: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:pagination"[], "update:pagination", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pagination: {
        type: PropType<TPagination>;
        default: null;
    };
    /** Уникальное имя, будет в атрибутах id и attr-autotest */
    name: {
        type: PropType<string>;
        default: null;
    };
    theme: {
        type: PropType<TPaginationThemes>;
        default: string;
    };
    interval: {
        type: NumberConstructor;
        default: number;
        validate: (v: any) => boolean;
    };
}>> & Readonly<{
    "onUpdate:pagination"?: ((...args: any[]) => any) | undefined;
}>, {
    name: string;
    theme: TPaginationThemes;
    pagination: TPagination;
    interval: number;
}, {}, {
    GaIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        icon: {
            type: PropType<string | import("../GaIcon/types").DefaultGaIconVariants>;
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
            type: PropType<string | import("../GaIcon/types").DefaultGaIconVariants>;
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

import type { PropType, Ref } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
export default _default;

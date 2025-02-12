import { PropType } from 'vue';
import { DefaultGaIconVariants } from '../../components/GaIcon/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Имя файла svg (без расширения), ссылка на файл определяется при настройке плагина в методе getIconUrl
     */
    icon: {
        type: PropType<string | DefaultGaIconVariants>;
        required: true;
    };
    /**
     * Цвет иконки, принимает любое валидное значение для css-свойства fill
     */
    fill: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Размер иконки в пикселях. Например: 12, 16, 24
     */
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>, {
    iconUrl: import("vue").ComputedRef<string>;
    recursivelyChangeFill: (el: SVGElement) => SVGElement;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Имя файла svg (без расширения), ссылка на файл определяется при настройке плагина в методе getIconUrl
     */
    icon: {
        type: PropType<string | DefaultGaIconVariants>;
        required: true;
    };
    /**
     * Цвет иконки, принимает любое валидное значение для css-свойства fill
     */
    fill: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Размер иконки в пикселях. Например: 12, 16, 24
     */
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
export default _default;

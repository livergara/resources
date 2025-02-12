import { PropType } from 'vue';
import { IGaTab, IGaTabFormatted, IGaTabViewOptions } from '../../components/GaTabs/types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Активная вкладка
     */
    activeTab: {
        type: PropType<string | number | IGaTab | null>;
        default: null;
    };
    tabs: {
        type: PropType<IGaTab[]>;
        required: true;
    };
    view: {
        type: PropType<IGaTabViewOptions>;
        default: string;
    };
}>, {
    activeTabFormatted: import("vue").ComputedRef<IGaTabFormatted | null>;
    tabsFormatted: import("vue").ComputedRef<IGaTabFormatted[]>;
    changeTab: (tab: IGaTabFormatted) => void;
    isComponentsInProps: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:active-tab"[], "update:active-tab", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Активная вкладка
     */
    activeTab: {
        type: PropType<string | number | IGaTab | null>;
        default: null;
    };
    tabs: {
        type: PropType<IGaTab[]>;
        required: true;
    };
    view: {
        type: PropType<IGaTabViewOptions>;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:active-tab"?: ((...args: any[]) => any) | undefined;
}>, {
    view: IGaTabViewOptions;
    activeTab: string | number | IGaTab | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;

import type { Ref } from 'vue';
export declare enum GaModalType {
    dialog = "dialog",
    popup = "popup"
}
export type GaModalData = {
    id: string;
    visible: Ref<boolean>;
    position: number;
    type: GaModalType;
};
export type GaModalInit = {
    id: string;
    visible: Ref<boolean>;
    type: GaModalType;
};
export declare function useGaModalWrapper(modalDataInit: GaModalInit): {
    modalWrapperId: string;
    modalMap: Record<string, GaModalData>;
};

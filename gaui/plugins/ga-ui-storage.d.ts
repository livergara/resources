export type IGaUiStorage = {
    getIconUrl: (iconName: string) => string;
    defaultIconSize: number;
    emptyValuePlaceholder: string;
    registerComponentsGlobal: boolean;
};
export declare const GaUiStorage: IGaUiStorage;
